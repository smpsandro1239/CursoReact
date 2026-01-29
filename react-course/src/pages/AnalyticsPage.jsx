import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  BarChart3,
  Clock,
  Trophy,
  CheckCircle2,
  ArrowLeft,
  Calendar,
  Zap,
  Target,
  BookOpen,
  MousePointer2,
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

    // Simulating quiz performance tracking (as we don't persist results globally yet)
    // In a real app, we would store these in localStorage as they happen
    setStats({
      completed,
      practiceDone: practice,
      totalNotes: notes,
      favorites,
      quizScore: Math.round(completed * 3.5), // Mock data
      totalQuestions: completed * 4 // Mock data
    });
  }, []);

  const progressPercentage = Math.round((stats.completed / lessons.length) * 100);
  const [lessonsPerWeek, setLessonsPerWeek] = useState(3);

  const estimatedWeeks = Math.ceil((lessons.length - stats.completed) / lessonsPerWeek);
  const finishDate = new Date();
  finishDate.setDate(finishDate.getDate() + (estimatedWeeks * 7));

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-slate-950 p-6 md:p-12 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <Link to="/" className="flex items-center gap-2 text-slate-400 hover:text-blue-600 transition-colors mb-4 text-xs font-black uppercase tracking-widest">
              <ArrowLeft size={14} /> Voltar ao Início
            </Link>
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter dark:text-white">
              O Teu <span className="text-blue-600">Dashboard</span> de Estudo
            </h1>
            <p className="text-slate-500 dark:text-slate-400 font-medium mt-2">Acompanha a tua evolução e performance no curso.</p>
          </div>
          <div className="bg-white dark:bg-slate-900 p-4 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center text-blue-600">
              <Calendar size={24} />
            </div>
            <div>
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Última Sessão</div>
              <div className="text-sm font-bold dark:text-white">Hoje, {new Date().toLocaleDateString('pt-PT')}</div>
            </div>
          </div>
        </div>

        {/* Top Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {[
            { label: 'Aulas Concluídas', value: `${stats.completed}/30`, icon: <CheckCircle2 size={20} />, color: 'text-emerald-500', bg: 'bg-emerald-50 dark:bg-emerald-900/20' },
            { label: 'Desafios Práticos', value: stats.practiceDone, icon: <Zap size={20} />, color: 'text-amber-500', bg: 'bg-amber-50 dark:bg-amber-900/20' },
            { label: 'Notas Guardadas', value: stats.totalNotes, icon: <BookOpen size={20} />, color: 'text-indigo-500', bg: 'bg-indigo-50 dark:bg-indigo-900/20' },
            { label: 'Favoritos', value: stats.favorites, icon: <Trophy size={20} />, color: 'text-pink-500', bg: 'bg-pink-50 dark:bg-pink-900/20' }
          ].map((item, i) => (
            <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm">
              <div className={`w-10 h-10 ${item.bg} ${item.color} rounded-xl flex items-center justify-center mb-4`}>
                {item.icon}
              </div>
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{item.label}</div>
              <div className="text-2xl font-black dark:text-white">{item.value}</div>
            </div>
          ))}
        </div>

        {/* Main Charts Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          {/* Progress Card */}
          <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-8 md:p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5 text-blue-600">
              <TrendingUp size={120} />
            </div>
            <h3 className="text-xl font-black mb-8 dark:text-white flex items-center gap-2">
              <Target size={20} className="text-blue-600" /> Progresso Geral do Curso
            </h3>

            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="relative w-40 h-40 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="80" cy="80" r="70"
                    stroke="currentColor" strokeWidth="12"
                    fill="transparent"
                    className="text-slate-100 dark:text-slate-800"
                  />
                  <circle
                    cx="80" cy="80" r="70"
                    stroke="currentColor" strokeWidth="12"
                    fill="transparent"
                    strokeDasharray={440}
                    strokeDashoffset={440 - (440 * progressPercentage) / 100}
                    strokeLinecap="round"
                    className="text-blue-600 transition-all duration-1000 ease-out"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-black dark:text-white">{progressPercentage}%</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Concluído</span>
                </div>
              </div>

              <div className="flex-grow space-y-6">
                <div>
                  <div className="flex justify-between text-sm font-bold mb-2">
                    <span className="dark:text-slate-300">Teoria Dominada</span>
                    <span className="text-blue-600">{progressPercentage}%</span>
                  </div>
                  <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600" style={{ width: `${progressPercentage}%` }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm font-bold mb-2">
                    <span className="dark:text-slate-300">Prática Aplicada</span>
                    <span className="text-emerald-500">{Math.round((stats.practiceDone / 30) * 100)}%</span>
                  </div>
                  <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500" style={{ width: `${(stats.practiceDone / 30) * 100}%` }}></div>
                  </div>
                </div>
                <div className="pt-4 p-4 bg-blue-50 dark:bg-blue-900/10 rounded-2xl border border-blue-100 dark:border-blue-800/50">
                   <p className="text-xs text-blue-700 dark:text-blue-300 font-medium">
                     <AlertCircle size={14} className="inline mr-1" />
                     Dica: Completar os desafios práticos aumenta a retenção de conhecimento em 70%.
                   </p>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Card */}
          <div className="bg-slate-900 text-white p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-emerald-500"></div>
             <h3 className="text-xl font-black mb-8 flex items-center gap-2">
               <Zap size={20} className="text-amber-400" /> Performance nos Quizzes
             </h3>

             <div className="space-y-8">
               <div className="text-center">
                 <div className="text-5xl font-black text-blue-400 mb-2">{stats.quizScore}</div>
                 <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">Respostas Corretas</div>
               </div>

               <div className="grid grid-cols-2 gap-4">
                 <div className="bg-white/5 p-4 rounded-2xl text-center">
                   <div className="text-xl font-bold">{stats.totalQuestions}</div>
                   <div className="text-[9px] font-black uppercase text-slate-500">Total</div>
                 </div>
                 <div className="bg-white/5 p-4 rounded-2xl text-center">
                   <div className="text-xl font-bold text-emerald-400">
                     {stats.totalQuestions > 0 ? Math.round((stats.quizScore / stats.totalQuestions) * 100) : 0}%
                   </div>
                   <div className="text-[9px] font-black uppercase text-slate-500">Precisão</div>
                 </div>
               </div>

               <div className="pt-6">
                 <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Nível de Mestria</span>
                    <span className="text-xs font-black text-amber-400 uppercase">Explorador</span>
                 </div>
                 <div className="flex gap-1.5">
                   {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => (
                     <div
                        key={i}
                        className={`h-6 flex-grow rounded-sm ${i <= stats.completed / 3 ? 'bg-blue-500' : 'bg-white/10'}`}
                     ></div>
                   ))}
                 </div>
               </div>
             </div>
          </div>
        </div>

        {/* Estimation Calculator */}
        <div className="bg-white dark:bg-slate-900 p-8 md:p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-xl mb-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-grow">
              <h3 className="text-xl font-black mb-2 dark:text-white flex items-center gap-2">
                <Clock size={20} className="text-indigo-600" /> Estimativa de Conclusão
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                Com base no teu ritmo de estudo, calculamos quando estarás pronto para o mercado.
              </p>
            </div>

            <div className="flex items-center gap-4 bg-slate-50 dark:bg-slate-800 p-4 rounded-3xl">
              <div className="text-right">
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Aulas por Semana</div>
                <div className="flex items-center gap-2 mt-1">
                  <button
                    onClick={() => setLessonsPerWeek(Math.max(1, lessonsPerWeek - 1))}
                    className="w-8 h-8 flex items-center justify-center bg-white dark:bg-slate-700 rounded-full shadow-sm hover:bg-slate-100 transition-colors dark:text-white"
                  >-</button>
                  <span className="text-xl font-black dark:text-white w-8 text-center">{lessonsPerWeek}</span>
                  <button
                    onClick={() => setLessonsPerWeek(lessonsPerWeek + 1)}
                    className="w-8 h-8 flex items-center justify-center bg-white dark:bg-slate-700 rounded-full shadow-sm hover:bg-slate-100 transition-colors dark:text-white"
                  >+</button>
                </div>
              </div>
            </div>

            <div className="bg-indigo-600 text-white p-6 rounded-3xl shadow-xl shadow-indigo-200 dark:shadow-none min-w-[240px] text-center">
              <div className="text-[10px] font-black opacity-80 uppercase tracking-widest mb-1">Data Estimada</div>
              <div className="text-2xl font-black">
                {stats.completed === 30 ? 'Curso Concluído! 🏆' : finishDate.toLocaleDateString('pt-PT', { day: 'numeric', month: 'long', year: 'numeric' })}
              </div>
              {stats.completed < 30 && (
                <div className="text-xs font-bold mt-1 opacity-80">
                  Faltam aprox. {estimatedWeeks} {estimatedWeeks === 1 ? 'semana' : 'semanas'}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer Link */}
        <div className="text-center">
          <Link
            to="/lesson/1"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl font-black text-sm hover:border-blue-500 transition-all dark:text-white"
          >
            Continuar para a Próxima Aula <Zap size={18} className="text-blue-600" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
