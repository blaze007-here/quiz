import { useState } from 'react';
import './App.css';

const App = () => {
  // Define states
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  const questions = [
    {
      question: "WHERE DO YOU LIVE?",
      options: ["INDIA", "PAKISTAN💀", "SRI LANKA", "I DONT KNOW"],
      answer: 2,
    },
    {
      question: "WHAT'S THE CURRENCY OF INDIA?",
      options: ["RUPEE", "yen", "pound", "dollar"],
      answer: 0,
    },
    {
      question: "What language uses <html> tag?",
      options: ["html", "css", "c", "js"],
      answer: 0,
    },
    {
      question: "Which of the following is an OS?",
      options: ["Windows", "Word", "Powerpoint", "I don't know"],
      answer: 0,
    },
    {
      question: "Which one is an AI?",
      options: ["WINDOWS COPILOT", "CHATGPT", "BLACK BOX", "ALL OF THESE"],
      answer: 3,
    },
  ];

  const checkAnswer = (index) => {
    if (index === questions[currentQuestion].answer) {
      setScore(score + 1);
      setCorrectAnswers(correctAnswers + 1);
    } else {
      setIncorrectAnswers(incorrectAnswers + 1);
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setIsQuizCompleted(true); // End of quiz
    }
  };
  return (
    <div className="App">
      {isQuizCompleted ? (
        <div>
          <h1>Quiz Completed!</h1>
          <p>
            You scored {score} out of {questions.length}
          </p>
          <p>
            Correct Answers: {correctAnswers} | Incorrect Answers: {incorrectAnswers}
          </p>
        </div>
      ) : (
        <div>
          <h1>{questions[currentQuestion].question}</h1>
          <div> 
            {questions[currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => checkAnswer(index)}>
                {option}
              </button>
            ))}
          </div>
          <p>
            Correct: {correctAnswers} | Incorrect: {incorrectAnswers}
          </p>
        </div>
      )}
    </div>
  );
};

export default App;
