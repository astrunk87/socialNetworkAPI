// file pull from class work
const mongoose = require('mongoose');

// Wrap Mongoose around local connection to MongoDB
// need to change to my db 
mongoose.connect('mongodb://127.0.0.1:27017/departmentsDB');

// Export connection 
module.exports = mongoose.connection;
