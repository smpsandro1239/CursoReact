import React, { useEffect, useState, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
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
  BookOpen,
  Sun,
  Moon,
  ExternalLink,
  Award,
  HelpCircle,
  Check,
  AlertCircle
} from 'lucide-react';
import { lessons } from '../data/lessons';
import { useTheme } from '../context/ThemeContext';

const LessonPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const lessonId = parseInt(id);
  const lesson = lessons.find((l) => l.id === lessonId);
  const { isDarkMode, toggleDarkMode } = useTheme();

  const [completedLessons, setCompletedLessons] = useState(() => {
    const saved = localStorage.getItem('completedLessons');
    return saved ? JSON.parse(saved) : [];
  });

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [quizAnswer, setQuizAnswer] = useState(null);
  const [showQuizResult, setShowQuizResult] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setQuizAnswer(null);
    setShowQuizResult(false);
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
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-slate-900">
        <h1 className="text-2xl font-bold mb-4 dark:text-white">Aula não encontrada</h1>
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
  const isAllComplete = completedLessons.length === lessons.length;

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-slate-950 flex flex-col md:flex-row font-sans text-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* Mobile Header */}
      <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 p-4 flex justify-between items-center sticky top-0 z-20">
        <Link to="/" className="font-black text-blue-600 text-xl tracking-tighter">PREMIUM REACT</Link>
        <div className="flex items-center gap-2">
          <button onClick={toggleDarkMode} className="p-2 text-slate-600 dark:text-slate-400">
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 text-slate-600 dark:text-slate-400">
            {isSidebarOpen ? <X size={24} /> : <List size={24} />}
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-30 w-80 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0 md:static md:block flex flex-col
      `}>
        <div className="p-6 border-b border-slate-100 dark:border-slate-800 hidden md:flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-blue-600 font-black text-2xl tracking-tighter">
            PREMIUM REACT
          </Link>
          <button onClick={toggleDarkMode} className="p-2 text-slate-400 hover:text-blue-600 transition-colors">
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Search */}
        <div className="p-4 border-b border-slate-50 dark:border-slate-800/50">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input
              type="text"
              placeholder="Buscar aula..."
              className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all dark:text-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="flex-grow overflow-y-auto p-4 space-y-1 scrollbar-thin scrollbar-thumb-slate-200 dark:scrollbar-thumb-slate-700">
          {filteredLessons.map((l) => (
            <Link
              key={l.id}
              to={`/lesson/${l.id}`}
              onClick={() => setIsSidebarOpen(false)}
              className={`
                flex items-center gap-3 p-3 rounded-xl text-sm transition-all group
                ${l.id === lessonId
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 dark:shadow-none font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'}
              `}
            >
              <div className="shrink-0">
                {completedLessons.includes(l.id) ? (
                  <CheckCircle size={18} className={l.id === lessonId ? 'text-white' : 'text-emerald-500'} />
                ) : (
                  <Circle size={18} className={l.id === lessonId ? 'text-blue-200' : 'text-slate-300 dark:text-slate-600 group-hover:text-slate-400'} />
                )}
              </div>
              <span className="truncate">{l.title}</span>
            </Link>
          ))}
          {filteredLessons.length === 0 && (
            <div className="text-center py-10 text-slate-400 text-sm">Nenhuma aula encontrada</div>
          )}
        </div>

        <div className="p-6 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
          {isAllComplete ? (
            <Link
              to="/certificate"
              className="w-full flex items-center justify-center gap-2 bg-emerald-600 text-white py-3 rounded-xl font-bold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200 dark:shadow-none mb-4"
            >
              <Award size={18} />
              Ver Certificado
            </Link>
          ) : null}
          <div className="flex justify-between items-end mb-2">
            <span className="text-[10px] text-slate-400 dark:text-slate-500 uppercase font-black tracking-widest">Progresso do Aluno</span>
            <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{Math.round((completedLessons.length / lessons.length) * 100)}%</span>
          </div>
          <div className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-emerald-500 transition-all duration-500"
              style={{ width: `${(completedLessons.length / lessons.length) * 100}%` }}
            ></div>
          </div>
          <div className="text-[10px] text-slate-500 dark:text-slate-500 mt-2 text-center font-medium">
            {completedLessons.length} de {lessons.length} aulas concluídas
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-grow flex flex-col min-w-0 h-screen overflow-y-auto bg-white dark:bg-slate-950 md:bg-[#f8fafc] dark:md:bg-slate-950">
        <main className="flex-grow p-4 md:p-12 lg:p-16">
          <div className="max-w-4xl mx-auto">
            {/* Lesson Header */}
            <div className="mb-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-black uppercase tracking-widest">
                  <BookOpen size={14} />
                  Aula {lessonId}
                </div>
                <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                  {lesson.title}
                </h1>
                <p className="text-lg text-slate-500 dark:text-slate-400 font-medium">{lesson.description}</p>
              </div>

              <button
                onClick={() => toggleComplete(lessonId)}
                className={`
                  flex items-center justify-center gap-2 px-6 py-3 rounded-2xl border-2 transition-all font-bold text-sm shrink-0
                  ${completedLessons.includes(lessonId)
                    ? 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 shadow-sm'
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-md'}
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
            <div className="bg-white dark:bg-slate-900 rounded-[2rem] shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 overflow-hidden mb-10 transition-colors">
              <div className="p-8 md:p-12">
                <div className="prose prose-slate dark:prose-invert prose-lg max-w-none
                  prose-headings:font-black prose-headings:tracking-tight
                  prose-a:text-blue-600
                  prose-code:text-pink-600 dark:prose-code:text-pink-400
                  prose-code:bg-pink-50 dark:prose-code:bg-pink-900/20
                  prose-code:px-1 prose-code:rounded
                  prose-pre:bg-slate-900 dark:prose-pre:bg-black
                  text-slate-700 dark:text-slate-300 leading-relaxed">
                  <ReactMarkdown>{lesson.content}</ReactMarkdown>
                </div>

                {lesson.resources && (
                  <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-800">
                    <h3 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-4">Recursos Adicionais</h3>
                    <div className="flex flex-wrap gap-3">
                      {lesson.resources.map((res, i) => (
                        <a
                          key={i}
                          href={res.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-slate-50 dark:bg-slate-800 rounded-xl text-sm font-bold text-slate-600 dark:text-slate-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-all border border-slate-100 dark:border-slate-700"
                        >
                          {res.name}
                          <ExternalLink size={14} />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Practice Section */}
              <div className="bg-slate-900 dark:bg-black p-8 md:p-12 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-blue-500 rounded-lg">
                    <Code size={24} />
                  </div>
                  <h2 className="text-xl font-black tracking-tight">Desafio Prático</h2>
                </div>
                <div className="bg-slate-800/50 dark:bg-slate-900/50 border border-slate-700 dark:border-slate-800 p-6 rounded-2xl text-slate-300 font-medium leading-relaxed">
                  {lesson.practice}
                </div>
              </div>

              {/* Quiz Section */}
              {lesson.quiz && (
                <div className="p-8 md:p-12 border-t border-slate-100 dark:border-slate-800 bg-blue-50/30 dark:bg-blue-900/10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-lg">
                      <HelpCircle size={24} />
                    </div>
                    <h2 className="text-xl font-black tracking-tight dark:text-white text-slate-900">Quiz Rápido</h2>
                  </div>

                  <div className="space-y-6">
                    <p className="text-lg font-bold text-slate-800 dark:text-slate-200">{lesson.quiz.question}</p>

                    <div className="grid gap-3">
                      {lesson.quiz.options.map((option, index) => (
                        <button
                          key={index}
                          onClick={() => !showQuizResult && setQuizAnswer(index)}
                          className={`
                            w-full p-4 rounded-xl border-2 text-left transition-all font-medium
                            ${showQuizResult
                              ? index === lesson.quiz.correctAnswer
                                ? 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-500 text-emerald-700 dark:text-emerald-400'
                                : index === quizAnswer
                                  ? 'bg-red-50 dark:bg-red-900/20 border-red-500 text-red-700 dark:text-red-400'
                                  : 'bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 opacity-50'
                              : quizAnswer === index
                                ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-500 text-blue-700 dark:text-blue-400'
                                : 'bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-800 text-slate-600 dark:text-slate-400'
                            }
                          `}
                        >
                          <div className="flex items-center justify-between">
                            <span>{option}</span>
                            {showQuizResult && index === lesson.quiz.correctAnswer && <Check size={18} />}
                          </div>
                        </button>
                      ))}
                    </div>

                    {!showQuizResult ? (
                      <button
                        disabled={quizAnswer === null}
                        onClick={() => setShowQuizResult(true)}
                        className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white rounded-xl font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 transition-all"
                      >
                        Verificar Resposta
                      </button>
                    ) : (
                      <div className={`
                        p-4 rounded-xl flex items-start gap-3
                        ${quizAnswer === lesson.quiz.correctAnswer
                          ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400'
                          : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'}
                      `}>
                        {quizAnswer === lesson.quiz.correctAnswer ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
                        <div>
                          <p className="font-bold">
                            {quizAnswer === lesson.quiz.correctAnswer ? 'Excelente! Você acertou.' : 'Não foi dessa vez.'}
                          </p>
                          <p className="text-sm opacity-90">
                            {quizAnswer === lesson.quiz.correctAnswer
                              ? 'Continue assim e domine o React!'
                              : `A resposta correta é: ${lesson.quiz.options[lesson.quiz.correctAnswer]}`}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Navigation */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 py-10 border-t border-slate-200 dark:border-slate-800">
              {prevLesson ? (
                <Link
                  to={`/lesson/${prevLesson}`}
                  className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-300 transition-all font-bold shadow-sm"
                >
                  <ChevronLeft size={20} />
                  Aula Anterior
                </Link>
              ) : (
                <div className="hidden sm:block w-40"></div>
              )}

              <Link
                to="/"
                className="text-slate-400 dark:text-slate-600 hover:text-blue-600 dark:hover:text-blue-400 font-bold transition-colors text-sm"
              >
                Voltar ao Início
              </Link>

              {nextLesson ? (
                <Link
                  to={`/lesson/${nextLesson}`}
                  className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-4 rounded-2xl bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200 dark:shadow-none transition-all font-bold"
                >
                  Próxima Aula
                  <ChevronRight size={20} />
                </Link>
              ) : (
                <Link
                  to="/"
                  className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-4 rounded-2xl bg-emerald-600 text-white hover:bg-emerald-700 transition-all font-bold shadow-lg shadow-emerald-100 dark:shadow-none"
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
