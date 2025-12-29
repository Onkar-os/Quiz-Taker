import React from "react";
import { useNavigate } from "react-router-dom";

function Topics() {
  const navigate=useNavigate();
  function openQuiz(topicId){
    navigate(`/questioncard/${topicId}`);
  }
  const topics = [
    { id: 1, name: "JavaScript", questions: 10, time: "10 Min" },
    { id: 2, name: "React JS", questions: 10, time: "10 Min" },
    { id: 3, name: "HTML", questions: 10, time: "10 Min" },
    { id: 4, name: "CSS", questions: 10, time: "10 Min" },
    { id: 5, name: "Node JS", questions: 10, time: "10 Min" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-10">
        Choose Your Quiz Topic
      </h1>

      {/* Topics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {topics.map((topic) => (
          <div
            key={topic.id}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition"
          >
            {/* Topic Name */}
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">
              {topic.name}
            </h2>

            {/* Info */}
            <div className="text-gray-700 mb-6 space-y-2">
              <p>
                <span className="font-medium">Questions:</span>{" "}
                {topic.questions}
              </p>
              <p>
                <span className="font-medium">Time:</span> {topic.time}
              </p>
            </div>

            {/* Start Button */}
            <button className="bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700"  onClick={() => navigate(`/questioncard/${topic.id}`)}>
              Start Quiz
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Topics;
