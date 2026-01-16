import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, PlayCircle, ArrowRight } from 'lucide-react';
import { lessons } from '../data/lessons';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-blue-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Curso Completo de React</h1>
          <p className="text-xl mb-8 text-blue-100">
            Aprenda do zero ao avançado com 30 aulas práticas e diretas ao ponto.
          </p>
          <Link
            to="/lesson/1"
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
          >
            Começar Agora <ArrowRight size={20} />
          </Link>
        </div>
      </header>

      {/* Course Stats */}
      <section className="py-12 bg-white shadow-sm">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600">30</div>
            <div className="text-gray-600 font-medium">Aulas</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600">React 19</div>
            <div className="text-gray-600 font-medium">Tecnologia Atualizada</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600">100%</div>
            <div className="text-gray-600 font-medium">Prático</div>
          </div>
        </div>
      </section>

      {/* Lesson List */}
      <main className="max-w-5xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">Conteúdo do Curso</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons.map((lesson) => (
            <Link
              key={lesson.id}
              to={`/lesson/${lesson.id}`}
              className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded">
                  Aula {lesson.id}
                </span>
                <PlayCircle className="text-gray-400 group-hover:text-blue-500 transition-colors" />
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors">
                {lesson.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {lesson.description}
              </p>
            </Link>
          ))}
        </div>
      </main>

      <footer className="bg-gray-100 py-8 text-center text-gray-500 text-sm border-t border-gray-200 mt-12">
        <p>© 2024 Curso de React. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
