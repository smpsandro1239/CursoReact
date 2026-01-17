import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, PlayCircle, ArrowRight, Zap, Target, Award, Star, Sun, Moon } from 'lucide-react';
import { lessons } from '../data/lessons';
import { useTheme } from '../context/ThemeContext';

const LandingPage = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

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

      {/* Lesson List */}
      <main className="max-w-7xl mx-auto py-24 px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight dark:text-white">Grade Curricular</h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 font-medium">O caminho passo a passo para sua liberdade profissional.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lessons.map((lesson) => (
            <Link
              key={lesson.id}
              to={`/lesson/${lesson.id}`}
              className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-900 hover:shadow-2xl dark:hover:shadow-none transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50/50 dark:bg-blue-900/10 rounded-bl-full -z-10 group-hover:bg-blue-600/5 transition-colors"></div>
              <div className="flex items-center justify-between mb-6">
                <div className="bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                  Aula {lesson.id}
                </div>
                <PlayCircle className="text-slate-300 dark:text-slate-700 group-hover:text-blue-500 transition-all" size={28} />
              </div>
              <h3 className="text-xl font-black mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight dark:text-white">
                {lesson.title}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed">
                {lesson.description}
              </p>
            </Link>
          ))}
        </div>
      </main>

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
