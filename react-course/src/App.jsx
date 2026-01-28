import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LessonPage from './pages/LessonPage';
import Certificate from './pages/Certificate';
import Glossary from './pages/Glossary';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/lesson/:id" element={<LessonPage />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/glossary" element={<Glossary />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
