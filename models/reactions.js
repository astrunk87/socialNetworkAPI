const { Schema, Types} = require('mongoose');

const timeFormat = (dateTime) => {
    return dateTime.toLocaleString()
};

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createAt: {
            type: Date,
            default: Date.now(),
            get: timeFormat,
        },
    },
    {
        toJSON: {
            getters: true
        }
    }
);


module.exports = reactionSchema; 
