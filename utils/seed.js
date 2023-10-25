const connection = require('../config/connection');
const{user} = require('../models');
const seeds = require('./data.json');

connection.on('err', (err) => err);

connection.once('open', async() => {
    console.log('connected');

    await user.deleteMany({});
    // await user.collection.insertMany(seeds);
    await user.collection.insertMany(seeds);

    console.table(seeds);
    console.info('seeds planted');
    process.exit(0);
});

// above with help from greg