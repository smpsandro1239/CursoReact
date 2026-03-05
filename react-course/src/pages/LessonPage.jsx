// Autor: Sandro Pereira (smpsandro1239)
// Projeto: CursoReact – Premium React: O Curso Definitivo (30 Aulas)

import React, { useState, useEffect } from 'react';
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
  Library,
  Target
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
  const lesson = lessons.find(l => l.id === lessonId);
  const lessonIndex = lessons.findIndex(l => l.id === lessonId);
  const navigate = useNavigate();
  const { isDarkMode, toggleDarkMode } = useTheme();

  const [completedLessons, setCompletedLessons] = useState(() =>
    JSON.parse(localStorage.getItem('completedLessons') || '[]')
  );
  const [favorites, setFavorites] = useState(() =>
    JSON.parse(localStorage.getItem('favoriteLessons') || '[]')
  );
  const [quizScores, setQuizScores] = useState(() =>
    JSON.parse(localStorage.getItem('quizScores') || '{}')
  );

  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
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
        const progress = (element.scrollTop / (totalHeight || 1)) * 100;
        setScrollProgress(progress);
      }
    };

    const element = document.getElementById('lesson-content-area');
    if (element) {
      element.addEventListener('scroll', handleScroll);
      handleScroll();
    }
    return () => {
      if (element) element.removeEventListener('scroll', handleScroll);
    };
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

    setCurrentQuizIndex(0);
    setSelectedOption(null);
    setQuizResults([]);
    setQuizComplete(false);
  }, [lessonId]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === 'TEXTAREA' || e.target.tagName === 'INPUT') return;
      if (e.key === 'ArrowRight' && lessonIndex < lessons.length - 1) {
        navigate(`/aula/${lessons[lessonIndex + 1].id}`);
      } else if (e.key === 'ArrowLeft' && lessonIndex > 0) {
        navigate(`/aula/${lessons[lessonIndex - 1].id}`);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lessonIndex, navigate]);

  if (!lesson) return <Navigate to="/" />;

  const isFavorite = favorites.includes(lessonId);
  const isAllComplete = completedLessons.length === lessons.length;

  const toggleComplete = (id) => {
    if (completedLessons.includes(id)) {
      setCompletedLessons(completedLessons.filter(l => l !== id));
    } else {
      setCompletedLessons([...completedLessons, id]);
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const toggleFavorite = () => {
    if (favorites.includes(lessonId)) {
      setFavorites(favorites.filter(fid => fid !== lessonId));
    } else {
      setFavorites([...favorites, lessonId]);
    }
  };

  const handleNextQuestion = () => {
    const isCorrect = selectedOption === lesson.quizzes[currentQuizIndex].correctAnswer;
    const newResults = [...quizResults, isCorrect];
    setQuizResults(newResults);

    if (currentQuizIndex < lesson.quizzes.length - 1) {
      setCurrentQuizIndex(currentQuizIndex + 1);
      setSelectedOption(null);
    } else {
      setQuizComplete(true);
      const score = newResults.filter(Boolean).length;
      const percentage = Math.round((score / lesson.quizzes.length) * 100);
      const newScores = { ...quizScores, [lessonId]: percentage };
      setQuizScores(newScores);
      localStorage.setItem('quizScores', JSON.stringify(newScores));
      if (percentage === 100) {
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.8 } });
      }
    }
  };

  return (
    <div className="flex h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 overflow-hidden">
      <aside className="hidden lg:flex flex-col w-80 border-r border-slate-100 dark:border-slate-900 bg-white dark:bg-slate-950 shrink-0">
        <div className="p-6 border-b border-slate-100 dark:border-slate-900">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-2 bg-blue-600 rounded-lg group-hover:scale-110 transition-transform">
              <BookOpen className="text-white" size={20} />
            </div>
            <span className="font-black text-blue-600 tracking-tighter uppercase">Premium React</span>
          </Link>
        </div>

        <div className="flex-grow overflow-y-auto p-4 space-y-2 scrollbar-thin scrollbar-thumb-slate-200 dark:scrollbar-thumb-slate-800">
          {lessons.map((l) => (
            <Link
              key={l.id}
              to={`/aula/${l.id}`}
              className={`flex items-center gap-3 p-3 rounded-xl transition-all group ${l.id === lessonId ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600' : 'text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-900'}`}
            >
              <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 ${completedLessons.includes(l.id) ? 'bg-emerald-500 border-emerald-500 text-white' : l.id === lessonId ? 'border-blue-500 text-blue-600' : 'border-slate-200 dark:border-slate-800'}`}>
                {completedLessons.includes(l.id) ? <CheckCircle size={14} /> : l.id}
              </div>
              <p className="text-xs font-bold truncate leading-tight">{l.title}</p>
            </Link>
          ))}
        </div>

        <div className="p-6 border-t border-slate-100 dark:border-slate-900 bg-slate-50/50 dark:bg-slate-900/50">
          {isAllComplete && (
            <Link to="/certificate" className="w-full flex items-center justify-center gap-2 bg-emerald-600 text-white py-3 rounded-xl font-bold mb-4 shadow-lg hover:bg-emerald-700 transition-all">
              <Award size={18} /> Ver Certificado
            </Link>
          )}
          <div className="flex justify-between items-end mb-2 text-[10px] font-black uppercase text-slate-400">
            <span>O Teu Progresso</span>
            <span className="text-slate-700 dark:text-slate-300">
               {Math.round((completedLessons.length / lessons.length) * 100)}%
            </span>
          </div>
          <div className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-emerald-500 transition-all duration-500" style={{ width: `${(completedLessons.length / lessons.length) * 100}%` }}></div>
          </div>
        </div>
      </aside>

      <div className="flex-grow flex flex-col min-w-0 h-screen overflow-hidden">
        <header className="h-16 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 md:px-8 flex items-center justify-between relative z-20 shrink-0">
          <div className="flex items-center gap-4">
            <Link to="/" className="lg:hidden"><BookOpen className="text-blue-600" size={24} /></Link>
            <div className="hidden sm:block">
              <span className="text-xs font-black uppercase text-slate-400 tracking-widest">{lesson.category}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button onClick={toggleDarkMode} className="p-2 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-500 hover:text-blue-600 border border-slate-100 dark:border-slate-800 transition-colors">
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <div className="flex gap-1 ml-4">
              <button disabled={lessonIndex === 0} onClick={() => navigate(`/aula/${lessons[lessonIndex - 1].id}`)} className="p-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg disabled:opacity-30 hover:bg-slate-50 transition-colors"><ChevronLeft size={18} /></button>
              <button disabled={lessonIndex === lessons.length - 1} onClick={() => navigate(`/aula/${lessons[lessonIndex + 1].id}`)} className="p-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg disabled:opacity-30 hover:bg-slate-50 transition-colors"><ChevronRight size={18} /></button>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-150 z-30" style={{ width: `${scrollProgress}%` }}></div>
        </header>

        <div id="lesson-content-area" className="flex-grow overflow-y-auto scroll-smooth bg-slate-50 dark:bg-slate-950">
          <main className="max-w-4xl mx-auto p-6 md:p-12 lg:p-16">
            <div className="mb-12">
               <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase rounded-full border border-blue-100 dark:border-blue-800">
                    Módulo {lesson.category}
                  </span>
                  <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 text-[10px] font-black uppercase rounded-full">
                    <Clock size={10} className="inline mr-1" /> {lesson.readingTime}
                  </span>
               </div>
               <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tighter leading-tight mb-6">{lesson.title}</h1>
               <p className="text-xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-2xl">{lesson.description}</p>

               <div className="flex items-center gap-3 mt-8">
                 <button onClick={() => toggleComplete(lessonId)} className={`px-8 py-4 rounded-2xl font-black text-sm shadow-lg transition-all ${completedLessons.includes(lessonId) ? 'bg-emerald-500 text-white' : 'bg-blue-600 text-white hover:bg-blue-700 hover:-translate-y-0.5'}`}>
                    {completedLessons.includes(lessonId) ? <span className="flex items-center gap-2"><CheckCircle size={18} /> Aula Concluída</span> : 'Marcar como Concluída'}
                 </button>
                 <button onClick={toggleFavorite} className={`p-4 rounded-2xl border-2 transition-all ${isFavorite ? 'bg-pink-50 dark:bg-pink-900/20 border-pink-200 dark:border-pink-900 text-pink-500' : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-400 hover:border-pink-500 hover:text-pink-500'}`}>
                    <Heart size={22} fill={isFavorite ? "currentColor" : "none"} />
                 </button>
                 <button onClick={() => { navigator.clipboard.writeText(window.location.href); alert('Link copiado! 🚀'); }} className="p-4 rounded-2xl border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-400 hover:text-blue-600 hover:border-blue-600 transition-all"><Share2 size={22} /></button>
               </div>
            </div>

            {lesson.videoUrl && (
              <div className="mb-16 aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white dark:border-slate-900 bg-black">
                <iframe width="100%" height="100%" src={lesson.videoUrl} title="Vídeo da Aula" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            )}

            <div className="bg-white dark:bg-slate-900 rounded-[3rem] shadow-xl border border-slate-100 dark:border-slate-800 p-8 md:p-16 mb-12">
               <div className="prose prose-slate dark:prose-invert prose-lg max-w-none
                 prose-headings:font-black prose-headings:tracking-tighter
                 prose-code:text-pink-600 dark:prose-code:text-pink-400 prose-code:bg-pink-50 dark:prose-code:bg-pink-900/20 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md
                 prose-pre:bg-slate-900 dark:prose-pre:bg-black prose-pre:rounded-2xl prose-pre:p-6">
                  {lesson.content ? <ReactMarkdown>{lesson.content}</ReactMarkdown> : <p className="text-slate-400 italic">O conteúdo desta aula está a ser carregado...</p>}
               </div>

               {lesson.proTip && (
                 <div className="mt-16 p-8 bg-blue-600 rounded-[2.5rem] text-white flex gap-6 items-start shadow-xl relative overflow-hidden group">
                   <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-125 transition-transform"><Zap size={100} /></div>
                   <Zap size={28} className="shrink-0 text-blue-200" />
                   <div className="relative z-10">
                     <h4 className="font-black uppercase text-xs tracking-widest text-blue-100 mb-2">Dica do Sandro</h4>
                     <p className="text-lg font-bold leading-relaxed">"{lesson.proTip}"</p>
                   </div>
                 </div>
               )}
            </div>

            <div className="bg-slate-950 rounded-[3rem] p-8 md:p-12 mb-12 border border-slate-800 shadow-2xl">
               <div className="flex items-center gap-3 mb-8 text-white">
                  <div className="p-3 bg-emerald-600 rounded-2xl shadow-lg shadow-emerald-900/50"><Code size={24} /></div>
                  <h3 className="text-2xl font-black tracking-tight">Laboratório Prático</h3>
               </div>
               <div className="bg-white/5 p-6 rounded-2xl border border-white/10 mb-8">
                  <p className="text-slate-300 font-medium leading-relaxed flex items-center gap-2"><Target size={16} className="text-emerald-400" /> {lesson.practice}</p>
               </div>
               <CodePlayground
                  initialHtml={lesson.playground?.html || ""}
                  initialCss={lesson.playground?.css || ""}
                  initialJs={lesson.playground?.js || ""}
               />
            </div>

            <div id="quiz" className="bg-white dark:bg-slate-900 rounded-[3rem] p-8 md:p-16 border border-slate-100 dark:border-slate-800 shadow-xl mb-12 scroll-mt-24">
               <div className="flex items-center justify-between mb-12">
                  <div className="flex items-center gap-4 text-slate-900 dark:text-white">
                    <div className="p-3 bg-amber-500 rounded-2xl text-white shadow-lg"><BrainCircuit size={28} /></div>
                    <h3 className="text-3xl font-black tracking-tighter">Quiz de Verificação</h3>
                  </div>
                  {!quizComplete && lesson.quizzes && (
                    <span className="text-[10px] font-black uppercase text-slate-400 bg-slate-50 dark:bg-slate-800 px-3 py-1 rounded-lg">Pág {currentQuizIndex + 1}/{lesson.quizzes.length}</span>
                  )}
               </div>

               {lesson.quizzes && lesson.quizzes.length > 0 && !quizComplete ? (
                 <div className="space-y-8">
                   <h4 className="text-2xl font-bold text-slate-800 dark:text-slate-100 leading-snug">{lesson.quizzes[currentQuizIndex].question}</h4>
                   <div className="grid grid-cols-1 gap-4">
                     {lesson.quizzes[currentQuizIndex].options.map((option, idx) => (
                       <button key={idx} onClick={() => setSelectedOption(idx)} className={`group flex items-center gap-4 p-6 rounded-3xl border-2 text-left transition-all ${selectedOption === idx ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400' : 'border-slate-100 dark:border-slate-800 hover:border-slate-300 text-slate-600 dark:text-slate-400'}`}>
                         <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-black text-xs ${selectedOption === idx ? 'bg-blue-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'}`}>{String.fromCharCode(65 + idx)}</div>
                         <span className="font-bold">{option}</span>
                       </button>
                     ))}
                   </div>
                   <div className="flex justify-end pt-6">
                     <button onClick={handleNextQuestion} disabled={selectedOption === null} className="px-10 py-4 bg-slate-900 dark:bg-blue-600 text-white rounded-2xl font-black disabled:opacity-30 hover:scale-105 transition-all">
                       {currentQuizIndex === lesson.quizzes.length - 1 ? 'Finalizar Quiz' : 'Próxima Pergunta'}
                     </button>
                   </div>
                 </div>
               ) : quizComplete ? (
                 <div className="text-center py-12">
                   <Award size={80} className="mx-auto text-emerald-500 mb-6 drop-shadow-lg" />
                   <h4 className="text-4xl font-black mb-4 dark:text-white">Quiz Concluído!</h4>
                   <p className="text-xl text-slate-500 dark:text-slate-400 mb-10 font-medium">Acertaste em <span className="text-emerald-500 font-black">{quizResults.filter(Boolean).length}</span> de {lesson.quizzes.length} perguntas.</p>
                   <div className="flex justify-center gap-4">
                      <button onClick={() => setQuizComplete(false)} className="px-8 py-4 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-2xl font-black hover:bg-slate-200 transition-all">Tentar de Novo</button>
                      {quizResults.filter(Boolean).length === lesson.quizzes.length && !completedLessons.includes(lessonId) && (
                        <button onClick={() => toggleComplete(lessonId)} className="px-8 py-4 bg-emerald-600 text-white rounded-2xl font-black shadow-lg shadow-emerald-200 hover:scale-105 transition-all">Concluir Aula</button>
                      )}
                   </div>
                 </div>
               ) : (
                 <div className="text-center py-12 bg-slate-50 dark:bg-slate-800/50 rounded-[2rem] border-2 border-dashed border-slate-100 dark:border-slate-800">
                    <p className="text-slate-400 font-bold italic">Sem quiz disponível para este módulo.</p>
                 </div>
               )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
               <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 border border-slate-100 dark:border-slate-800 shadow-md">
                  <h3 className="text-2xl font-black mb-8 flex items-center gap-3"><Library size={24} className="text-blue-600" /> Recursos Extras</h3>
                  <div className="space-y-4">
                    {lesson.resources?.map((res, i) => (
                      <a key={i} href={res.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-5 bg-slate-50 dark:bg-slate-800 rounded-2xl hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all group font-bold text-slate-700 dark:text-slate-200 border border-transparent hover:border-blue-100">
                        <span className="truncate pr-4">{res.name}</span> <ExternalLink size={16} className="text-slate-300 group-hover:text-blue-600" />
                      </a>
                    ))}
                  </div>
               </div>
               <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 border border-slate-100 dark:border-slate-800 shadow-md">
                  <h3 className="text-2xl font-black mb-8 flex items-center gap-3"><MessageSquare size={24} className="text-indigo-600" /> Discussão</h3>
                  <CommentsSection lessonId={lessonId} />
               </div>
            </div>

            <div className="mt-24 pt-12 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-slate-900 dark:bg-white flex items-center justify-center text-white dark:text-slate-900 font-black text-xl shadow-lg">{lessonId}</div>
                <div>
                   <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Estás a ler</p>
                   <p className="font-bold text-slate-900 dark:text-white text-lg">{lesson.title}</p>
                </div>
              </div>
              <div className="flex gap-4 w-full md:w-auto">
                {lessonIndex > 0 && (
                  <Link to={`/aula/${lessons[lessonIndex - 1].id}`} className="flex-1 md:flex-none flex items-center justify-center gap-3 px-8 py-4 bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 rounded-2xl font-bold text-slate-600 hover:border-slate-400 transition-all"><ChevronLeft size={20} /> Anterior</Link>
                )}
                {lessonIndex < lessons.length - 1 ? (
                  <Link to={`/aula/${lessons[lessonIndex + 1].id}`} className="flex-1 md:flex-none flex items-center justify-center gap-3 px-10 py-4 bg-slate-900 dark:bg-blue-600 text-white rounded-2xl font-black shadow-xl hover:scale-105 transition-all">Próxima Aula <ChevronRight size={20} /></Link>
                ) : (
                  <Link to="/certificate" className="flex-1 md:flex-none flex items-center justify-center gap-3 px-10 py-4 bg-emerald-600 text-white rounded-2xl font-black shadow-xl hover:scale-105 transition-all">Finalizar Curso <Award size={20} /></Link>
                )}
              </div>
            </div>
          </main>
          <footer className="text-center p-20 text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} Sandro Pereira • Premium React • O Curso Definitivo
          </footer>
        </div>
      </div>
    </div>
  );
};

export default LessonPage;
