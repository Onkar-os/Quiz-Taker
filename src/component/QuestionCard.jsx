import React, { useState, useEffect } from "react";
import quizData from "../data/data.js";

const topicMap = {
  1: "JavaScript",
  2: "React",
  3: "HTML",
  4: "CSS",
  5: "NodeJS",
};

const TOTAL_TIME = 10 * 60; // 10 minutes

function QuestionCard({ topicId, onClose }) {
  const topicKey = topicMap[Number(topicId)];
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

  if (!questions) {
    return (
      <div className="p-6 text-center text-red-600 font-semibold">
        Quiz Not Found
      </div>
    );
  }

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
      <div className="p-6 text-center">
        <h2 className="text-xl font-bold text-blue-600 mb-4">
          {topicKey} Quiz Result
        </h2>

        <p className="mb-2">
          Score: <strong>{score}</strong> / {questions.length}
        </p>

        <p className="mb-4">
          Time Taken: {formatTime(TOTAL_TIME - timeLeft)}
        </p>

        <button
          className="bg-blue-600 text-white px-6 py-2 rounded-lg"
          onClick={onClose}
        >
          Close Quiz
        </button>
      </div>
    );
  }

  const currentQuestion = questions[index];

  /* ---------------- QUIZ UI ---------------- */
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-3">
        <h2 className="font-bold text-blue-600">
          {topicKey} Quiz
        </h2>
        <span className="text-red-600 font-semibold">
          ⏱ {formatTime(timeLeft)}
        </span>
      </div>

      <p className="text-gray-600 mb-2">
        Question {index + 1} of {questions.length}
      </p>

      <h3 className="font-semibold mb-3">
        {currentQuestion.question}
      </h3>

      <div className="space-y-2">
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
        onClick={handleNext}
        disabled={!selected}
        className="mt-4 bg-blue-600 text-white w-full py-2 rounded-lg disabled:bg-gray-400"
      >
        {index === questions.length - 1 ? "Submit Quiz" : "Next"}
      </button>
    </div>
  );
}

export default QuestionCard;
