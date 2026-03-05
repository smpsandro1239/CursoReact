// Autor: Sandro Pereira (smpsandro1239)
// Projeto: CursoReact – Premium React: O Curso Definitivo (40 Aulas)

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle2,
  XCircle,
  HelpCircle,
  Timer,
  Award,
  ArrowRight,
  RotateCcw,
  Lightbulb,
  Check
} from 'lucide-react';
import confetti from 'canvas-confetti';

const QuizInterativo = ({ quiz, onComplete, onExit }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [streak, setStreak] = useState(0);
  const [dicaLevel, setDicaLevel] = useState(0);
  const [results, setResults] = useState([]);
  const [quizFinished, setQuizFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(null);

  const question = quiz.perguntas[currentQuestionIndex];

  useEffect(() => {
    if (question?.tempoLimite) {
      setTimeLeft(question.tempoLimite);
    } else {
      setTimeLeft(null);
    }
  }, [currentQuestionIndex, question]);

  useEffect(() => {
    if (timeLeft === null) return;
    if (timeLeft === 0) {
      handleNext();
      return;
    }
    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  const handleOptionSelect = (index) => {
    if (isAnswered) return;
    setSelectedOption(index);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null || isAnswered) return;

    setIsAnswered(true);
    const isCorrect = selectedOption === question.respostaCorreta;

    let points = isCorrect ? question.xp : 0;
    // Penalização por dicas
    if (isCorrect) {
      points = Math.round(points * (1 - dicaLevel * 0.25));
      setScore(prev => prev + points);
      setStreak(prev => prev + 1);
    } else {
      setStreak(0);
    }

    setResults(prev => [...prev, { questionId: question.id, isCorrect, points, dicaLevel }]);
    setShowFeedback(true);

    if (isCorrect) {
      confetti({
        particleCount: 50,
        spread: 30,
        origin: { y: 0.8 }
      });
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < quiz.perguntas.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setShowFeedback(false);
      setDicaLevel(0);
    } else {
      setQuizFinished(true);
      onComplete({
        score,
        totalQuestions: quiz.perguntas.length,
        results
      });
    }
  };

  if (quizFinished) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center p-8 md:p-16 bg-white dark:bg-slate-900 rounded-[3rem] shadow-2xl"
      >
        <div className="w-24 h-24 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8">
          <Award size={48} />
        </div>
        <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4">Quiz Concluído!</h2>
        <p className="text-xl text-slate-500 mb-8">Conseguiste <span className="text-blue-600 font-black">{score} XP</span> para o teu perfil.</p>

        <div className="grid grid-cols-2 gap-4 mb-10">
           <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-3xl">
              <p className="text-[10px] font-black uppercase text-slate-400 mb-1">Precisão</p>
              <p className="text-2xl font-black">{Math.round((results.filter(r => r.isCorrect).length / quiz.perguntas.length) * 100)}%</p>
           </div>
           <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-3xl">
              <p className="text-[10px] font-black uppercase text-slate-400 mb-1">Total de Perguntas</p>
              <p className="text-2xl font-black">{quiz.perguntas.length}</p>
           </div>
        </div>

        <button
          onClick={onExit}
          className="w-full py-4 bg-blue-600 text-white rounded-2xl font-black hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 dark:shadow-none"
        >
          Voltar à Aula
        </button>
      </motion.div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-8">
         <div className="flex items-center gap-3">
            <div className="px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 rounded-xl font-bold text-sm">
               Pergunta {currentQuestionIndex + 1} de {quiz.perguntas.length}
            </div>
            {timeLeft !== null && (
              <div className={`flex items-center gap-2 px-4 py-2 rounded-xl font-black text-sm ${timeLeft < 10 ? 'bg-red-50 text-red-600 animate-pulse' : 'bg-slate-100 text-slate-600'}`}>
                <Timer size={16} /> {timeLeft}s
              </div>
            )}
         </div>
         <div className="flex items-center gap-2 text-amber-500 font-black">
            <Zap size={20} fill="currentColor" /> {streak} Streak
         </div>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-slate-100 dark:border-slate-800">
         <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-10 leading-tight">
           {question.pergunta}
         </h3>

         <div className="grid grid-cols-1 gap-4 mb-10">
            {question.opcoes?.map((opcao, index) => (
              <button
                key={index}
                onClick={() => handleOptionSelect(index)}
                disabled={isAnswered}
                className={`
                  group flex items-center gap-4 p-6 rounded-3xl border-2 transition-all text-left
                  ${selectedOption === index
                    ? isAnswered
                      ? index === question.respostaCorreta ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20' : 'border-red-500 bg-red-50 dark:bg-red-900/20'
                      : 'border-blue-600 bg-blue-50 dark:bg-blue-900/20'
                    : isAnswered && index === question.respostaCorreta
                      ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20'
                      : 'border-slate-100 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'}
                `}
              >
                <div className={`
                  shrink-0 w-8 h-8 rounded-xl flex items-center justify-center font-black text-sm
                  ${selectedOption === index
                    ? isAnswered
                      ? index === question.respostaCorreta ? 'bg-emerald-500 text-white' : 'bg-red-500 text-white'
                      : 'bg-blue-600 text-white'
                    : isAnswered && index === question.respostaCorreta
                      ? 'bg-emerald-500 text-white'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-400'}
                `}>
                  {isAnswered && index === question.respostaCorreta ? <Check size={16} /> : String.fromCharCode(65 + index)}
                </div>
                <span className={`font-bold ${isAnswered && index === question.respostaCorreta ? 'text-emerald-700 dark:text-emerald-400' : 'text-slate-700 dark:text-slate-300'}`}>
                  {opcao}
                </span>
              </button>
            ))}
         </div>

         <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex gap-2">
               {dicaLevel < 3 && !isAnswered && (
                 <button
                  onClick={() => setDicaLevel(prev => prev + 1)}
                  className="flex items-center gap-2 px-4 py-2 text-amber-600 font-bold hover:bg-amber-50 rounded-xl transition-all"
                 >
                   <Lightbulb size={18} /> Ver Dica ({dicaLevel + 1}/3)
                 </button>
               )}
            </div>

            {!isAnswered ? (
              <button
                onClick={handleSubmitAnswer}
                disabled={selectedOption === null}
                className="w-full md:w-auto px-10 py-4 bg-slate-900 dark:bg-blue-600 text-white rounded-2xl font-black hover:scale-105 transition-all disabled:opacity-30 shadow-lg"
              >
                Submeter Resposta
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="w-full md:w-auto px-10 py-4 bg-blue-600 text-white rounded-2xl font-black hover:scale-105 transition-all shadow-lg flex items-center justify-center gap-2"
              >
                {currentQuestionIndex === quiz.perguntas.length - 1 ? 'Ver Resultado' : 'Próxima Pergunta'}
                <ArrowRight size={20} />
              </button>
            )}
         </div>

         <AnimatePresence>
            {dicaLevel > 0 && !isAnswered && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="mt-6 p-4 bg-amber-50 dark:bg-amber-900/10 border-l-4 border-amber-400 rounded-r-xl overflow-hidden"
              >
                <p className="text-amber-800 dark:text-amber-300 text-sm font-medium italic">
                  "{question.dicas[dicaLevel - 1]}"
                </p>
              </motion.div>
            )}

            {showFeedback && (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className={`mt-8 p-6 rounded-[2rem] border-2 ${selectedOption === question.respostaCorreta ? 'bg-emerald-50 border-emerald-100' : 'bg-red-50 border-red-100'}`}
              >
                <div className="flex items-start gap-4">
                   {selectedOption === question.respostaCorreta ? (
                     <CheckCircle2 className="text-emerald-600 shrink-0" size={24} />
                   ) : (
                     <XCircle className="text-red-600 shrink-0" size={24} />
                   )}
                   <div>
                      <h4 className={`font-black text-lg ${selectedOption === question.respostaCorreta ? 'text-emerald-900' : 'text-red-900'}`}>
                        {selectedOption === question.respostaCorreta ? 'Fantástico, Sandro!' : 'Ainda não foi desta...'}
                      </h4>
                      <p className={`text-sm font-medium leading-relaxed mt-1 ${selectedOption === question.respostaCorreta ? 'text-emerald-700' : 'text-red-700'}`}>
                        {selectedOption === question.respostaCorreta ? question.feedback.correto : question.feedback.incorreto}
                      </p>
                   </div>
                </div>
              </motion.div>
            )}
         </AnimatePresence>
      </div>
    </div>
  );
};

// Mock Icon for internal usage if needed
const Zap = ({ size, fill }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill || "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

export default QuizInterativo;
