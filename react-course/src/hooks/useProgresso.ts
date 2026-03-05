// Autor: Sandro Pereira (smpsandro1239)
// Projeto: CursoReact – Premium React: O Curso Definitivo (40 Aulas)

import { useCourseStore } from '../store/useCourseStore';

export const useProgresso = () => {
  const { xp, level, streak, completedLessons, addXP } = useCourseStore();

  const xpParaProximoNivel = level * 1000;
  const progressoNivel = (xp % 1000) / 10; // percentagem 0-100

  const calcularXPBadge = () => {
    if (level < 10) return 'Iniciante';
    if (level < 25) return 'Explorador';
    return 'Mestre React';
  };

  return {
    xp,
    level,
    streak,
    completedCount: completedLessons.length,
    progressoNivel,
    titulo: calcularXPBadge(),
    addXP
  };
};
