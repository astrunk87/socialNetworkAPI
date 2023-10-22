const { Schema, model} = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
            // regex pulled from regex hw
        },
        // thoughts: [thoughtsSchema],
        // friends: {

        // }

    }
)

const user = model('user', userSchema);

module.exports = user;