import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import quizData from "../data/data.js";

const topicMap = {
  1: "JavaScript",
  2: "React",
  3: "HTML",
  4: "CSS",
  5: "NodeJS",
};

const TOTAL_TIME = 10 * 60; // 10 minutes

function QuestionCard() {
  const { topicId } = useParams();
  const topicKey = topicMap[topicId];
  const questions = quizData[topicKey];

  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);
  const [showResult, setShowResult] = useState(false);

  /* ---------------- TIMER ---------------- */
  useEffect(() => {
    if (showResult) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 1) {
          clearInterval(timer);
          setShowResult(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [showResult]);

  /* -------- Pause timer when tab inactive -------- */
  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden) {
        setShowResult((prev) => prev);
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  if (!questions) {
    return <h2 className="text-center mt-10">Quiz Not Found</h2>;
  }

  /* ---------------- HANDLERS ---------------- */
  const handleNext = () => {
    if (selected === questions[index].correctAnswer) {
      setScore(score + 1);
    }

    setSelected(null);

    if (index === questions.length - 1) {
      setShowResult(true);
    } else {
      setIndex(index + 1);
    }
  };

  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}:${sec < 10 ? "0" : ""}${sec}`;
  };

  /* ---------------- RESULT SCREEN ---------------- */
  if (showResult) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md text-center">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">
            {topicKey} Quiz Result
          </h2>

          <p className="text-lg mb-2">
            Score: <strong>{score}</strong> / {questions.length}
          </p>

          <p className="text-gray-600 mb-4">
            Time Taken: {formatTime(TOTAL_TIME - timeLeft)}
          </p>

          <button
            className="bg-blue-600 text-white px-6 py-2 rounded-lg"
            onClick={() => window.location.reload()}
          >
            Restart Quiz
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[index];

  /* ---------------- QUIZ UI ---------------- */
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-xl">

        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-blue-600">
            {topicKey} Quiz
          </h2>
          <span className="text-red-600 font-semibold">
            ⏱ {formatTime(timeLeft)}
          </span>
        </div>

        <p className="text-gray-600 mb-2">
          Question {index + 1} of {questions.length}
        </p>

        <h3 className="text-lg font-semibold mb-4">
          {currentQuestion.question}
        </h3>

        <div className="space-y-3">
          {currentQuestion.options.map((option, i) => (
            <button
              key={i}
              onClick={() => setSelected(option)}
              className={`w-full border rounded-lg py-2
                ${
                  selected === option
                    ? "bg-blue-200 border-blue-500"
                    : "hover:bg-blue-100"
                }`}
            >
              {option}
            </button>
          ))}
        </div>

        <button
          className="mt-6 bg-blue-600 text-white w-full py-2 rounded-lg disabled:bg-gray-400"
          onClick={handleNext}
          disabled={!selected}
        >
          {index === questions.length - 1 ? "Submit Quiz" : "Next"}
        </button>

      </div>
    </div>
  );
}

export default QuestionCard;
