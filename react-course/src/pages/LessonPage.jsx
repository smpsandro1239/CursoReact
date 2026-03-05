// Autor: Sandro Pereira (smpsandro1239)
// Projeto: CursoReact – Premium React: O Curso Definitivo (30 Aulas)

import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate, Navigate } from 'react-router-dom';
import {
  ChevronLeft,
  ChevronRight,
  Home,
  BookOpen,
  CheckCircle,
  Circle,
  MessageSquare,
  Zap,
  ExternalLink,
  Code,
  Heart,
  Share2,
  RotateCcw,
  Search,
  ChevronRight as ChevronSmall,
  Award,
  ArrowLeft,
  Send,
  MoreVertical,
  ThumbsUp,
  X,
  Play,
  ClipboardCheck,
  RefreshCw,
  Clock,
  Layout,
  Star,
  BrainCircuit,
  Sun,
  Moon,
  Trophy,
  Library
} from 'lucide-react';
import { lessons } from '../data/lessons';
import ReactMarkdown from 'react-markdown';
import { useTheme } from '../context/ThemeContext';
import CodePlayground from '../components/CodePlayground';
import CommentsSection from '../components/CommentsSection';
import confetti from 'canvas-confetti';

const LessonPage = () => {
  const { id } = useParams();
  const lessonId = parseInt(id);
  const lessonIndex = lessons.findIndex(l => l.id === lessonId);
  const lesson = lessons[lessonIndex];
  const navigate = useNavigate();
  const { isDarkMode, toggleDarkMode } = useTheme();

  const [completedLessons, setCompletedLessons] = useState(() =>
    JSON.parse(localStorage.getItem('completedLessons') || '[]')
  );
  const [favorites, setFavorites] = useState(() =>
    JSON.parse(localStorage.getItem('favoriteLessons') || '[]')
  );
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizScores, setQuizScores] = useState(() =>
    JSON.parse(localStorage.getItem('quizScores') || '{}')
  );

  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [quizResults, setQuizResults] = useState([]);
  const [quizComplete, setQuizComplete] = useState(false);

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (lesson) {
      document.title = `Aula ${lessonId}: ${lesson.title} | Premium React por Sandro Pereira`;
    }
  }, [lesson, lessonId]);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('lesson-content-area');
      if (element) {
        const totalHeight = element.scrollHeight - element.clientHeight;
        const progress = (element.scrollTop / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };

    const element = document.getElementById('lesson-content-area');
    element?.addEventListener('scroll', handleScroll);
    return () => element?.removeEventListener('scroll', handleScroll);
  }, [lessonId]);

  useEffect(() => {
    localStorage.setItem('completedLessons', JSON.stringify(completedLessons));
  }, [completedLessons]);

  useEffect(() => {
    localStorage.setItem('favoriteLessons', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    const element = document.getElementById('lesson-content-area');
    if (element) element.scrollTop = 0;

    // Reset quiz state when lesson changes
    setShowQuiz(false);
    setCurrentQuizIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setQuizResults([]);
    setQuizComplete(false);
  }, [lessonId]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' && lessonIndex < lessons.length - 1) {
        navigate(`/aula/${lessons[lessonIndex + 1].id}`);
      } else if (e.key === 'ArrowLeft' && lessonIndex > 0) {
        navigate(`/aula/${lessons[lessonIndex - 1].id}`);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lessonIndex, navigate]);

  const toggleComplete = (id) => {
    if (completedLessons.includes(id)) {
      setCompletedLessons(completedLessons.filter(l => l !== id));
    } else {
      setCompletedLessons([...completedLessons, id]);
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#3b82f6', '#10b981', '#6366f1']
      });
    }
  };

  const toggleFavorite = () => {
    if (favorites.includes(lessonId)) {
      setFavorites(favorites.filter(id => id !== lessonId));
    } else {
      setFavorites([...favorites, lessonId]);
    }
  };

  const shareLesson = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    alert('Link da aula copiado para a área de transferência! 🚀');
  };

  const handleOptionSelect = (optionIndex) => {
    if (isAnswered) return;
    setSelectedOption(optionIndex);
  };

  const handleNextQuestion = () => {
    const isCorrect = selectedOption === lesson.quizzes[currentQuizIndex].correctAnswer;
    const newResults = [...quizResults, isCorrect];
    setQuizResults(newResults);

    if (currentQuizIndex < lesson.quizzes.length - 1) {
      setCurrentQuizIndex(currentQuizIndex + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setQuizComplete(true);
      const score = newResults.filter(Boolean).length;
      const total = lesson.quizzes.length;
      const percentage = Math.round((score / total) * 100);

      const newScores = { ...quizScores, [lessonId]: percentage };
      setQuizScores(newScores);
      localStorage.setItem('quizScores', JSON.stringify(newScores));

      if (percentage === 100) {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.8 }
        });
      }
    }
  };

  const resetQuiz = () => {
    setCurrentQuizIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setQuizResults([]);
    setQuizComplete(false);
  };

  if (!lesson) return <Navigate to="/" />;

  const isFavorite = favorites.includes(lessonId);
  const isAllComplete = completedLessons.length === lessons.length;

  return (
    <div className="flex h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 overflow-hidden">
      {/* Sidebar - Desktop */}
      <aside className="hidden lg:flex flex-col w-80 border-r border-slate-100 dark:border-slate-900 bg-white dark:bg-slate-950 shrink-0">
        <div className="p-6 border-b border-slate-100 dark:border-slate-900">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-2 bg-blue-600 rounded-lg group-hover:scale-110 transition-transform">
              <BookOpen className="text-white" size={20} />
            </div>
            <span className="font-black text-blue-600 tracking-tighter">PREMIUM REACT</span>
          </Link>
        </div>

        <div className="flex-grow overflow-y-auto p-4 space-y-2 scrollbar-thin scrollbar-thumb-slate-200 dark:scrollbar-thumb-slate-800">
          {lessons.map((l) => (
            <Link
              key={l.id}
              to={`/aula/${l.id}`}
              className={`
                flex items-center gap-3 p-3 rounded-xl transition-all group
                ${l.id === lessonId
                  ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 shadow-sm border border-blue-100 dark:border-blue-800'
                  : 'text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-900 hover:text-slate-900 dark:hover:text-slate-100'}
              `}
            >
              <div className={`
                shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2
                ${completedLessons.includes(l.id)
                  ? 'bg-emerald-500 border-emerald-500 text-white'
                  : l.id === lessonId
                    ? 'border-blue-500 text-blue-600'
                    : 'border-slate-200 dark:border-slate-800 text-slate-400 group-hover:border-slate-300'}
              `}>
                {completedLessons.includes(l.id) ? <CheckCircle size={14} /> : l.id}
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold truncate leading-tight">{l.title}</p>
                <p className="text-[10px] text-slate-400 font-medium">{l.category}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="p-6 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
          {isAllComplete && (
            <Link
              to="/certificate"
              className="w-full flex items-center justify-center gap-2 bg-emerald-600 text-white py-3 rounded-xl font-bold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200 dark:shadow-none mb-4"
            >
              <Award size={18} />
              Ver Certificado
            </Link>
          )}
          <div className="flex justify-between items-end mb-2">
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-400 dark:text-slate-500 uppercase font-black tracking-widest">Progresso</span>
              <button
                onClick={() => {
                   if(confirm('Atenção Sandro, desejas mesmo repor o teu progresso?')) {
                     localStorage.setItem('completedLessons', '[]');
                     window.location.reload();
                   }
                }}
                className="text-[9px] text-red-500 hover:text-red-600 font-bold uppercase tracking-tighter flex items-center gap-1 mt-1 transition-colors"
              >
                <RotateCcw size={10} /> Repor
              </button>
            </div>
            <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{Math.round((completedLessons.length / lessons.length) * 100)}%</span>
          </div>
          <div className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-emerald-500 transition-all duration-500"
              style={{ width: `${(completedLessons.length / lessons.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-grow flex flex-col min-w-0 h-screen overflow-hidden bg-slate-50 dark:bg-slate-950">
        {/* Top Navbar */}
        <header className="h-16 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 md:px-8 flex items-center justify-between sticky top-0 z-20 shrink-0">
          <div className="flex items-center gap-4">
            <Link to="/" className="lg:hidden">
              <div className="p-2 bg-blue-600 rounded-lg">
                <BookOpen className="text-white" size={18} />
              </div>
            </Link>
            <div className="h-4 w-px bg-slate-200 dark:bg-slate-800 hidden lg:block"></div>
            <div className="flex items-center gap-2 overflow-hidden">
              <span className="text-xs font-black uppercase tracking-widest text-slate-400 truncate hidden sm:block">{lesson.category}</span>
              <ChevronSmall size={14} className="text-slate-300 shrink-0 hidden sm:block" />
              <h2 className="text-sm font-bold text-slate-700 dark:text-slate-200 truncate">{lesson.title}</h2>
            </div>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
             <button
              onClick={toggleDarkMode}
              className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 text-slate-500 hover:text-blue-600 transition-all border border-slate-100 dark:border-slate-800"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <div className="h-6 w-px bg-slate-200 dark:bg-slate-800 mx-1"></div>
            <div className="flex gap-1 md:gap-2">
              <button
                disabled={lessonIndex === 0}
                onClick={() => navigate(`/aula/${lessons[lessonIndex - 1].id}`)}
                className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                title="Aula Anterior"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                disabled={lessonIndex === lessons.length - 1}
                onClick={() => navigate(`/aula/${lessons[lessonIndex + 1].id}`)}
                className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                title="Próxima Aula"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-150 z-30" style={{ width: `${scrollProgress}%` }}></div>
        </header>

        <div id="lesson-content-area" className="flex-grow overflow-y-auto scroll-smooth">
          <main className="max-w-4xl mx-auto p-6 md:p-12 lg:p-16">
            <div className="mb-12">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-widest border border-blue-100 dark:border-blue-800">
                  Módulo {lesson.category}
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[10px] font-black uppercase tracking-widest flex items-center gap-1">
                  <Clock size={10} /> {lesson.readingTime}
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tighter leading-[1.1] mb-6">
                {lesson.title}
              </h1>
              <p className="text-xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-2xl">
                {lesson.description}
              </p>

              <div className="flex items-center gap-3 mt-8">
                <button
                  onClick={() => toggleComplete(lessonId)}
                  className={`
                    flex items-center gap-2 px-6 py-3 rounded-2xl font-black text-sm transition-all shadow-lg
                    ${completedLessons.includes(lessonId)
                      ? 'bg-emerald-500 text-white shadow-emerald-200 dark:shadow-none'
                      : 'bg-blue-600 text-white shadow-blue-200 dark:shadow-none hover:bg-blue-700 hover:-translate-y-1'}
                  `}
                >
                  {completedLessons.includes(lessonId) ? <><CheckCircle size={18} /> Aula Concluída</> : <><Circle size={18} /> Marcar como Concluída</>}
                </button>
                <button
                  onClick={toggleFavorite}
                  className={`
                    p-3.5 rounded-2xl border-2 transition-all
                    ${isFavorite
                      ? 'bg-pink-50 dark:bg-pink-900/20 border-pink-200 dark:border-pink-900 text-pink-500'
                      : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-400 hover:text-pink-500 hover:border-pink-500'}
                  `}
                >
                  <Heart size={20} fill={isFavorite ? "currentColor" : "none"} />
                </button>
                <button
                  onClick={shareLesson}
                  className="p-3.5 rounded-2xl border-2 border-slate-200 dark:border-slate-800 text-slate-400 bg-white dark:bg-slate-900 hover:text-blue-600 hover:border-blue-600 transition-all"
                >
                  <Share2 size={20} />
                </button>
              </div>
            </div>

            {lesson.videoUrl ? (
              <div className="mb-16 aspect-video rounded-[2.5rem] overflow-hidden bg-slate-200 dark:bg-slate-950 shadow-2xl border-8 border-white dark:border-slate-900">
                <iframe
                  width="100%"
                  height="100%"
                  src={lesson.videoUrl}
                  title="Vídeo da Aula"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
               <div className="mb-16 aspect-[21/9] rounded-[2.5rem] bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center p-12 text-center text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                  <div className="z-10">
                    <BookOpen size={64} className="mx-auto mb-6 opacity-50" />
                    <h3 className="text-3xl font-black tracking-tighter mb-2">Leitura Técnica</h3>
                    <p className="font-bold text-blue-100">Mergulho profundo nos conceitos práticos</p>
                  </div>
               </div>
            )}

            <div className="bg-white dark:bg-slate-900 rounded-[3rem] shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 overflow-hidden mb-12">
              <div className="p-8 md:p-16">
                <div className="prose prose-slate dark:prose-invert prose-lg max-w-none
                  prose-headings:font-black prose-headings:tracking-tighter prose-headings:text-slate-900 dark:prose-headings:text-white
                  prose-p:leading-relaxed prose-p:text-slate-600 dark:prose-p:text-slate-300
                  prose-a:text-blue-600 prose-a:font-bold
                  prose-code:text-pink-600 dark:prose-code:text-pink-400 prose-code:bg-pink-50 dark:prose-code:bg-pink-900/20 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:before:content-none prose-code:after:content-none
                  prose-pre:bg-slate-900 dark:prose-pre:bg-black prose-pre:rounded-2xl prose-pre:p-6 prose-pre:shadow-2xl
                  prose-img:rounded-3xl prose-img:shadow-xl">
                  <ReactMarkdown>{lesson.content}</ReactMarkdown>
                </div>

                {lesson.proTip && (
                  <div className="mt-16 p-8 bg-blue-600 rounded-[2rem] text-white flex gap-6 items-start relative overflow-hidden group shadow-xl shadow-blue-200 dark:shadow-none">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-125 transition-transform">
                      <Zap size={120} />
                    </div>
                    <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-md shrink-0">
                      <Zap size={28} />
                    </div>
                    <div>
                      <h4 className="font-black uppercase tracking-[0.2em] text-sm text-blue-100 mb-2">Dica do Sandro</h4>
                      <p className="text-lg font-bold leading-relaxed">"{lesson.proTip}"</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-12 mb-12">
              <div className="bg-slate-950 rounded-[3rem] overflow-hidden border border-slate-800 shadow-2xl">
                 <div className="p-8 md:p-12">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="p-3 bg-emerald-600 rounded-2xl shadow-lg shadow-emerald-900/50">
                        <Code size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-black text-white tracking-tight">Laboratório de Código</h3>
                        <p className="text-slate-400 font-medium">Pratica o que aprendeste agora mesmo</p>
                      </div>
                    </div>
                    <div className="bg-white/5 p-6 rounded-3xl border border-white/10 mb-8">
                       <h4 className="text-emerald-400 font-bold mb-2 flex items-center gap-2">
                         <Target size={16} /> Desafio Prático
                       </h4>
                       <p className="text-slate-300 leading-relaxed font-medium">{lesson.practice}</p>
                    </div>
                    <CodePlayground initialCode={lesson.playground} />
                 </div>
              </div>

              <div id="quiz" className="bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden scroll-mt-24">
                <div className="p-8 md:p-16">
                  <div className="flex items-center justify-between mb-12">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-amber-500 rounded-2xl text-white shadow-lg shadow-amber-200 dark:shadow-none">
                        <BrainCircuit size={28} />
                      </div>
                      <div>
                        <h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter">Quiz de Verificação</h3>
                        <p className="text-slate-500 dark:text-slate-400 font-medium">Consolida o teu conhecimento</p>
                      </div>
                    </div>
                    {!quizComplete && (
                      <div className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-xl text-xs font-black uppercase tracking-widest text-slate-500">
                        Pergunta {currentQuizIndex + 1} de {lesson.quizzes.length}
                      </div>
                    )}
                  </div>

                  {!quizComplete ? (
                    <div className="space-y-8">
                      <h4 className="text-2xl font-bold text-slate-800 dark:text-slate-100 leading-snug">
                        {lesson.quizzes[currentQuizIndex].question}
                      </h4>

                      <div className="grid grid-cols-1 gap-4">
                        {lesson.quizzes[currentQuizIndex].options.map((option, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleOptionSelect(idx)}
                            disabled={isAnswered}
                            className={`
                              group flex items-center gap-4 p-6 rounded-3xl border-2 transition-all text-left
                              ${selectedOption === idx
                                ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400'
                                : 'border-slate-100 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-slate-600 dark:text-slate-400'}
                            `}
                          >
                            <div className={`
                              shrink-0 w-8 h-8 rounded-xl flex items-center justify-center font-black text-sm
                              ${selectedOption === idx ? 'bg-blue-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-400 group-hover:bg-slate-200 dark:group-hover:bg-slate-700'}
                            `}>
                              {String.fromCharCode(65 + idx)}
                            </div>
                            <span className="font-bold">{option}</span>
                          </button>
                        ))}
                      </div>

                      <div className="pt-6 flex justify-end">
                        <button
                          onClick={handleNextQuestion}
                          disabled={selectedOption === null}
                          className="flex items-center gap-2 px-10 py-4 bg-slate-900 dark:bg-blue-600 text-white rounded-2xl font-black hover:scale-105 transition-all disabled:opacity-30 disabled:scale-100"
                        >
                          {currentQuizIndex === lesson.quizzes.length - 1 ? 'Finalizar Quiz' : 'Próxima Pergunta'}
                          <ChevronRight size={20} />
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-12">
                       <div className="inline-flex p-6 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full mb-8">
                         <Trophy size={64} />
                       </div>
                       <h4 className="text-4xl font-black text-slate-900 dark:text-white tracking-tighter mb-4">Quiz Concluído!</h4>
                       <p className="text-xl text-slate-500 dark:text-slate-400 font-medium mb-10">
                         Acertaste em <span className="text-emerald-500 font-black">{quizResults.filter(Boolean).length}</span> de {lesson.quizzes.length} perguntas.
                       </p>
                       <div className="flex flex-wrap justify-center gap-4">
                          <button
                            onClick={resetQuiz}
                            className="flex items-center gap-2 px-8 py-4 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-2xl font-black hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
                          >
                            <RefreshCw size={20} /> Tentar Novamente
                          </button>
                          {quizResults.filter(Boolean).length === lesson.quizzes.length && !completedLessons.includes(lessonId) && (
                            <button
                              onClick={() => toggleComplete(lessonId)}
                              className="flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white rounded-2xl font-black hover:scale-105 transition-all shadow-xl shadow-emerald-200 dark:shadow-none"
                            >
                              <CheckCircle size={20} /> Concluir Aula
                            </button>
                          )}
                       </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
               <div className="bg-white dark:bg-slate-900 rounded-[3rem] p-10 md:p-12 border border-slate-100 dark:border-slate-800 shadow-xl">
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight mb-8 flex items-center gap-3">
                    <ExternalLink size={24} className="text-blue-600" /> Recursos Extras
                  </h3>
                  <div className="space-y-4">
                    {lesson.resources?.map((res, i) => (
                      <a
                        key={i}
                        href={res.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-transparent hover:border-blue-200 dark:hover:border-blue-900 hover:bg-blue-50/50 dark:hover:bg-blue-900/20 transition-all group"
                      >
                        <div className="flex items-center gap-4">
                          <div className="p-2 bg-white dark:bg-slate-700 rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                            <Library size={20} className="text-slate-400 group-hover:text-blue-600" />
                          </div>
                          <span className="font-bold text-slate-700 dark:text-slate-200">{res.name}</span>
                        </div>
                        <ChevronSmall size={18} className="text-slate-300 group-hover:text-blue-600" />
                      </a>
                    ))}
                  </div>
               </div>

               <div className="bg-white dark:bg-slate-900 rounded-[3rem] p-10 md:p-12 border border-slate-100 dark:border-slate-800 shadow-xl">
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight mb-8 flex items-center gap-3">
                    <MessageSquare size={24} className="text-pink-500" /> Discussão
                  </h3>
                  <CommentsSection lessonId={lessonId} />
               </div>
            </div>

            <div className="mt-24 pt-12 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 dark:bg-white flex items-center justify-center text-white dark:text-slate-900 font-black">
                  {lessonId}
                </div>
                <div>
                   <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Estás a ler</p>
                   <p className="font-bold text-slate-900 dark:text-white">{lesson.title}</p>
                </div>
              </div>

              <div className="flex gap-4 w-full md:w-auto">
                {lessonIndex > 0 && (
                  <Link
                    to={`/aula/${lessons[lessonIndex - 1].id}`}
                    className="flex-1 md:flex-none flex items-center justify-center gap-3 px-8 py-4 bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 rounded-2xl font-bold text-slate-600 dark:text-slate-400 hover:border-slate-300 transition-all"
                  >
                    <ChevronLeft size={20} /> Anterior
                  </Link>
                )}
                {lessonIndex < lessons.length - 1 ? (
                  <Link
                    to={`/aula/${lessons[lessonIndex + 1].id}`}
                    className="flex-1 md:flex-none flex items-center justify-center gap-3 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-black hover:scale-105 transition-all shadow-xl shadow-slate-200 dark:shadow-none"
                  >
                    Próxima Aula <ChevronRight size={20} />
                  </Link>
                ) : (
                  <Link
                    to="/certificate"
                    className="flex-1 md:flex-none flex items-center justify-center gap-3 px-8 py-4 bg-emerald-600 text-white rounded-2xl font-black hover:scale-105 transition-all shadow-xl shadow-emerald-200 dark:shadow-none"
                  >
                    Finalizar Curso <Award size={20} />
                  </Link>
                )}
              </div>
            </div>
          </main>

          <footer className="max-w-4xl mx-auto p-12 text-center text-slate-400 dark:text-slate-600 text-xs font-bold uppercase tracking-[0.2em] mb-12">
            © {new Date().getFullYear()} Sandro Pereira • Premium React Curso
          </footer>
        </div>
      </div>
    </div>
  );
};

export default LessonPage;
