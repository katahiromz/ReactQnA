import React, { useState, useEffect } from "react";
import QuestionForm from "./components/QuestionForm";
import QuestionList from "./components/QuestionList";

function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("/api/questions")
      .then((response) => response.json())
      .then((data) => setQuestions(data))
      .catch((error) => console.error(error));
  }, []);

  const addQuestion = (question) => {
    fetch("/api/questions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(question),
    })
      .then((response) => response.json())
      .then((data) => setQuestions([...questions, data]))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h1>Q&A</h1>
      <QuestionForm onAddQuestion={addQuestion} />
      <QuestionList questions={questions} />
    </div>
  );
}

export default App;
