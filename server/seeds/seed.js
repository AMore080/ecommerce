const db = require('../config/connection');
// not sure if I should seed movies
const { User } = require('../models/User');
const userSeed = require('./userSeed.json');

db.once('open', async () => {
    try {
        await User.deleteMany({});

        await User.create(userSeed);

        // if we do have some movies see it should be a for loop under here

    } catch (err) {
        console.error(err);
        process.exit(1);
    }

    console.log('all done');
    process.exit(0);
});