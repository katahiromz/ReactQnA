const express = require('express');
const router = express.Router();
const Answer = require('../models/Answer');

// 回答を保存する
router.post('/', async (req, res) => {
  const { text, questionId } = req.body;
  const answer = new Answer({
    text,
    questionId,
  });

  try {
    const savedAnswer = await answer.save();
    res.status(201).json(savedAnswer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// 質問IDに関連する回答を取得する
router.get('/:questionId', async (req, res) => {
  const questionId = req.params.questionId;
  try {
    const answers = await Answer.find({ questionId: questionId });
    res.json(answers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
