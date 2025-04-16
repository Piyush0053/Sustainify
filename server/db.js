const mongoose = require('mongoose');

// MongoDB connection string - using environment variable or fallback to a default
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/sustainify';

// Connect to MongoDB
async function connectToMongoDB() {
  try {
    // Remove deprecated options
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');
    return true;
  } catch (error) {
    console.error('MongoDB connection error:', error);
    return false;
  }
}

// Check if the database connection is available
async function checkDatabaseConnection() {
  try {
    // Check if mongoose is connected
    if (mongoose.connection.readyState === 1) {
      return true;
    }
    
    // Try to connect if not already connected
    return await connectToMongoDB();
  } catch (error) {
    console.error('Database connection check failed:', error);
    return false;
  }
}

// Handle MongoDB connection events
mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconnected');
});

process.on('SIGINT', async () => {
  await mongoose.connection.close();
  console.log('MongoDB connection closed due to app termination');
  process.exit(0);
});

module.exports = {
  connectToMongoDB,
  checkDatabaseConnection
};
