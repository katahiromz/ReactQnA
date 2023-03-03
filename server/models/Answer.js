const mongoose = require('mongoose');

const AnswerSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    question: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Question',
    },
  },
  { timestamps: true }
);

const Answer = mongoose.model('Answer', AnswerSchema);

module.exports = Answer;
