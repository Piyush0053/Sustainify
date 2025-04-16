// Simple server starter without nodemon
// This file can be run directly with node: node server/startServer.js

// Load the server module
try {
  console.log('Starting server...');
  console.log('Working directory:', process.cwd());
  
  // Import the server module directly
  require('./server.js');
  
  console.log('Server module loaded successfully.');
} catch (error) {
  console.error('Error starting server:', error);
}
