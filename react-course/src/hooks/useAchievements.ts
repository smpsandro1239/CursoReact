// Autor: Sandro Pereira (smpsandro1239)
// Projeto: CursoReact – Premium React: O Curso Definitivo (40 Aulas)

import { useCourseStore } from '../store/useCourseStore';

export const useAchievements = () => {
  const { completedLessons, xp, quizScores } = useCourseStore();

  const achievements = [
    {
      id: 'hello-world',
      title: 'Hello World',
      description: 'Completar a primeira aula',
      condition: completedLessons.length >= 1,
      icon: '🚀'
    },
    {
      id: 'perfeccionista',
      title: 'Perfeccionista',
      description: 'Conseguir 100% num quiz',
      condition: Object.values(quizScores).some(score => score === 100),
      icon: '💎'
    },
    {
      id: 'maratonista',
      title: 'Maratonista',
      description: 'Completar 10 aulas',
      condition: completedLessons.length >= 10,
      icon: '🏃'
    }
  ];

  return {
    unlocked: achievements.filter(a => a.condition),
    locked: achievements.filter(a => !a.condition),
    all: achievements
  };
};
