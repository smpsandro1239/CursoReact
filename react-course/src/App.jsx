import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LessonPage from './pages/LessonPage';
import Certificate from './pages/Certificate';
import Glossary from './pages/Glossary';
import AnalyticsPage from './pages/AnalyticsPage';
import { ThemeProvider } from './context/ThemeContext';
import { ToastProvider } from './context/ToastContext';

function App() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <Router>
          <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/lesson/:id" element={<LessonPage />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/glossary" element={<Glossary />} />
            <Route path="/analytics" element={<AnalyticsPage />} />
          </Routes>
        </Router>
      </ToastProvider>
    </ThemeProvider>
  );
}

export default App;
