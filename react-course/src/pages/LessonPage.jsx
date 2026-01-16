import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Home, List, CheckCircle, Circle } from 'lucide-react';
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [lessonId]);

  useEffect(() => {
    localStorage.setItem('completedLessons', JSON.stringify(completedLessons));
  }, [completedLessons]);

  if (!lesson) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Aula não encontrada</h1>
        <Link to="/" className="text-blue-600 hover:underline">Voltar para o início</Link>
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
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      {/* Mobile Header */}
      <div className="md:hidden bg-white border-b border-gray-200 p-4 flex justify-between items-center sticky top-0 z-20">
        <Link to="/" className="font-bold text-blue-600">Curso React</Link>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2">
          <List size={24} />
        </button>
      </div>

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-30 w-72 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0 md:static md:block
      `}>
        <div className="h-full flex flex-col">
          <div className="p-6 border-b border-gray-100 hidden md:block">
            <Link to="/" className="flex items-center gap-2 text-blue-600 font-bold text-xl">
              <Home size={20} />
              Curso de React
            </Link>
          </div>
          <div className="flex-grow overflow-y-auto p-4 space-y-1">
            {lessons.map((l) => (
              <Link
                key={l.id}
                to={`/lesson/${l.id}`}
                onClick={() => setIsSidebarOpen(false)}
                className={`
                  flex items-center gap-3 p-3 rounded-lg text-sm transition-colors
                  ${l.id === lessonId
                    ? 'bg-blue-50 text-blue-700 font-bold'
                    : 'text-gray-600 hover:bg-gray-50'}
                `}
              >
                {completedLessons.includes(l.id) ? (
                  <CheckCircle size={16} className="text-green-500 shrink-0" />
                ) : (
                  <Circle size={16} className="text-gray-300 shrink-0" />
                )}
                <span className="truncate">{l.title}</span>
              </Link>
            ))}
          </div>
          <div className="p-4 border-t border-gray-100">
            <div className="text-xs text-gray-400 mb-2 uppercase font-bold tracking-wider">Seu Progresso</div>
            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-green-500 transition-all"
                style={{ width: `${(completedLessons.length / lessons.length) * 100}%` }}
              ></div>
            </div>
            <div className="text-xs text-gray-500 mt-1 text-right">
              {completedLessons.length}/{lessons.length} concluídas
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-grow flex flex-col min-w-0 h-screen overflow-y-auto">
        <main className="flex-grow p-6 md:p-12">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-blue-600 font-bold text-sm uppercase tracking-widest">Aula {lessonId}</span>
                <h1 className="text-3xl md:text-4xl font-black text-gray-900 mt-2">{lesson.title}</h1>
              </div>
              <button
                onClick={() => toggleComplete(lessonId)}
                className={`
                  flex items-center gap-2 px-4 py-2 rounded-full border transition-all font-medium text-sm
                  ${completedLessons.includes(lessonId)
                    ? 'bg-green-100 border-green-200 text-green-700'
                    : 'bg-white border-gray-200 text-gray-600 hover:border-blue-300 hover:text-blue-600'}
                `}
              >
                {completedLessons.includes(lessonId) ? (
                  <><CheckCircle size={18} /> Concluída</>
                ) : (
                  <><Circle size={18} /> Marcar como concluída</>
                )}
              </button>
            </div>

            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-10 mb-12">
              <div className="prose prose-blue max-w-none text-gray-700 leading-relaxed text-lg">
                <p className="whitespace-pre-wrap">{lesson.content}</p>
              </div>
            </div>

            {/* Navigation Footer Inside Content */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-200">
              {prevLesson ? (
                <Link
                  to={`/lesson/${prevLesson}`}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3 rounded-xl border border-gray-200 text-gray-700 hover:bg-white hover:shadow-sm transition-all font-bold"
                >
                  <ChevronLeft size={20} />
                  Anterior
                </Link>
              ) : (
                <div className="hidden sm:block"></div>
              )}

              {nextLesson ? (
                <Link
                  to={`/lesson/${nextLesson}`}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-10 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg transition-all font-bold"
                >
                  Próxima Aula
                  <ChevronRight size={20} />
                </Link>
              ) : (
                <Link
                  to="/"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-10 py-3 rounded-xl bg-green-600 text-white hover:bg-green-700 transition-all font-bold"
                >
                  Concluir Curso
                </Link>
              )}
            </div>
          </div>
        </main>
      </div>

      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default LessonPage;
