const express = require('express');
const router = express.Router();
const Question = require('../models/Question');
const Answer = require('../models/Answer');

// GET all questions
router.get('/', async (req, res) => {
  try {
    const questions = await Question.find().populate('answers');
    res.json(questions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET a single question
router.get('/:id', getQuestion, async (req, res) => {
  res.json(res.question);
});

// POST a question
router.post('/', async (req, res) => {
  const question = new Question({
    content: req.body.content,
  });

  try {
    const newQuestion = await question.save();
    res.status(201).json(newQuestion);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE a question
router.delete('/:id', getQuestion, async (req, res) => {
  try {
    await res.question.remove();
    res.json({ message: 'Question deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware function to get a single question by ID
async function getQuestion(req, res, next) {
  let question;

  try {
    question = await Question.findById(req.params.id).populate('answers');
    if (question == null) {
      return res.status(404).json({ message: 'Question not found' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.question = question;
  next();
}

module.exports = router;
