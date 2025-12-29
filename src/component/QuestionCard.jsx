import React, { useState } from "react";
import { useParams } from "react-router-dom";
import quizData from "../data/data.js";

const topicMap = {
  1: "JavaScript",
  2: "React",
  3: "HTML",
  4: "CSS",
  5: "NodeJS",
};

function QuestionCard() {
  const { topicId } = useParams();          // string "1"
  const topicKey = topicMap[topicId];       // "JavaScript"
  const questions = quizData[topicKey];     // array of questions

  const [index, setIndex] = useState(0);

  if (!questions) {
    return <h2 className="text-center mt-10">Quiz Not Found</h2>;
  }

  const currentQuestion = questions[index];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-xl">
        
        <h2 className="text-xl font-bold text-blue-600 mb-4">
          {topicKey} Quiz
        </h2>

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
              className="w-full border rounded-lg py-2 hover:bg-blue-100"
            >
              {option}
            </button>
          ))}
        </div>

        <button
          className="mt-6 bg-blue-600 text-white w-full py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
          onClick={() => setIndex(index + 1)}
          disabled={index === questions.length - 1}
        >
          Next
        </button>

      </div>
    </div>
  );
}

export default QuestionCard;
