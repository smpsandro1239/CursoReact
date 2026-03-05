// Autor: Sandro Pereira (smpsandro1239)
// Projeto: CursoReact – Premium React: O Curso Definitivo (40 Aulas)

export const quizzesData = {
  "1": {
    id: "q1",
    titulo: "Introdução ao JavaScript Moderno",
    duracaoEstimada: 10,
    pontuacaoMaxima: 100,
    perguntas: [
      {
        id: "q1-1",
        tipo: "multipla_escolha",
        pergunta: "Quem criou o JavaScript em apenas 10 dias?",
        opcoes: ["Brendan Eich", "James Gosling", "Bjarne Stroustrup", "Guido van Rossum"],
        respostaCorreta: 0,
        feedback: {
          correto: "Exatamente! Brendan Eich criou o Mocha (que viria a ser JS) em 1995.",
          incorreto: "Não. James criou Java, Bjarne o C++ e Guido o Python."
        },
        dicas: ["Trabalhava na Netscape na altura.", "O seu primeiro nome começa com B.", "O apelido parece 'Eich'."],
        xp: 20
      },
      {
        id: "q1-2",
        tipo: "multipla_escolha",
        pergunta: "Qual destas NÃO é uma funcionalidade introduzida no ES6?",
        opcoes: ["Arrow Functions", "Classes", "Promises", "var"],
        respostaCorreta: 3,
        feedback: {
          correto: "Podes crer! 'var' existe desde os primórdios do JS. O ES6 trouxe 'let' e 'const'.",
          incorreto: "Errado. Arrow functions, classes e promises foram todas novidades do ES6."
        },
        dicas: ["Foi substituído por let e const.", "Tem problemas de scope global.", "V-A-R."],
        xp: 20
      },
      {
        id: "q1-3",
        tipo: "multipla_escolha",
        pergunta: "O que é o DOM em JavaScript?",
        opcoes: ["Data Object Model", "Document Object Model", "Direct Object Management", "Dynamic Object Module"],
        respostaCorreta: 1,
        feedback: {
          correto: "Certo! O DOM é a representação em árvore do teu documento HTML.",
          incorreto: "Incorreto. DOM significa Document Object Model."
        },
        dicas: ["D de Document.", "O de Object.", "M de Model."],
        xp: 20
      }
    ]
  },
  "2": {
    id: "q2",
    titulo: "Variáveis e Tipos de Dados",
    duracaoEstimada: 8,
    pontuacaoMaxima: 100,
    perguntas: [
      {
        id: "q2-1",
        tipo: "multipla_escolha",
        pergunta: "Qual é a principal diferença entre const e let?",
        opcoes: ["Const é global, let é local", "Const não permite reatribuição, let permite", "Let é mais rápido que const", "Não há diferença real"],
        respostaCorreta: 1,
        feedback: {
          correto: "Certíssimo! Usa const por defeito e let apenas se precisares de mudar o valor.",
          incorreto: "Não. A diferença reside na capacidade de reatribuição do valor."
        },
        dicas: ["Const vem de Constant.", "Let permite mutação.", "Segurança de código."],
        xp: 20
      }
    ]
  }
};
