const express = require('express');
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv');
const questionsRouter = require('./routes/questions');
const answersRouter = require('./routes/answers');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/questions', questionsRouter);
app.use('/api/answers', answersRouter);

// 静的ファイルの配信
app.use(express.static(path.join(__dirname, 'public')));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
