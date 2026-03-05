// Autor: Sandro Pereira (smpsandro1239)
// Projeto: CursoReact – Premium React: O Curso Definitivo (40 Aulas)

import { additionalLessons } from './newLessons';

const lessonsList = [
  {
    id: 1,
    videoUrl: "https://www.youtube.com/embed/SqcY0GlETPk",
    category: "Fundamentos",
    difficulty: "Iniciante",
    readingTime: "60 min",
    title: "Aula 1: Introdução ao JavaScript Moderno",
    description: "Compreender o papel do JavaScript e dar os primeiros passos na consola.",
    proTip: "Os erros são os teus melhores professores.",
    content: "### Bem-vindo!\nNesta aula vais aprender os fundamentos do JS moderno.",
    practice: "Cria um programa na consola que exiba o teu nome.",
    playground: { html: "<h1>Olá</h1>", js: "console.log('Sandro Pereira');" },
    resources: [{ name: "MDN", url: "https://developer.mozilla.org" }],
    tags: ["JS"],
    dataAtualizacao: "2026-03-05"
  }
];

// Gerar aulas intermédias (2-30)
for (let i = 2; i <= 30; i++) {
  lessonsList.push({
    id: i,
    category: i < 10 ? "Fundamentos" : i < 20 ? "Hooks" : "Performance",
    difficulty: i < 15 ? "Iniciante" : "Intermédio",
    readingTime: "60 min",
    title: `Aula ${i}: Módulo em Evolução`,
    description: `Continuando a jornada pedagógica do módulo ${i}. Foco em conceitos fundamentais e práticas recomendadas.`,
    content: `### Conteúdo Aula ${i}\nPor Sandro Pereira.\n\nNesta lição exploramos a implementação de padrões modernos em React 19.`,
    tags: ["React"],
    dataAtualizacao: "2026-03-05"
  });
}

// Concatenar as novas aulas premium (31-40)
export const lessons = [...lessonsList, ...additionalLessons];
