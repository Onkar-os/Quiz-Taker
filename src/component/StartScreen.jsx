import React from "react";

function StartScreen() {
  return (
    <div className="min-h-screen bg-gray-100 px-10 py-6">

      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-3">
        Welcome User For Quiz
      </h1>

      <p className="text-center text-gray-600 mb-8">
        Start quiz today for your practice and be confident. Choose your favorite subject.
        Each subject contains 10 questions.
      </p>

      {/* 🔴 IMPORTANT FIX: FLEX CONTAINER */}
      <div className="flex justify-between gap-10">

        {/* LEFT SIDE: QUIZ RULES */}
        <div className="w-1/2 border rounded-lg p-6 bg-white shadow">
          <h2 className="text-xl font-semibold mb-4">Quiz Rules</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>The quiz consists of 10 questions with a time limit of 10 minutes.</li>
            <li>Each correct answer carries 1 mark.</li>
            <li>No negative marking for wrong answers.</li>
            <li>Skipped questions will receive 0 marks.</li>
            <li>The quiz auto-submits when the timer ends.</li>
            <li>Final score will be shown after submission.</li>
          </ul>
        </div>

        {/* RIGHT SIDE: IMPORTANT INSTRUCTIONS */}
        <div className="w-1/2 border rounded-lg p-6 bg-white shadow">
          <h2 className="text-xl font-semibold mb-4">Important Instructions</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>This is a multiple-choice quiz with four options.</li>
            <li>Only one option is correct per question.</li>
            <li>You must select an answer before moving forward.</li>
            <li>You cannot change answers after moving to the next question.</li>
            <li>The quiz starts after clicking the Start Quiz button.</li>
            <li>Ensure stable internet before starting.</li>
          </ul>
        </div>

      </div>

      {/* Start Button */}
      <div className="text-center mt-10">
        <button className="bg-blue-600 text-white px-10 py-3 rounded-lg font-semibold hover:bg-blue-700">
          Start Quiz
        </button>
      </div>

    </div>
  );
}

export default StartScreen;
