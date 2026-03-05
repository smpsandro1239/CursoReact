// Autor: Sandro Pereira (smpsandro1239)
// Projeto: CursoReact – Premium React: O Curso Definitivo (30 Aulas)

import React, { useRef, useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Award, Download, Home, Share2, User, Loader2, CheckCircle2, ShieldCheck, Star } from 'lucide-react';
import { lessons } from '../data/lessons';
import html2pdf from 'html2pdf.js';
import confetti from 'canvas-confetti';

const Certificate = () => {
  const completedLessons = JSON.parse(localStorage.getItem('completedLessons') || '[]');
  const isComplete = completedLessons.length === lessons.length;
  const certificateRef = useRef();
  const [userName, setUserName] = useState(() => localStorage.getItem('studentName') || '');
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    if (userName) {
      localStorage.setItem('studentName', userName);
    }
  }, [userName]);

  useEffect(() => {
    if (isComplete) {
      confetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 0.6 }
      });
    }
  }, [isComplete]);

  if (!isComplete) {
    return <Navigate to="/" />;
  }

  const today = new Date().toLocaleDateString('pt-PT', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });

  const downloadPDF = () => {
    if (!userName.trim()) {
      alert('Por favor, introduz o teu nome para o certificado.');
      return;
    }

    setIsGenerating(true);
    const element = certificateRef.current;

    // Configurações otimizadas para PDF de alta qualidade
    const opt = {
      margin: 0,
      filename: `certificado-react-${userName.toLowerCase().replace(/\s+/g, '-')}.pdf`,
      image: { type: 'jpeg', quality: 1.0 },
      html2canvas: {
        scale: 4,
        useCORS: true,
        letterRendering: true,
        backgroundColor: '#ffffff'
      },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' }
    };

    html2pdf().set(opt).from(element).save().then(() => {
      setIsGenerating(false);
      confetti({
        particleCount: 50,
        spread: 40,
        origin: { y: 0.9 }
      });
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4 flex flex-col items-center transition-colors duration-300">
      <div className="max-w-5xl w-full flex flex-col md:flex-row justify-between items-center gap-8 mb-12 print:hidden">
        <div className="space-y-2">
           <Link to="/" className="flex items-center gap-2 text-slate-500 dark:text-slate-400 font-bold hover:text-blue-600 transition-colors mb-2">
            <Home size={18} />
            Voltar ao Início
          </Link>
          <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter flex items-center gap-3">
            <ShieldCheck className="text-emerald-500" size={32} />
            Conquista Desbloqueada!
          </h2>
          <p className="text-slate-500 dark:text-slate-400 font-medium">Parabéns, Sandro. O teu esforço valeu a pena. Gera agora o teu certificado oficial.</p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
          <div className="relative w-full sm:w-64">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 rounded-[1.25rem] font-bold text-slate-700 dark:text-white focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all shadow-sm"
              placeholder="O teu nome completo"
            />
          </div>

          <button
            disabled={isGenerating || !userName.trim()}
            onClick={downloadPDF}
            className="w-full sm:w-auto bg-blue-600 text-white px-10 py-4 rounded-[1.25rem] font-black flex items-center justify-center gap-3 hover:bg-blue-700 hover:-translate-y-1 transition-all shadow-2xl shadow-blue-200 dark:shadow-none disabled:opacity-50 disabled:translate-y-0"
          >
            {isGenerating ? (
              <Loader2 size={24} className="animate-spin" />
            ) : (
              <Download size={24} />
            )}
            {isGenerating ? 'A Gerar Certificado...' : 'Descarregar PDF'}
          </button>
        </div>
      </div>

      {/* Certificate Design - Landscape A4 aspect ratio approx 1.414 */}
      <div className="max-w-5xl w-full perspective-1000 mb-12">
        <div
          ref={certificateRef}
          className="w-full bg-white text-slate-900 border-[24px] border-slate-900 p-20 relative overflow-hidden shadow-2xl print:shadow-none"
          style={{ aspectRatio: '1.414/1' }}
        >
          {/* Watermark patterns */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
             <div className="absolute top-0 left-0 w-full h-full flex flex-wrap gap-20 p-10 rotate-12 scale-150">
                {Array.from({ length: 40 }).map((_, i) => (
                  <Award key={i} size={80} />
                ))}
             </div>
          </div>

          {/* Decorative Corner Frames */}
          <div className="absolute top-0 left-0 w-40 h-40 border-t-8 border-l-8 border-blue-600 m-8"></div>
          <div className="absolute top-0 right-0 w-40 h-40 border-t-8 border-r-8 border-blue-600 m-8"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 border-b-8 border-l-8 border-blue-600 m-8"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 border-b-8 border-r-8 border-blue-600 m-8"></div>

          <div className="relative h-full flex flex-col justify-between items-center text-center">
            <div className="space-y-6">
              <div className="flex justify-center">
                <div className="w-24 h-24 bg-blue-600 rounded-3xl rotate-45 flex items-center justify-center text-white shadow-2xl">
                  <Award size={48} className="-rotate-45" />
                </div>
              </div>
              <div className="space-y-2">
                <h1 className="text-6xl font-black tracking-tighter uppercase text-slate-900">Certificado de Excelência</h1>
                <p className="text-blue-600 font-black tracking-[0.4em] uppercase text-sm">Premium React: O Curso Definitivo</p>
              </div>
            </div>

            <div className="space-y-8 flex-grow flex flex-col justify-center max-w-3xl">
              <p className="text-slate-400 font-serif italic text-2xl">Este documento certifica com distinção que</p>
              <h2 className="text-7xl font-black text-slate-900 py-4 font-serif">
                {userName || '[O Teu Nome Aqui]'}
              </h2>
              <p className="text-slate-600 text-xl font-medium leading-relaxed">
                concluiu com sucesso o currículo intensivo de **React 19**, totalizando 30 módulos de aprendizagem avançada, abrangendo desenvolvimento de interfaces modernas, gestão de estado complexa, otimização de performance e implementação de aplicações profissionais (PWA).
              </p>
            </div>

            <div className="w-full flex justify-between items-end pt-12">
              <div className="text-left space-y-2">
                <p className="text-slate-400 text-xs font-black uppercase tracking-widest">Data de Conclusão</p>
                <div className="h-0.5 w-40 bg-slate-200 mb-2"></div>
                <p className="text-slate-900 font-black text-lg">{today}</p>
              </div>

              <div className="flex items-center gap-6">
                 <div className="text-center">
                   <Star className="text-amber-400 mx-auto mb-2" fill="currentColor" size={32} />
                   <p className="text-[10px] font-black uppercase tracking-tighter">Gold Standard</p>
                 </div>
              </div>

              <div className="text-right space-y-2">
                <p className="text-slate-400 text-xs font-black uppercase tracking-widest">Assinatura do Instrutor</p>
                <div className="h-0.5 w-48 bg-slate-900 mb-2"></div>
                <p className="font-serif italic text-2xl text-slate-900">Sandro Pereira</p>
                <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Lead React Architect</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-8 text-slate-400 dark:text-slate-600 font-bold uppercase tracking-widest text-xs">
        <div className="flex items-center gap-2">
          <CheckCircle2 size={16} className="text-emerald-500" />
          30 Aulas Concluídas
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 size={16} className="text-emerald-500" />
          Projetos Práticos Validados
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 size={16} className="text-emerald-500" />
          Quizzes de Elite Superados
        </div>
      </div>
    </div>
  );
};

export default Certificate;
