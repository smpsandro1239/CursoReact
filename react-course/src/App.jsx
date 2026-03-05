// Autor: Sandro Pereira (smpsandro1239)
// Projeto: CursoReact – Premium React: O Curso Definitivo (30 Aulas)

import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';

// Lazy loading das páginas para performance de elite
// Usando import dinâmico com default para evitar problemas com exportações
const LandingPage = lazy(() => import('./pages/LandingPage'));
const LessonPage = lazy(() => import('./pages/LessonPage'));
const Glossary = lazy(() => import('./pages/Glossary'));
const AnalyticsPage = lazy(() => import('./pages/AnalyticsPage'));
const Certificate = lazy(() => import('./pages/Certificate'));

// Componente de carregamento premium
const PageLoader = () => (
  <div className="min-h-screen bg-white dark:bg-slate-950 flex flex-col items-center justify-center gap-6 p-12 text-center">
    <div className="relative">
      <div className="w-20 h-20 border-4 border-blue-600/20 border-t-blue-600 rounded-full animate-spin"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-10 h-10 bg-blue-600 rounded-2xl rotate-45 animate-pulse"></div>
      </div>
    </div>
    <div className="space-y-2">
      <h3 className="text-xl font-black text-slate-900 dark:text-white tracking-tighter uppercase">Premium React</h3>
      <p className="text-slate-400 font-black text-[10px] uppercase tracking-[0.4em]">A carregar a tua experiência...</p>
    </div>
  </div>
);

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/aula/:id" element={<LessonPage />} />
            <Route path="/glossary" element={<Glossary />} />
            <Route path="/analytics" element={<AnalyticsPage />} />
            <Route path="/certificate" element={<Certificate />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default App;
