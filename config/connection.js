// file pull from class work
// const {connect, connection} = require('mongoose');

// // Wrap Mongoose around local connection to MongoDB
// // need to change to my db 
// // mongoose.connect('mongodb://127.0.0.1:27017/socialNetworkDB');
// const connectionString =
//   process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/socialNetworkDB';

// connect(connectionString);
// // Export connection 
// module.exports = connection;

const mongoose = require('mongoose');

// Wrap Mongoose around local connection to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/socialNetworkDB');

// Export connection 
module.exports = mongoose.connection;
