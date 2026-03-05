// Autor: Sandro Pereira (smpsandro1239)
// Projeto: CursoReact – Premium React: O Curso Definitivo (40 Aulas)

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Book, ChevronLeft, Search, Home } from 'lucide-react';
import { glossaryTerms as glossary } from '../data/glossary';
import GamificationBar from '../components/GamificationBar';

const Glossary = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredGlossary = glossary.filter(item =>
    item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <GamificationBar />

      <div className="max-w-5xl mx-auto p-6 md:p-12">
        <header className="mb-12">
          <Link to="/" className="text-blue-600 font-bold flex items-center gap-2 mb-4 hover:translate-x-1 transition-transform">
            <ChevronLeft size={20} /> Voltar ao Início
          </Link>
          <h1 className="text-5xl font-black text-slate-900 dark:text-white tracking-tighter">Glossário Elite</h1>
          <p className="text-slate-500 dark:text-slate-400 font-medium mt-2">Termos técnicos explicados em Português de Portugal.</p>
        </header>

        <div className="relative mb-12">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          <input
            type="text"
            placeholder="O que procuras, Sandro?"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-16 pr-8 py-5 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[2rem] focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-lg shadow-xl shadow-slate-100 dark:shadow-none"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredGlossary.map((item, index) => (
            <div key={index} className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-50 dark:border-slate-800 shadow-sm hover:border-blue-500/30 transition-all group">
              <h3 className="text-xl font-black text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 transition-colors">
                {item.term}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                {item.definition}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Glossary;
