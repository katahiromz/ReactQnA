import React from "react";

const QuestionList = ({ questions }) => {
  return (
    <div>
      {questions.map((question) => (
        <div key={question.id}>
          <h2>{question.title}</h2>
          <p>{question.body}</p>
          {question.answers && question.answers.length > 0 && (
            <div>
              <h3>回答</h3>
              {question.answers.map((answer) => (
                <p key={answer.id}>{answer.body}</p>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default QuestionList;
