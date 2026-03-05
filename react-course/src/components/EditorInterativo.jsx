// Autor: Sandro Pereira (smpsandro1239)
// Projeto: CursoReact – Premium React: O Curso Definitivo (40 Aulas)

import React, { useState, useEffect } from 'react';
import { Play, RotateCcw, Copy, Layout, CheckCircle } from 'lucide-react';

const EditorInterativo = ({ initialCode, onValidate }) => {
  const [code, setCode] = useState(initialCode || '');
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);

  const runCode = () => {
    setIsRunning(true);
    setOutput('A executar código...');

    // Simulação de execução e validação
    setTimeout(() => {
      setOutput('Resultado: Sucesso! 🎉\nO teu código passou em todos os testes.');
      setIsRunning(false);
      if (onValidate) onValidate(true);
    }, 1000);
  };

  return (
    <div className="bg-slate-900 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
      <div className="bg-white/5 px-6 py-4 flex items-center justify-between border-b border-white/5">
         <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-amber-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500/50"></div>
         </div>
         <div className="flex gap-4">
            <button onClick={() => setCode(initialCode)} className="text-slate-400 hover:text-white transition-colors">
               <RotateCcw size={18} />
            </button>
            <button
              onClick={runCode}
              disabled={isRunning}
              className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-xl font-black hover:bg-blue-700 transition-all disabled:opacity-50"
            >
               <Play size={16} fill="currentColor" /> EXECUTAR
            </button>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2">
         <div className="p-6 border-b lg:border-b-0 lg:border-r border-white/5">
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-80 bg-transparent text-blue-300 font-mono text-sm focus:outline-none resize-none"
              spellCheck="false"
            />
         </div>
         <div className="p-6 bg-black/30">
            <div className="flex items-center gap-2 text-slate-500 text-[10px] font-black uppercase tracking-widest mb-4">
               <Layout size={12} /> Consola de Output
            </div>
            <pre className="text-emerald-400 font-mono text-sm whitespace-pre-wrap leading-relaxed">
              {output || '> Aguardando execução...'}
            </pre>
         </div>
      </div>
    </div>
  );
};

export default EditorInterativo;
