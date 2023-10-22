const { Schema, model } = require('mongoose');

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
    username: [
      {
        type: Schema.Types.ObjectId,
        ref: "user",
      },
    ],
    // type: String,
    // required: true,
  },
  {
    reactions: [
      {
        type: Schema.Types.Array,
        ref: "reactionSchema",
      },
    ],
  }
);

const thoughts = model('thoughts', thoughtsSchema);

module.exports = thoughts;