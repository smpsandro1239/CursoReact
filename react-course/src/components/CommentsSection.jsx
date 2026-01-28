import React, { useState, useEffect } from 'react';
import { MessageSquare, Send, User, Trash2, Reply } from 'lucide-react';

const CommentsSection = ({ lessonId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    const savedComments = JSON.parse(localStorage.getItem('lessonComments') || '{}');
    setComments(savedComments[lessonId] || []);
  }, [lessonId]);

  const addComment = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment = {
      id: Date.now(),
      text: newComment,
      author: 'Aluno Premium',
      date: new Date().toLocaleDateString('pt-PT', { day: 'numeric', month: 'long', year: 'numeric' }),
      replies: []
    };

    const savedComments = JSON.parse(localStorage.getItem('lessonComments') || '{}');
    const updatedLessonComments = [comment, ...(savedComments[lessonId] || [])];
    savedComments[lessonId] = updatedLessonComments;

    localStorage.setItem('lessonComments', JSON.stringify(savedComments));
    setComments(updatedLessonComments);
    setNewComment('');
  };

  const deleteComment = (id) => {
    const savedComments = JSON.parse(localStorage.getItem('lessonComments') || '{}');
    const updatedLessonComments = (savedComments[lessonId] || []).filter(c => c.id !== id);
    savedComments[lessonId] = updatedLessonComments;

    localStorage.setItem('lessonComments', JSON.stringify(savedComments));
    setComments(updatedLessonComments);
  };

  return (
    <div className="mt-16 pt-12 border-t border-slate-100 dark:border-slate-800">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 rounded-lg">
          <MessageSquare size={24} />
        </div>
        <h2 className="text-xl font-black tracking-tight dark:text-white text-slate-900">Comentários e Dúvidas</h2>
      </div>

      <form onSubmit={addComment} className="mb-10">
        <div className="relative group">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Tens alguma dúvida sobre esta aula? Pergunta aqui..."
            className="w-full p-4 bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 rounded-2xl text-sm focus:outline-none focus:border-indigo-500 transition-all dark:text-white min-h-[100px] shadow-sm"
          />
          <button
            type="submit"
            disabled={!newComment.trim()}
            className="absolute bottom-4 right-4 bg-indigo-600 text-white p-2 rounded-xl disabled:opacity-50 hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 dark:shadow-none"
          >
            <Send size={18} />
          </button>
        </div>
      </form>

      <div className="space-y-6">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment.id} className="bg-white dark:bg-slate-900 p-6 rounded-[2rem] border border-slate-50 dark:border-slate-800 shadow-sm relative group">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-400">
                    <User size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-black dark:text-white">{comment.author}</div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{comment.date}</div>
                  </div>
                </div>
                <button
                  onClick={() => deleteComment(comment.id)}
                  className="opacity-0 group-hover:opacity-100 p-2 text-slate-300 hover:text-red-500 transition-all"
                  title="Eliminar comentário"
                >
                  <Trash2 size={16} />
                </button>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
                {comment.text}
              </p>
              <button className="text-[10px] font-black text-indigo-600 uppercase tracking-widest flex items-center gap-1.5 hover:opacity-70 transition-opacity">
                <Reply size={14} /> Responder
              </button>
            </div>
          ))
        ) : (
          <div className="text-center py-12 bg-slate-50 dark:bg-slate-900/50 rounded-[2.5rem] border-2 border-dashed border-slate-100 dark:border-slate-800">
            <p className="text-slate-400 text-sm font-medium">Ainda não há comentários nesta aula. Sê o primeiro a participar!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentsSection;
