// Autor: Sandro Pereira (smpsandro1239)
// Projeto: CursoReact – Premium React: O Curso Definitivo (40 Aulas)

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CourseState {
  completedLessons: number[];
  xp: number;
  level: number;
  streak: number;
  lastAccess: string | null;
  quizScores: Record<number, number>;

  toggleComplete: (lessonId: number) => void;
  addXP: (amount: number) => void;
  updateQuizScore: (lessonId: number, score: number) => void;
  updateStreak: () => void;
}

export const useCourseStore = create<CourseState>()(
  persist(
    (set, get) => ({
      completedLessons: [],
      xp: 0,
      level: 1,
      streak: 0,
      lastAccess: null,
      quizScores: {},

      toggleComplete: (lessonId) => {
        const { completedLessons } = get();
        const isCompleted = completedLessons.includes(lessonId);
        set({
          completedLessons: isCompleted
            ? completedLessons.filter(id => id !== lessonId)
            : [...completedLessons, lessonId]
        });
      },

      addXP: (amount) => {
        const { xp, level } = get();
        const newXP = xp + amount;
        const newLevel = Math.floor(newXP / 1000) + 1;
        set({ xp: newXP, level: newLevel });
      },

      updateQuizScore: (lessonId, score) => {
        const { quizScores } = get();
        set({ quizScores: { ...quizScores, [lessonId]: score } });
      },

      updateStreak: () => {
        const today = new Date().toISOString().split('T')[0];
        const { lastAccess, streak } = get();

        if (lastAccess === today) return;

        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = yesterday.toISOString().split('T')[0];

        if (lastAccess === yesterdayStr) {
          set({ streak: streak + 1, lastAccess: today });
        } else {
          set({ streak: 1, lastAccess: today });
        }
      }
    }),
    {
      name: 'premium-react-v2-storage'
    }
  )
);
