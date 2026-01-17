import React, { useEffect, useState, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ChevronLeft,
  ChevronRight,
  Home,
  List,
  CheckCircle,
  Circle,
  Search,
  X,
  Code,
  BookOpen
} from 'lucide-react';
import { lessons } from '../data/lessons';

const LessonPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const lessonId = parseInt(id);
  const lesson = lessons.find((l) => l.id === lessonId);

  const [completedLessons, setCompletedLessons] = useState(() => {
    const saved = localStorage.getItem('completedLessons');
    return saved ? JSON.parse(saved) : [];
  });

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [lessonId]);

  useEffect(() => {
    localStorage.setItem('completedLessons', JSON.stringify(completedLessons));
  }, [completedLessons]);

  const filteredLessons = useMemo(() => {
    return lessons.filter(l =>
      l.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      l.id.toString() === searchTerm
    );
  }, [searchTerm]);

  if (!lesson) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h1 className="text-2xl font-bold mb-4">Aula não encontrada</h1>
        <Link to="/" className="bg-blue-600 text-white px-6 py-2 rounded-lg">Voltar para o início</Link>
      </div>
    );
  }

  const toggleComplete = (id) => {
    if (completedLessons.includes(id)) {
      setCompletedLessons(completedLessons.filter(lId => lId !== id));
    } else {
      setCompletedLessons([...completedLessons, id]);
    }
  };

  const prevLesson = lessonId > 1 ? lessonId - 1 : null;
  const nextLesson = lessonId < lessons.length ? lessonId + 1 : null;

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col md:flex-row font-sans text-slate-900">
      {/* Mobile Header */}
      <div className="md:hidden bg-white border-b border-slate-200 p-4 flex justify-between items-center sticky top-0 z-20">
        <Link to="/" className="font-black text-blue-600 text-xl tracking-tighter">PREMIUM REACT</Link>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 text-slate-600">
          {isSidebarOpen ? <X size={24} /> : <List size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-30 w-80 bg-white border-r border-slate-200 transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0 md:static md:block flex flex-col
      `}>
        <div className="p-6 border-b border-slate-100 hidden md:block">
          <Link to="/" className="flex items-center gap-2 text-blue-600 font-black text-2xl tracking-tighter">
            PREMIUM REACT
          </Link>
        </div>

        {/* Search */}
        <div className="p-4 border-b border-slate-50">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input
              type="text"
              placeholder="Buscar aula..."
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="flex-grow overflow-y-auto p-4 space-y-1 scrollbar-thin scrollbar-thumb-slate-200">
          {filteredLessons.map((l) => (
            <Link
              key={l.id}
              to={`/lesson/${l.id}`}
              onClick={() => setIsSidebarOpen(false)}
              className={`
                flex items-center gap-3 p-3 rounded-xl text-sm transition-all group
                ${l.id === lessonId
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 font-bold'
                  : 'text-slate-600 hover:bg-slate-50'}
              `}
            >
              <div className="shrink-0">
                {completedLessons.includes(l.id) ? (
                  <CheckCircle size={18} className={l.id === lessonId ? 'text-white' : 'text-emerald-500'} />
                ) : (
                  <Circle size={18} className={l.id === lessonId ? 'text-blue-200' : 'text-slate-300 group-hover:text-slate-400'} />
                )}
              </div>
              <span className="truncate">{l.title}</span>
            </Link>
          ))}
          {filteredLessons.length === 0 && (
            <div className="text-center py-10 text-slate-400 text-sm">Nenhuma aula encontrada</div>
          )}
        </div>

        <div className="p-6 border-t border-slate-100 bg-slate-50/50">
          <div className="flex justify-between items-end mb-2">
            <span className="text-[10px] text-slate-400 uppercase font-black tracking-widest">Progresso do Aluno</span>
            <span className="text-sm font-bold text-slate-700">{Math.round((completedLessons.length / lessons.length) * 100)}%</span>
          </div>
          <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-emerald-500 transition-all duration-500"
              style={{ width: `${(completedLessons.length / lessons.length) * 100}%` }}
            ></div>
          </div>
          <div className="text-[10px] text-slate-500 mt-2 text-center font-medium">
            {completedLessons.length} de {lessons.length} aulas concluídas
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-grow flex flex-col min-w-0 h-screen overflow-y-auto bg-white md:bg-[#f8fafc]">
        <main className="flex-grow p-4 md:p-12 lg:p-16">
          <div className="max-w-4xl mx-auto">
            {/* Lesson Header */}
            <div className="mb-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-black uppercase tracking-widest">
                  <BookOpen size={14} />
                  Aula {lessonId}
                </div>
                <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                  {lesson.title}
                </h1>
                <p className="text-lg text-slate-500 font-medium">{lesson.description}</p>
              </div>

              <button
                onClick={() => toggleComplete(lessonId)}
                className={`
                  flex items-center justify-center gap-2 px-6 py-3 rounded-2xl border-2 transition-all font-bold text-sm shrink-0
                  ${completedLessons.includes(lessonId)
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-700 shadow-sm'
                    : 'bg-white border-slate-200 text-slate-600 hover:border-blue-500 hover:text-blue-600 hover:shadow-md'}
                `}
              >
                {completedLessons.includes(lessonId) ? (
                  <><CheckCircle size={20} /> Concluída</>
                ) : (
                  <><Circle size={20} /> Concluir Aula</>
                )}
              </button>
            </div>

            {/* Content Card */}
            <div className="bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden mb-10">
              <div className="p-8 md:p-12">
                <div className="prose prose-slate prose-lg max-w-none
                  prose-headings:font-black prose-headings:tracking-tight
                  prose-a:text-blue-600 prose-code:text-pink-600 prose-code:bg-pink-50 prose-code:px-1 prose-code:rounded
                  text-slate-700 leading-relaxed">
                  <p className="whitespace-pre-wrap">{lesson.content}</p>
                </div>
              </div>

              {/* Practice Section */}
              <div className="bg-slate-900 p-8 md:p-12 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-blue-500 rounded-lg">
                    <Code size={24} />
                  </div>
                  <h2 className="text-xl font-black tracking-tight">Desafio Prático</h2>
                </div>
                <div className="bg-slate-800/50 border border-slate-700 p-6 rounded-2xl text-slate-300 font-medium leading-relaxed">
                  {lesson.practice}
                </div>
              </div>
            </div>

            {/* Bottom Navigation */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 py-10 border-t border-slate-200">
              {prevLesson ? (
                <Link
                  to={`/lesson/${prevLesson}`}
                  className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all font-bold shadow-sm"
                >
                  <ChevronLeft size={20} />
                  Aula Anterior
                </Link>
              ) : (
                <div className="hidden sm:block w-40"></div>
              )}

              <Link
                to="/"
                className="text-slate-400 hover:text-blue-600 font-bold transition-colors text-sm"
              >
                Voltar ao Início
              </Link>

              {nextLesson ? (
                <Link
                  to={`/lesson/${nextLesson}`}
                  className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-4 rounded-2xl bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200 transition-all font-bold"
                >
                  Próxima Aula
                  <ChevronRight size={20} />
                </Link>
              ) : (
                <Link
                  to="/"
                  className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-4 rounded-2xl bg-emerald-600 text-white hover:bg-emerald-700 transition-all font-bold shadow-lg shadow-emerald-100"
                >
                  Finalizar Curso
                </Link>
              )}
            </div>
          </div>
        </main>
      </div>

      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-20 md:hidden transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default LessonPage;
