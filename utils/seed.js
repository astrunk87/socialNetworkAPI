const connection = require('../config/connection');
const{user} = require('../models');
const seeds = require('./seed.js');

connection.once('open', async() => {
    console.log('connected');

    await user.deleteMany({});
    await user.collection.insertMany(seeds);

    console.table(seeds);
    console.info('seeds planted')
});

// above with help from greg