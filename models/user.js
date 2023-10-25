const { Schema, model} = require('mongoose');
const thoughtsSchema = require('./thoughts');

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
            match: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
            // regex pulled from regex hw
        },
        friends: {
            type: Schema.Types.ObjectId,
            ref: 'user',
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'thoughts'
            }
        ],
    },
    {
        toJson: {
            virtuals: true,
        },
        id: false,
    }
);

userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

const user = model('user', userSchema);

module.exports = user;