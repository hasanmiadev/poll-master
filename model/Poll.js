const { Schema } = require("mongoose");

const pollSchema = new Schema({
  title: {
    type: "string",
    required: true,
    trim: true,
  },
  description: {
    type: "string",
    required: true,
    trim: true,
  },
  totalVote: Number,
  options: {
    type: "string",
    vote: Number,
  },
});


const Poll = model('Poll', pollSchema);
module.exports = Poll;