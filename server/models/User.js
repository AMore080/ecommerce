const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');


const movieSchema = require('./Movies');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must use a valid email address'],
        },
        password: {
            type: String,
            required: true,
        },
     
        savedMovies: [movieSchema],

    rentalStart: {
        type: Date,
        
    }
   
  },

{
    toJSON: {
        virtuals: true,
    },
}
);

// hash user password
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});


userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};


userSchema.virtual('movieCount').get(function () {
    return this.savedMovies.length;
});

const User = model('User', userSchema);

module.exports = User;
