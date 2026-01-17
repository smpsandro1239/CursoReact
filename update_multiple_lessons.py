import re
import json

def update_lesson(filepath, lesson_id, new_data):
    with open(filepath, 'r') as f:
        content = f.read()

    # Construct the new lesson object string
    res = "  {\n"
    res += f"    id: {lesson_id},\n"
    res += f"    category: \"{new_data['category']}\",\n"
    res += f"    difficulty: \"{new_data['difficulty']}\",\n"
    res += f"    readingTime: \"{new_data['readingTime']}\",\n"
    res += f"    title: \"{new_data['title']}\",\n"
    res += f"    description: \"{new_data['description']}\",\n"
    res += f"    proTip: \"{new_data['proTip']}\",\n"
    res += "    content: `" + new_data['content'] + "`,\n"
    res += f"    practice: \"{new_data['practice']}\",\n"
    res += "    resources: [\n"
    for r in new_data['resources']:
        res += f"      {{ name: \"{r['name']}\", url: \"{r['url']}\" }},\n"
    res = res.rstrip(',\n') + "\n    ],\n"
    res += "    quiz: {\n"
    res += f"      question: \"{new_data['quiz']['question']}\",\n"
    res += "      options: [" + ", ".join([f'"{o}"' for o in new_data['quiz']['options']]) + "],\n"
    res += f"      correctAnswer: {new_data['quiz']['correctAnswer']}\n"
    res += "    }\n"
    res += "  }"

    pattern = r'\{\s*id: ' + str(lesson_id) + r',.*?\},'
    new_content = re.sub(pattern, res + ",", content, flags=re.DOTALL)

    with open(filepath, 'w') as f:
        f.write(new_content)

filepath = 'react-course/src/data/lessons.js'

# Lesson 4 Data
lesson_4 = {
    "category": "Fundamentos",
    "difficulty": "Iniciante",
    "readingTime": "60 min",
    "title": "Aula 4: Funções e Escopo",
    "description": "Aprender a criar blocos de código reutilizáveis e entender a visibilidade das variáveis.",
    "proTip": "Se estás a copiar e colar o mesmo código mais de duas vezes, transforma-o numa função! É o primeiro passo para código profissional.",
    "content": """### O que vais aprender nesta aula:
- Declarar funções com diferentes sintaxes (function declaration, expression, arrow)
- Compreender parâmetros, argumentos e valor de retorno
- Identificar os três tipos de escopo: global, local e de bloco
- Entender o conceito de hoisting e como evitá-lo

---

### 🧠 Teoria: A Analogia da Receita de Cozinha

As funções são os "módulos" do teu código.
- **Função** = uma receita completa (ex: "Bolo de Chocolate").
- **Parâmetros** = ingredientes necessários (farinha, açúcar).
- **Chamada** = seguir a receita com ingredientes específicos.
- **Retorno** = o bolo pronto para servir!

**Porquê isto importa?** Em React, cada componente é uma função! Sem compreensão sólida de funções, React torna-se mágica inexplicável.

> 💡 **Sabias que?** As arrow functions (\\`() => {}\\`) não têm o seu próprio \\`this\\`, o que as torna perfeitas para callbacks em React!

---

### 💻 Prática: Funções Modernas

**1. Arrow Function (Moderna)**
\\`\\`\\`javascript
const somar = (a, b) => a + b;
console.log(somar(5, 3)); // 8
\\`\\`\\`

**2. Escopo de Bloco**
\\`\\`\\`javascript
if (true) {
  let mensagem = "Vivo apenas aqui dentro";
  console.log(mensagem);
}
// console.log(mensagem); // Erro!
\\`\\`\\`

---

### 🚀 Reforço de Confiança
- Cada função que escreves é um tijolo na arquitetura da tua aplicação.
- Não temas o hoisting — entende-o, evita \\`var\\`, e usa \\`let/const\\`.""",
    "practice": "Cria uma calculadora modular com funções separadas para somar, subtrair, multiplicar e dividir. Cria uma função calcular(operacao, a, b) que use as outras.",
    "resources": [
      { "name": "MDN - Functions", "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions" }
    ],
    "quiz": {
        "question": "Qual é a principal vantagem das arrow functions em React?",
        "options": ["São mais rápidas", "Têm sintaxe concisa e não têm o seu próprio 'this'", "Substituem o HTML", "Só funcionam em loops"],
        "correctAnswer": 1
    }
}

# Lesson 5 Data
lesson_5 = {
    "category": "Fundamentos",
    "difficulty": "Iniciante",
    "readingTime": "60 min",
    "title": "Aula 5: Arrays e Objetos – Estruturas de Dados",
    "description": "Organizar e transformar dados complexos usando métodos modernos.",
    "proTip": "Pensa nos teus dados como 'fotografias'. Quando precisas de alterar algo em React, cria uma nova fotografia (cópia) em vez de rabiscar a original!",
    "content": """### O que vais aprender nesta aula:
- Métodos modernos de Array (\\`map\\`, \\`filter\\`, \\`reduce\\`)
- Trabalhar com objetos: propriedades e desestruturação
- Utilizar spread operator (\\`...\\`) para imutabilidade

---

### 🧠 Teoria: A Caixa de Ferramentas

- **Array** = uma caixa organizada por ordem (chave de fendas, martelo).
- **Objeto** = organizada por categorias (elétrica: {voltagem: 220}, mecânica: {martelo: "500g"}).

**Porquê isto importa?** Em React, os dados vêm frequentemente como arrays de objetos. O método \\`map()\\` transforma esses dados em elementos visuais na tela!

> 💡 **Sabias que?** O método \\`map()\\` é tão fundamental que é usado diariamente por todos os developers React para renderizar listas.

---

### 💻 Prática: Manipulação de Dados

**1. Métodos de Array**
\\`\\`\\`javascript
const numeros = [1, 2, 3, 4];
const dobrados = numeros.map(n => n * 2); // [2, 4, 6, 8]
const pares = numeros.filter(n => n % 2 === 0); // [2, 4]
\\`\\`\\`

**2. Spread Operator (Imutabilidade)**
\\`\\`\\`javascript
const perfil = { nome: "Sandro", idade: 30 };
const atualizado = { ...perfil, cidade: "Lisboa" };
\\`\\`\\`

---

### 🚀 Reforço de Confiança
- Cada método que dominas (map, filter) é um super-poder para transformar dados.
- Imutabilidade parece estranho no início, mas é o segredo da performance no React!""",
    "practice": "Cria um array de objetos de tarefas (id, texto, concluida). Implementa funções para adicionar uma tarefa e marcar uma como concluída usando map e spread operator.",
    "resources": [
      { "name": "MDN - Array Methods", "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" }
    ],
    "quiz": {
        "question": "Qual método devolve uma nova array com os elementos transformados?",
        "options": ["forEach()", "map()", "filter()", "push()"],
        "correctAnswer": 1
    }
}

# Lesson 6 Data
lesson_6 = {
    "category": "Fundamentos",
    "difficulty": "Iniciante",
    "readingTime": "60 min",
    "title": "Aula 6: Manipulação do DOM",
    "description": "Interagir com a página web selecionando e modificando elementos HTML.",
    "proTip": "Prefere textContent em vez de innerHTML quando não precisas de renderizar HTML real, por razões de segurança (evita ataques XSS).",
    "content": """### O que vais aprender nesta aula:
- Selecionar elementos com \\`querySelector\\` e \\`getElementById\\`
- Modificar conteúdo, estilos e atributos
- Criar elementos dinamicamente
- Adicionar Event Listeners para interatividade

---

### 🧠 Teoria: A Analogia do Teatro

- **HTML** = o guião da peça (estrutura).
- **CSS** = o cenário e figurinos (aparência).
- **JavaScript/DOM** = os atores que interpretam e interagem (comportamento).

**Porquê isto importa?** Embora o React automatize isto, entender o DOM é crucial para debuggar e entender como o "Virtual DOM" do React funciona por baixo do capô.

> 💡 **Sabias que?** O React usa um "Virtual DOM" para calcular as mudanças e atualizar apenas o estritamente necessário, tornando-o ultra rápido.

---

### 💻 Prática: Interatividade

**1. Selecionar e Mudar**
\\`\\`\\`javascript
const titulo = document.querySelector("h1");
titulo.textContent = "Olá React!";
titulo.style.color = "blue";
\\`\\`\\`

**2. Eventos**
\\`\\`\\`javascript
const botao = document.querySelector("button");
botao.addEventListener("click", () => {
  alert("Clicou!");
});
\\`\\`\\`""",
    "practice": "Cria uma lista de tarefas interativa onde, ao clicar num botão 'Adicionar', um novo item aparece na lista (UL) usando document.createElement.",
    "resources": [
      { "name": "MDN - DOM Introduction", "url": "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction" }
    ],
    "quiz": {
        "question": "Qual a principal diferença entre React e manipulação direta do DOM?",
        "options": ["React é mais lento", "React usa um Virtual DOM para atualizar apenas o necessário", "React não permite mudar cores", "DOM não existe no React"],
        "correctAnswer": 1
    }
}

update_lesson(filepath, 4, lesson_4)
update_lesson(filepath, 5, lesson_5)
update_lesson(filepath, 6, lesson_6)
