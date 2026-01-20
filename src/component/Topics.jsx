import React, { useState } from "react";
import QuestionCard from "./QuestionCard";

function Topics() {
  const [showQuiz, setShowQuiz] = useState(false);
  const [topicId, setTopicId] = useState(null);

  const topics = [
    { id: 1, name: "JavaScript", questions: 10, time: "10 Min" },
    { id: 2, name: "React", questions: 10, time: "10 Min" },
    { id: 3, name: "HTML", questions: 10, time: "10 Min" },
    { id: 4, name: "CSS", questions: 10, time: "10 Min" },
    { id: 5, name: "NodeJS", questions: 10, time: "10 Min" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-10">
        Choose Your Quiz Topic
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {topics.map((topic) => (
          <div
            key={topic.id}
            className="bg-white rounded-xl shadow-md p-6"
          >
            <h2 className="text-xl font-bold text-blue-600 mb-2">
              {topic.name}
            </h2>

            <p>Questions: {topic.questions}</p>
            <p className="mb-4">Time: {topic.time}</p>

            <button
              onClick={() => {
                setTopicId(topic.id);
                setShowQuiz(true);
              }}
              className="bg-blue-600 text-white w-full py-2 rounded-lg"
            >
              Start Quiz
            </button>
          </div>
        ))}
      </div>

      {/* 🔹 QUIZ MODAL */}
      {showQuiz && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg w-[420px] max-h-[90vh] overflow-y-auto relative">

            {/* Close Button */}
            <button
              onClick={() => setShowQuiz(false)}
              className="absolute top-2 right-3 text-xl font-bold"
            >
              ✕
            </button>

            <QuestionCard
              topicId={topicId}
              onClose={() => setShowQuiz(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Topics;
