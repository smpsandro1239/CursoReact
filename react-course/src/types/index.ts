// Autor: Sandro Pereira (smpsandro1239)
// Projeto: CursoReact – Premium React: O Curso Definitivo (40 Aulas)

export type Dificuldade = 'Iniciante' | 'Intermédio' | 'Avançado';
export type TipoPergunta = 'multipla_escolha' | 'verdadeiro_falso' | 'codigo' | 'aberta' | 'ordenacao';

export interface Recurso {
  id: string;
  nome: string;
  url: string;
  tipo: 'pdf' | 'zip' | 'link' | 'video';
}

export interface Pergunta {
  id: string;
  tipo: TipoPergunta;
  pergunta: string;
  opcoes?: string[];
  respostaCorreta: string | number | string[];
  feedback: {
    correto: string;
    incorreto: string;
  };
  dicas: string[]; // 3 níveis de ajuda
  tempoLimite?: number; // em segundos
  xp: number;
}

export interface Quiz {
  id: string;
  titulo: string;
  duracaoEstimada: number; // minutos
  pontuacaoMaxima: number;
  perguntas: Pergunta[];
}

export interface DesafioPratico {
  id: string;
  enunciado: string;
  codigoInicial: {
    html?: string;
    css?: string;
    js?: string;
  };
  solucao: string;
  criteriosAvaliacao: string[];
  xp: number;
}

export interface Aula {
  id: number;
  slug: string;
  titulo: string;
  descricao: string;
  categoria: string;
  dificuldade: Dificuldade;
  tempoLeitura: string;
  videoUrl?: string;
  conteudo: string; // Markdown
  proTip?: string;
  recursos?: Recurso[];
  quizzes?: Quiz;
  desafio?: DesafioPratico;
  tags: string[];
  dataAtualizacao: string;
}

export interface Curso {
  titulo: string;
  descricao: string;
  autor: string;
  versao: string;
  modulos: {
    id: string;
    titulo: string;
    aulas: Aula[];
  }[];
}
