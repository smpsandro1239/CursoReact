import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  PlayCircle,
  ArrowRight,
  Zap,
  Target,
  Award,
  Star,
  Sun,
  Moon,
  ChevronDown,
  CheckCircle2,
  Code2,
  Cpu,
  Globe,
  Layout,
  Layers,
  ShieldCheck,
  Clock,
  BarChart3,
  ExternalLink,
  Library
} from 'lucide-react';
import { lessons } from '../data/lessons';
import { useTheme } from '../context/ThemeContext';

const LandingPage = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [completedCount, setCompletedCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('Todas');

  const categories = ['Todas', ...new Set(lessons.map(l => l.category))];
  const totalMinutes = lessons.reduce((acc, l) => acc + parseInt(l.readingTime), 0);
  const totalHours = (totalMinutes / 60).toFixed(1);

  const [practiceCount, setPracticeCount] = useState(0);

  useEffect(() => {
    const savedPractice = localStorage.getItem('practiceDone');
    if (savedPractice) {
      setPracticeCount(JSON.parse(savedPractice).length);
    }
  }, []);

  const completedLessonsIds = JSON.parse(localStorage.getItem('completedLessons') || '[]');
  const remainingMinutes = lessons.reduce((acc, l) => {
    if (!completedLessonsIds.includes(l.id)) {
      return acc + parseInt(l.readingTime);
    }
    return acc;
  }, 0);

  const allResources = lessons.reduce((acc, l) => {
    if (l.resources) {
      l.resources.forEach(r => {
        if (!acc.find(item => item.url === r.url)) {
          acc.push({ ...r, lessonTitle: l.title });
        }
      });
    }
    return acc;
  }, []);

  const exportAllNotes = () => {
    const savedNotes = JSON.parse(localStorage.getItem('lessonNotes') || '{}');
    let content = "# Minhas Notas do Curso Premium React\n\n";

    lessons.forEach(l => {
      if (savedNotes[l.id]) {
        content += `## ${l.title}\n${savedNotes[l.id]}\n\n---\n\n`;
      }
    });

    const blob = new Blob([content], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'notas-react-premium.md';
    a.click();
    URL.revokeObjectURL(url);
  };

  useEffect(() => {
    const saved = localStorage.getItem('completedLessons');
    if (saved) {
      setCompletedCount(JSON.parse(saved).length);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* Navbar */}
      <nav className="border-b border-slate-100 dark:border-slate-900 py-4 px-6 sticky top-0 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md z-30">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-black text-blue-600 tracking-tighter">PREMIUM REACT</div>
          <div className="flex items-center gap-6">
            <button onClick={toggleDarkMode} className="p-2 text-slate-400 hover:text-blue-600 transition-colors">
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <Link
              to="/lesson/1"
              className="hidden sm:block text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors"
            >
              Acessar Aulas
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="py-20 px-6 relative overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[60%] bg-blue-50 dark:bg-blue-900/10 rounded-full blur-3xl opacity-50 -z-10"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[30%] h-[50%] bg-emerald-50 dark:bg-emerald-900/10 rounded-full blur-3xl opacity-50 -z-10"></div>

        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 text-sm font-black uppercase tracking-widest mb-8 border border-blue-100 dark:border-blue-900/30 shadow-sm">
            <Star size={16} fill="currentColor" />
            Vagas Abertas - Turma 2024
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tight leading-[0.9] dark:text-white">
            Domine o <span className="text-blue-600">React</span> do Zero ao <span className="text-emerald-500">Premium</span>.
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-slate-500 dark:text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed">
            Aprenda a construir interfaces modernas, rápidas e escaláveis com o framework mais desejado do mercado. 30 aulas práticas focadas em resultados.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8 mb-12">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center text-blue-600">
                <Clock size={24} />
              </div>
              <div className="text-left">
                <div className="text-sm font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest leading-none mb-1">Duração Total</div>
                <div className="text-xl font-black dark:text-white leading-none">~{totalHours} Horas</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl flex items-center justify-center text-emerald-600">
                <BookOpen size={24} />
              </div>
              <div className="text-left">
                <div className="text-sm font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest leading-none mb-1">Conteúdo</div>
                <div className="text-xl font-black dark:text-white leading-none">30 Módulos</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-amber-50 dark:bg-amber-900/20 rounded-2xl flex items-center justify-center text-amber-600">
                <BarChart3 size={24} />
              </div>
              <div className="text-left">
                <div className="text-sm font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest leading-none mb-1">Nível</div>
                <div className="text-xl font-black dark:text-white leading-none">Zero ao Pro</div>
              </div>
            </div>
            {practiceCount > 0 && (
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-pink-50 dark:bg-pink-900/20 rounded-2xl flex items-center justify-center text-pink-600">
                  <Trophy size={24} />
                </div>
                <div className="text-left">
                  <div className="text-sm font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest leading-none mb-1">Desafios</div>
                  <div className="text-xl font-black dark:text-white leading-none">{practiceCount}/30</div>
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/lesson/1"
              className="w-full sm:w-auto bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-blue-700 hover:shadow-2xl hover:shadow-blue-200 dark:hover:shadow-none transition-all flex items-center justify-center gap-3 group"
            >
              Começar minha jornada <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <div className="flex items-center gap-3 text-slate-400 dark:text-slate-600 font-bold">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 bg-slate-200 dark:bg-slate-800 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="aluno" />
                  </div>
                ))}
              </div>
              <span className="text-sm">+1,200 alunos matriculados</span>
            </div>
          </div>
        </div>
      </header>

      {/* Progress Summary (Conditional) */}
      {completedCount > 0 && (
        <section className="max-w-7xl mx-auto px-6 -mt-10 mb-10 relative z-20">
          <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] shadow-2xl shadow-blue-200/20 dark:shadow-none border border-blue-100 dark:border-blue-900/30 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-grow w-full">
              <div className="flex justify-between items-end mb-3">
                <span className="text-xs font-black uppercase tracking-widest text-blue-600 dark:text-blue-400">Seu Progresso Atual</span>
                <div className="flex flex-col items-end">
                  <span className="text-2xl font-black text-slate-900 dark:text-white">{Math.round((completedCount / lessons.length) * 100)}%</span>
                  {remainingMinutes > 0 && (
                    <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-tighter">
                      Restam aprox. {remainingMinutes} min
                    </span>
                  )}
                </div>
              </div>
              <div className="w-full h-4 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-600 transition-all duration-1000 ease-out"
                  style={{ width: `${(completedCount / lessons.length) * 100}%` }}
                ></div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to={`/lesson/${completedCount + 1 > 30 ? 30 : completedCount + 1}`}
                className="shrink-0 bg-slate-900 dark:bg-blue-600 text-white px-8 py-4 rounded-2xl font-black hover:scale-105 transition-transform flex items-center gap-2 justify-center"
              >
                Continuar Estudando <PlayCircle size={20} />
              </Link>
              <div className="flex flex-wrap gap-3">
                {completedCount === lessons.length && (
                  <Link
                    to="/certificate"
                    className="shrink-0 bg-emerald-600 text-white px-8 py-4 rounded-2xl font-black hover:scale-105 transition-transform flex items-center gap-2 justify-center"
                  >
                    Ver Certificado <Award size={20} />
                  </Link>
                )}
                <button
                  onClick={exportAllNotes}
                  className="shrink-0 bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 text-slate-600 dark:text-slate-300 px-6 py-4 rounded-2xl font-black hover:bg-slate-50 transition-colors flex items-center gap-2 justify-center"
                >
                  Exportar Notas <Download size={20} />
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Stats */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <Zap className="text-amber-500" />, title: "Aprendizado Rápido", desc: "Metodologia direto ao ponto, sem enrolação." },
              { icon: <Target className="text-blue-500" />, title: "Focado no Mercado", desc: "Conteúdo atualizado com as demandas das Big Techs." },
              { icon: <Award className="text-emerald-500" />, title: "Certificado VIP", desc: "Conclua as 30 aulas e receba seu certificado." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl dark:hover:shadow-none transition-all hover:-translate-y-1">
                <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-2xl w-fit mb-6">{item.icon}</div>
                <h3 className="text-xl font-black mb-3 dark:text-white">{item.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 space-y-8">
              <h2 className="text-5xl font-black tracking-tight leading-tight dark:text-white">
                O que você vai <span className="text-blue-600">dominar</span> neste curso?
              </h2>
              <p className="text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                Nossa grade foi desenhada para levar você do absoluto zero até a criação de aplicações profissionais prontas para o mundo real.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: <Layout className="text-blue-500" />, text: "JSX e Componentização" },
                  { icon: <Cpu className="text-emerald-500" />, text: "Hooks de Estado e Efeito" },
                  { icon: <Layers className="text-amber-500" />, text: "Context API e Redux" },
                  { icon: <Globe className="text-indigo-500" />, text: "Consumo de APIs Reais" },
                  { icon: <ShieldCheck className="text-rose-500" />, text: "Segurança e Performance" },
                  { icon: <Code2 className="text-cyan-500" />, text: "TypeScript no React" },
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="p-2 bg-slate-50 dark:bg-slate-900 rounded-lg">{f.icon}</div>
                    <span className="font-bold dark:text-slate-300">{f.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 bg-blue-600 rounded-[3rem] p-12 text-white relative overflow-hidden shadow-2xl shadow-blue-500/20">
              <div className="absolute top-0 right-0 p-8 opacity-20">
                <Cpu size={120} />
              </div>
              <h3 className="text-3xl font-black mb-6">Metodologia 100% Prática</h3>
              <ul className="space-y-4">
                {[
                  "Mais de 20 mini-projetos ao longo das aulas",
                  "Desafios de código em todos os módulos",
                  "Projeto final de nível profissional",
                  "Acesso a recursos e links exclusivos"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={24} className="text-emerald-400 shrink-0" />
                    <span className="font-bold text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Lesson List */}
      <main className="max-w-7xl mx-auto py-24 px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight dark:text-white">Grade Curricular</h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 font-medium mb-8">O caminho passo a passo para sua liberdade profissional.</p>

          <div className="max-w-xl mx-auto relative mb-10">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="O que você quer aprender hoje? (ex: Hooks, Props, Deploy...)"
              className="w-full pl-12 pr-4 py-4 bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 rounded-2xl text-lg focus:outline-none focus:border-blue-500 transition-all shadow-sm dark:text-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all border ${
                  activeCategory === cat
                    ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-200 dark:shadow-none'
                    : 'bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:border-blue-200 dark:hover:border-blue-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lessons.filter(l => {
            const matchesSearch = l.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                 l.description.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = activeCategory === 'Todas' || l.category === activeCategory;
            return matchesSearch && matchesCategory;
          }).map((lesson) => (
            <Link
              key={lesson.id}
              to={`/lesson/${lesson.id}`}
              className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-900 hover:shadow-2xl dark:hover:shadow-none transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50/50 dark:bg-blue-900/10 rounded-bl-full -z-10 group-hover:bg-blue-600/5 transition-colors"></div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="bg-blue-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                    Aula {lesson.id}
                  </div>
                  <div className="bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                    {lesson.category}
                  </div>
                </div>
                <PlayCircle className="text-slate-300 dark:text-slate-700 group-hover:text-blue-500 transition-all" size={28} />
              </div>
              <h3 className="text-xl font-black mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight dark:text-white">
                {lesson.title}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed mb-6">
                {lesson.description}
              </p>
              <div className="flex items-center gap-4 mt-auto pt-4 border-t border-slate-50 dark:border-slate-800/50">
                <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                  <Clock size={12} /> {lesson.readingTime}
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                  <BarChart3 size={12} /> {lesson.difficulty}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* Resources Hub */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-3 bg-blue-600 rounded-2xl text-white">
              <Library size={32} />
            </div>
            <div>
              <h2 className="text-4xl font-black tracking-tight dark:text-white">Hub de Recursos</h2>
              <p className="text-slate-500 dark:text-slate-400 font-medium">Todas as referências e documentações do curso em um só lugar.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {allResources.map((res, i) => (
              <a
                key={i}
                href={res.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 hover:border-blue-500 transition-all group"
              >
                <div className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-3 truncate">{res.lessonTitle}</div>
                <div className="font-bold mb-4 dark:text-white group-hover:text-blue-600 transition-colors">{res.name}</div>
                <div className="flex items-center gap-2 text-xs text-slate-400 font-bold group-hover:text-slate-600 transition-colors">
                  Acessar Documentação <ExternalLink size={12} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-slate-50 dark:bg-slate-900/50 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-16 dark:text-white">Perguntas Frequentes</h2>
          <div className="space-y-6">
            {[
              { q: "Preciso saber JavaScript antes?", a: "Sim, recomendamos ter uma base sólida em JavaScript moderno (ES6+), pois o React é construído sobre ele." },
              { q: "O curso oferece certificado?", a: "Com certeza! Após completar as 30 aulas e passar nos mini-quizzes, você poderá baixar seu certificado VIP." },
              { q: "Quanto tempo dura o curso?", a: "O curso é self-paced. Se você fizer uma aula por dia, em um mês estará dominando o React!" },
              { q: "As aulas são atualizadas?", a: "Sim, o conteúdo utiliza as versões mais recentes do React (hooks) e ferramentas modernas como Vite e Tailwind." }
            ].map((faq, i) => (
              <div key={i} className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800">
                <h4 className="text-lg font-black mb-3 dark:text-white flex items-center justify-between">
                  {faq.q}
                  <ChevronDown size={18} className="text-slate-400" />
                </h4>
                <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 dark:bg-black py-20 text-center text-slate-400">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-2xl font-black text-white mb-6 tracking-tighter">PREMIUM REACT</div>
          <p className="max-w-md mx-auto mb-10 text-slate-500">Desenvolvido com paixão para transformar carreiras através da tecnologia.</p>
          <div className="flex justify-center gap-8 mb-12">
            {['Instagram', 'LinkedIn', 'YouTube', 'GitHub'].map(social => (
              <a key={social} href="#" className="font-bold text-sm hover:text-white transition-colors">{social}</a>
            ))}
          </div>
          <div className="pt-8 border-t border-slate-800 dark:border-slate-900 text-xs text-slate-600 font-medium">
            © 2024 PREMIUM REACT. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
