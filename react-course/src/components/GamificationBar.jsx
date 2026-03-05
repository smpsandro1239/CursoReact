// Autor: Sandro Pereira (smpsandro1239)
// Projeto: CursoReact – Premium React: O Curso Definitivo (40 Aulas)

import React from 'react';
import { Zap, Shield, Trophy, Flame } from 'lucide-react';
import { useCourseStore } from '../store/useCourseStore';

const GamificationBar = () => {
  const { xp, level, streak } = useCourseStore();
  const progressToNextLevel = (xp % 1000) / 10;

  return (
    <div className="bg-slate-900 text-white px-6 py-3 flex items-center justify-between border-b border-white/10 sticky top-0 z-50">
       <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
             <div className="p-1.5 bg-blue-600 rounded-lg">
                <Shield size={16} />
             </div>
             <div>
                <p className="text-[9px] font-black uppercase text-blue-400 leading-none">Nível</p>
                <p className="text-sm font-black">{level}</p>
             </div>
          </div>

          <div className="hidden md:flex flex-col w-32">
             <div className="flex justify-between text-[9px] font-black uppercase text-slate-500 mb-1">
                <span>XP</span>
                <span>{xp % 1000}/1000</span>
             </div>
             <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                <div
                   className="h-full bg-blue-500 transition-all duration-1000"
                   style={{ width: `${progressToNextLevel}%` }}
                ></div>
             </div>
          </div>
       </div>

       <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-amber-500">
             <Flame size={20} fill="currentColor" />
             <span className="font-black text-sm">{streak} DIAS</span>
          </div>
          <div className="flex items-center gap-2 text-blue-400">
             <Zap size={20} fill="currentColor" />
             <span className="font-black text-sm">{xp} XP</span>
          </div>
       </div>
    </div>
  );
};

export default GamificationBar;
