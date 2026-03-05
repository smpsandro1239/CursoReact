// Autor: Sandro Pereira (smpsandro1239)
// Projeto: CursoReact – Premium React: O Curso Definitivo (40 Aulas)

import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  TrendingUp,
  CheckCircle2,
  Zap,
  BookOpen,
  Award,
  Flame,
  Target,
  Shield
} from 'lucide-react';
import { lessons } from '../data/lessons';
import { useCourseStore } from '../store/useCourseStore';
import GamificationBar from '../components/GamificationBar';

const allLessons = lessons;

const AnalyticsPage = () => {
  const { xp, level, streak, completedLessons, quizScores } = useCourseStore();
  const progress = Math.round((completedLessons.length / allLessons.length) * 100);

  const stats = [
    { label: 'Aulas Concluídas', value: completedLessons.length, total: allLessons.length, icon: <CheckCircle2 />, color: 'text-emerald-500', bg: 'bg-emerald-50 dark:bg-emerald-900/20' },
    { label: 'Experiência Total', value: `${xp} XP`, icon: <Zap />, color: 'text-blue-500', bg: 'bg-blue-50 dark:bg-blue-900/20' },
    { label: 'Nível Alcançado', value: level, icon: <Shield />, color: 'text-purple-500', bg: 'bg-purple-50 dark:bg-purple-900/20' },
    { label: 'Streak Atual', value: `${streak} Dias`, icon: <Flame />, color: 'text-amber-500', bg: 'bg-amber-50 dark:bg-amber-900/20' }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <GamificationBar />

      <div className="max-w-6xl mx-auto p-6 md:p-12">
        <header className="mb-12">
          <Link to="/" className="text-blue-600 font-bold flex items-center gap-2 mb-4 hover:translate-x-1 transition-transform">
            <ArrowLeft size={20} /> Voltar ao Painel
          </Link>
          <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tighter">Performance Evolution</h1>
          <p className="text-slate-500 dark:text-slate-400 font-medium">A tua evolução pedagógica, Sandro.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
           {stats.map((s, i) => (
             <div key={i} className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm">
                <div className={`${s.bg} ${s.color} w-12 h-12 rounded-2xl flex items-center justify-center mb-6`}>{s.icon}</div>
                <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1">{s.label}</p>
                <h3 className="text-3xl font-black text-slate-900 dark:text-white">
                  {s.value}{s.total ? <span className="text-slate-300 text-lg">/{s.total}</span> : ''}
                </h3>
             </div>
           ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           <div className="lg:col-span-2 bg-slate-900 rounded-[3rem] p-10 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10">
                 <div className="flex justify-between items-end mb-10">
                    <div>
                       <h3 className="text-2xl font-black tracking-tight mb-2">Conclusão do Evolution</h3>
                       <p className="text-slate-400 text-sm font-medium">Estás a dominar o ecossistema!</p>
                    </div>
                    <span className="text-6xl font-black text-blue-500">{progress}%</span>
                 </div>
                 <div className="h-4 bg-white/10 rounded-full overflow-hidden p-1 border border-white/5 mb-8">
                    <div className="h-full bg-blue-500 rounded-full transition-all duration-1000" style={{ width: `${progress}%` }}></div>
                 </div>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-white/5 p-6 rounded-3xl border border-white/10 text-center">
                       <p className="text-[9px] font-black uppercase text-slate-500 mb-2">Faltam</p>
                       <p className="text-2xl font-black">{allLessons.length - completedLessons.length} Aulas</p>
                    </div>
                    <div className="bg-white/5 p-6 rounded-3xl border border-white/10 text-center">
                       <p className="text-[9px] font-black uppercase text-slate-500 mb-2">Próximo Nível</p>
                       <p className="text-2xl font-black">{1000 - (xp % 1000)} XP</p>
                    </div>
                 </div>
              </div>
           </div>

           <div className="bg-white dark:bg-slate-900 rounded-[3rem] p-10 border border-slate-100 dark:border-slate-800 shadow-xl flex flex-col justify-center text-center">
              <div className="w-20 h-20 bg-blue-50 dark:bg-blue-900/20 text-blue-600 rounded-[2rem] flex items-center justify-center mx-auto mb-6">
                 <Target size={32} />
              </div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">Objetivo da Semana</h3>
              <p className="text-slate-500 text-sm font-medium mb-8">Completa 5 aulas para desbloquear o bónus de streak x2.</p>
              <div className="space-y-2">
                 <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600" style={{ width: '40%' }}></div>
                 </div>
                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">2 / 5 Aulas</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
