const db = require('./connection');
// not sure if I should seed movies
const { User } = require('../models');

db.once('open', async () => {
    await User.deleteMany();

    await User.create({
        username: 'test1',
        email:'test1@email.com',
        password: 'password1'
    });

    await User.create({
        username: 'test2',
        email:'test2@email.com',
        password: 'password2'
    });

    await User.create({
        username: 'test3',
        email:'test3@email.com',
        password: 'password3'
    });

    console.log('users seeded');
    process.exit();
});