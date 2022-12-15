const db = require('../config/connection');
// not sure if I should seed movies
const { User } = require('../models');

const userSeed = require('./userSeed.json');

db.once('open', async () => {
    await User.deleteMany({});

    const users = await User.insertMany(userSeed);

    console.log('Users seeded');
    process.exit(0);
});