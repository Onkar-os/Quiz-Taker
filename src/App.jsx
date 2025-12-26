import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import StartScreen from "./component/StartScreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Topics from "./component/Topics";

function App() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">
                  StartScreen
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/video">
                  Video
                </Link>
              </li>
               <li class="nav-item">
                <Link class="nav-link" to="/result">
                  ResultScreen
                </Link>
              </li>

            </ul>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<StartScreen />} />
        <Route path="/topics" element={<Topics />} />

      </Routes>

      <footer>
        <div className="bg-gray-800 text-white text-center p-4 mt-10">
          <p>&copy; 2024 Quiz Taker. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
