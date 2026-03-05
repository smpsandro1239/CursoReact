// Autor: Sandro Pereira (smpsandro1239)
// Projeto: CursoReact – Premium React: O Curso Definitivo (40 Aulas)

import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link, useNavigate, Navigate } from 'react-router-dom';
import {
  ChevronLeft,
  ChevronRight,
  Play,
  BookOpen,
  CheckCircle,
  MessageSquare,
  Award,
  Sun,
  Moon,
  Home,
  Clock,
  Code,
  Star,
  ArrowRight,
  HelpCircle,
  Menu,
  X
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { lessons } from '../data/lessons';
import { useTheme } from '../context/ThemeContext';
import { useCourseStore } from '../store/useCourseStore';
import QuizInterativo from '../components/QuizInterativo';
import EditorInterativo from '../components/EditorInterativo';
import GamificationBar from '../components/GamificationBar';
import CommentsSection from '../components/CommentsSection';
import confetti from 'canvas-confetti';

const allLessons = lessons;

const LessonPage = () => {
  const { id } = useParams();
  const lessonId = parseInt(id);
  const lesson = allLessons.find(l => l.id === lessonId);
  const lessonIndex = allLessons.findIndex(l => l.id === lessonId);
  const navigate = useNavigate();
  const { isDarkMode, toggleDarkMode } = useTheme();

  const { completedLessons, toggleComplete, addXP, quizScores, updateQuizScore, updateStreak } = useCourseStore();
  const [showQuiz, setShowQuiz] = useState(false);
  const [favorites, setFavorites] = useState(() => JSON.parse(localStorage.getItem('favoriteLessons') || '[]'));
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (lesson) {
      document.title = `Aula ${lessonId}: ${lesson.title} | Premium React por Sandro Pereira`;
      updateStreak();
    }
  }, [lesson, lessonId]);

  useEffect(() => {
     window.scrollTo(0,0);
     setShowQuiz(false);
  }, [lessonId]);

  if (!lesson) return <Navigate to="/" />;

  const isFavorite = favorites.includes(lessonId);
  const isCompleted = completedLessons.includes(lessonId);

  const toggleFavorite = () => {
    const newFavs = isFavorite ? favorites.filter(id => id !== lessonId) : [...favorites, lessonId];
    setFavorites(newFavs);
    localStorage.setItem('favoriteLessons', JSON.stringify(newFavs));
  };

  const handleComplete = () => {
    if (!isCompleted) {
      toggleComplete(lessonId);
      addXP(500);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } else {
      toggleComplete(lessonId);
    }
  };

  const prevLesson = lessonIndex > 0 ? allLessons[lessonIndex - 1] : null;
  const nextLesson = lessonIndex < allLessons.length - 1 ? allLessons[lessonIndex + 1] : null;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <GamificationBar />

      {/* Sidebar Mobile Toggle */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-blue-600 text-white rounded-full shadow-2xl lg:hidden active:scale-95 transition-transform"
      >
        {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div className="flex h-[calc(100vh-64px)] overflow-hidden">
        {/* Sidebar Nav */}
        <aside className={`
          fixed inset-0 z-40 lg:relative lg:z-0
          w-full lg:w-80 bg-white dark:bg-slate-900 border-r border-slate-100 dark:border-slate-800 transition-transform duration-300
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
          <div className="p-6 border-b border-slate-50 dark:border-slate-800 flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2 text-blue-600 font-black tracking-tighter uppercase">
              <Home size={18} /> Painel
            </Link>
            <button onClick={toggleDarkMode} className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-500">
               {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>

          <div className="flex-grow overflow-y-auto p-4 space-y-2">
            {allLessons.map((l) => (
              <Link
                key={l.id}
                to={`/aula/${l.id}`}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 p-3 rounded-xl transition-all ${l.id === lessonId ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600' : 'text-slate-500 hover:bg-slate-50'}`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-black ${completedLessons.includes(l.id) ? 'bg-emerald-500 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'}`}>
                  {completedLessons.includes(l.id) ? <CheckCircle size={14} /> : l.id}
                </div>
                <span className="text-sm font-bold truncate">{l.title}</span>
              </Link>
            ))}
          </div>
        </aside>

        {/* Content Area */}
        <main className="flex-grow overflow-y-auto">
          <div className="max-w-4xl mx-auto p-6 md:p-12">
            <header className="mb-12">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 text-[10px] font-black uppercase tracking-widest rounded-full">{lesson.category}</span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 text-[10px] font-black uppercase tracking-widest rounded-full flex items-center gap-1"><Clock size={10} /> {lesson.readingTime}</span>
                <button onClick={toggleFavorite} className={`ml-auto p-2 rounded-xl transition-colors ${isFavorite ? 'bg-amber-50 text-amber-500' : 'bg-slate-50 dark:bg-slate-900 text-slate-400'}`}>
                  <Star size={20} fill={isFavorite ? 'currentColor' : 'none'} />
                </button>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter leading-none mb-4">{lesson.title}</h1>
              <p className="text-xl text-slate-500 dark:text-slate-400 font-medium italic">{lesson.description}</p>
            </header>

            {lesson.videoUrl && (
              <div className="aspect-video bg-slate-900 rounded-[2.5rem] overflow-hidden mb-12 shadow-2xl border-4 border-slate-100 dark:border-slate-800">
                <iframe className="w-full h-full" src={lesson.videoUrl} title={lesson.title} allowFullScreen></iframe>
              </div>
            )}

            <div className="prose prose-slate dark:prose-invert max-w-none mb-16">
              <ReactMarkdown>{lesson.content}</ReactMarkdown>
            </div>

            {/* Nova Seção: Editor Interativo v2 */}
            <div className="mb-16">
               <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white"><Code size={20} /></div>
                  <h3 className="text-2xl font-black tracking-tight dark:text-white">Laboratório Prático</h3>
               </div>
               <EditorInterativo
                  initialCode={lesson.playground?.js || "// Escreve o teu código aqui..."}
                  lessonId={lessonId}
               />
            </div>

            {/* Quiz Section */}
            <div className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-xl mb-16">
               {!showQuiz ? (
                 <div className="text-center space-y-6">
                    <div className="w-20 h-20 bg-blue-50 dark:bg-blue-900/20 text-blue-600 rounded-[2rem] flex items-center justify-center mx-auto">
                       <HelpCircle size={32} />
                    </div>
                    <h3 className="text-3xl font-black tracking-tight dark:text-white">Pronto para o Desafio?</h3>
                    <p className="text-slate-500 font-medium">Testa os teus conhecimentos e ganha XP extra.</p>
                    <button
                      onClick={() => setShowQuiz(true)}
                      className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-black flex items-center gap-3 mx-auto hover:bg-blue-700 active:scale-95 transition-all shadow-lg shadow-blue-500/20"
                    >
                      Iniciar Quiz <ArrowRight size={20} />
                    </button>
                 </div>
               ) : (
                 <QuizInterativo lessonId={lessonId} />
               )}
            </div>

            {/* Ações de Conclusão */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 bg-slate-900 rounded-[2.5rem] text-white">
               <div>
                  <h4 className="text-xl font-bold mb-1">Módulo Concluído?</h4>
                  <p className="text-slate-400 text-sm">Ganha +500 XP ao marcar como feito.</p>
               </div>
               <button
                 onClick={handleComplete}
                 className={`px-8 py-4 rounded-2xl font-black flex items-center gap-3 transition-all ${isCompleted ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30' : 'bg-white text-slate-900 hover:bg-blue-50'}`}
               >
                 {isCompleted ? <CheckCircle size={24} /> : <Award size={24} />}
                 {isCompleted ? 'Concluído' : 'Marcar como Concluído'}
               </button>
            </div>

            {/* Navegação */}
            <nav className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {prevLesson && (
                <Link to={`/aula/${prevLesson.id}`} className="group p-6 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl hover:border-blue-500 transition-colors">
                  <div className="flex items-center gap-2 text-slate-400 font-black text-[10px] uppercase mb-2 group-hover:text-blue-500"><ChevronLeft size={14} /> Anterior</div>
                  <div className="font-bold text-slate-900 dark:text-white line-clamp-1">{prevLesson.title}</div>
                </Link>
              )}
              {nextLesson && (
                <Link to={`/aula/${nextLesson.id}`} className="group p-6 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl hover:border-blue-500 transition-colors text-right ml-auto w-full">
                  <div className="flex items-center justify-end gap-2 text-slate-400 font-black text-[10px] uppercase mb-2 group-hover:text-blue-500">Próxima <ChevronRight size={14} /></div>
                  <div className="font-bold text-slate-900 dark:text-white line-clamp-1">{nextLesson.title}</div>
                </Link>
              )}
            </nav>

            <CommentsSection lessonId={lessonId} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default LessonPage;
