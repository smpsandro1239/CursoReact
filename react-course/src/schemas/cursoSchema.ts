// Autor: Sandro Pereira (smpsandro1239)
// Projeto: CursoReact – Premium React: O Curso Definitivo (40 Aulas)

import { z } from 'zod';

export const PerguntaSchema = z.object({
  id: z.string(),
  tipo: z.enum(['multipla_escolha', 'verdadeiro_falso', 'codigo', 'aberta', 'ordenacao']),
  pergunta: z.string(),
  opcoes: z.array(z.string()).optional(),
  respostaCorreta: z.union([z.string(), z.number(), z.array(z.string())]),
  feedback: z.object({
    correto: z.string(),
    incorreto: z.string(),
  }),
  dicas: z.array(z.string()).length(3),
  tempoLimite: z.number().optional(),
  xp: z.number(),
});

export const QuizSchema = z.object({
  id: z.string(),
  titulo: z.string(),
  duracaoEstimada: z.number(),
  pontuacaoMaxima: z.number(),
  perguntas: z.array(PerguntaSchema),
});

export const DesafioSchema = z.object({
  id: z.string(),
  enunciado: z.string(),
  codigoInicial: z.object({
    html: z.string().optional(),
    css: z.string().optional(),
    js: z.string().optional(),
  }),
  solucao: z.string(),
  criteriosAvaliacao: z.array(z.string()),
  xp: z.number(),
});

export const AulaSchema = z.object({
  id: z.number(),
  slug: z.string(),
  titulo: z.string(),
  descricao: z.string(),
  categoria: z.string(),
  dificuldade: z.enum(['Iniciante', 'Intermédio', 'Avançado']),
  tempoLeitura: z.string(),
  videoUrl: z.string().url().optional(),
  conteudo: z.string(),
  proTip: z.string().optional(),
  recursos: z.array(z.object({
    id: z.string(),
    nome: z.string(),
    url: z.string(),
    tipo: z.enum(['pdf', 'zip', 'link', 'video']),
  })).optional(),
  quizzes: QuizSchema.optional(),
  desafio: DesafioSchema.optional(),
  tags: z.array(z.string()),
  dataAtualizacao: z.string(),
});

export const CursoSchema = z.object({
  titulo: z.string(),
  descricao: z.string(),
  autor: z.string(),
  versao: z.string(),
  modulos: z.array(z.object({
    id: z.string(),
    titulo: z.string(),
    aulas: z.array(AulaSchema),
  })),
});
