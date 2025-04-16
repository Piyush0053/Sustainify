const mongoose = require('mongoose');

// Schema for images
const ImageSchema = new mongoose.Schema({
  data: Buffer,
  contentType: String,
  filename: String
});

// Schema for pickup requests
const RequestSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  contact: {
    type: String,
    required: true,
    trim: true
  },
  date: {
    type: Date,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true,
    trim: true
  },
  pincode: {
    type: String,
    required: true,
    trim: true
  },
  materialType: {
    type: String,
    required: true,
    enum: ['General Items', 'Medical Items', 'Appliances', 'Automobiles', 'Electronics', 'Furniture', 'Books', 'Clothing']
  },
  weight: {
    type: Number,
    required: true,
    min: 0
  },
  images: [ImageSchema],
  status: {
    type: String,
    enum: ['pending', 'assigned', 'completed', 'cancelled'],
    default: 'pending'
  },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'KabadiWala',
    default: null
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Schema for kabadi wala service providers
const KabadiWalaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  contact: {
    type: String,
    required: true,
    trim: true
  },
  pincodesCovered: {
    type: [String],
    required: true
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0
  },
  active: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create models
const Request = mongoose.model('Request', RequestSchema);
const KabadiWala = mongoose.model('KabadiWala', KabadiWalaSchema);

module.exports = {
  Request,
  KabadiWala
};
