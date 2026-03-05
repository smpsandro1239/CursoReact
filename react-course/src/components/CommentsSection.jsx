// Autor: Sandro Pereira (smpsandro1239)
// Projeto: CursoReact – Premium React: O Curso Definitivo (40 Aulas)

import React, { useState, useEffect } from 'react';
import { MessageSquare, Send, User, Trash2, Reply } from 'lucide-react';
import { useCourseStore } from '../store/useCourseStore';

const CommentsSection = ({ lessonId }) => {
  const { addXP } = useCourseStore();
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    const savedComments = JSON.parse(localStorage.getItem('lessonComments_v2') || '{}');
    setComments(savedComments[lessonId] || []);
  }, [lessonId]);

  const addComment = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment = {
      id: Date.now(),
      text: newComment,
      author: 'Sandro Pereira (Dúvida)',
      date: new Date().toLocaleDateString('pt-PT'),
    };

    const savedComments = JSON.parse(localStorage.getItem('lessonComments_v2') || '{}');
    const updated = [comment, ...(savedComments[lessonId] || [])];
    savedComments[lessonId] = updated;

    localStorage.setItem('lessonComments_v2', JSON.stringify(savedComments));
    setComments(updated);
    setNewComment('');
    addXP(10); // Bónus participação
  };

  return (
    <div className="space-y-6">
      <form onSubmit={addComment} className="relative group">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Pergunta aqui, Sandro..."
          className="w-full p-4 bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 rounded-2xl text-xs focus:outline-none focus:border-blue-500 transition-all min-h-[80px]"
        />
        <button type="submit" className="absolute bottom-3 right-3 bg-blue-600 text-white p-2 rounded-xl hover:bg-blue-700 transition-all">
          <Send size={14} />
        </button>
      </form>

      <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 scrollbar-hide">
        {comments.map((c) => (
          <div key={c.id} className="p-4 bg-slate-50 dark:bg-slate-800/30 rounded-2xl border border-slate-100 dark:border-slate-800">
             <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-[10px] text-blue-600 font-bold">SP</div>
                <span className="text-[10px] font-black text-slate-700 dark:text-white uppercase">{c.author}</span>
             </div>
             <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{c.text}</p>
          </div>
        ))}
        {comments.length === 0 && <p className="text-center py-8 text-slate-400 text-xs italic">Ainda sem dúvidas nesta aula.</p>}
      </div>
    </div>
  );
};

export default CommentsSection;
