// Autor: Sandro Pereira (smpsandro1239)
// Projeto: CursoReact – Premium React: O Curso Definitivo (40 Aulas)

import React, { useRef, useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Award, Download, Home, User, Loader2, ShieldCheck, Star } from 'lucide-react';
import { lessons } from '../data/lessons';
import html2pdf from 'html2pdf.js';
import confetti from 'canvas-confetti';
import { useCourseStore } from '../store/useCourseStore';

const allLessons = lessons;

const Certificate = () => {
  const { completedLessons, xp, level } = useCourseStore();
  const isComplete = completedLessons.length === allLessons.length;
  const certificateRef = useRef();
  const [userName, setUserName] = useState(() => localStorage.getItem('studentName') || '');
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    if (userName) localStorage.setItem('studentName', userName);
  }, [userName]);

  if (!isComplete) return <Navigate to="/" />;

  const downloadPDF = () => {
    if (!userName.trim()) {
      alert('Introduz o teu nome!');
      return;
    }
    setIsGenerating(true);
    const element = certificateRef.current;
    const opt = {
      margin: 0,
      filename: `certificado-react-v2-${userName.toLowerCase().replace(/\s+/g, '-')}.pdf`,
      image: { type: 'jpeg', quality: 1.0 },
      html2canvas: { scale: 4, useCORS: true, letterRendering: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' }
    };

    html2pdf().set(opt).from(element).save().then(() => {
      setIsGenerating(false);
      confetti({ particleCount: 150, spread: 70 });
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4 flex flex-col items-center">
      <div className="max-w-5xl w-full flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
        <div className="space-y-2 text-center md:text-left">
           <Link to="/" className="text-slate-500 font-bold hover:text-blue-600 transition-colors flex items-center gap-2 mb-2"><Home size={18} /> Voltar</Link>
           <h2 className="text-3xl font-black text-slate-900 dark:text-white flex items-center gap-3"><ShieldCheck className="text-emerald-500" size={32} /> Mestria React 19</h2>
           <p className="text-slate-500 font-medium">Parabéns pelo Nível {level}. Gera o teu certificado elite.</p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="px-6 py-4 bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 rounded-2xl font-bold focus:border-blue-500 outline-none"
            placeholder="O teu nome"
          />
          <button
            disabled={isGenerating || !userName.trim()}
            onClick={downloadPDF}
            className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-black flex items-center gap-3 hover:bg-blue-700 transition-all disabled:opacity-50"
          >
            {isGenerating ? <Loader2 size={24} className="animate-spin" /> : <Download size={24} />}
            PDF
          </button>
        </div>
      </div>

      <div className="max-w-5xl w-full perspective-1000 shadow-2xl mb-12">
        <div ref={certificateRef} className="w-full bg-white text-slate-900 border-[24px] border-slate-900 p-20 relative overflow-hidden" style={{ aspectRatio: '1.414/1' }}>
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none flex flex-wrap gap-20 p-10 rotate-12 scale-150">
             {Array.from({ length: 40 }).map((_, i) => <Award key={i} size={80} />)}
          </div>

          <div className="relative h-full flex flex-col justify-between items-center text-center">
            <div className="space-y-6">
              <div className="w-24 h-24 bg-blue-600 rounded-3xl rotate-45 flex items-center justify-center text-white mx-auto"><Award size={48} className="-rotate-45" /></div>
              <h1 className="text-6xl font-black tracking-tighter uppercase">Certificado de Excelência</h1>
              <p className="text-blue-600 font-black tracking-[0.4em] uppercase text-sm">Premium React: Evolution 40 Aulas</p>
            </div>

            <div className="space-y-8 flex-grow flex flex-col justify-center">
              <p className="text-slate-400 font-serif italic text-2xl">Certificamos com distinção que</p>
              <h2 className="text-7xl font-black text-slate-900 font-serif">{userName || 'Aluno de Elite'}</h2>
              <p className="text-slate-600 text-xl font-medium max-w-3xl leading-relaxed">
                concluiu o currículo de 40 módulos de **React 19**, acumulando um total de **{xp} XP**. Especialista em performance, gestão de estado avançada, PWA e padrões profissionais.
              </p>
            </div>

            <div className="w-full flex justify-between items-end">
              <div className="text-left"><p className="text-slate-400 text-xs font-black uppercase mb-1">XP ACUMULADO</p><p className="text-slate-900 font-black text-lg">{xp} XP</p></div>
              <Star className="text-amber-400" fill="currentColor" size={32} />
              <div className="text-right"><p className="text-slate-400 text-xs font-black uppercase mb-1">AUTORIA</p><p className="font-serif italic text-2xl">Sandro Pereira</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
