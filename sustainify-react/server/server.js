const express = require('express');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

// Configure dotenv
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Enable CORS manually
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

// Create uploads directory for storage
const uploadsDir = path.join(__dirname, 'uploads');
const tempUploadsDir = path.join(__dirname, 'temp-uploads');

try {
  if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
  }

  if (!fs.existsSync(tempUploadsDir)) {
    fs.mkdirSync(tempUploadsDir, { recursive: true });
  }
} catch (error) {
  console.log('Warning: Could not create upload directories', error);
}

// In-memory storage for requests
const inMemoryRequests = [];

// API Routes
app.post('/api/submit-form', async (req, res) => {
  try {
    console.log('Received form submission request');
    const { name, contact, date, time, address, pincode, materialType, weight } = req.body;
    
    // Log received data for debugging
    console.log('Form data received:', req.body);
    
    // Validate required fields
    if (!name || !contact || !date || !time || !address || !pincode) {
      console.error('Missing required fields in form submission');
      return res.status(400).json({
        success: false,
        message: 'Missing required fields',
        error: 'Please fill in all required fields'
      });
    }
    
    // Create a new pickup request
    const newRequest = {
      id: Date.now().toString(),
      name,
      contact,
      date,
      time,
      address,
      pincode: pincode || '',
      materialType: materialType || 'General Items',
      weight: parseFloat(weight) || 0,
      images: [],
      createdAt: new Date().toISOString()
    };

    // Save the request to our in-memory storage
    inMemoryRequests.push(newRequest);
    
    // Return success response
    return res.status(201).json({
      success: true,
      message: 'Pickup request submitted successfully',
      requestId: newRequest.id
    });
  } 
  catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).json({
      success: false,
      message: 'Error submitting pickup request',
      error: error.message
    });
  }
});

// Get all requests
app.get('/api/requests', async (req, res) => {
  try {
    // Return in-memory requests
    return res.status(200).json({
      success: true,
      requests: inMemoryRequests
    });
  } catch (error) {
    console.error('Error fetching requests:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching requests',
      error: error.message
    });
  }
});

// Simple health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ 
    status: 'ok', 
    message: 'Server is running in memory-only mode'
  });
});

// Start Express server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log(`Server health check: http://localhost:${port}/api/health`);
});
