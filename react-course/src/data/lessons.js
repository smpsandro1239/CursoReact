export const lessons = [
  {
    id: 1,
    title: "Aula 1: O Início da Jornada React",
    description: "Configurando o ambiente e criando seu primeiro componente.",
    content: `Bem-vindo ao curso Premium de React! Nesta primeira aula, vamos entender por que o React é a escolha número 1 de grandes empresas como Netflix, Airbnb e Facebook.

O React não é apenas uma biblioteca; é uma forma de pensar em interfaces como uma composição de peças pequenas e independentes chamadas **Componentes**.

### O que vamos fazer hoje:
1. Configurar o Node.js e o NPM.
2. Criar um projeto usando Vite (muito mais rápido que o Create React App).
3. Entender a estrutura de pastas.

### Exemplo de código:
\`\`\`jsx
function Welcome() {
  return <h1>Olá, React! 🚀</h1>;
}
\`\`\`

Prepare-se para dominar o mercado de desenvolvimento web!`,
    practice: "Instale o Node.js em sua máquina e execute o comando 'npm create vite@latest' no terminal para criar seu primeiro projeto.",
    resources: [
      { name: "Documentação Oficial - Instalação", url: "https://react.dev/learn/installation" },
      { name: "Vite Guide", url: "https://vitejs.dev/guide/" }
    ],
    quiz: {
      question: "Qual ferramenta é recomendada atualmente para criar novos projetos React devido à sua velocidade?",
      options: ["Create React App", "Vite", "Angular CLI", "jQuery"],
      correctAnswer: 1
    }
  },
  {
    id: 2,
    title: "Aula 2: JSX - O Super Poder do JavaScript",
    description: "Como misturar HTML e JS de forma elegante.",
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
    title: "Aula 3: Props - Componentes Dinâmicos",
    description: "Passando dados de um componente para outro.",
    content: `Imagine os componentes como funções JavaScript. As **Props** são os argumentos dessas funções.

Elas permitem que o mesmo componente exiba informações diferentes.

\`\`\`jsx
function Avatar(props) {
  return <img src={props.url} alt={props.nome} />;
}

// Uso:
<Avatar url="foto.jpg" nome="João" />
\`\`\`

Lembre-se: Props são **somente leitura** (read-only).`,
    practice: "Crie um componente 'Card' que recebe as props 'titulo' e 'preco' e os exiba na tela.",
    resources: [
      { name: "Passing Props to a Component", url: "https://react.dev/learn/passing-props-to-a-component" }
    ],
    quiz: {
      question: "O que acontece se você tentar modificar uma 'prop' dentro do componente que a recebeu?",
      options: ["O componente atualiza", "O React ignora o erro", "Props são somente leitura e não devem ser modificadas", "O valor muda apenas para o pai"],
      correctAnswer: 2
    }
  },
  {
    id: 4,
    title: "Aula 4: State - A Memória do Componente",
    description: "Gerenciando mudanças e interatividade.",
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
    title: "Aula 5: Manipulação de Eventos",
    description: "Capturando cliques, digitação e muito mais.",
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
    title: "Aula 6: Renderização Condicional",
    description: "Mostrando elementos apenas quando necessário.",
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
    title: "Aula 7: Listas e Chaves (Keys)",
    description: "Trabalhando com múltiplos itens.",
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
    title: "Aula 8: Estilização com Tailwind CSS",
    description: "Design moderno e ultra rápido.",
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
    title: "Aula 9: O Hook useEffect",
    description: "Lidando com efeitos colaterais.",
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
    title: "Aula 10: Formulários Controlados",
    description: "Sincronizando inputs com o estado.",
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
    title: "Aula 11: useRef - Acesso Direto ao DOM",
    description: "Quando você precisa 'tocar' nos elementos.",
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
    title: "Aula 12: Context API - Estado Global",
    description: "Evitando o 'Prop Drilling'.",
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
    title: "Aula 13: Composição de Componentes",
    description: "Padrões avançados de arquitetura.",
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
    title: "Aula 14: React Router - Rotas e Navegação",
    description: "Criando uma aplicação de várias páginas (SPA).",
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
    title: "Aula 15: Consumindo APIs com Fetch",
    description: "Buscando dados do mundo real.",
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
    title: "Aula 16: Custom Hooks - Reutilização Máxima",
    description: "Extraindo sua própria lógica.",
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
    title: "Aula 17: Performance com useMemo",
    description: "Evitando cálculos desnecessários.",
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
    title: "Aula 18: Otimização com useCallback",
    description: "Memorizando funções.",
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
    title: "Aula 19: React.memo",
    description: "Impedindo renderizações inúteis.",
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
    title: "Aula 20: Trabalhando com Imagens e Ativos",
    description: "Melhores práticas para arquivos estáticos.",
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
    title: "Aula 21: Portals - Renderizando fora do Root",
    description: "O segredo dos modais e tooltips.",
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
    title: "Aula 22: Error Boundaries - Tratando Falhas",
    description: "Não deixe seu app quebrar por inteiro.",
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
    title: "Aula 23: Bibliotecas de UI (Shadcn/UI)",
    description: "Componentes prontos e bonitos.",
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
    title: "Aula 24: Testes Unitários com Vitest",
    description: "Garantindo que seu código funciona.",
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
    title: "Aula 25: React Testing Library",
    description: "Testando a interação do usuário.",
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
    title: "Aula 26: TypeScript Essentials para React",
    description: "Segurança e produtividade.",
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
    title: "Aula 27: Gerenciamento de Formulários com React Hook Form",
    description: "Formulários complexos sem dor de cabeça.",
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
    title: "Aula 28: Deploy para Produção",
    description: "Seu site online para todo o mundo.",
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
    title: "Aula 29: Próximos Passos (Next.js e Carreira)",
    description: "O que estudar depois do React?",
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
    title: "Aula 30: Conclusão e Projeto Final",
    description: "Você agora é um Desenvolvedor React!",
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
