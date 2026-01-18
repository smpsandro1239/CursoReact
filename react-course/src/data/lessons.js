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
console.log(\`Estou a aprender ${linguagem}!\`);
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
  console.log(\`Estou a aprender ${lang}!\`);
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
      question: "Qual é a principal problema que a Context API resolve?",
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
    category: "APIs",
    difficulty: "Intermediário",
    readingTime: "15 min",
    title: "Aula 15: Consumindo APIs com Fetch",
    description: "Buscando dados do mundo real.",
    proTip: "Sempre verifique se a resposta é 'ok' antes de tentar converter para JSON: if (!res.ok) throw new Error().",
    content: `Aprendemos a usar o comando \`fetch\` dentro de um \`useEffect\` para carregar dados de uma API externa (como a JSONPlaceholder).

Lidamos com estados de \`loading\`, \`error\` e \`data\`.`,
    practice: "Tente buscar a lista de usuários da URL 'https://jsonplaceholder.typicode.com/users' e exiba os nomes em uma lista.",
    resources: [
      { name: "MDN - Fetch API", url: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API" }
    ],
    quiz: {
      question: "Qual o melhor lugar para fazer uma chamada de API (fetch) em um componente funcional?",
      options: ["No corpo do componente (diretamente)", "Dentro de um useEffect", "Dentro de um arquivo CSS", "No index.html"],
      correctAnswer: 1
    }
  },
  {
    id: 16,
    category: "Hooks",
    difficulty: "Avançado",
    readingTime: "12 min",
    title: "Aula 16: Custom Hooks - Reutilização Máxima",
    description: "Extraindo sua própria lógica.",
    proTip: "Custom Hooks são ótimos para testar lógica de negócio de forma isolada dos seus componentes visuais.",
    content: `Se você usa a mesma lógica em vários lugares, crie seu próprio Hook!

Exemplo: \`useFetch\`, \`useLocalStorage\`, \`useAuth\`.`,
    practice: "Tente criar um hook chamado 'useToggle' que alterna um valor entre true e false.",
    resources: [
      { name: "Reusing Logic with Custom Hooks", url: "https://react.dev/learn/reusing-logic-with-custom-hooks" }
    ],
    quiz: {
      question: "Qual o prefixo obrigatório para o nome de um Custom Hook?",
      options: ["get", "handle", "use", "react"],
      correctAnswer: 2
    }
  },
  {
    id: 17,
    category: "Performance",
    difficulty: "Avançado",
    readingTime: "10 min",
    title: "Aula 17: Performance com useMemo",
    description: "Evitando cálculos desnecessários.",
    proTip: "Só use useMemo se o cálculo for realmente custoso. Otimização prematura pode tornar seu código mais complexo sem ganho real.",
    content: `O \`useMemo\` guarda o resultado de um cálculo pesado para que ele não seja refeito em toda renderização, a menos que suas dependências mudem.`,
    practice: "Crie uma função que simula um cálculo demorado e use o useMemo para otimizá-la.",
    resources: [
      { name: "React API - useMemo", url: "https://react.dev/reference/react/useMemo" }
    ],
    quiz: {
      question: "Para que serve o useMemo?",
      options: ["Para memorizar um valor calculado", "Para memorizar uma função", "Para criar um novo componente", "Para fazer chamadas de API"],
      correctAnswer: 0
    }
  },
  {
    id: 18,
    category: "Performance",
    difficulty: "Avançado",
    readingTime: "10 min",
    title: "Aula 18: Otimização com useCallback",
    description: "Memorizando funções.",
    proTip: "useCallback é essencial quando você passa funções para componentes filhos que usam React.memo para evitar renderizações extras.",
    content: `Similar ao useMemo, mas para funções. Evita que funções sejam recriadas desnecessariamente, o que é útil ao passar funções para componentes filhos otimizados com \`React.memo\`.`,
    practice: "Explique com suas palavras a diferença entre useMemo e useCallback.",
    resources: [
      { name: "React API - useCallback", url: "https://react.dev/reference/react/useCallback" }
    ],
    quiz: {
      question: "O que o useCallback retorna?",
      options: ["O resultado de uma função", "Uma versão memorizada da função em si", "Um booleano", "Um elemento JSX"],
      correctAnswer: 1
    }
  },
  {
    id: 19,
    category: "Performance",
    difficulty: "Avançado",
    readingTime: "8 min",
    title: "Aula 19: React.memo",
    description: "Impedindo renderizações inúteis.",
    proTip: "O React.memo faz uma comparação rasa (shallow) das props. Cuidado ao passar objetos ou arrays criados dentro do componente pai.",
    content: `O \`React.memo\` é um Higher Order Component que impede que um componente seja renderizado novamente se suas props não mudarem.`,
    practice: "Aplique o React.memo em um componente simples de exibição de texto.",
    resources: [
      { name: "React API - memo", url: "https://react.dev/reference/react/memo" }
    ],
    quiz: {
      question: "Quando o React.memo decide NÃO renderizar novamente um componente?",
      options: ["Sempre", "Nunca", "Quando as novas props são iguais às anteriores", "Quando o estado interno muda"],
      correctAnswer: 2
    }
  },
  {
    id: 20,
    category: "Ativos",
    difficulty: "Iniciante",
    readingTime: "6 min",
    title: "Aula 20: Trabalhando com Imagens e Ativos",
    description: "Melhores práticas para arquivos estáticos.",
    proTip: "Use formatos modernos como WebP e tamanhos responsivos para garantir que seu app carregue instantaneamente mesmo em conexões lentas.",
    content: `Como importar imagens, usar a pasta \`public\` e otimizar assets para que sua aplicação carregue rápido.`,
    practice: "Adicione uma imagem de sua preferência ao projeto e exiba-a usando um componente React.",
    resources: [
      { name: "Vite - Static Asset Handling", url: "https://vitejs.dev/guide/assets.html" }
    ],
    quiz: {
      question: "Onde devem ficar os arquivos que você quer que sejam acessíveis via URL direta (sem processamento)?",
      options: ["src/assets", "src/components", "public/", "node_modules/"],
      correctAnswer: 2
    }
  },
  {
    id: 21,
    category: "Avançado",
    difficulty: "Avançado",
    readingTime: "8 min",
    title: "Aula 21: Portals - Renderizando fora do Root",
    description: "O segredo dos modais e tooltips.",
    proTip: "Portals mantêm o contexto do React, o que significa que eventos disparados dentro do portal ainda borbulham para os pais no React.",
    content: `Portals permitem que você renderize um componente em qualquer lugar do DOM, mantendo-o logicamente dentro da sua árvore de componentes React.`,
    practice: "Crie um Modal simples que apareça centralizado na tela usando ReactDOM.createPortal.",
    resources: [
      { name: "React API - createPortal", url: "https://react.dev/reference/react-dom/createPortal" }
    ],
    quiz: {
      question: "Qual o uso mais comum para React Portals?",
      options: ["Listas infinitas", "Modais e Tooltips", "Animações complexas", "Roteamento"],
      correctAnswer: 1
    }
  },
  {
    id: 22,
    category: "Avançado",
    difficulty: "Avançado",
    readingTime: "10 min",
    title: "Aula 22: Error Boundaries - Tratando Falhas",
    description: "Não deixe seu app quebrar por inteiro.",
    proTip: "Use Error Boundaries em pontos estratégicos (como um widget de terceiros) para que uma falha isolada não derrube sua página inteira.",
    content: `Error Boundaries capturam erros em qualquer lugar na árvore de componentes abaixo deles e exibem uma interface de fallback amigável.`,
    practice: "Crie um componente que 'quebra' de propósito e envolva-o em um Error Boundary.",
    resources: [
      { name: "React Docs - Catching Rendering Errors", url: "https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary" }
    ],
    quiz: {
      question: "Atualmente, Error Boundaries podem ser escritos como componentes funcionais?",
      options: ["Sim, usando o hook useError", "Não, eles ainda exigem componentes de classe", "Apenas em TypeScript", "Sim, usando useEffect"],
      correctAnswer: 1
    }
  },
  {
    id: 23,
    category: "Design",
    difficulty: "Intermediário",
    readingTime: "15 min",
    title: "Aula 23: Bibliotecas de UI (Shadcn/UI)",
    description: "Componentes prontos e bonitos.",
    proTip: "O shadcn/ui não é uma biblioteca de componentes tradicional, mas sim uma coleção de componentes que você copia e cola para ter controle total.",
    content: `Introdução ao Shadcn/UI, uma das coleções de componentes mais populares atualmente, baseada em Tailwind e Radix UI.`,
    practice: "Visite o site do shadcn/ui e veja como ele funciona.",
    resources: [
      { name: "Shadcn/UI", url: "https://ui.shadcn.com/" }
    ],
    quiz: {
      question: "Como o Shadcn/UI difere de bibliotecas como Material UI?",
      options: ["É pago", "Você copia o código para seu projeto em vez de instalar um pacote npm gigante", "Não usa Tailwind", "Só funciona com Next.js"],
      correctAnswer: 1
    }
  },
  {
    id: 24,
    category: "Testes",
    difficulty: "Intermediário",
    readingTime: "12 min",
    title: "Aula 24: Testes Unitários com Vitest",
    description: "Garantindo que seu código funciona.",
    proTip: "Comece testando funções utilitárias puras. Elas são mais fáceis de testar e garantem que a lógica base do seu app está sólida.",
    content: `Introdução aos testes no ambiente Vite usando o Vitest. Aprendemos a testar lógica pura de JavaScript antes de testar componentes.`,
    practice: "Escreva um teste simples para uma função que soma dois números.",
    resources: [
      { name: "Vitest Guide", url: "https://vitest.dev/guide/" }
    ],
    quiz: {
      question: "O que é o Vitest?",
      options: ["Um framework de CSS", "Um executor de testes rápido para Vite", "Um substituto para o React", "Um banco de dados"],
      correctAnswer: 1
    }
  },
  {
    id: 25,
    category: "Testes",
    difficulty: "Intermediário",
    readingTime: "15 min",
    title: "Aula 25: React Testing Library",
    description: "Testando a interação do usuário.",
    proTip: "Sempre use 'findBy' quando estiver esperando por algo que aparece de forma assíncrona (como após um fetch).",
    content: `Aprendemos a testar se um botão realmente dispara um evento ou se um texto está visível na tela, focando na experiência do usuário.`,
    practice: "Escreva um teste que verifica se um botão com o texto 'Enviar' existe no seu componente.",
    resources: [
      { name: "Testing Library Docs", url: "https://testing-library.com/docs/react-testing-library/intro/" }
    ],
    quiz: {
      question: "Qual a filosofia da React Testing Library?",
      options: ["Testar detalhes de implementação", "Testar como o usuário interage com o app", "Testar apenas o CSS", "Testar a velocidade do código"],
      correctAnswer: 1
    }
  },
  {
    id: 26,
    category: "TypeScript",
    difficulty: "Avançado",
    readingTime: "15 min",
    title: "Aula 26: TypeScript Essentials para React",
    description: "Segurança e produtividade.",
    proTip: "Aprenda a usar 'Utility Types' do TypeScript como Partial, Omit e Pick para manipular suas interfaces de props com facilidade.",
    content: `Tipando props, estados e eventos. O TypeScript ajuda a evitar erros comuns de 'undefined' e torna o desenvolvimento muito mais profissional.`,
    practice: "Converta um componente funcional simples para TypeScript, definindo uma interface para suas Props.",
    resources: [
      { name: "React TypeScript Cheatsheet", url: "https://react-typescript-cheatsheet.netlify.app/" }
    ],
    quiz: {
      question: "Qual a principal vantagem de usar TypeScript com React?",
      options: ["O código roda mais rápido no navegador", "Detecção de erros durante o desenvolvimento", "Ocupa menos espaço em disco", "Não precisa de Node.js"],
      correctAnswer: 1
    }
  },
  {
    id: 27,
    category: "Formulários",
    difficulty: "Intermediário",
    readingTime: "12 min",
    title: "Aula 27: Gerenciamento de Formulários com React Hook Form",
    description: "Formulários complexos sem dor de cabeça.",
    proTip: "Combine o React Hook Form com o Zod para ter uma validação de esquema poderosa e totalmente tipada com TypeScript.",
    content: `A biblioteca definitiva para lidar com validações, erros e submissões de formulários de forma performática.`,
    practice: "Tente criar um formulário de cadastro com validação de 'campo obrigatório' usando React Hook Form.",
    resources: [
      { name: "React Hook Form", url: "https://react-hook-form.com/" }
    ],
    quiz: {
      question: "Por que usar React Hook Form em vez de gerenciar tudo com useState?",
      options: ["Porque é mais colorido", "Para evitar renderizações excessivas em formulários grandes", "Porque não precisa de HTML", "Porque é o único jeito de fazer formulários"],
      correctAnswer: 1
    }
  },
  {
    id: 28,
    category: "Deploy",
    difficulty: "Iniciante",
    readingTime: "10 min",
    title: "Aula 28: Deploy para Produção",
    description: "Seu site online para todo o mundo.",
    proTip: "Configure o deploy automático (CI/CD) via GitHub para que cada 'push' na branch main atualize seu site instantaneamente.",
    content: `Aprendemos a gerar o build de produção e hospedar gratuitamente na Vercel ou Netlify com integração contínua (GitHub).`,
    practice: "Crie uma conta na Vercel e conecte um repositório seu para fazer o deploy.",
    resources: [
      { name: "Vercel Deployment Guide", url: "https://vercel.com/docs/deployments/overview" }
    ],
    quiz: {
      question: "O que o comando 'npm run build' faz?",
      options: ["Apaga o projeto", "Cria uma versão otimizada da aplicação para produção", "Inicia o servidor de desenvolvimento", "Instala novas bibliotecas"],
      correctAnswer: 1
    }
  },
  {
    id: 29,
    category: "Carreira",
    difficulty: "Iniciante",
    readingTime: "10 min",
    title: "Aula 29: Próximos Passos (Next.js e Carreira)",
    description: "O que estudar depois do React?",
    proTip: "O ecossistema React muda rápido. Focar em fundamentos de Web (HTML, CSS, JS) tornará você um profissional muito mais resiliente.",
    content: `Uma visão geral do ecossistema: Next.js para SSR, Remix, React Native e como se preparar para entrevistas técnicas.`,
    practice: "Pesquise qual a principal diferença entre o React puro e o Next.js.",
    resources: [
      { name: "Next.js Documentation", url: "https://nextjs.org/docs" }
    ],
    quiz: {
      question: "O que significa SSR no contexto do Next.js?",
      options: ["Super Speed React", "Server Side Rendering", "Simple State Routing", "Static Site React"],
      correctAnswer: 1
    }
  },
  {
    id: 30,
    category: "Conclusão",
    difficulty: "Avançado",
    readingTime: "20 min",
    title: "Aula 30: Conclusão e Projeto Final",
    description: "Você agora é um Desenvolvedor React!",
    proTip: "O aprendizado nunca para. Participe de comunidades, faça networking e ajude outros desenvolvedores para acelerar sua carreira!",
    content: `Parabéns por completar as 30 aulas! Agora é hora de construir seu projeto de portfólio consolidando tudo o que aprendeu.

O céu é o limite para o que você pode criar agora. Continue praticando e construindo!`,
    practice: "Crie um projeto autoral (ex: Clone do Linktree, App de Clima ou Dashboard) e compartilhe com a comunidade!",
    resources: [
      { name: "React Roadmap", url: "https://roadmap.sh/react" }
    ],
    quiz: {
      question: "Qual o melhor jeito de consolidar o aprendizado agora?",
      options: ["Assistir mais vídeos sem praticar", "Construir projetos reais e ler a documentação", "Desistir e mudar de área", "Esperar o React ser substituído"],
      correctAnswer: 1
    }
  }
];
