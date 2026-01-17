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
      options: [
        "React é escrito em JavaScript e usa os seus conceitos fundamentais",
        "React substitui completamente o JavaScript",
        "Não é necessário, pode-se aprender React diretamente",
        "JavaScript é apenas para sites antigos"
      ],
      correctAnswer: 0
    }
  },
  {
    id: 2,
    category: "Fundamentos",
    difficulty: "Iniciante",
    readingTime: "7 min",
    title: "Aula 2: JSX - O Super Poder do JavaScript",
    description: "Como misturar HTML e JS de forma elegante.",
    proTip: "Pense no JSX como um template literal do JavaScript, mas muito mais poderoso e seguro contra ataques XSS.",
    content: `JSX parece HTML, mas tem todo o poder do JavaScript por trás. Ele permite que você escreva a estrutura da sua UI de forma declarativa.

### Pontos Importantes:
- Use \`className\` em vez de \`class\`.
- Expresse variáveis usando chaves \`{ }\`.
- Todo componente deve retornar um único elemento pai.

\`\`\`jsx
const nome = "Desenvolvedor";
const elemento = <div className="greeting">Olá, {nome}!</div>;
\`\`\`

O JSX torna o código mais legível e fácil de manter.`,
    practice: "Crie uma constante com seu nome e exiba-a dentro de um parágrafo usando JSX.",
    resources: [
      { name: "Writing Markup with JSX", url: "https://react.dev/learn/writing-markup-with-jsx" }
    ],
    quiz: {
      question: "Como definimos uma classe CSS em um elemento JSX?",
      options: ["class='minha-classe'", "className='minha-classe'", "style='minha-classe'", "id='minha-classe'"],
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
- Aplicar boas práticas para evitar "callback hell" e código aninhado excessivo
- Resolver problemas do mundo real com lógica de programação

---

### 🧠 Teoria: A Analogia do Semáforo Inteligente

O controle de fluxo é como o sistema nervoso de uma aplicação. Permite que ela "pense" e tome decisões:
- **Condicionais (\`if/else\`)** são como semáforos: se o sinal está verde → avança; se está vermelho → para.
- **Loops (\`for\`)** são como rotinas diárias: repete a mesma sequência (acordar, tomar banho, café) todos os dias até sexta-feira.

**Porquê isto importa?** Em React, usas constantemente condicionais para mostrar/esconder componentes e loops para renderizar listas de dados. É impossível construir aplicações reais sem dominar estes conceitos.

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

**2. Operador ternário (Conciso)**
\`\`\`javascript
const mensagem = idade >= 18 ? "Maior de idade" : "Menor de idade";
console.log(mensagem);
\`\`\`

**3. Loop for...of (Moderno)**
\`\`\`javascript
const linguagens = ["JavaScript", "React", "Node.js"];
for (const lang of linguagens) {
  console.log(\`Estou a aprender ${lang}!\`);
}
\`\`\`

---

### 🚀 Reforço de Confiança
- Loops infinitos acontecem a todos! Até aos seniors. Pressiona Ctrl+C e analisa onde esqueceste o incremento.
- Cada condição bem escrita é um passo para aplicações mais robustas e menos propensas a bugs.
- Estás a desenvolver o "cérebro" das tuas aplicações. Cada \`if\` e \`for\` é um neurónio novo!`,
    practice: "Cria um programa que verifica a força de uma password. Usa loops para analisar cada caractere e condicionais para classificar como Fraca, Média ou Forte.",
    resources: [
      { name: "MDN - Control flow and error handling", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling" },
      { name: "W3Schools - JS Conditions", url: "https://www.w3schools.com/js/js_if_else.asp" }
    ],
    quiz: {
      question: "Qual loop é mais adequado para iterar sobre um array de forma legível no JS moderno?",
      options: [
        "for tradicional",
        "while",
        "for...of",
        "loop infinito"
      ],
      correctAnswer: 2
    }
  },
  {
    id: 4,
    category: "Fundamentos",
    difficulty: "Iniciante",
    readingTime: "8 min",
    title: "Aula 4: State - A Memória do Componente",
    description: "Gerenciando mudanças e interatividade.",
    proTip: "Nunca modifique o estado diretamente. Use sempre a função de atualização (setState) para garantir que o React perceba a mudança.",
    content: `O Estado (State) é o que torna uma aplicação React viva. Quando o estado muda, o React atualiza a tela automaticamente.

Usamos o hook \`useState\` para isso.

\`\`\`jsx
import { useState } from 'react';

function Contador() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Contagem: {count}
    </button>
  );
}
\`\`\``,
    practice: "Crie um contador que tenha dois botões: um para incrementar e outro para decrementar o valor.",
    resources: [
      { name: "State: A Component's Memory", url: "https://react.dev/learn/state-a-components-memory" }
    ],
    quiz: {
      question: "Qual hook é utilizado para adicionar estado a um componente funcional?",
      options: ["useEffect", "useRef", "useMemo", "useState"],
      correctAnswer: 3
    }
  },
  {
    id: 5,
    category: "Fundamentos",
    difficulty: "Iniciante",
    readingTime: "5 min",
    title: "Aula 5: Manipulação de Eventos",
    description: "Capturando cliques, digitação e muito mais.",
    proTip: "Lembre-se de passar a referência da função no evento: onClick={handleClick} e não onClick={handleClick()}.",
    content: `No React, lidamos com eventos de forma muito similar ao DOM, mas com sintaxe camelCase.

### Eventos comuns:
- \`onClick\`: Para cliques.
- \`onChange\`: Para inputs de texto.
- \`onSubmit\`: Para formulários.

\`\`\`jsx
function Alerta() {
  function handleClick() {
    alert("Botão clicado!");
  }

  return <button onClick={handleClick}>Clique aqui</button>;
}
\`\`\``,
    practice: "Crie um input que exiba um alerta com o texto digitado quando o usuário pressionar um botão.",
    resources: [
      { name: "Responding to Events", url: "https://react.dev/learn/responding-to-events" }
    ],
    quiz: {
      question: "Qual a convenção de nomenclatura para eventos no React (ex: clicar)?",
      options: ["onclick", "ONCLICK", "onClick", "on-click"],
      correctAnswer: 2
    }
  },
  {
    id: 6,
    category: "Fundamentos",
    difficulty: "Iniciante",
    readingTime: "6 min",
    title: "Aula 6: Renderização Condicional",
    description: "Mostrando elementos apenas quando necessário.",
    proTip: "Se você tem muitas condições, considere extrair a lógica para uma função ou componente separado para manter o JSX limpo.",
    content: `Às vezes, queremos mostrar algo apenas se uma condição for verdadeira (como um botão de login/logout).

### Técnicas:
1. Operador Ternário \`condicao ? true : false\`.
2. Operador Lógico \`&&\`.

\`\`\`jsx
{isLoggedIn ? <LogoutButton /> : <LoginButton />}
\`\`\``,
    practice: "Crie um componente que exibe a mensagem 'Acesso Permitido' se uma variável booleana for verdadeira, e 'Acesso Negado' caso contrário.",
    resources: [
      { name: "Conditional Rendering", url: "https://react.dev/learn/conditional-rendering" }
    ],
    quiz: {
      question: "Qual operador é comumente usado para renderizar um elemento apenas se uma condição for verdadeira?",
      options: ["||", "&&", "??", "!"],
      correctAnswer: 1
    }
  },
  {
    id: 7,
    category: "Fundamentos",
    difficulty: "Iniciante",
    readingTime: "7 min",
    title: "Aula 7: Listas e Chaves (Keys)",
    description: "Trabalhando com múltiplos itens.",
    proTip: "Evite usar o index como key se a lista puder ser reordenada ou filtrada. Use IDs únicos sempre que possível.",
    content: `Para renderizar múltiplos itens, usamos o método \`.map()\` do JavaScript.

**Importante:** Cada item da lista deve ter uma prop \`key\` única para que o React possa otimizar as atualizações.

\`\`\`jsx
const frutas = ['Maçã', 'Banana', 'Laranja'];

<ul>
  {frutas.map((fruta, index) => (
    <li key={index}>{fruta}</li>
  ))}
</ul>
\`\`\``,
    practice: "Crie uma lista de tarefas (strings) e renderize-as em uma lista não ordenada (ul).",
    resources: [
      { name: "Rendering Lists", url: "https://react.dev/learn/rendering-lists" }
    ],
    quiz: {
      question: "Por que as 'keys' são importantes ao renderizar listas no React?",
      options: ["Para estilizar os itens", "Para o React identificar quais itens mudaram, foram adicionados ou removidos", "Para ordenar a lista automaticamente", "Para tornar a lista clicável"],
      correctAnswer: 1
    }
  },
  {
    id: 8,
    category: "Design",
    difficulty: "Iniciante",
    readingTime: "10 min",
    title: "Aula 8: Estilização com Tailwind CSS",
    description: "Design moderno e ultra rápido.",
    proTip: "Use a extensão 'Tailwind CSS IntelliSense' no VS Code para ter autocompletar e sugestões de cores em tempo real.",
    content: `Neste curso, usamos o Tailwind CSS. Ele permite estilizar componentes usando apenas classes utilitárias diretamente no JSX.

\`\`\`jsx
<div className="bg-blue-500 text-white p-4 rounded-lg shadow-md">
  Este é um card estilizado com Tailwind!
</div>
\`\`\`

Isso elimina a necessidade de escrever arquivos CSS separados para cada componente.`,
    practice: "Estilize um botão usando as classes do Tailwind para que ele fique verde, com bordas arredondadas e mude de cor ao passar o mouse (hover).",
    resources: [
      { name: "Tailwind CSS Documentation", url: "https://tailwindcss.com/docs" }
    ],
    quiz: {
      question: "O que é o Tailwind CSS?",
      options: ["Um framework JavaScript", "Um pré-processador CSS como SASS", "Um framework CSS utilitário", "Uma biblioteca de animações"],
      correctAnswer: 2
    }
  },
  {
    id: 9,
    category: "Hooks",
    difficulty: "Intermediário",
    readingTime: "12 min",
    title: "Aula 9: O Hook useEffect",
    description: "Lidando com efeitos colaterais.",
    proTip: "Sempre retorne uma função de limpeza (cleanup) se você estiver usando assinaturas (subscriptions) ou timers.",
    content: `O \`useEffect\` é usado para ações que acontecem fora do fluxo normal do React, como buscar dados de uma API ou configurar um timer.

\`\`\`jsx
useEffect(() => {
  console.log("Componente montado!");

  return () => console.log("Limpando efeito...");
}, []); // Array vazio significa: executa apenas uma vez.
\`\`\``,
    practice: "Use o useEffect para exibir um 'console.log' toda vez que o estado de um contador for alterado.",
    resources: [
      { name: "Synchronizing with Effects", url: "https://react.dev/learn/synchronizing-with-effects" }
    ],
    quiz: {
      question: "Como garantir que um useEffect seja executado apenas uma vez (na montagem)?",
      options: ["Não passando o segundo argumento", "Passando um array vazio [] como segundo argumento", "Passando null", "Usando o hook useOnce"],
      correctAnswer: 1
    }
  },
  {
    id: 10,
    category: "Formulários",
    difficulty: "Iniciante",
    readingTime: "8 min",
    title: "Aula 10: Formulários Controlados",
    description: "Sincronizando inputs com o estado.",
    proTip: "Para formulários gigantes, componentes controlados podem causar lentidão. Nesses casos, bibliotecas como React Hook Form são a salvação.",
    content: `Em um formulário controlado, o React é quem manda no valor do input.

\`\`\`jsx
const [nome, setNome] = useState('');

<input
  value={nome}
  onChange={(e) => setNome(e.target.value)}
/>
\`\`\`

Isso facilita a validação e o envio dos dados.`,
    practice: "Crie um pequeno formulário com campos de 'Email' e 'Senha' e exiba os valores digitados abaixo do formulário em tempo real.",
    resources: [
      { name: "Sharing State Between Components", url: "https://react.dev/learn/sharing-state-between-components" }
    ],
    quiz: {
      question: "Em um input controlado, de onde vem o valor exibido no campo?",
      options: ["Do DOM diretamente", "Do estado (state) do componente", "Do banco de dados", "Do arquivo CSS"],
      correctAnswer: 1
    }
  },
  {
    id: 11,
    category: "Hooks",
    difficulty: "Intermediário",
    readingTime: "7 min",
    title: "Aula 11: useRef - Acesso Direto ao DOM",
    description: "Quando você precisa 'tocar' nos elementos.",
    proTip: "useRef também é ótimo para armazenar qualquer valor mutável que você não queira que dispare uma nova renderização ao mudar.",
    content: `O \`useRef\` cria uma referência persistente. É muito usado para focar um input automaticamente ou integrar bibliotecas externas que manipulam o DOM.

\`\`\`jsx
const inputRef = useRef(null);
const focar = () => inputRef.current.focus();

<input ref={inputRef} />
<button onClick={focar}>Dar Foco</button>
\`\`\``,
    practice: "Crie um botão que, ao ser clicado, mude a cor de fundo de um elemento <div> usando useRef.",
    resources: [
      { name: "Referencing Values with Refs", url: "https://react.dev/learn/referencing-values-with-refs" }
    ],
    quiz: {
      question: "Qual a principal diferença entre useRef e useState?",
      options: ["useRef não existe no React", "useState não causa renderização, useRef sim", "useRef não causa renderização quando o valor muda, useState sim", "Ambos são iguais"],
      correctAnswer: 2
    }
  },
  {
    id: 12,
    category: "Estado Global",
    difficulty: "Intermediário",
    readingTime: "15 min",
    title: "Aula 12: Context API - Estado Global",
    description: "Evitando o 'Prop Drilling'.",
    proTip: "Não coloque tudo no Contexto. Use-o apenas para dados que realmente precisam ser globais, como tema ou autenticação.",
    content: `Quando precisamos passar dados para componentes muito distantes na árvore, usamos o Contexto.

Ideal para temas (claro/escuro), informações de usuário logado e preferências de idioma.`,
    practice: "Pesquise como criar um 'ThemeContext' básico para alternar entre as cores preto e branco em sua aplicação.",
    resources: [
      { name: "Passing Data Deeply with Context", url: "https://react.dev/learn/passing-data-deeply-with-context" }
    ],
    quiz: {
      question: "O que é 'Prop Drilling'?",
      options: ["Uma técnica avançada de performance", "O ato de passar props através de vários níveis de componentes que não precisam delas", "Uma ferramenta de debug", "Um novo hook do React"],
      correctAnswer: 1
    }
  },
  {
    id: 13,
    category: "Arquitetura",
    difficulty: "Intermediário",
    readingTime: "10 min",
    title: "Aula 13: Composição de Componentes",
    description: "Padrões avançados de arquitetura.",
    proTip: "A prop 'children' é sua melhor amiga para criar layouts flexíveis e componentes altamente reutilizáveis.",
    content: `Em vez de criar componentes gigantes, aprendemos a compor a UI usando a prop \`children\`.

\`\`\`jsx
function Layout({ children }) {
  return (
    <div className="container">
      <Navbar />
      {children}
    </div>
  );
}
\`\`\``,
    practice: "Crie um componente 'Container' que centraliza qualquer conteúdo que for passado dentro dele.",
    resources: [
      { name: "Passing Content to a Component", url: "https://react.dev/learn/passing-props-to-a-component#passing-jsx-as-children" }
    ],
    quiz: {
      question: "Qual prop especial é usada para renderizar elementos filhos dentro de um componente?",
      options: ["elements", "content", "children", "innerJSX"],
      correctAnswer: 2
    }
  },
  {
    id: 14,
    category: "Navegação",
    difficulty: "Intermediário",
    readingTime: "12 min",
    title: "Aula 14: React Router - Rotas e Navegação",
    description: "Criando uma aplicação de várias páginas (SPA).",
    proTip: "Use o componente <NavLink> em vez de <Link> para estilizar automaticamente o link da página que está ativa no momento.",
    content: `Aprendemos a usar o \`react-router-dom\` para navegar entre diferentes telas sem recarregar a página.

Usamos os componentes \`<BrowserRouter>\`, \`<Routes>\` e \`<Route>\`.`,
    practice: "Adicione uma nova rota '/sobre' em seu projeto que exiba uma descrição sobre você.",
    resources: [
      { name: "React Router Docs", url: "https://reactrouter.com/en/main" }
    ],
    quiz: {
      question: "Qual componente do React Router é usado para criar links de navegação?",
      options: ["<a>", "<Navigation>", "<Link>", "<Route>"],
      correctAnswer: 2
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
