// Autor: Sandro Pereira (smpsandro1239)
// Projeto: CursoReact – Premium React: O Curso Definitivo (30 Aulas)

import React, { useState, useEffect, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  BookOpen,
  PlayCircle,
  ArrowRight,
  Zap,
  Target,
  Award,
  Star,
  Sun,
  Moon,
  ChevronDown,
  CheckCircle2,
  Code2,
  Cpu,
  Globe,
  Layout,
  Layers,
  ShieldCheck,
  Clock,
  BarChart3,
  ExternalLink,
  Library,
  StickyNote,
  MessageSquare, Download,
  Trophy,
  Heart,
  Medal,
  Search as SearchIcon,
  RotateCcw
} from 'lucide-react';
import { lessons } from '../data/lessons';
import { useTheme } from '../context/ThemeContext';
import Fuse from 'fuse.js';

const fuse = new Fuse(lessons, {
  keys: ['title', 'description', 'category', 'tags'],
  threshold: 0.3,
});

const LandingPage = () => {
  const navigate = useNavigate();
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [completedLessons, setCompletedLessons] = useState(() =>
    JSON.parse(localStorage.getItem('completedLessons') || '[]')
  );
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('Todas');
  const [notesSearch, setNotesSearch] = useState('');

  const categories = ['Todas', ...new Set(lessons.map(l => l.category))];
  const totalMinutes = lessons.reduce((acc, l) => acc + parseInt(l.readingTime), 0);
  const totalHours = (totalMinutes / 60).toFixed(1);

  const [practiceCount, setPracticeCount] = useState(0);
  const [favoriteLessons, setFavoriteLessons] = useState(() =>
    JSON.parse(localStorage.getItem('favoriteLessons') || '[]')
  );

  const badges = [
    { id: 'iniciado', name: 'Iniciado', min: 1, icon: <Zap size={20} />, color: 'bg-blue-500' },
    { id: 'explorador', name: 'Explorador', min: 5, icon: <Target size={20} />, color: 'bg-indigo-500' },
    { id: 'avancado', name: 'Avançado', min: 15, icon: <ShieldCheck size={20} />, color: 'bg-purple-500' },
    { id: 'mestre', name: 'Mestre React', min: 30, icon: <Trophy size={20} />, color: 'bg-amber-500' }
  ];

  const filteredLessons = useMemo(() => {
    let result = lessons;
    if (searchTerm) {
      result = fuse.search(searchTerm).map(r => r.item);
    }
    if (activeCategory !== 'Todas') {
      result = result.filter(l => l.category === activeCategory);
    }
    return result;
  }, [searchTerm, activeCategory]);

  useEffect(() => {
    const savedPractice = localStorage.getItem('practiceDone');
    if (savedPractice) {
      setPracticeCount(JSON.parse(savedPractice).length);
    }
    const completed = JSON.parse(localStorage.getItem('completedLessons') || '[]');
    setCompletedLessons(completed);
  }, []);

  const remainingMinutes = lessons.reduce((acc, l) => {
    if (!completedLessons.includes(l.id)) {
      return acc + parseInt(l.readingTime);
    }
    return acc;
  }, 0);

  const savedNotes = JSON.parse(localStorage.getItem('lessonNotes') || '{}');
  const hasNotes = Object.keys(savedNotes).length > 0;

  const filteredNotes = Object.entries(savedNotes)
    .filter(([id, text]) => text.toLowerCase().includes(notesSearch.toLowerCase()))
    .map(([id, text]) => ({
      id: parseInt(id),
      text,
      lesson: lessons.find(l => l.id === parseInt(id))
    }))
    .filter(item => item.lesson);

  const progressPercentage = Math.round((completedLessons.length / lessons.length) * 100);

  const resetProgress = () => {
    if(confirm('Atenção Sandro, desejas mesmo repor todo o teu progresso? Esta ação não pode ser desfeita.')) {
      localStorage.removeItem('completedLessons');
      localStorage.removeItem('favoriteLessons');
      localStorage.removeItem('quizScores');
      localStorage.removeItem('lessonNotes');
      window.location.reload();
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* Navbar */}
      <nav className="border-b border-slate-100 dark:border-slate-900 py-4 px-6 sticky top-0 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md z-30">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-black text-blue-600 tracking-tighter">PREMIUM REACT</div>
          <div className="flex items-center gap-4 md:gap-8">
            <button onClick={toggleDarkMode} className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 text-slate-500 hover:text-blue-600 transition-all border border-slate-100 dark:border-slate-800">
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <div className="hidden md:flex gap-6">
               <Link to="/glossary" className="text-sm font-bold text-slate-500 dark:text-slate-400 hover:text-blue-600">Glossário</Link>
               <Link to="/analytics" className="text-sm font-bold text-slate-500 dark:text-slate-400 hover:text-blue-600">Dashboard</Link>
               {completedLessons.length === lessons.length && (
                 <Link to="/certificate" className="text-sm font-bold text-emerald-500 flex items-center gap-1 hover:scale-105 transition-transform">
                   <Award size={16} /> Certificado
                 </Link>
               )}
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-black uppercase tracking-widest rounded-full border border-blue-100 dark:border-blue-800">
               <Zap size={14} /> Bem-vindo, Sandro Pereira
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tighter leading-[1.05]">
              Domina o <span className="text-blue-600">React 19</span> do Zero ao Nível Elite.
            </h1>
            <p className="text-xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-xl">
              Uma jornada educacional premium com 30 aulas práticas, quizzes dinâmicos e certificação profissional. Tudo em Português de Portugal.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/aula/1" className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black flex items-center gap-3 hover:bg-blue-700 hover:-translate-y-1 transition-all shadow-2xl shadow-blue-200 dark:shadow-none">
                <PlayCircle size={24} /> Começar Agora
              </Link>
              <button
                onClick={() => document.getElementById('curriculum').scrollIntoView({ behavior: 'smooth' })}
                className="px-10 py-5 bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 rounded-2xl font-black text-slate-600 dark:text-slate-300 hover:border-slate-300 transition-all"
              >
                Ver Programa
              </button>
            </div>
          </div>

          {/* Progress Card */}
          <div className="bg-slate-900 dark:bg-slate-900/50 rounded-[3rem] p-10 text-white relative overflow-hidden shadow-2xl">
             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
             <div className="relative z-10 space-y-10">
                <div className="flex justify-between items-center">
                   <div className="space-y-1">
                      <p className="text-blue-400 text-xs font-black uppercase tracking-[0.2em]">O teu progresso atual</p>
                      <h3 className="text-3xl font-black tracking-tight">{progressPercentage}% Concluído</h3>
                   </div>
                   <Medal className="text-amber-400" size={48} />
                </div>

                <div className="space-y-4">
                   <div className="h-4 bg-white/10 rounded-full overflow-hidden p-1 border border-white/5">
                      <div className="h-full bg-blue-500 rounded-full transition-all duration-1000" style={{ width: `${progressPercentage}%` }}></div>
                   </div>
                   <div className="flex justify-between text-xs font-black text-slate-400">
                      <span>{completedLessons.length} AULAS CONCLUÍDAS</span>
                      <span>{lessons.length - completedLessons.length} RESTANTES</span>
                   </div>
                </div>

                <div className="grid grid-cols-2 gap-6 pt-4 border-t border-white/10">
                   <div>
                      <p className="text-slate-500 text-[10px] font-black uppercase mb-1">Tempo Total Estimado</p>
                      <p className="text-xl font-black">{totalHours} Horas</p>
                   </div>
                   <div>
                      <p className="text-slate-500 text-[10px] font-black uppercase mb-1">Aulas Favoritas</p>
                      <p className="text-xl font-black">{favoriteLessons.length}</p>
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* Filters & Search */}
        <section id="curriculum" className="mb-16">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-12">
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`
                    px-6 py-2.5 rounded-xl font-bold text-sm transition-all
                    ${activeCategory === cat
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white dark:bg-slate-900 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-100 dark:border-slate-800'}
                  `}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative w-full md:w-80">
              <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                type="text"
                placeholder="Pesquisar aulas, tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredLessons.map((lesson) => (
              <Link
                key={lesson.id}
                to={`/aula/${lesson.id}`}
                className="group bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 border border-slate-100 dark:border-slate-800 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-200 dark:hover:shadow-none transition-all relative overflow-hidden flex flex-col h-full"
              >
                {completedLessons.includes(lesson.id) && (
                  <div className="absolute top-6 right-6 text-emerald-500 bg-emerald-50 dark:bg-emerald-900/30 p-2 rounded-full z-10">
                    <CheckCircle2 size={20} />
                  </div>
                )}

                <div className="space-y-4 flex-grow">
                   <div className="flex items-center gap-2 mb-2">
                     <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{lesson.category}</span>
                     <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                     <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">{lesson.difficulty}</span>
                   </div>
                   <h3 className="text-2xl font-black text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors leading-tight">
                     {lesson.title}
                   </h3>
                   <p className="text-slate-500 dark:text-slate-400 font-medium line-clamp-3 leading-relaxed">
                     {lesson.description}
                   </p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-50 dark:border-slate-800 flex items-center justify-between">
                   <div className="flex items-center gap-2 text-slate-400 font-black text-[10px] uppercase">
                     <Clock size={12} /> {lesson.readingTime}
                   </div>
                   <div className="flex items-center gap-1 text-blue-600 font-black text-xs uppercase group-hover:translate-x-1 transition-transform">
                     Entrar <ArrowRight size={14} />
                   </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Footer Stats & Author */}
        <footer className="mt-32 pt-24 border-t border-slate-100 dark:border-slate-900 flex flex-col items-center gap-10">
           <div className="flex flex-col items-center gap-4 text-center">
              <div className="w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-[2rem] flex items-center justify-center text-slate-900 dark:text-white font-black text-3xl shadow-xl">
                SP
              </div>
              <div className="space-y-1">
                 <h4 className="font-black text-xl text-slate-900 dark:text-white tracking-tight">Sandro Pereira</h4>
                 <p className="text-slate-500 font-medium uppercase tracking-widest text-[10px]">Lead Course Author & Architect</p>
              </div>
           </div>

           <div className="flex gap-8 text-slate-400 dark:text-slate-600 font-black uppercase tracking-widest text-[10px]">
              <Link to="/glossary" className="hover:text-blue-600">Glossário</Link>
              <Link to="/analytics" className="hover:text-blue-600">Analytics</Link>
              <button onClick={resetProgress} className="text-red-500 hover:text-red-600 flex items-center gap-1">
                <RotateCcw size={12} /> Repor Progresso
              </button>
           </div>

           <p className="text-slate-400 dark:text-slate-700 text-[10px] font-bold">
             © {new Date().getFullYear()} PREMIUM REACT. DESENVOLVIDO PARA EXCELÊNCIA.
           </p>
        </footer>
      </main>
    </div>
  );
};

export default LandingPage;
