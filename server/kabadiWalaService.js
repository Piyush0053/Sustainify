const { Request, KabadiWala } = require('./models');

/**
 * Share a pickup request with available kabadi walas in the area
 * @param {string} requestId - The ID of the pickup request
 * @returns {Promise<Object>} - Information about the assigned kabadi wala
 */
async function shareRequestWithKabadiWala(requestId) {
  try {
    // Find the request
    const request = await Request.findById(requestId);
    if (!request) {
      throw new Error('Request not found');
    }

    // Extract pincode from the request
    const pincode = request.pincode;
    if (!pincode) {
      throw new Error('Request does not have a valid pincode');
    }

    // Find available kabadi walas for this pincode
    const availableKabadiWalas = await KabadiWala.find({
      pincodesCovered: pincode,
      active: true
    }).sort({ rating: -1 }); // Sort by rating (highest first)

    if (availableKabadiWalas.length === 0) {
      // If no kabadi wala is available for this pincode, create a default one
      const newKabadiWala = await createKabadiWala({
        name: 'Sustainify Service',
        contact: '1800-RECYCLE',
        pincodesCovered: [pincode],
        rating: 4.5
      });

      // Assign the request to the new kabadi wala
      request.assignedTo = newKabadiWala._id;
      request.status = 'assigned';
      await request.save();

      return {
        assigned: true,
        kabadiWala: {
          name: newKabadiWala.name,
          contact: newKabadiWala.contact,
          rating: newKabadiWala.rating
        }
      };
    }

    // Assign to the first (highest rated) kabadi wala
    const selectedKabadiWala = availableKabadiWalas[0];
    request.assignedTo = selectedKabadiWala._id;
    request.status = 'assigned';
    await request.save();

    return {
      assigned: true,
      kabadiWala: {
        name: selectedKabadiWala.name,
        contact: selectedKabadiWala.contact,
        rating: selectedKabadiWala.rating
      }
    };
  } catch (error) {
    console.error('Error sharing request with kabadi wala:', error);
    return {
      assigned: false,
      error: error.message
    };
  }
}

/**
 * Create a new kabadi wala service provider
 * @param {Object} kabadiWalaData - Data for the new kabadi wala
 * @returns {Promise<Object>} - The created kabadi wala document
 */
async function createKabadiWala(kabadiWalaData) {
  try {
    const newKabadiWala = new KabadiWala(kabadiWalaData);
    await newKabadiWala.save();
    return newKabadiWala;
  } catch (error) {
    console.error('Error creating kabadi wala:', error);
    throw error;
  }
}

module.exports = {
  shareRequestWithKabadiWala,
  createKabadiWala
};
