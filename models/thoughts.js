const { Schema, model } = require("mongoose");
const reactionSchema = require("./reactions");

// date format with help from class mate greg
dateFormat = (dateTime) => {
  return dateTime.toLocaleString();
};

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
      default: Date.now,
      get: dateFormat,
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    
  }
);

thoughtsSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const thoughts = model("thoughts", thoughtsSchema);

module.exports = thoughts;
