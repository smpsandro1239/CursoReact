// Autor: Sandro Pereira (smpsandro1239)
// Projeto: CursoReact – Premium React: O Curso Definitivo (40 Aulas)

import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  PlayCircle,
  ArrowRight,
  Zap,
  Target,
  Award,
  Sun,
  Moon,
  CheckCircle2,
  Clock,
  Medal,
  Search as SearchIcon,
  Flame
} from 'lucide-react';
import { lessons } from '../data/lessons';
import { useTheme } from '../context/ThemeContext';
import { useCourseStore } from '../store/useCourseStore';
import GamificationBar from '../components/GamificationBar';
import Fuse from 'fuse.js';

const allLessons = lessons;

const fuse = new Fuse(allLessons, {
  keys: ['title', 'description', 'category', 'tags'],
  threshold: 0.3,
});

const LandingPage = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const { xp, level, completedLessons } = useCourseStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('Todas');

  const categories = ['Todas', ...new Set(allLessons.map(l => l.category))];

  const filteredLessons = useMemo(() => {
    let result = allLessons;
    if (searchTerm) {
      result = fuse.search(searchTerm).map(r => r.item);
    }
    if (activeCategory !== 'Todas') {
      result = result.filter(l => l.category === activeCategory);
    }
    return result;
  }, [searchTerm, activeCategory]);

  const progressPercentage = Math.round((completedLessons.length / allLessons.length) * 100);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <GamificationBar />

      <nav className="border-b border-slate-100 dark:border-slate-900 py-4 px-6 sticky top-14 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md z-30">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-black text-blue-600 tracking-tighter">PREMIUM REACT v2</div>
          <div className="flex items-center gap-6">
            <button onClick={toggleDarkMode} className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <Link to="/analytics" className="text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors">Dashboard</Link>
            {completedLessons.length === allLessons.length && (
              <Link to="/certificate" className="text-sm font-bold text-emerald-500 flex items-center gap-1 hover:scale-105 transition-transform">
                <Award size={16} /> Certificado
              </Link>
            )}
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-black uppercase tracking-widest rounded-full border border-blue-100 dark:border-blue-800">
               <Zap size={14} fill="currentColor" /> Sandro Pereira Evolution
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tighter leading-[1.05]">
              A Próxima Geração do <span className="text-blue-600">React 19</span>.
            </h1>
            <p className="text-xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-xl">
              Domina as ferramentas que as empresas de elite usam. 40 aulas dinâmicas com sistema de XP e laboratório de código avançado.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/aula/1" className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black flex items-center gap-3 hover:bg-blue-700 hover:-translate-y-1 transition-all shadow-2xl shadow-blue-200 dark:shadow-none">
                <PlayCircle size={24} /> Continuar Jornada
              </Link>
            </div>
          </div>

          <div className="bg-slate-900 rounded-[3rem] p-10 text-white relative overflow-hidden shadow-2xl">
             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
             <div className="relative z-10 space-y-10">
                <div className="flex justify-between items-center">
                   <div>
                      <p className="text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] mb-1">Progresso Evolution</p>
                      <h3 className="text-4xl font-black">{progressPercentage}%</h3>
                   </div>
                   <Medal className="text-amber-400" size={48} />
                </div>

                <div className="space-y-4">
                   <div className="h-4 bg-white/10 rounded-full overflow-hidden p-1 border border-white/5">
                      <div className="h-full bg-blue-500 rounded-full transition-all duration-1000" style={{ width: `${progressPercentage}%` }}></div>
                   </div>
                   <div className="flex justify-between text-[10px] font-black text-slate-400 uppercase tracking-widest">
                      <span>{completedLessons.length} Aulas Concluídas</span>
                      <span>{allLessons.length - completedLessons.length} Restantes</span>
                   </div>
                </div>

                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/10">
                   <div>
                      <p className="text-slate-500 text-[9px] font-black uppercase mb-1">Experiência Total</p>
                      <p className="text-2xl font-black text-blue-400">{xp} XP</p>
                   </div>
                   <div>
                      <p className="text-slate-500 text-[9px] font-black uppercase mb-1">Nível Atual</p>
                      <p className="text-2xl font-black text-emerald-400">{level}</p>
                   </div>
                </div>
             </div>
          </div>
        </div>

        <section id="curriculum" className="mb-16">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-12">
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2.5 rounded-xl font-bold text-xs transition-all ${activeCategory === cat ? 'bg-blue-600 text-white shadow-lg' : 'bg-white dark:bg-slate-900 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-100 dark:border-slate-800'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative w-full md:w-80">
              <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                type="text"
                placeholder="O que queres aprender, Sandro?"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl focus:ring-2 focus:ring-blue-500/20 transition-all font-medium outline-none text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredLessons.map((lesson) => (
              <Link
                key={lesson.id}
                to={`/aula/${lesson.id}`}
                className="group bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 border border-slate-100 dark:border-slate-800 hover:border-blue-500/30 hover:shadow-2xl transition-all relative overflow-hidden flex flex-col h-full"
              >
                {completedLessons.includes(lesson.id) && (
                  <div className="absolute top-6 right-6 text-emerald-500 bg-emerald-50 dark:bg-emerald-900/30 p-2 rounded-full z-10">
                    <CheckCircle2 size={20} />
                  </div>
                )}

                <div className="space-y-4 flex-grow">
                   <div className="flex items-center gap-2 mb-2">
                     <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">{lesson.categoria}</span>
                     <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                     <span className="text-[9px] font-black uppercase tracking-widest text-blue-600">{lesson.dificuldade}</span>
                   </div>
                   <h3 className="text-xl font-black text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors leading-tight">
                     {lesson.title}
                   </h3>
                   <p className="text-sm text-slate-500 dark:text-slate-400 font-medium line-clamp-2">
                     {lesson.description}
                   </p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-50 dark:border-slate-800 flex items-center justify-between">
                   <div className="flex items-center gap-2 text-slate-400 font-black text-[9px] uppercase tracking-widest">
                     <Clock size={12} /> {lesson.tempoLeitura}
                   </div>
                   <div className="flex items-center gap-1 text-blue-600 font-black text-[10px] uppercase tracking-widest group-hover:translate-x-1 transition-transform">
                     Entrar <ArrowRight size={14} />
                   </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <footer className="mt-32 pt-24 border-t border-slate-100 dark:border-slate-900 flex flex-col items-center gap-12">
           <div className="text-center space-y-2">
              <h4 className="font-black text-2xl text-slate-900 dark:text-white tracking-tighter">Sandro Pereira LMS Evolution</h4>
              <p className="text-slate-500 font-medium uppercase tracking-[0.3em] text-[10px]">v2.0 • Premium Educational Platform</p>
           </div>
           <p className="text-slate-400 text-[10px] font-bold">© {new Date().getFullYear()} PREMIUM REACT. DESENVOLVIDO PARA A ELITE.</p>
        </footer>
      </main>
    </div>
  );
};

export default LandingPage;
