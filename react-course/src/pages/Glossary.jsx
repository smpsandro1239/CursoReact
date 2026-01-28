import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Book, ChevronLeft, Search, Home } from 'lucide-react';
import { glossaryTerms } from '../data/glossary';

const Glossary = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTerms = glossaryTerms.filter(item =>
    item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-6 transition-colors">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors font-bold mb-8">
            <ChevronLeft size={20} />
            Voltar ao Início
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-blue-600 rounded-3xl text-white shadow-xl">
              <Book size={32} />
            </div>
            <div>
              <h1 className="text-4xl font-black tracking-tight dark:text-white">Glossário Técnico</h1>
              <p className="text-slate-500 dark:text-slate-400 font-medium">Os termos essenciais do ecossistema React explicados de forma simples.</p>
            </div>
          </div>

          <div className="relative max-w-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Pesquisar termo ou definição..."
              className="w-full pl-12 pr-4 py-4 bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 rounded-2xl text-lg focus:outline-none focus:border-blue-500 transition-all shadow-sm dark:text-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </header>

        <div className="grid gap-6">
          {filteredTerms.length > 0 ? (
            filteredTerms.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-black text-blue-600 dark:text-blue-400">{item.term}</h3>
                  <span className="text-[10px] font-black uppercase tracking-widest bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                  {item.definition}
                </p>
              </div>
            ))
          ) : (
            <div className="text-center py-20 bg-slate-100 dark:bg-slate-900/50 rounded-[2.5rem] border-2 border-dashed border-slate-200 dark:border-slate-800 text-slate-400">
              Nenhum termo encontrado para "{searchTerm}"
            </div>
          )}
        </div>

        <footer className="mt-20 text-center">
          <Link to="/lesson/1" className="inline-flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-2xl font-black hover:scale-105 transition-transform">
            <Home size={20} />
            Começar a Aprender
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default Glossary;
