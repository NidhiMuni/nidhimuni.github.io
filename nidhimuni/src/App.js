import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './About';
import Work from './Work';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="background-image"></div>

        <div className="content">
          <h1>Nidhi Munikote</h1>

          <nav>
            <ul className="menu">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/work">Work</Link></li>
            </ul>
          </nav>

          <main>
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/about" element={<About />} />
              <Route path="/work" element={<Work />} />
            </Routes>
          </main>

        </div>

      </div>
    </Router>
  );
}

export default App;
