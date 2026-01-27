import React, { useEffect, useState, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import confetti from 'canvas-confetti';
import {
  ChevronLeft,
  ChevronRight,
  ChevronRight as ChevronSmall,
  Home,
  List,
  CheckCircle,
  Circle,
  Search,
  X,
  Code,
  BookOpen,
  Sun,
  Moon,
  ExternalLink,
  Award,
  HelpCircle,
  Check,
  AlertCircle,
  RotateCcw,
  Share2,
  Zap,
  StickyNote,
  Save,
  Trophy,
  Download,
  Link as LinkIcon
} from 'lucide-react';
import { lessons } from '../data/lessons';
import { useTheme } from '../context/ThemeContext';

const LessonPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const lessonId = parseInt(id);
  const lesson = lessons.find((l) => l.id === lessonId);
  const { isDarkMode, toggleDarkMode } = useTheme();

  const [completedLessons, setCompletedLessons] = useState(() => {
    const saved = localStorage.getItem('completedLessons');
    return saved ? JSON.parse(saved) : [];
  });

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [quizAnswer, setQuizAnswer] = useState(null);
  const [showQuizResult, setShowQuizResult] = useState(false);
  const [note, setNote] = useState('');
  const [isNoteSaved, setIsNoteSaved] = useState(false);
  const [practiceDone, setPracticeDone] = useState(false);
  const [solutionUrl, setSolutionUrl] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
    setQuizAnswer(null);
    setShowQuizResult(false);

    // Load note for this lesson
    const savedNotes = JSON.parse(localStorage.getItem('lessonNotes') || '{}');
    setNote(savedNotes[lessonId] || '');
    setIsNoteSaved(false);

    const savedPractice = JSON.parse(localStorage.getItem('practiceDone') || '[]');
    setPracticeDone(savedPractice.includes(lessonId));

    const savedSolutions = JSON.parse(localStorage.getItem('lessonSolutions') || '{}');
    setSolutionUrl(savedSolutions[lessonId] || '');
  }, [lessonId]);

  useEffect(() => {
    localStorage.setItem('completedLessons', JSON.stringify(completedLessons));
  }, [completedLessons]);

  const filteredLessons = useMemo(() => {
    return lessons.filter(l =>
      l.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      l.id.toString() === searchTerm
    );
  }, [searchTerm]);

  if (!lesson) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-slate-900">
        <h1 className="text-2xl font-bold mb-4 dark:text-white">Aula não encontrada</h1>
        <Link to="/" className="bg-blue-600 text-white px-6 py-2 rounded-lg">Voltar para o início</Link>
      </div>
    );
  }

  const toggleComplete = (id) => {
    if (completedLessons.includes(id)) {
      setCompletedLessons(completedLessons.filter(lId => lId !== id));
    } else {
      const newCompleted = [...completedLessons, id];
      setCompletedLessons(newCompleted);

      // Massive celebration on 100% completion
      if (newCompleted.length === lessons.length) {
        const duration = 5 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        const randomInRange = (min, max) => Math.random() * (max - min) + min;

        const interval = setInterval(function() {
          const timeLeft = animationEnd - Date.now();

          if (timeLeft <= 0) {
            return clearInterval(interval);
          }

          const particleCount = 50 * (timeLeft / duration);
          confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
          confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
        }, 250);
      }
    }
  };

  const saveNote = () => {
    const savedNotes = JSON.parse(localStorage.getItem('lessonNotes') || '{}');
    savedNotes[lessonId] = note;
    localStorage.setItem('lessonNotes', JSON.stringify(savedNotes));
    setIsNoteSaved(true);
    setTimeout(() => setIsNoteSaved(false), 2000);
  };

  const saveSolutionUrl = (url) => {
    setSolutionUrl(url);
    const savedSolutions = JSON.parse(localStorage.getItem('lessonSolutions') || '{}');
    savedSolutions[lessonId] = url;
    localStorage.setItem('lessonSolutions', JSON.stringify(savedSolutions));
  };

  const exportAllNotes = () => {
    const savedNotes = JSON.parse(localStorage.getItem('lessonNotes') || '{}');
    let content = "# Minhas Notas do Curso Premium React\n\n";

    lessons.forEach(l => {
      if (savedNotes[l.id]) {
        content += `## ${l.title}\n${savedNotes[l.id]}\n\n---\n\n`;
      }
    });

    const blob = new Blob([content], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'notas-react-premium.md';
    a.click();
    URL.revokeObjectURL(url);
  };

  const togglePractice = () => {
    const savedPractice = JSON.parse(localStorage.getItem('practiceDone') || '[]');
    let newPractice;
    if (practiceDone) {
      newPractice = savedPractice.filter(id => id !== lessonId);
    } else {
      newPractice = [...savedPractice, lessonId];
      confetti({
        particleCount: 150,
        spread: 90,
        origin: { y: 0.8 },
        colors: ['#3b82f6', '#8b5cf6', '#ec4899']
      });
    }
    localStorage.setItem('practiceDone', JSON.stringify(newPractice));
    setPracticeDone(!practiceDone);
  };

  const resetProgress = () => {
    if (window.confirm("Tens a certeza que desejas repor todo o teu progresso?")) {
      setCompletedLessons([]);
      localStorage.removeItem('completedLessons');
    }
  };

  const shareLesson = () => {
    if (navigator.share) {
      navigator.share({
        title: `Estou a aprender React: ${lesson.title}`,
        text: `Vê esta aula sobre ${lesson.title} no curso Premium React!`,
        url: window.location.href,
      });
    } else {
      alert("Link copiado para a área de transferência!");
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const prevLesson = lessonId > 1 ? lessonId - 1 : null;
  const nextLesson = lessonId < lessons.length ? lessonId + 1 : null;
  const isAllComplete = completedLessons.length === lessons.length;

  const relatedLessons = useMemo(() => {
    return lessons
      .filter(l => l.category === lesson.category && l.id !== lessonId)
      .slice(0, 3);
  }, [lesson.category, lessonId]);

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-slate-950 flex flex-col md:flex-row font-sans text-slate-900 dark:text-slate-100 transition-colors duration-300 relative">
      {/* Sticky Top Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-[60] bg-slate-100 dark:bg-slate-800">
        <div
          className="h-full bg-blue-600 transition-all duration-300"
          style={{ width: `${(completedLessons.length / lessons.length) * 100}%` }}
        ></div>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 p-4 flex justify-between items-center sticky top-0 z-20">
        <Link to="/" className="font-black text-blue-600 text-xl tracking-tighter">PREMIUM REACT</Link>
        <div className="flex items-center gap-2">
          <button onClick={toggleDarkMode} className="p-2 text-slate-600 dark:text-slate-400">
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 text-slate-600 dark:text-slate-400">
            {isSidebarOpen ? <X size={24} /> : <List size={24} />}
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-30 w-80 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0 md:static md:block flex flex-col
      `}>
        <div className="p-6 border-b border-slate-100 dark:border-slate-800 hidden md:flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-blue-600 font-black text-2xl tracking-tighter">
            PREMIUM REACT
          </Link>
          <button onClick={toggleDarkMode} className="p-2 text-slate-400 hover:text-blue-600 transition-colors">
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Search */}
        <div className="p-4 border-b border-slate-50 dark:border-slate-800/50">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input
              type="text"
              placeholder="Buscar aula..."
              className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all dark:text-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="flex-grow overflow-y-auto p-4 space-y-1 scrollbar-thin scrollbar-thumb-slate-200 dark:scrollbar-thumb-slate-700">
          {filteredLessons.map((l) => (
            <Link
              key={l.id}
              to={`/lesson/${l.id}`}
              onClick={() => setIsSidebarOpen(false)}
              className={`
                flex items-center gap-3 p-3 rounded-xl text-sm transition-all group
                ${l.id === lessonId
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 dark:shadow-none font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'}
              `}
            >
              <div className="shrink-0">
                {completedLessons.includes(l.id) ? (
                  <CheckCircle size={18} className={l.id === lessonId ? 'text-white' : 'text-emerald-500'} />
                ) : (
                  <Circle size={18} className={l.id === lessonId ? 'text-blue-200' : 'text-slate-300 dark:text-slate-600 group-hover:text-slate-400'} />
                )}
              </div>
              <span className="truncate">{l.title}</span>
            </Link>
          ))}
          {filteredLessons.length === 0 && (
            <div className="text-center py-10 text-slate-400 text-sm">Nenhuma aula encontrada</div>
          )}
        </div>

        <div className="p-6 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
          {isAllComplete ? (
            <Link
              to="/certificate"
              className="w-full flex items-center justify-center gap-2 bg-emerald-600 text-white py-3 rounded-xl font-bold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200 dark:shadow-none mb-4"
            >
              <Award size={18} />
              Ver Certificado
            </Link>
          ) : null}
          <div className="flex justify-between items-end mb-2">
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-400 dark:text-slate-500 uppercase font-black tracking-widest">Progresso do Aluno</span>
              <button
                onClick={resetProgress}
                className="text-[9px] text-red-500 hover:text-red-600 font-bold uppercase tracking-tighter flex items-center gap-1 mt-1 transition-colors"
              >
                <RotateCcw size={10} /> Repor Progresso
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
          <div className="text-[10px] text-slate-500 dark:text-slate-500 mt-2 text-center font-medium">
            {completedLessons.length} de {lessons.length} aulas concluídas
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-grow flex flex-col min-w-0 h-screen overflow-y-auto bg-white dark:bg-slate-950 md:bg-[#f8fafc] dark:md:bg-slate-950">
        <main className="flex-grow p-4 md:p-12 lg:p-16">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 mb-6 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-600 overflow-x-auto whitespace-nowrap scrollbar-hide">
              <Link to="/" className="hover:text-blue-600 transition-colors flex items-center gap-1">
                <Home size={12} /> Início
              </Link>
              <ChevronSmall size={12} />
              <span className="bg-slate-100 dark:bg-slate-900 px-2 py-0.5 rounded text-slate-500 dark:text-slate-400">{lesson.category}</span>
              <ChevronSmall size={12} />
              <span className="text-blue-600 dark:text-blue-400 truncate">{lesson.title}</span>
            </nav>

            {/* Lesson Header */}
            <div className="mb-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-black uppercase tracking-widest">
                  <BookOpen size={14} />
                  Aula {lessonId}
                </div>
                <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                  {lesson.title}
                </h1>
                <p className="text-lg text-slate-500 dark:text-slate-400 font-medium">{lesson.description}</p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={shareLesson}
                  className="p-3 rounded-2xl border-2 border-slate-200 dark:border-slate-800 text-slate-400 hover:text-blue-500 hover:border-blue-500 transition-all shadow-sm bg-white dark:bg-slate-900"
                  title="Partilhar Aula"
                >
                  <Share2 size={20} />
                </button>
                <button
                  onClick={() => toggleComplete(lessonId)}
                  className={`
                    flex items-center justify-center gap-2 px-6 py-3 rounded-2xl border-2 transition-all font-bold text-sm shrink-0
                    ${completedLessons.includes(lessonId)
                      ? 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 shadow-sm'
                      : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-md'}
                  `}
                >
                  {completedLessons.includes(lessonId) ? (
                    <><CheckCircle size={20} /> Concluída</>
                  ) : (
                    <><Circle size={20} /> Concluir Aula</>
                  )}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
              <div className="lg:col-span-2">
                <div className="bg-white dark:bg-slate-900 rounded-[2rem] shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 overflow-hidden mb-10 transition-colors">
                  <div className="p-8 md:p-12">
                    <div className="prose prose-slate dark:prose-invert prose-lg max-w-none
                      prose-headings:font-black prose-headings:tracking-tight
                      prose-a:text-blue-600
                      prose-code:text-pink-600 dark:prose-code:text-pink-400
                      prose-code:bg-pink-50 dark:prose-code:bg-pink-900/20
                      prose-code:px-1 prose-code:rounded
                      prose-pre:bg-slate-900 dark:prose-pre:bg-black
                      text-slate-700 dark:text-slate-300 leading-relaxed">
                      <ReactMarkdown>{lesson.content}</ReactMarkdown>
                    </div>

                    {lesson.proTip && (
                      <div className="mt-12 p-6 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 rounded-r-2xl flex gap-4">
                        <Zap className="text-blue-600 shrink-0" size={24} />
                        <div>
                          <h4 className="text-blue-600 font-black text-sm uppercase tracking-widest mb-1">Dica Pro</h4>
                          <p className="text-slate-600 dark:text-slate-300 text-sm font-medium italic">"{lesson.proTip}"</p>
                        </div>
                      </div>
                    )}

                    {lesson.resources && (
                      <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-800">
                        <h3 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-4">Recursos Adicionais</h3>
                        <div className="flex flex-wrap gap-3 lg:hidden">
                          {lesson.resources.map((res, i) => (
                            <a
                              key={i}
                              href={res.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-4 py-2 bg-slate-50 dark:bg-slate-800 rounded-xl text-sm font-bold text-slate-600 dark:text-slate-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-all border border-slate-100 dark:border-slate-700"
                            >
                              {res.name}
                              <ExternalLink size={14} />
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Practice Section */}
                  <div className="bg-slate-950 p-8 md:p-12 text-white overflow-hidden relative">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-600 rounded-lg">
                          <Code size={24} />
                        </div>
                        <h2 className="text-xl font-black tracking-tight">Desafio Prático</h2>
                      </div>
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                        <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                      </div>
                    </div>
                    <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 font-mono text-blue-300 relative group">
                      <div className="absolute -top-3 left-6 bg-slate-800 px-3 py-1 rounded-md text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        instruções.md
                      </div>
                      <p className="leading-relaxed whitespace-pre-wrap">
                        {lesson.practice}
                      </p>
                      <div className="mt-8 space-y-4">
                        <div className="relative">
                          <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={14} />
                          <input
                            type="url"
                            value={solutionUrl}
                            onChange={(e) => saveSolutionUrl(e.target.value)}
                            placeholder="Link da sua solução (GitHub, CodeSandbox...)"
                            className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-xl text-xs text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                          />
                        </div>
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                          <div className="flex items-center gap-2 text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                            <span className={`w-2 h-2 rounded-full ${practiceDone ? 'bg-emerald-500' : 'bg-blue-500 animate-pulse'}`}></span>
                            {practiceDone ? 'Desafio Concluído!' : 'Esperando sua implementação...'}
                          </div>
                          <button
                            onClick={togglePractice}
                            className={`
                              flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all
                              ${practiceDone
                                ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20'
                                : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-900/40'}
                            `}
                          >
                            {practiceDone ? <><Check size={14} /> Refazer</> : <><Trophy size={14} /> Marcar como Feito</>}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quiz Section */}
                  {lesson.quiz && (
                    <div className="p-8 md:p-12 border-t border-slate-100 dark:border-slate-800 bg-blue-50/30 dark:bg-blue-900/10">
                      <div className="flex items-center gap-3 mb-8">
                        <div className="p-2 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-lg">
                          <HelpCircle size={24} />
                        </div>
                        <h2 className="text-xl font-black tracking-tight dark:text-white text-slate-900">Quiz Rápido</h2>
                      </div>

                      <div className="space-y-6">
                        <p className="text-lg font-bold text-slate-800 dark:text-slate-200">{lesson.quiz.question}</p>

                        <div className="grid gap-3">
                          {lesson.quiz.options.map((option, index) => (
                            <button
                              key={index}
                              onClick={() => !showQuizResult && setQuizAnswer(index)}
                              className={`
                                w-full p-4 rounded-xl border-2 text-left transition-all font-medium
                                ${showQuizResult
                                  ? index === lesson.quiz.correctAnswer
                                    ? 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-500 text-emerald-700 dark:text-emerald-400'
                                    : index === quizAnswer
                                      ? 'bg-red-50 dark:bg-red-900/20 border-red-500 text-red-700 dark:text-red-400'
                                      : 'bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 opacity-50'
                                  : quizAnswer === index
                                    ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-500 text-blue-700 dark:text-blue-400'
                                    : 'bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-800 text-slate-600 dark:text-slate-400'
                                }
                              `}
                            >
                              <div className="flex items-center justify-between">
                                <span>{option}</span>
                                {showQuizResult && index === lesson.quiz.correctAnswer && <Check size={18} />}
                              </div>
                            </button>
                          ))}
                        </div>

                        {!showQuizResult ? (
                          <button
                            disabled={quizAnswer === null}
                            onClick={() => {
                              setShowQuizResult(true);
                              if (quizAnswer === lesson.quiz.correctAnswer) {
                                confetti({
                                  particleCount: 100,
                                  spread: 70,
                                  origin: { y: 0.6 },
                                  colors: ['#2563eb', '#10b981', '#f59e0b']
                                });
                              }
                            }}
                            className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white rounded-xl font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 transition-all"
                          >
                            Verificar Resposta
                          </button>
                        ) : (
                          <div className={`
                            p-4 rounded-xl flex items-start gap-3
                            ${quizAnswer === lesson.quiz.correctAnswer
                              ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400'
                              : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'}
                          `}>
                            {quizAnswer === lesson.quiz.correctAnswer ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
                            <div>
                              <p className="font-bold">
                                {quizAnswer === lesson.quiz.correctAnswer ? 'Excelente! Você acertou.' : 'Não foi dessa vez.'}
                              </p>
                              <p className="text-sm opacity-90">
                                {quizAnswer === lesson.quiz.correctAnswer
                                  ? 'Continue assim e domine o React!'
                                  : `A resposta correta é: ${lesson.quiz.options[lesson.quiz.correctAnswer]}`}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Related Lessons */}
                {relatedLessons.length > 0 && (
                  <div className="mt-12 mb-16">
                    <h3 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-6">Aulas Relacionadas</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {relatedLessons.map(rl => (
                        <Link
                          key={rl.id}
                          to={`/lesson/${rl.id}`}
                          className="group bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 hover:border-blue-500 transition-all flex items-center justify-between"
                        >
                          <div>
                            <div className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-1">{rl.category}</div>
                            <div className="font-bold text-slate-800 dark:text-white group-hover:text-blue-600 transition-colors">{rl.title}</div>
                          </div>
                          <ChevronRight size={20} className="text-slate-300 group-hover:text-blue-600 transition-all" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar Notes */}
              <div className="space-y-6">
                <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-8 border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none sticky top-24">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-blue-600">
                      <StickyNote size={20} />
                      <h3 className="font-black uppercase tracking-widest text-xs">As Minhas Notas</h3>
                    </div>
                    <button
                      onClick={exportAllNotes}
                      className="p-1.5 text-slate-400 hover:text-blue-600 transition-colors"
                      title="Exportar todas as notas"
                    >
                      <Download size={16} />
                    </button>
                  </div>
                  <textarea
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Escreva algo importante sobre esta aula..."
                    className="w-full h-48 p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl text-sm border-none focus:ring-2 focus:ring-blue-500/20 resize-none dark:text-white"
                  />
                  <button
                    onClick={saveNote}
                    className={`
                      w-full mt-4 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-all
                      ${isNoteSaved
                        ? 'bg-emerald-500 text-white'
                        : 'bg-slate-900 dark:bg-blue-600 text-white hover:bg-black dark:hover:bg-blue-700'}
                    `}
                  >
                    {isNoteSaved ? <><Check size={18} /> guardado!</> : <><Save size={18} /> guardar Nota</>}
                  </button>
                </div>

                {lesson.resources && (
                  <div className="bg-slate-900 rounded-[2rem] p-8 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                      <ExternalLink size={60} />
                    </div>
                    <h3 className="font-black uppercase tracking-widest text-xs mb-6 text-slate-400">Links Úteis</h3>
                    <div className="space-y-3">
                      {lesson.resources.map((res, i) => (
                        <a
                          key={i}
                          href={res.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-all group"
                        >
                          <span className="text-sm font-bold truncate pr-2">{res.name}</span>
                          <ExternalLink size={14} className="text-slate-500 group-hover:text-white shrink-0" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Navigation */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 py-10 border-t border-slate-200 dark:border-slate-800 pb-24 md:pb-10">
              {prevLesson ? (
                <Link
                  to={`/lesson/${prevLesson}`}
                  className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-300 transition-all font-bold shadow-sm"
                >
                  <ChevronLeft size={20} />
                  Aula Anterior
                </Link>
              ) : (
                <div className="hidden sm:block w-40"></div>
              )}

              <Link
                to="/"
                className="text-slate-400 dark:text-slate-600 hover:text-blue-600 dark:hover:text-blue-400 font-bold transition-colors text-sm"
              >
                Voltar ao Início
              </Link>

              {nextLesson ? (
                <Link
                  to={`/lesson/${nextLesson}`}
                  className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-4 rounded-2xl bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200 dark:shadow-none transition-all font-bold"
                >
                  Próxima Aula
                  <ChevronRight size={20} />
                </Link>
              ) : (
                <Link
                  to="/"
                  className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-4 rounded-2xl bg-emerald-600 text-white hover:bg-emerald-700 transition-all font-bold shadow-lg shadow-emerald-100 dark:shadow-none"
                >
                  Finalizar Curso
                </Link>
              )}
            </div>
          </div>
        </main>
      </div>

      {/* Mobile Sticky Nav */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 px-6 py-4 z-[50] flex items-center justify-between">
        {prevLesson ? (
          <Link to={`/lesson/${prevLesson}`} className="p-3 text-slate-600 dark:text-slate-400">
            <ChevronLeft size={24} />
          </Link>
        ) : <div className="w-12"></div>}

        <Link to="/" className="p-3 text-blue-600">
          <Home size={24} />
        </Link>

        {nextLesson ? (
          <Link to={`/lesson/${nextLesson}`} className="p-3 text-slate-600 dark:text-slate-400">
            <ChevronRight size={24} />
          </Link>
        ) : <div className="w-12"></div>}
      </div>

      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-20 md:hidden transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default LessonPage;
