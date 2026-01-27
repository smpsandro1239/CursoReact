import React, { useRef, useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Award, Download, Home, Share2, User } from 'lucide-react';
import { lessons } from '../data/lessons';

const Certificate = () => {
  const completedLessons = JSON.parse(localStorage.getItem('completedLessons') || '[]');
  const isComplete = completedLessons.length === lessons.length;
  const certificateRef = useRef();
  const [userName, setUserName] = useState(() => localStorage.getItem('studentName') || 'Sandro Pereira');

  useEffect(() => {
    localStorage.setItem('studentName', userName);
  }, [userName]);

  if (!isComplete) {
    return <Navigate to="/" />;
  }

  const today = new Date().toLocaleDateString('pt-PT', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4 flex flex-col items-center">
      <div className="max-w-4xl w-full flex flex-col md:flex-row justify-between items-center gap-6 mb-8 print:hidden">
        <Link to="/" className="flex items-center gap-2 text-slate-600 dark:text-slate-400 font-bold hover:text-blue-600 transition-colors">
          <Home size={20} />
          Voltar ao Início
        </Link>

        <div className="flex-grow max-w-sm relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl font-bold text-slate-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            placeholder="O teu nome completo"
          />
        </div>

        <button
          onClick={() => window.print()}
          className="bg-blue-600 text-white px-6 py-2 rounded-xl font-bold flex items-center gap-2 hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 dark:shadow-none"
        >
          <Download size={20} />
          Imprimir Certificado
        </button>
      </div>

      {/* Certificate Design */}
      <div
        ref={certificateRef}
        className="max-w-4xl w-full bg-white dark:bg-slate-900 border-[16px] border-slate-100 dark:border-slate-800 p-16 relative overflow-hidden shadow-2xl print:shadow-none print:border-slate-200"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 dark:bg-blue-900/10 rounded-full -translate-y-1/2 translate-x-1/2 -z-10"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-50 dark:bg-emerald-900/10 rounded-full translate-y-1/2 -translate-x-1/2 -z-10"></div>

        <div className="text-center space-y-8 relative">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-blue-600 rounded-full text-white shadow-xl">
              <Award size={48} />
            </div>
          </div>

          <div className="space-y-2">
            <h1 className="text-5xl font-black text-slate-900 dark:text-white tracking-tighter uppercase">Certificado de Conclusão</h1>
            <p className="text-blue-600 font-black tracking-[0.2em] uppercase text-sm">Premium React Course</p>
          </div>

          <div className="py-12 space-y-4">
            <p className="text-slate-500 dark:text-slate-400 font-medium italic text-lg">Certificamos que</p>
            <h2 className="text-4xl font-black text-slate-800 dark:text-slate-100 border-b-2 border-slate-100 dark:border-slate-800 inline-block px-12 py-2">
              {userName}
            </h2>
            <p className="text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed pt-4">
              concluiu com êxito a formação intensiva de **React.js**, totalizando 30 aulas práticas, abrangendo desde fundamentos básicos até padrões avançados de arquitetura, performance e deploy.
            </p>
          </div>

          <div className="flex justify-between items-end pt-12">
            <div className="text-left">
              <p className="text-slate-400 dark:text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">Data de Emissão</p>
              <p className="text-slate-700 dark:text-slate-300 font-bold">{today}</p>
            </div>
            <div className="text-right">
              <div className="w-48 border-b-2 border-slate-200 dark:border-slate-700 mb-2"></div>
              <p className="text-slate-400 dark:text-slate-500 text-xs font-bold uppercase tracking-widest">Assinatura Digital</p>
              <p className="text-blue-600 font-black tracking-tighter italic">Premium React Team</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex items-center gap-4 text-slate-400 dark:text-slate-600 text-sm font-medium">
        <Share2 size={16} />
        <span>Partilhe sua conquista nas redes sociais!</span>
      </div>
    </div>
  );
};

export default Certificate;
