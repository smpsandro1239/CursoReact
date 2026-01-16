import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LessonPage from './pages/LessonPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/lesson/:id" element={<LessonPage />} />
      </Routes>
    </Router>
  );
}

export default App;
