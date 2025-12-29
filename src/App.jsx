import "./App.css";
import QuestionCard from "./component/QuestionCard";
import StartScreen from "./component/StartScreen";
import Topics from "./component/Topics";
import Video from "./component/Video";

import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
   <>

      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Quiz Taker
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Start
                </Link>
              </li>

              <li className="nav-item  text-white">
                <Link className="nav-link" to="/topics">
                  Topics
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/video">
                  Video
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<StartScreen />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/video" element={<Video />} />
        <Route path="/questioncard/:topicId" element={<QuestionCard />} />
      </Routes>

      {/* FOOTER */}
      <footer className="bg-gray-800 text-white text-center p-4 mt-10">
        <p>&copy; 2024 Quiz Taker. All rights reserved.</p>
      </footer>
      </>
  );
}

export default App;
