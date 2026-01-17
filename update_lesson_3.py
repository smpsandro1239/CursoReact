import re

filepath = 'react-course/src/data/lessons.js'
with open(filepath, 'r') as f:
    content = f.read()

new_lesson_3_content = """### O que vais aprender nesta aula:
- Utilizar estruturas condicionais (\\`if/else\\`, \\`switch\\`) para tomar decisões
- Implementar loops (\\`for\\`, \\`while\\`, \\`for...of\\`) para repetir tarefas
- Compreender a diferença entre \\`==\\` e \\`===\\` em condições
- Usar operadores lógicos (\\`&&\\`, \\`||\\`, \\`!\\`) para combinar condições
- Aplicar boas práticas para evitar "callback hell" e código aninhado excessivo
- Resolver problemas do mundo real com lógica de programação

---

### 🧠 Teoria: A Analogia do Semáforo Inteligente

O controle de fluxo é como o sistema nervoso de uma aplicação. Permite que ela "pense" e tome decisões:
- **Condicionais (\\`if/else\\`)** são como semáforos: se o sinal está verde → avança; se está vermelho → para.
- **Loops (\\`for\\`)** são como rotinas diárias: repete a mesma sequência (acordar, tomar banho, café) todos os dias até sexta-feira.

**Porquê isto importa?** Em React, usas constantemente condicionais para mostrar/esconder componentes e loops para renderizar listas de dados. É impossível construir aplicações reais sem dominar estes conceitos.

> 💡 **Sabias que?** O operador ternário (\\`condition ? trueValue : falseValue\\`) é a forma concisa de escrever um \\`if/else\\` simples. É muito usado em React para renderização condicional!

---

### 💻 Prática: Experimentando na Consola

Abre a consola do navegador (<kbd>F12</kbd>) e experimenta os seguintes exemplos:

**1. Condicionais básicas**
\\`\\`\\`javascript
const idade = 17;
if (idade >= 18) {
  console.log("Pode votar!");
} else {
  console.log("Ainda não pode votar.");
}
\\`\\`\\`

**2. Operador ternário (Conciso)**
\\`\\`\\`javascript
const mensagem = idade >= 18 ? "Maior de idade" : "Menor de idade";
console.log(mensagem);
\\`\\`\\`

**3. Loop for...of (Moderno)**
\\`\\`\\`javascript
const linguagens = ["JavaScript", "React", "Node.js"];
for (const lang of linguagens) {
  console.log(\\`Estou a aprender ${lang}!\\`);
}
\\`\\`\\`

---

### 🚀 Reforço de Confiança
- Loops infinitos acontecem a todos! Até aos seniors. Pressiona Ctrl+C e analisa onde esqueceste o incremento.
- Cada condição bem escrita é um passo para aplicações mais robustas e menos propensas a bugs.
- Estás a desenvolver o "cérebro" das tuas aplicações. Cada \\`if\\` e \\`for\\` é um neurónio novo!"""

new_lesson_obj = f"""  {{
    id: 3,
    category: "Fundamentos",
    difficulty: "Iniciante",
    readingTime: "60 min",
    title: "Aula 3: Controle de Fluxo – Condicionais e Loops",
    description: "Utilizar estruturas condicionais e loops para tomar decisões e repetir tarefas.",
    proTip: "Evite o 'aninhamento excessivo' (muitos if dentro de if) usando return cedo ou guard clauses. Código limpo é código legível!",
    content: `{new_lesson_3_content}`,
    practice: "Cria um programa que verifica a força de uma password. Usa loops para analisar cada caractere e condicionais para classificar como Fraca, Média ou Forte.",
    resources: [
      {{ name: "MDN - Control flow and error handling", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling" }},
      {{ name: "W3Schools - JS Conditions", url: "https://www.w3schools.com/js/js_if_else.asp" }}
    ],
    quiz: {{
      question: "Qual loop é mais adequado para iterar sobre um array de forma legível no JS moderno?",
      options: [
        "for tradicional",
        "while",
        "for...of",
        "loop infinito"
      ],
      correctAnswer: 2
    }}
  }}"""

# Replace lesson 3
pattern = r'\{\s*id: 3,.*?\},'
new_content = re.sub(pattern, new_lesson_obj + ",", content, flags=re.DOTALL)

with open(filepath, 'w') as f:
    f.write(new_content)
