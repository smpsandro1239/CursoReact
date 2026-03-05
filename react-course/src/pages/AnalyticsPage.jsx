// Autor: Sandro Pereira (smpsandro1239)
// Projeto: CursoReact – Premium React: O Curso Definitivo (30 Aulas)

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  BarChart3,
  Clock,
  CheckCircle2,
  ArrowLeft,
  Calendar,
  Zap,
  Target,
  BookOpen,
  Award,
  TrendingUp,
  AlertCircle
} from 'lucide-react';
import { lessons } from '../data/lessons';
import { useTheme } from '../context/ThemeContext';

const AnalyticsPage = () => {
  const { isDarkMode } = useTheme();
  const [stats, setStats] = useState({
    completed: 0,
    practiceDone: 0,
    totalNotes: 0,
    favorites: 0,
    quizScore: 0,
    totalQuestions: 0
  });

  useEffect(() => {
    const completed = JSON.parse(localStorage.getItem('completedLessons') || '[]').length;
    const practice = JSON.parse(localStorage.getItem('practiceDone') || '[]').length;
    const notes = Object.keys(JSON.parse(localStorage.getItem('lessonNotes') || '{}')).length;
    const favorites = JSON.parse(localStorage.getItem('favoriteLessons') || '[]').length;

    setStats({
      completed,
      practiceDone: practice,
      totalNotes: notes,
      favorites,
      quizScore: 0,
      totalQuestions: 0
    });
  }, []);

  const progress = Math.round((stats.completed / lessons.length) * 100);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 p-6 md:p-12 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 flex justify-between items-center">
          <div>
            <Link to="/" className="text-blue-600 font-bold flex items-center gap-2 mb-4 hover:translate-x-1 transition-transform">
              <ArrowLeft size={20} /> Voltar ao Início
            </Link>
            <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tighter">O Teu Painel de Progresso</h1>
            <p className="text-slate-500 dark:text-slate-400 font-medium mt-2">Dados em tempo real da tua jornada com Sandro Pereira.</p>
          </div>
          <div className="hidden md:block">
            <div className="w-20 h-20 bg-blue-600 rounded-[2rem] flex items-center justify-center text-white shadow-xl rotate-12">
               <TrendingUp size={32} />
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
           {[
             { label: 'Aulas Concluídas', value: stats.completed, total: lessons.length, icon: <CheckCircle2 size={20} />, color: 'text-emerald-500', bg: 'bg-emerald-50 dark:bg-emerald-900/20' },
             { label: 'Prática Realizada', value: stats.practiceDone, icon: <Zap size={20} />, color: 'text-amber-500', bg: 'bg-amber-50 dark:bg-amber-900/20' },
             { label: 'Notas Tomadas', value: stats.totalNotes, icon: <BookOpen size={20} />, color: 'text-blue-500', bg: 'bg-blue-50 dark:bg-blue-900/20' },
             { label: 'Favoritos', value: stats.favorites, icon: <Award size={20} />, color: 'text-pink-500', bg: 'bg-pink-50 dark:bg-pink-900/20' }
           ].map((card, i) => (
             <div key={i} className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm">
                <div className={`${card.bg} ${card.color} w-12 h-12 rounded-2xl flex items-center justify-center mb-6`}>
                   {card.icon}
                </div>
                <p className="text-slate-400 text-xs font-black uppercase tracking-widest mb-1">{card.label}</p>
                <h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                  {card.value}{card.total ? <span className="text-slate-300 text-lg">/{card.total}</span> : ''}
                </h3>
             </div>
           ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           <div className="lg:col-span-2 bg-slate-900 rounded-[3rem] p-10 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10">
                 <div className="flex justify-between items-center mb-10">
                    <div>
                       <h3 className="text-2xl font-black tracking-tight">Conclusão do Curso</h3>
                       <p className="text-slate-400 text-sm font-medium">Estás quase lá, Sandro!</p>
                    </div>
                    <span className="text-5xl font-black text-blue-500">{progress}%</span>
                 </div>
                 <div className="h-4 bg-white/10 rounded-full overflow-hidden mb-12 p-1 border border-white/5">
                    <div className="h-full bg-blue-500 rounded-full transition-all duration-1000" style={{ width: `${progress}%` }}></div>
                 </div>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="bg-white/5 p-6 rounded-3xl border border-white/10">
                       <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Restantes</p>
                       <p className="text-2xl font-black">{lessons.length - stats.completed} Módulos</p>
                    </div>
                    <div className="bg-white/5 p-6 rounded-3xl border border-white/10">
                       <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Estimativa</p>
                       <p className="text-2xl font-black">7 Dias</p>
                    </div>
                 </div>
              </div>
           </div>

           <div className="bg-white dark:bg-slate-900 rounded-[3rem] p-10 border border-slate-100 dark:border-slate-800 shadow-xl">
              <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tighter mb-8">Conquistas</h3>
              <div className="space-y-6">
                 {[
                   { name: 'Iniciado', min: 1, current: stats.completed, icon: <Zap size={16} /> },
                   { name: 'Explorador', min: 10, current: stats.completed, icon: <Target size={16} /> },
                   { name: 'Mestre', min: 30, current: stats.completed, icon: <Award size={16} /> }
                 ].map((badge, i) => (
                   <div key={i} className={`flex items-center gap-4 p-4 rounded-2xl transition-all ${badge.current >= badge.min ? 'bg-blue-50 dark:bg-blue-900/20' : 'opacity-30 grayscale'}`}>
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${badge.current >= badge.min ? 'bg-blue-600 text-white' : 'bg-slate-200'}`}>
                         {badge.icon}
                      </div>
                      <div>
                         <p className="font-black text-sm text-slate-900 dark:text-white">{badge.name}</p>
                         <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{badge.min} Aulas</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </div>

        <footer className="mt-20 pt-10 border-t border-slate-100 dark:border-slate-800 text-center">
           <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300">Premium React • Analytics Engine v1.0</p>
        </footer>
      </div>
    </div>
  );
};

export default AnalyticsPage;
