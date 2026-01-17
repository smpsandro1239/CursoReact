import re

new_lesson_content = """### O que vais aprender nesta aula:
- Compreender a diferença entre HTML, CSS e JavaScript
- Reconhecer o papel do JavaScript na web moderna
- Abrir e utilizar a consola do navegador como ferramenta de desenvolvimento
- Executar os teus primeiros comandos JavaScript
- Experimentar interação básica com o utilizador

---

### 🧠 Teoria: A Analogia da Casa Inteligente

Para entender o JavaScript, vamos usar uma analogia clara:
- **HTML** é a estrutura da casa — paredes, portas, janelas (o conteúdo estático).
- **CSS** é a decoração — cores, móveis, iluminação (o aspeto visual).
- **JavaScript** é a eletricidade, canalização e automação — faz as luzes acenderem, as portas abrirem sozinhas e a água correr (interatividade).

**Por que isto importa?** Sem JavaScript, os websites seriam apenas folhetos estáticos. Com ele, criamos aplicações rápidas e interativas como o Gmail, Netflix ou Spotify.

> 💡 **Sabias que?** O JavaScript foi criado em apenas 10 dias em 1995. Hoje é a linguagem mais usada no mundo e a base obrigatória para aprender React.

---

### 💻 Prática: A Consola do Navegador

Abre as Ferramentas de Desenvolvedor no teu navegador (<kbd>F12</kbd> ou <kbd>Ctrl+Shift+J</kbd>) e vai ao separador **Console**. É aqui que a magia acontece!

**1. O teu primeiro comando**
\\`\\`\\`javascript
console.log("Olá, mundo!");
\\`\\`\\`

**2. Variáveis e Interação**
\\`\\`\\`javascript
let nome = "Sandro";
console.log("Bem-vindo ao curso de React, " + nome + "! 🚀");
alert("Bem-vindo à tua jornada!");
\\`\\`\\`

**3. Interação Real**
\\`\\`\\`javascript
let resposta = prompt("Pronto para aprender JavaScript moderno?");
console.log("Resposta do aluno:", resposta);
\\`\\`\\`

---

### 🚀 Reforço de Confiança
- Todos os grandes developers começaram com o primeiro \\`console.log()\\`.
- Erro = Aprendizagem. Cada mensagem vermelha na consola é um passo para a mestria.
- Persistência e prática diária valem mais do que "ser um génio"."""

new_lesson_obj = f"""  {{
    id: 1,
    category: "Fundamentos",
    difficulty: "Iniciante",
    readingTime: "60 min",
    title: "Aula 1: Introdução ao JavaScript Moderno",
    description: "Compreender o papel do JavaScript e dar os primeiros passos na consola.",
    proTip: "Os erros são os teus melhores professores. Se aparecer vermelho na consola, lê com atenção! A curiosidade e a tentativa-erro são as chaves para aprender programação.",
    content: `{new_lesson_content}`,
    practice: "Cria um programa na consola que apresente uma mini-apresentação pessoal interativa. Usa pelo menos 3 comandos console.log(), variáveis para o teu nome, idade e objetivo, e inclui um prompt() e um alert().",
    resources: [
      {{ name: "MDN - JavaScript First Steps", url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps" }},
      {{ name: "W3Schools - JS Introduction", url: "https://www.w3schools.com/js/js_intro.asp" }}
    ],
    quiz: {{
      question: "Porque é importante aprender JavaScript antes de React?",
      options: [
        "React é escrito em JavaScript e usa os seus conceitos fundamentais",
        "React substitui completamente o JavaScript",
        "Não é necessário, pode-se aprender React diretamente",
        "JavaScript é apenas para sites antigos"
      ],
      correctAnswer: 0
    }}
  }}"""

with open('react-course/src/data/lessons.js', 'r') as f:
    orig_content = f.read()

# Find everything from id: 2 onwards
match = re.search(r'\{\s*id: 2,', orig_content)
rest_of_file = orig_content[match.start():]

new_file_content = "export const lessons = [\n"
new_file_content += new_lesson_obj
new_file_content += ",\n  "
new_file_content += rest_of_file

with open('react-course/src/data/lessons.js', 'w') as f:
    f.write(new_file_content)
