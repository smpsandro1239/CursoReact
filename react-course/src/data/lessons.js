export const lessons = [
  {
    id: 1,
    category: "Fundamentos",
    difficulty: "Iniciante",
    readingTime: "60 min",
    title: "Aula 1: Introdução ao JavaScript Moderno",
    description: "Compreender o papel do JavaScript e dar os primeiros passos na consola.",
    proTip: "Os erros são os teus melhores professores. Se aparecer vermelho na consola, lê com atenção! A curiosidade e a tentativa-erro são as chaves para aprender programação.",
    content: `### O que vais aprender nesta aula:
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
\`\`\`javascript
console.log("Olá, mundo!");
\`\`\`

**2. Variáveis e Interação**
\`\`\`javascript
let nome = "Sandro";
console.log("Bem-vindo ao curso de React, " + nome + "! 🚀");
alert("Bem-vindo à tua jornada!");
\`\`\`

**3. Interação Real**
\`\`\`javascript
let resposta = prompt("Pronto para aprender JavaScript moderno?");
console.log("Resposta do aluno:", resposta);
\`\`\`

---

### 🚀 Reforço de Confiança
- Todos os grandes developers começaram com o primeiro \`console.log()\`.
- Erro = Aprendizagem. Cada mensagem vermelha na consola é um passo para a mestria.
- Persistência e prática diária valem mais do que "ser um génio".`,
    practice: "Cria um programa na consola que apresente uma mini-apresentação pessoal interativa. Usa pelo menos 3 comandos console.log(), variáveis para o teu nome, idade e objetivo, e inclui um prompt() e um alert().",
    resources: [
      { name: "MDN - JavaScript First Steps", url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps" },
      { name: "W3Schools - JS Introduction", url: "https://www.w3schools.com/js/js_intro.asp" }
    ],
    quiz: {
      question: "Porque é importante aprender JavaScript antes de React?",
      options: ["React é escrito em JavaScript e usa os seus conceitos fundamentais", "React substitui completamente o JavaScript", "Não é necessário, pode-se aprender React diretamente", "JavaScript é apenas para sites antigos"],
      correctAnswer: 0
    }
  },
  {
    id: 2,
    category: "Fundamentos",
    difficulty: "Iniciante",
    readingTime: "60 min",
    title: "Aula 2: Variáveis, Tipos de Dados e Operadores",
    description: "Dominar o controlo de dados e lógica básica em JavaScript moderno.",
    proTip: "Sempre que possível, usa const. Só muda para let se souberes que o valor vai mudar. Isto reduz erros e melhora a legibilidade.",
    content: `### O que vais aprender nesta aula:
- Declarar variáveis com \`let\`, \`const\` e entender a diferença
- Identificar os 7 tipos primitivos de dados em JavaScript
- Utilizar operadores aritméticos, de comparação e lógicos
- Trabalhar com strings usando template literals

---

### 🧠 Teoria: A Analogia das Caixas

- **\`const\`** é uma caixa lacrada — podes guardar algo dentro, mas não podes trocar a caixa por outra.
- **\`let\`** é uma caixa aberta — podes mudar o conteúdo quantas vezes quiseres.

**Por que isto importa?** Em React, escolher corretamente evita bugs de reatribuição acidental e torna o teu código mais seguro.

> 💡 **Sabias que?** JavaScript tem apenas 7 tipos primitivos. Tudo o resto (arrays, objetos, funções) é tecnicamente um objeto!

---

### 💻 Prática: Variáveis e Template Literals

**1. Declaração segura**
\`\`\`javascript
const nome = "Sandro";
let idade = 30;
idade = 31; // Válido
\`\`\`

**2. Template Literals (Moderno)**
\`\`\`javascript
const linguagem = "JavaScript";
console.log(\`Estou a aprender \${linguagem}!\`);
\`\`\``,
    practice: "Cria um programa que calcule o IMC (Peso / Altura²). Usa const para nome e altura, let para peso. Exibe o resultado usando template literals.",
    resources: [
      { name: "MDN - Grammar and types", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types" }
    ],
    quiz: {
      question: "Qual é a diferença principal entre let e const?",
      options: ["let é mais rápido", "const não pode ser reatribuído, let pode", "let é para números, const para texto", "Nenhuma"],
      correctAnswer: 1
    }
  },
  {
    id: 3,
    category: "Fundamentos",
    difficulty: "Iniciante",
    readingTime: "60 min",
    title: "Aula 3: Controle de Fluxo – Condicionais e Loops",
    description: "Utilizar estruturas condicionais e loops para tomar decisões e repetir tarefas.",
    proTip: "Evite o 'aninhamento excessivo' (muitos if dentro de if) usando return cedo ou guard clauses. Código limpo é código legível!",
    content: `### O que vais aprender nesta aula:
- Utilizar estruturas condicionais (\`if/else\`, \`switch\`) para tomar decisões
- Implementar loops (\`for\`, \`while\`, \`for...of\`) para repetir tarefas
- Compreender a diferença entre \`==\` e \`===\` em condições
- Usar operadores lógicos (\`&&\`, \`||\`, \`!\`) para combinar condições
- Resolver problemas do mundo real com lógica de programação

---

### 🧠 Teoria: A Analogia do Semáforo Inteligente

O controle de fluxo é como o sistema nervoso de uma aplicação. Permite que ela "pense" e tome decisões:
- **Condicionais (\`if/else\`)** são como semáforos: se o sinal está verde → avança; se está vermelho → para.
- **Loops (\`for\`)** são como rotinas diárias: repete a mesma sequência (acordar, tomar banho, café) todos os dias até sexta-feira.

**Porquê isto importa?** Em React, usas constantemente condicionais para mostrar/esconder componentes e loops para renderizar listas de dados.

> 💡 **Sabias que?** O operador ternário (\`condition ? trueValue : falseValue\`) é a forma concisa de escrever um \`if/else\` simples. É muito usado em React para renderização condicional!

---

### 💻 Prática: Experimentando na Consola

Abre a consola do navegador (<kbd>F12</kbd>) e experimenta os seguintes exemplos:

**1. Condicionais básicas**
\`\`\`javascript
const idade = 17;
if (idade >= 18) {
  console.log("Pode votar!");
} else {
  console.log("Ainda não pode votar.");
}
\`\`\`

**2. Loop for...of (Moderno)**
\`\`\`javascript
const linguagens = ["JavaScript", "React", "Node.js"];
for (const lang of linguagens) {
  console.log(\`Estou a aprender \${lang}!\`);
}
\`\`\``,
    practice: "Cria um programa que verifica a força de uma password. Usa loops para analisar cada caractere e condicionais para classificar como Fraca, Média ou Forte.",
    resources: [
      { name: "MDN - Control flow and error handling", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling" }
    ],
    quiz: {
      question: "Qual loop é mais adequado para iterar sobre um array de forma legível no JS moderno?",
      options: ["for tradicional", "while", "for...of", "loop infinito"],
      correctAnswer: 2
    }
  },
  {
    id: 4,
    category: "Fundamentos",
    difficulty: "Iniciante",
    readingTime: "60 min",
    title: "Aula 4: Funções e Escopo",
    description: "Aprender a criar blocos de código reutilizáveis e entender a visibilidade das variáveis.",
    proTip: "Se estás a copiar e colar o mesmo código mais de duas vezes, transforma-o numa função! É o primeiro passo para código profissional.",
    content: `### O que vais aprender nesta aula:
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

> 💡 **Sabias que?** As arrow functions (\`() => {}\`) não têm o seu próprio \`this\`, o que as torna perfeitas para callbacks em React!

---

### 💻 Prática: Funções Modernas

**1. Arrow Function (Moderna)**
\`\`\`javascript
const somar = (a, b) => a + b;
console.log(somar(5, 3)); // 8
\`\`\`

**2. Escopo de Bloco**
\`\`\`javascript
if (true) {
  let mensagem = "Vivo apenas aqui dentro";
  console.log(mensagem);
}
// console.log(mensagem); // Erro!
\`\`\``,
    practice: "Cria uma calculadora modular com funções separadas para somar, subtrair, multiplicar e dividir. Cria uma função calcular(operacao, a, b) que use as outras.",
    resources: [
      { name: "MDN - Functions", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions" }
    ],
    quiz: {
      question: "Qual é a principal vantagem das arrow functions em React?",
      options: ["São mais rápidas", "Têm sintaxe concisa e não têm o seu próprio 'this'", "Substituem o HTML", "Só funcionam em loops"],
      correctAnswer: 1
    }
  },
  {
    id: 5,
    category: "Fundamentos",
    difficulty: "Iniciante",
    readingTime: "60 min",
    title: "Aula 5: Arrays e Objetos – Estruturas de Dados",
    description: "Organizar e transformar dados complexos usando métodos modernos.",
    proTip: "Pensa nos teus dados como 'fotografias'. Quando precisas de alterar algo em React, cria uma nova fotografia (cópia) em vez de rabiscar a original!",
    content: `### O que vais aprender nesta aula:
- Métodos modernos de Array (\`map\`, \`filter\`, \`reduce\`)
- Trabalhar com objetos: propriedades e desestruturação
- Utilizar spread operator (\`...\`) para imutabilidade

---

### 🧠 Teoria: A Caixa de Ferramentas

- **Array** = uma caixa organizada por ordem (chave de fendas, martelo).
- **Objeto** = organizada por categorias (elétrica: {voltagem: 220}, mecânica: {martelo: "500g"}).

**Porquê isto importa?** Em React, os dados vêm frequentemente como arrays de objetos. O método \`map()\` transforma esses dados em elementos visuais na tela!

> 💡 **Sabias que?** O método \`map()\` é tão fundamental que é usado diariamente por todos os developers React para renderizar listas.

---

### 💻 Prática: Manipulação de Dados

**1. Métodos de Array**
\`\`\`javascript
const numeros = [1, 2, 3, 4];
const dobrados = numeros.map(n => n * 2); // [2, 4, 6, 8]
const pares = numeros.filter(n => n % 2 === 0); // [2, 4]
\`\`\`

**2. Spread Operator (Imutabilidade)**
\`\`\`javascript
const perfil = { nome: "Sandro", idade: 30 };
const atualizado = { ...perfil, cidade: "Lisboa" };
\`\`\``,
    practice: "Cria um array de objetos de tarefas (id, texto, concluida). Implementa funções para adicionar uma tarefa e marcar uma como concluída usando map e spread operator.",
    resources: [
      { name: "MDN - Array Methods", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" }
    ],
    quiz: {
      question: "Qual método devolve uma nova array com os elementos transformados?",
      options: ["forEach()", "map()", "filter()", "push()"],
      correctAnswer: 1
    }
  },
  {
    id: 6,
    category: "Fundamentos",
    difficulty: "Iniciante",
    readingTime: "60 min",
    title: "Aula 6: Manipulação do DOM",
    description: "Interagir com a página web selecionando e modificando elementos HTML.",
    proTip: "Prefere textContent em vez de innerHTML quando não precisas de renderizar HTML real, por razões de segurança (evita ataques XSS).",
    content: `### O que vais aprender nesta aula:
- Selecionar elementos com \`querySelector\` e \`getElementById\`
- Modificar conteúdo, estilos e atributos
- Criar elementos dinamicamente
- Adicionar Event Listeners para interatividade

---

### 🧠 Teoria: A Analogia do Teatro

- **HTML** = o guião da peça (estrutura).
- **CSS** = o cenário e figurinos (aparência).
- **JavaScript/DOM** = os atores que interpretam e interagem (comportamento).

**Porquê isto importa?** Embora o React automatize isto, entender o DOM é crucial para debuggar e entender como o "Virtual DOM" do React funciona por baixo do capô.

---

### 💻 Prática: Interatividade

**1. Selecionar e Mudar**
\`\`\`javascript
const titulo = document.querySelector("h1");
titulo.textContent = "Olá React!";
titulo.style.color = "blue";
\`\`\`

**2. Eventos**
\`\`\`javascript
const botao = document.querySelector("button");
botao.addEventListener("click", () => {
  alert("Clicou!");
});
\`\`\``,
    practice: "Cria uma lista de tarefas interativa onde, ao clicar num botão 'Adicionar', um novo item aparece na lista (UL) usando document.createElement.",
    resources: [
      { name: "MDN - DOM Introduction", url: "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction" }
    ],
    quiz: {
      question: "Qual a principal diferença entre React e manipulação direta do DOM?",
      options: ["React é mais lento", "React usa um Virtual DOM para atualizar apenas o necessário", "React não permite mudar cores", "DOM não existe no React"],
      correctAnswer: 1
    }
  },
  {
    id: 7,
    category: "Fundamentos",
    difficulty: "Iniciante",
    readingTime: "60 min",
    title: "Aula 7: Introdução ao React – O Primeiro Componente",
    description: "Entrar no ecossistema React e criar o teu primeiro componente funcional.",
    proTip: "Nunca esqueças de fechar tags em JSX! Mesmo tags como <img> devem ser escritas como <img />.",
    content: `### O que vais aprender nesta aula:
- Compreender o que é o React e a sua popularidade
- Configurar o ambiente com Vite
- Criar o teu primeiro componente React funcional
- Entender JSX e as suas diferenças para o HTML

---

### 🧠 Teoria: A Analogia dos Lego

- **Componentes React** = peças de Lego individuais (botão, cartão).
- **Aplicação React** = a estrutura completa montada com essas peças.
- **JSX** = a linguagem que descreve como cada peça deve ser montada.

**Por que isto importa?** O React usa uma abordagem declarativa: tu dizes "o quê" deve ser exibido, e o React trata do "como" atualizar o ecrã.

> 💡 **Sabias que?** O React foi criado pelo Facebook e é hoje a biblioteca UI mais popular do mundo, com milhões de developers.

---

### 💻 Prática: O Teu Primeiro Componente

**1. Estrutura Básica**
\`\`\`jsx
export default function App() {
  return (
    <div className="app">
      <h1>Olá, React!</h1>
      <p>O meu primeiro componente.</p>
    </div>
  );
}
\`\`\`

**2. Diferenças JSX**
- \`class\` vira \`className\`
- \`for\` vira \`htmlFor\`
- Expressões JS usam chavetas \`{ }\``,
    practice: "Cria um componente de perfil de utilizador (PerfilUsuario) que exiba nome, idade e cidade usando variáveis dentro do componente e JSX.",
    resources: [
      { name: "React Docs - Your First Component", url: "https://react.dev/learn/your-first-component" }
    ],
    quiz: {
      question: "Qual é a principal vantagem da abordagem declarativa do React?",
      options: ["É mais lenta", "Focas-te no 'o quê' em vez do 'como'", "Não precisa de JS", "Substituio o CSS"],
      correctAnswer: 1
    }
  },
  {
    id: 8,
    category: "Fundamentos",
    difficulty: "Iniciante",
    readingTime: "60 min",
    title: "Aula 8: Props – Comunicando entre Componentes",
    description: "Passar dados entre componentes para criar interfaces modulares e reutilizáveis.",
    proTip: "Tenta desestruturar as tuas props logo nos parâmetros da função: function User({ name }) { ... }",
    content: `### O que vais aprender nesta aula:
- Passar dados do pai para o filho usando props
- Desestruturar props para código mais limpo
- Utilizar a prop especial \`children\`
- Entender o fluxo unidirecional de dados

---

### 🧠 Teoria: A Analogia da Receita

- **Componente Pai** = o chef que decide os ingredientes.
- **Props** = os ingredientes específicos (ovos, farinha).
- **Componente Filho** = a receita que sabe usar esses ingredientes para criar o prato.

**Por que isto importa?** Props permitem que o mesmo componente exiba informações diferentes, tornando-o verdadeiramente reutilizável.

> 💡 **Sabias que?** Em React, os dados fluem apenas do pai para o filho. Isto torna as aplicações muito mais fáceis de prever e testar.

---

### 💻 Prática: Usando Props

**1. Passando Dados**
\`\`\`jsx
// Filho
function Saudacao({ nome }) {
  return <h1>Olá, {nome}!</h1>;
}

// Pai
<Saudacao nome="Sandro" />
\`\`\`

**2. Prop Children**
\`\`\`jsx
function Card({ children }) {
  return <div className="card">{children}</div>;
}
\`\`\``,
    practice: "Cria um componente 'Produto' que recebe nome, preco e descricao. Cria uma 'ListaProdutos' que renderiza vários componentes Produto usando map.",
    resources: [
      { name: "React Docs - Passing Props", url: "https://react.dev/learn/passing-props-to-a-component" }
    ],
    quiz: {
      question: "Qual é a principal regra sobre props em React?",
      options: ["Podem ser alteradas pelo filho", "São imutáveis (read-only)", "Devem ser sempre strings", "Só funcionam em classes"],
      correctAnswer: 1
    }
  },
  {
    id: 9,
    category: "Hooks",
    difficulty: "Iniciante",
    readingTime: "60 min",
    title: "Aula 9: Estado com useState – Interatividade",
    description: "Gerir a 'memória' do componente para criar interfaces dinâmicas que reagem ao utilizador.",
    proTip: "Nunca modifies o estado diretamente! Usa sempre a função setter (setEstado) para que o React saiba que deve atualizar o ecrã.",
    content: `### O que vais aprender nesta aula:
- Utilizar o hook \`useState\` para gerir estado local
- Atualizar estado de forma imutável
- Trabalhar com tipos complexos (arrays e objetos) no estado
- Usar funções de atualização (updater function)

---

### 🧠 Teoria: A Analogia da Memória

- **Props** = informações que te dizem (externas).
- **Estado** = pensamentos e memórias que guardas (internos).
- **useState** = a tua capacidade de recordar e mudar de ideia.

**Por que isto importa?** Sem estado, as tuas apps seriam estáticas. Com estado, podes criar contadores, formulários, carrinhos de compras e muito mais.

> 💡 **Sabias que?** O React só atualiza o ecrã quando deteta que o estado mudou. Por isso a imutabilidade é tão importante!

---

### 💻 Prática: Contador e Formulário

**1. Estado Simples**
\`\`\`jsx
const [count, setCount] = useState(0);
<button onClick={() => setCount(count + 1)}>{count}</button>
\`\`\`

**2. Função Updater (Seguro)**
\`\`\`jsx
setCount(prev => prev + 1); // Garante o valor mais atual
\`\`\``,
    practice: "Cria um conversor de temperatura (Celsius para Fahrenheit) onde o utilizador digita um valor e o resultado aparece instantaneamente no ecrã.",
    resources: [
      { name: "React Docs - useState", url: "https://react.dev/reference/react/useState" }
    ],
    quiz: {
      question: "Qual é a forma correta de adicionar um item a um array no estado?",
      options: ["setItems(items.push(new))", "setItems([...items, new])", "items = [...items, new]", "Nenhuma"],
      correctAnswer: 1
    }
  },
  {
    id: 10,
    category: "Hooks",
    difficulty: "Iniciante",
    readingTime: "60 min",
    title: "Aula 10: Efeitos com useEffect – Sincronização",
    description: "Lidar com efeitos secundários: chamadas de API, timers e eventos globais.",
    proTip: "Sempre que usares timers ou subscrições, usa a função de cleanup do useEffect para evitar fugas de memória (memory leaks).",
    content: `### O que vais aprender nesta aula:
- Executar código após a renderização com \`useEffect\`
- Controlar execuções com o array de dependências
- Realizar limpezas (cleanup) de efeitos
- Fazer requisições a APIs externas

---

### 🧠 Teoria: A Analogia do Assistente

- **Componente** = tu, focado no teu trabalho principal (UI).
- **useEffect** = o teu assistente que trata de tarefas paralelas (buscar café, verificar emails).
- **Dependências** = a lista de coisas que fazem o assistente trabalhar. Se a lista estiver vazia \`[]\`, ele só trabalha quando chegas (montagem).

**Por que isto importa?** Precisas de efeitos para conectar a tua app ao mundo real: bases de dados, APIs de clima, geolocalização, etc.

---

### 💻 Prática: Fetching de Dados

**1. Executar na montagem**
\`\`\`jsx
useEffect(() => {
  console.log("Olá mundo!");
}, []); // [] = corre apenas uma vez
\`\`\`

**2. API Real**
\`\`\`jsx
useEffect(() => {
  fetch('url').then(res => res.json()).then(setData);
}, [dependencia]); // Corre quando a dependencia muda
\`\`\``,
    practice: "Cria um componente que busca e exibe o clima de uma cidade (podes usar uma função fake com delay) sempre que o nome da cidade mudar num input.",
    resources: [
      { name: "React Docs - useEffect", url: "https://react.dev/reference/react/useEffect" }
    ],
    quiz: {
      question: "Quando é que um useEffect com [] é executado?",
      options: ["Em cada renderização", "Apenas na primeira (montagem)", "Nunca", "Apenas na desmontagem"],
      correctAnswer: 1
    }
  },
  {
    id: 11,
    category: "Hooks",
    difficulty: "Intermédio",
    readingTime: "60 min",
    title: "Aula 11: Hooks Personalizados – Reutilização",
    description: "Extrair lógica complexa para funções reutilizáveis, mantendo os teus componentes limpos e modulares.",
    proTip: "Pergunta-te: 'Estou a repetir esta lógica em mais de um componente?' Se sim, é hora de criar um hook personalizado!",
    content: `### O que vais aprender nesta aula:
- Criar hooks personalizados (useXyz)
- Partilhar lógica sem duplicar código
- Combinar múltiplos hooks nativos num só
- Seguir as Rules of Hooks em funções customizadas

---

### 🧠 Teoria: A Analogia das Receitas

- **Lógica duplicada** = copiar a mesma receita em 10 cadernos diferentes.
- **Hook personalizado** = criar uma receita mestra que todos podem referenciar.

**Por que isto importa?** Hooks personalizados permitem separar o 'comportamento' da 'aparência'. O teu componente fica focado no HTML/JSX e o Hook focado na lógica.

> 💡 **Sabias que?** A convenção \`use\` no nome é obrigatória para que o React saiba que aquela função pode conter outros hooks internamente.

---

### 💻 Prática: Criando useFetch

\`\`\`javascript
function useOnline() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  // ... lógica de addEventListener
  return isOnline;
}
\`\`\``,
    practice: "Cria um hook personalizado 'useCounter' que aceite um valor máximo e forneça funções para incrementar, decrementar e resetar.",
    resources: [
      { name: "React Docs - Custom Hooks", url: "https://react.dev/learn/reusing-logic-with-custom-hooks" }
    ],
    quiz: {
      question: "Qual é a convenção de nomenclatura para hooks personalizados?",
      options: ["hookXyz", "customXyz", "useXyz", "reactXyz"],
      correctAnswer: 2
    }
  },
  {
    id: 12,
    category: "Navegação",
    difficulty: "Intermédio",
    readingTime: "60 min",
    title: "Aula 12: Rotas com React Router – Navegação SPA",
    description: "Criar aplicações de página única com navegação fluida entre diferentes vistas e URLs.",
    proTip: "Nunca uses <a href> em apps React Router! Usa <Link to> para evitar que a página inteira recarregue e percas o estado.",
    content: `### O que vais aprender nesta aula:
- Configurar o React Router v6
- Criar rotas dinâmicas com parâmetros (/:id)
- Implementar navegação programática (useNavigate)
- Tratar páginas não encontradas (404)

---

### 🧠 Teoria: A Analogia do GPS

- **URL** = coordenadas GPS (ex: /perfil/sandro).
- **Componente** = o destino visual.
- **React Router** = o sistema que te leva ao destino sem recarregar o carro.

**Por que isto importa?** Em aplicações reais, precisas de URLs que os utilizadores possam partilhar e usar para navegar 'Para Trás' e 'Para a Frente' no browser.

---

### 💻 Prática: Configuração de Rotas

\`\`\`jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/blog/:id" element={<PostDetail />} />
  <Route path="*" element={<NotFound />} />
</Routes>
\`\`\``,
    practice: "Cria um blog simples com uma página de lista de posts e uma página de detalhe que usa useParams() para identificar qual post exibir.",
    resources: [
      { name: "React Router Tutorial", url: "https://reactrouter.com/en/main/start/tutorial" }
    ],
    quiz: {
      question: "Qual componente deves usar para navegar sem recarregar a página?",
      options: ["<a>", "<Navigation>", "<Link>", "<Route>"],
      correctAnswer: 2
    }
  },
  {
    id: 13,
    category: "Estado Global",
    difficulty: "Intermédio",
    readingTime: "60 min",
    title: "Aula 13: Gestão de Estado Global com Context API",
    description: "Partilhar informação entre componentes distantes sem precisar de passar props manualmente por todos os níveis.",
    proTip: "Usa a Context API com moderação. Se o dado é usado apenas por dois componentes próximos, continua a usar props!",
    content: `### O que vais aprender nesta aula:
- Criar e fornecer contexto com \`createContext\` e \`Provider\`
- Consumir dados globais com \`useContext\`
- Resolver o problema do 'Prop Drilling'
- Persistir dados globais (ex: Temas ou Autenticação)

---

### 🧠 Teoria: A Analogia do Megafone

- **Prop Drilling** = passar um recado de pessoa em pessoa até chegar ao fim da fila.
- **Context API** = usar um megafone para que todos oiçam a mensagem diretamente.

**Por que isto importa?** Dados como 'Quem é o utilizador logado?' ou 'O tema é escuro ou claro?' são necessários em quase toda a app. O Contexto torna-os acessíveis em qualquer lado.

---

### 💻 Prática: ThemeContext

\`\`\`jsx
const ThemeContext = createContext();

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Main />
    </ThemeContext.Provider>
  );
}
\`\`\``,
    practice: "Cria um sistema de autenticação global (AuthContext) onde qualquer componente pode saber se o utilizador está logado e qual o seu nome.",
    resources: [
      { name: "React Docs - Context", url: "https://react.dev/reference/react/useContext" }
    ],
    quiz: {
      question: "Qual é o principal problema que a Context API resolve?",
      options: ["Prop Drilling", "Lentidão do JS", "Falta de CSS", "Erros de sintaxe"],
      correctAnswer: 0
    }
  },
  {
    id: 14,
    category: "Performance",
    difficulty: "Avançado",
    readingTime: "60 min",
    title: "Aula 14: Performance em React – useMemo e useCallback",
    description: "Otimizar aplicações evitando cálculos caros e re-renderizações desnecessárias em componentes pesados.",
    proTip: "Regra de ouro: Não otimizes prematuramente! Só usa estes hooks se tiveres problemas reais de lentidão detetados no Profiler.",
    content: `### O que vais aprender nesta aula:
- Memoizar cálculos com \`useMemo\`
- Estabilizar funções com \`useCallback\`
- Entender quando (e quando não) otimizar
- Prevenir re-renderizações de filhos com \`React.memo\`

---

### 🧠 Teoria: A Analogia do Bloco de Notas

- **Sem memoização** = fazer uma conta matemática gigante todas as manhãs.
- **Com useMemo** = fazer a conta uma vez, escrever o resultado num post-it e só refazer se os números mudarem.

**Por que isto importa?** Funções e objetos são recriados em cada renderização. Se passares estas referências para componentes filhos pesados, eles vão re-renderizar sem necessidade.

---

### 💻 Prática: Memoização

**1. useMemo (Valores)**
\`\`\`jsx
const total = useMemo(() => calcular(dados), [dados]);
\`\`\`

**2. useCallback (Funções)**
\`\`\`jsx
const handleAdd = useCallback(() => { ... }, [dependencias]);
\`\`\``,
    practice: "Otimiza uma lista de 1000 itens onde o cálculo do total deve ser memoizado para não travar a interface ao digitar num input de procura.",
    resources: [
      { name: "React Docs - useMemo", url: "https://react.dev/reference/react/useMemo" },
      { name: "React Docs - useCallback", url: "https://react.dev/reference/react/useCallback" }
    ],
    quiz: {
      question: "Para que serve o useMemo?",
      options: ["Memoizar cálculos caros", "Mudar o estilo CSS", "Fazer fetch de APIs", "Criar novas rotas"],
      correctAnswer: 0
    }
  },
  {
    id: 15,
    category: "Testes",
    difficulty: "Intermédio",
    readingTime: "60 min",
    title: "Aula 15: Testes em React – Jest e RTL",
    description: "Garantir a qualidade do código com testes unitários e de interação.",
    proTip: "Nunca testes a implementação interna. Testa o que o utilizador vê e faz. Isto torna os teus testes resilientes a refatorações.",
    content: `### O que vais aprender nesta aula:
- Configurar Jest e React Testing Library (RTL)
- Escrever testes unitários para componentes
- Testar interações do utilizador e eventos
- Mockar APIs externas

---

### 🧠 Teoria: Os Inspetores de Qualidade
Testes automatizados são como inspetores numa fábrica:
- **Unitários** = verificam se cada peça individual funciona.
- **Integração** = verificam se as peças encaixam bem.
- **Jest + RTL** = a equipa especializada para componentes React.

**Porquê isto importa?** Dá-te confiança para mudar o código sem medo de quebrar o que já funciona. É essencial em ambientes profissionais.

---

### 💻 Prática: O teu primeiro teste
\`\`\`jsx
import { render, screen } from '@testing-library/react';
import Button from './Button';

test('renderiza o texto do botão', () => {
  render(<Button>Clique aqui</Button>);
  expect(screen.getByText(/clique aqui/i)).toBeInTheDocument();
});
\`\`\``,
    practice: "Escreve testes para um componente de formulário de login, verificando se os campos de email e password existem e se o botão de login está ativo.",
    resources: [
      { name: "React Testing Library Docs", url: "https://testing-library.com/docs/react-testing-library/intro/" }
    ],
    quiz: {
      question: "Qual é a abordagem recomendada pela React Testing Library?",
      options: ["Testar a implementação interna", "Testar da perspetiva do utilizador", "Testar apenas o CSS", "Não testar nada"],
      correctAnswer: 1
    }
  },
  {
    id: 16,
    category: "TypeScript",
    difficulty: "Intermédio",
    readingTime: "60 min",
    title: "Aula 16: TypeScript com React – Tipagem Estática",
    description: "Adicionar segurança ao código React detetando erros antes de executar.",
    proTip: "Não tentes tipar tudo de uma vez. Começa com as props dos novos componentes e vai avançando gradualmente.",
    content: `### O que vais aprender nesta aula:
- Configurar TS num projeto React
- Definir tipos para Props e State
- Utilizar Interfaces e Generics
- Tipar hooks e eventos do DOM

---

### 🧠 Teoria: O Co-Piloto Inteligente
TypeScript é como ter um co-piloto que te avisa imediatamente se estás a voar na direção errada:
- **JavaScript** = descobres o erro quando o avião cai (browser).
- **TypeScript** = o erro aparece a vermelho enquanto escreves o código.

---

### 💻 Prática: Tipando Componentes
\`\`\`tsx
interface UserProps {
  name: string;
  age: number;
}

function UserProfile({ name, age }: UserProps) {
  return <div>{name}, {age} anos</div>;
}
\`\`\``,
    practice: "Converte um componente funcional de lista de tarefas para TypeScript, definindo uma interface para a 'Task'.",
    resources: [
      { name: "React TypeScript Cheatsheet", url: "https://react-typescript-cheatsheet.netlify.app/" }
    ],
    quiz: {
      question: "Como se tipa o estado com useState em TS?",
      options: ["useState<string>('')", "useState('') as string", "const string state = ''", "Nenhuma das anteriores"],
      correctAnswer: 0
    }
  },
  {
    id: 17,
    category: "Design",
    difficulty: "Intermédio",
    readingTime: "60 min",
    title: "Aula 17: Styled Components – CSS-in-JS",
    description: "Estilizar componentes de forma modular e dinâmica usando JavaScript.",
    proTip: "Pensa nos teus componentes como unidades completas: lógica + design no mesmo ficheiro.",
    content: `### O que vais aprender nesta aula:
- Criar componentes estilizados
- Passar props para mudar o design dinamicamente
- Criar Temas Globais (Dark/Light Mode)
- Estilizar componentes de terceiros

---

### 🧠 Teoria: O Designer Integrado
Styled Components é como ter um designer sentado ao teu lado, criando estilos específicos para cada peça, sem risco de conflitos de nomes (cascading).

---

### 💻 Prática: Estilos Dinâmicos
\`\`\`jsx
const Button = styled.button\`
  background: \${props => props.primary ? 'blue' : 'gray'};
  color: white;
  border-radius: 8px;
\`;
\`\`\``,
    practice: "Cria um sistema de cartões de produto usando Styled Components, onde produtos 'em destaque' têm uma borda dourada via props.",
    resources: [
      { name: "Styled Components Docs", url: "https://styled-components.com/docs" }
    ],
    quiz: {
      question: "Qual a vantagem do Styled Components sobre o CSS tradicional?",
      options: ["É mais rápido", "Evita conflitos de nomes e estilos órfãos", "Não precisa de JS", "É padrão do HTML"],
      correctAnswer: 1
    }
  },
  {
    id: 18,
    category: "Data",
    difficulty: "Intermédio",
    readingTime: "60 min",
    title: "Aula 18: React Query – Gestão de Dados",
    description: "Simplificar a busca, cache e sincronização de dados do servidor.",
    proTip: "Nunca uses useEffect para buscar dados! O React Query foi feito exatamente para resolver isso de forma robusta.",
    content: `### O que vais aprender nesta aula:
- Buscar dados com useQuery
- Atualizar dados com Mutations
- Configurar Cache e Invalidação automática
- Lidar com estados de Loading e Erro de forma profissional

---

### 🧠 Teoria: O Gestor de Cache
React Query é o assistente que verifica se já tens o que precisas em casa (cache) antes de te mandar ir ao supermercado (servidor).

---

### 💻 Prática: Fetching Profissional
\`\`\`jsx
const { data, isLoading } = useQuery(['users'], fetchUsers);
\`\`\``,
    practice: "Cria uma lista de posts que usa React Query e implementa um botão de 'Atualizar' que invalida a cache para forçar um novo fetch.",
    resources: [
      { name: "TanStack Query Docs", url: "https://tanstack.com/query/latest" }
    ],
    quiz: {
      question: "Para que serve o staleTime no React Query?",
      options: ["Para apagar os dados", "Para definir quanto tempo os dados são considerados 'frescos'", "Para acelerar a internet", "Para mudar o tema"],
      correctAnswer: 1
    }
  },
  {
    id: 19,
    category: "Formulários",
    difficulty: "Intermédio",
    readingTime: "60 min",
    title: "Aula 19: React Hook Form – Validação",
    description: "Criar formulários complexos com performance otimizada e validação robusta.",
    proTip: "Usa a abordagem 'uncontrolled' do React Hook Form para evitar re-renderizações desnecessárias em formulários gigantes.",
    content: `### O que vais aprender nesta aula:
- Configurar o hook useForm
- Validação nativa e com Yup/Zod
- Tratar erros e submissões assíncronas
- Criar inputs reutilizáveis com forwardRef

---

### 🧠 Teoria: O Assistente de Formulários
Pensa no React Hook Form como um secretário que preenche a papelada por ti e só te interrompe se encontrares um erro óbvio.

---

### 💻 Prática: Formulário de Registo
\`\`\`jsx
const { register, handleSubmit } = useForm();
<input {...register('email', { required: true })} />
\`\`\``,
    practice: "Cria um formulário de contacto com validação avançada (email válido, mensagem mínima de 10 caracteres) usando Yup.",
    resources: [
      { name: "React Hook Form Docs", url: "https://react-hook-form.com/" }
    ],
    quiz: {
      question: "Porquê usar React Hook Form em vez de gerir tudo com useState?",
      options: ["É mais colorido", "Melhor performance e menos código boilerplate", "Não precisa de HTML", "É obrigatório"],
      correctAnswer: 1
    }
  },
  {
    id: 20,
    category: "Segurança",
    difficulty: "Avançado",
    readingTime: "60 min",
    title: "Aula 20: Autenticação e Proteção de Rotas",
    description: "Implementar sistemas de Login, tokens JWT e áreas privadas seguras.",
    proTip: "Nunca confies apenas no frontend. A segurança real é feita no servidor; o frontend apenas esconde o que o utilizador não deve ver.",
    content: `### O que vais aprender nesta aula:
- Criar o AuthContext global
- Persistir sessões com Tokens (JWT)
- Criar componentes de Rota Protegida
- Implementar Logout e limpeza de estado

---

### 🧠 Teoria: O Sistema de Segurança
- **Login** = Apresentar identificação na receção.
- **Token** = Crachá temporário para circular no edifício.
- **PrivateRoute** = Portas que só abrem com o crachá correto.

---

### 💻 Prática: Protegendo Rotas
\`\`\`jsx
function PrivateRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
}
\`\`\``,
    practice: "Implementa um sistema onde o Dashboard só é visível se existir um utilizador no AuthContext. Caso contrário, redireciona para Login.",
    resources: [
      { name: "JWT.io", url: "https://jwt.io/" }
    ],
    quiz: {
      question: "Onde é mais seguro guardar tokens sensíveis no browser?",
      options: ["LocalStorage", "Cookies HttpOnly", "Variáveis globais", "No URL"],
      correctAnswer: 1
    }
  },
  {
    id: 21,
    category: "Testes",
    difficulty: "Avançado",
    readingTime: "60 min",
    title: "Aula 21: Testes Avançados e Mocking",
    description: "Simular cenários complexos, falhas de API e timers em testes de alta qualidade.",
    proTip: "Escreve testes como se estivesses a documentar o comportamento da app. Um bom teste deve ser legível por humanos.",
    content: `### O que vais aprender nesta aula:
- Mockar APIs complexas com MSW ou Jest
- Testar hooks personalizados com renderHook
- Simular passagem de tempo (fake timers)
- Testar fluxos de integração completos

---

### 🧠 Teoria: As Simulações de Voo
Mocking é simular situações de emergência (falha de motor, mau tempo) num ambiente seguro, para garantir que o piloto (aplicação) sabe reagir.

---

### 💻 Prática: Mocking de API
\`\`\`javascript
global.fetch = jest.fn().mockResolvedValue({
  json: () => Promise.resolve({ name: 'Sandro' })
});
\`\`\``,
    practice: "Escreve um teste avançado para o hook 'useCounter' que criaste na aula 11, garantindo que ele não ultrapassa o valor máximo.",
    resources: [
      { name: "Mock Service Worker", url: "https://mswjs.io/" }
    ],
    quiz: {
      question: "Qual a principal vantagem de 'mockar' uma API nos testes?",
      options: ["Tornar o teste mais lento", "Isolar o teste de falhas externas e torná-lo rápido", "Pagar menos pela API", "Não serve para nada"],
      correctAnswer: 1
    }
  },
  {
    id: 22,
    category: "Performance",
    difficulty: "Avançado",
    readingTime: "60 min",
    title: "Aula 22: Performance Avançada e Lazy Loading",
    description: "Otimizar o carregamento de apps gigantes dividindo o código em pedaços menores.",
    proTip: "Usa o React DevTools Profiler para identificar exatamente qual o componente que está a travar a tua aplicação.",
    content: `### O que vais aprender nesta aula:
- Code Splitting com React.lazy e Suspense
- Otimização de imagens e ativos
- Virtualização de listas (renderizar só o que se vê)
- Estratégias de Prefetching

---

### 🧠 Teoria: A Analogia das Malas
Lazy Loading é como pedir as peças de um móvel conforme as vais montando, em vez de carregar o camião inteiro de uma só vez.

---

### 💻 Prática: Carregamento Preguiçoso
\`\`\`jsx
const Dashboard = lazy(() => import('./Dashboard'));
// ...
<Suspense fallback={<Spinner />}>
  <Dashboard />
</Suspense>
\`\`\``,
    practice: "Divide o teu projeto principal em rotas carregadas via 'lazy', medindo a redução do tamanho do ficheiro inicial.",
    resources: [
      { name: "React Docs - Code Splitting", url: "https://react.dev/learn/code-splitting" }
    ],
    quiz: {
      question: "O que faz a virtualização de listas?",
      options: ["Apaga a lista", "Renderiza apenas os itens visíveis na janela", "Converte lista em vídeo", "Não existe"],
      correctAnswer: 1
    }
  },
  {
    id: 23,
    category: "Segurança",
    difficulty: "Avançado",
    readingTime: "60 min",
    title: "Aula 23: Segurança em React – Boas Práticas",
    description: "Proteção contra ataques XSS, CSRF e injeção de código malicioso.",
    proTip: "Pensa como um atacante: 'Como é que eu poderia abusar deste formulário?'. Prevenção é o melhor remédio.",
    content: `### O que vais aprender nesta aula:
- Prevenir XSS (Sanitização)
- Implementar Content Security Policy (CSP)
- Gerir segredos e variáveis de ambiente
- Boas práticas de validação no cliente e servidor

---

### 🧠 Teoria: O Sistema de Defesa
Segurança é como um castelo: não basta ter uma porta forte (login); precisas de fossos, arqueiros e vigilância constante em cada janela.

---

### 💻 Prática: Sanitização
\`\`\`jsx
import DOMPurify from 'dompurify';
const cleanHTML = DOMPurify.sanitize(dirtyHTML);
\`\`\``,
    practice: "Implementa uma política de segurança onde qualquer HTML inserido pelo utilizador é limpo antes de ser exibido.",
    resources: [
      { name: "OWASP Top 10", url: "https://owasp.org/www-project-top-ten/" }
    ],
    quiz: {
      question: "Qual é a melhor forma de prevenir XSS em React?",
      options: ["Evitar dangerouslySetInnerHTML", "Usar apenas divs", "Não usar JS", "Usar cores vivas"],
      correctAnswer: 0
    }
  },
  {
    id: 24,
    category: "I18n",
    difficulty: "Intermédio",
    readingTime: "60 min",
    title: "Aula 24: Internacionalização (i18n)",
    description: "Criar aplicações globais que suportam múltiplos idiomas e moedas.",
    proTip: "Nunca concatenes strings traduzidas! Usa placeholders para manter a ordem correta das palavras em cada língua.",
    content: `### O que vais aprender nesta aula:
- Configurar react-i18next
- Gerir ficheiros de tradução (JSON)
- Mudar idiomas dinamicamente
- Formatação de datas e números locais

---

### 🧠 Teoria: Os Intérpretes
i18n é como ter intérpretes profissionais numa conferência: cada um ouve o mesmo conteúdo na sua língua, sem perder o significado original.

---

### 💻 Prática: Traduzindo
\`\`\`jsx
const { t } = useTranslation();
<h1>{t('welcome_message')}</h1>
\`\`\``,
    practice: "Cria uma interface de e-commerce que suporte Português, Inglês e Espanhol, incluindo a mudança do símbolo da moeda.",
    resources: [
      { name: "react-i18next Docs", url: "https://react.i18next.com/" }
    ],
    quiz: {
      question: "Qual a vantagem de usar i18n em vez de vários sites diferentes?",
      options: ["É mais caro", "Um único código mantém todos os idiomas sincronizados", "Não há vantagem", "O Google obriga"],
      correctAnswer: 1
    }
  },
  {
    id: 25,
    category: "Acessibilidade",
    difficulty: "Intermédio",
    readingTime: "60 min",
    title: "Aula 25: Acessibilidade (a11y) Profissional",
    description: "Garantir que a tua aplicação é utilizável por todos, incluindo pessoas com deficiências.",
    proTip: "Se o teu site não funciona só com o teclado, ele não é acessível. Testa sempre sem usar o rato!",
    content: `### O que vais aprender nesta aula:
- Princípios WCAG (A, AA, AAA)
- Uso correto de ARIA labels e Roles
- Gestão de Foco e contraste de cores
- Testar com Leitores de Ecrã

---

### 🧠 Teoria: A Cidade Inclusiva
Acessibilidade é como construir uma cidade com rampas, semáforos sonoros e sinalização tátil: beneficia todos, não apenas quem tem necessidades específicas.

---

### 💻 Prática: Botões Acessíveis
\`\`\`jsx
<button aria-label="Fechar modal" onClick={close}>
  <IconX />
</button>
\`\`\``,
    practice: "Faz uma auditoria de acessibilidade no teu projeto usando a ferramenta 'Lighthouse' e corrige todos os erros encontrados.",
    resources: [
      { name: "A11y Project", url: "https://www.a11yproject.com/" }
    ],
    quiz: {
      question: "O que significa WCAG?",
      options: ["World Code Access Group", "Web Content Accessibility Guidelines", "Web Center for Accessible Graphics", "Nenhuma"],
      correctAnswer: 1
    }
  },
  {
    id: 26,
    category: "Animações",
    difficulty: "Intermédio",
    readingTime: "60 min",
    title: "Aula 26: Animações e Micro-interações",
    description: "Criar experiências envolventes com Framer Motion e transições fluidas.",
    proTip: "Menos é mais. Animações devem guiar o utilizador, não distraí-lo. Usa movimentos suaves e intencionais.",
    content: `### O que vais aprender nesta aula:
- Transições CSS vs Framer Motion
- Animar entrada e saída de elementos
- Micro-interações de feedback (cliques, sucesso)
- Gestos (drag, hover avançado)

---

### 🧠 Teoria: A Coreografia Teatral
Animações são como a coreografia: movimentos fluidos guiam a atenção do público e tornam a experiência mais natural e envolvente.

---

### 💻 Prática: Framer Motion
\`\`\`jsx
<motion.div animate={{ scale: 1.2 }} />
\`\`\``,
    practice: "Cria um botão que, ao ser clicado, exibe um ícone de 'Sucesso' com uma animação de pulsação e mude de cor suavemente.",
    resources: [
      { name: "Framer Motion Docs", url: "https://www.framer.com/motion/" }
    ],
    quiz: {
      question: "Qual propriedade deve ser animada para melhor performance?",
      options: ["width/height", "transform/opacity", "margin/padding", "color/border"],
      correctAnswer: 1
    }
  },
  {
    id: 27,
    category: "Testes",
    difficulty: "Avançado",
    readingTime: "60 min",
    title: "Aula 27: Testes End-to-End com Cypress",
    description: "Simular fluxos reais do utilizador no navegador, do início ao fim.",
    proTip: "Usa atributos 'data-cy' para os teus seletores. Classes CSS mudam para design e podem quebrar os teus testes desnecessariamente.",
    content: `### O que vais aprender nesta aula:
- Configurar Cypress ou Playwright
- Escrever testes de Aceitação (User Journeys)
- Interagir com elementos reais e navegação
- Integrar E2E no pipeline de CI/CD

---

### 🧠 Teoria: Os Utilizadores Beta
Testes E2E são utilizadores virtuais que testam o teu site 24/7, garantindo que o fluxo de compra ou registo nunca falha.

---

### 💻 Prática: O teu fluxo E2E
\`\`\`javascript
it('faz login com sucesso', () => {
  cy.visit('/login');
  cy.get('[data-cy=email]').type('user@test.com');
  cy.get('[data-cy=btn]').click();
  cy.url().should('include', '/dashboard');
});
\`\`\``,
    practice: "Cria um teste E2E completo: Registo -> Login -> Adicionar ao Carrinho -> Checkout.",
    resources: [
      { name: "Cypress Docs", url: "https://docs.cypress.io/" }
    ],
    quiz: {
      question: "O que testa um teste E2E?",
      options: ["Uma função isolada", "O fluxo completo da app no browser", "Apenas a base de dados", "O código CSS"],
      correctAnswer: 1
    }
  },
  {
    id: 28,
    category: "Deploy",
    difficulty: "Avançado",
    readingTime: "60 min",
    title: "Aula 28: Deployment e CI/CD Profissional",
    description: "Automatizar a publicação da app com pipelines de integração contínua.",
    proTip: "Configura um 'Health Check'. Se a app nova falhar no arranque, o pipeline deve fazer 'Rollback' automático para a versão anterior.",
    content: `### O que vais aprender nesta aula:
- Deploys automáticos (Vercel, Netlify)
- GitHub Actions para CI/CD
- Gestão de ambientes (Staging vs Produção)
- Monitorização de erros em produção (Sentry)

---

### 🧠 Teoria: A Linha de Montagem
CI/CD é como uma fábrica moderna: o código entra (Push), passa por inspeções automáticas (Testes) e sai embalado para o cliente (Deploy).

---

### 💻 Prática: GitHub Action
\`\`\`yaml
on: push
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - run: npm install && npm run build
\`\`\``,
    practice: "Configura um pipeline que corre os teus testes automaticamente em cada Pull Request e só permite o Merge se eles passarem.",
    resources: [
      { name: "GitHub Actions Guide", url: "https://github.com/features/actions" }
    ],
    quiz: {
      question: "Qual a vantagem do CI/CD?",
      options: ["Mais bugs", "Publicações rápidas, frequentes e seguras", "Trabalhar menos", "Gastar mais dinheiro"],
      correctAnswer: 1
    }
  },
  {
    id: 29,
    category: "Arquitetura",
    difficulty: "Avançado",
    readingTime: "60 min",
    title: "Aula 29: Arquitetura e Escalabilidade",
    description: "Estruturar projetos gigantes que centenas de developers podem manter simultaneamente.",
    proTip: "Pergunta-te: 'Se eu tiver que remover esta funcionalidade, quantos ficheiros tenho que tocar?'. Quanto menos, melhor a arquitetura.",
    content: `### O que vais aprender nesta aula:
- Feature-Sliced Design (FSD)
- Princípios SOLID em React
- Camadas de abstração (Entities, Features, App)
- Preparar para Micro-frontends

---

### 🧠 Teoria: O Planeamento Urbano
Arquitetura é como o planeamento de uma cidade: bairros organizados, infraestrutura invisível e regras de construção que evitam o caos à medida que cresce.

---

### 💻 Prática: Estrutura FSD
\`\`\`text
src/
  features/   (Lógica de negócio)
  entities/   (Dados de domínio)
  shared/     (UI reutilizável)
\`\`\``,
    practice: "Reestrutura o teu projeto final seguindo os princípios de camadas de abstração, isolando a lógica de API da lógica de UI.",
    resources: [
      { name: "Feature-Sliced Design", url: "https://feature-sliced.design/" }
    ],
    quiz: {
      question: "O que é o princípio da Responsabilidade Única?",
      options: ["Todos fazem tudo", "Um componente deve fazer apenas uma coisa e bem", "Ninguém é responsável", "Fazer código rápido"],
      correctAnswer: 1
    }
  },
  {
    id: 30,
    category: "Conclusão",
    difficulty: "Avançado",
    readingTime: "60 min",
    title: "Aula 30: Projeto Final Profissional",
    description: "Consolidar 30 aulas de conhecimento numa aplicação completa pronta para o mercado.",
    proTip: "Qualidade sobre Quantidade. Um projeto final perfeito com testes e boa arquitetura vale mais do que 10 projetos incompletos no teu portfolio.",
    content: `### O que vais fazer hoje:
- Aplicar TODOS os conceitos aprendidos
- Implementar uma app completa (ex: E-learning ou Dashboard)
- Deploy com CI/CD e Documentação
- Preparação para Portfolio

---

### 🎓 Teoria: A Tese de Mestrado
Este projeto é a prova física da tua evolução. É o que vais mostrar nas entrevistas para provar que és um developer React de elite.

---

### 🚀 Prática Final: Check-list
- [ ] Autenticação funcional
- [ ] Gestão de estado global
- [ ] Testes Unitários e E2E
- [ ] Performance otimizada (Lazy loading)
- [ ] Acessibilidade e I18n`,
    practice: "Finaliza, documenta e publica a tua aplicação. Escreve um README.md profissional explicando as decisões técnicas que tomaste.",
    resources: [
      { name: "React Roadmap 2026", url: "https://roadmap.sh/react" }
    ],
    quiz: {
      question: "Qual o próximo passo após terminar este curso?",
      options: ["Parar de estudar", "Continuar a construir projetos reais e manter-se atualizado", "Mudar de área", "Esquecer tudo"],
      correctAnswer: 1
    }
  }
];
