const { Schema, model } = require('mongoose');
const usernameSchema = require('./user') 

const thoughtsSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  //   username: [ usernameSchema],
   
  // },
  // {
    reactions: [
      {
        type: Schema.Types.Array,
        ref: "reactionSchema",
      },
    ],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const thoughts = model('thoughts', thoughtsSchema);

module.exports = thoughts;
