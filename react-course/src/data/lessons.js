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
    practice: "Instale o Node.js em sua máquina e execute o comando 'npm create vite@latest' no terminal para criar seu primeiro projeto."
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
    practice: "Crie uma constante com seu nome e exiba-a dentro de um parágrafo usando JSX."
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
    practice: "Crie um componente 'Card' que recebe as props 'titulo' e 'preco' e os exiba na tela."
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
    practice: "Crie um contador que tenha dois botões: um para incrementar e outro para decrementar o valor."
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
    practice: "Crie um input que exiba um alerta com o texto digitado quando o usuário pressionar um botão."
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
    practice: "Crie um componente que exibe a mensagem 'Acesso Permitido' se uma variável booleana for verdadeira, e 'Acesso Negado' caso contrário."
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
    practice: "Crie uma lista de tarefas (strings) e renderize-as em uma lista não ordenada (ul)."
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
    practice: "Estilize um botão usando as classes do Tailwind para que ele fique verde, com bordas arredondadas e mude de cor ao passar o mouse (hover)."
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
    practice: "Use o useEffect para exibir um 'console.log' toda vez que o estado de um contador for alterado."
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
    practice: "Crie um pequeno formulário com campos de 'Email' e 'Senha' e exiba os valores digitados abaixo do formulário em tempo real."
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
    practice: "Crie um botão que, ao ser clicado, mude a cor de fundo de um elemento <div> usando useRef."
  },
  {
    id: 12,
    title: "Aula 12: Context API - Estado Global",
    description: "Evitando o 'Prop Drilling'.",
    content: `Quando precisamos passar dados para componentes muito distantes na árvore, usamos o Contexto.

Ideal para temas (claro/escuro), informações de usuário logado e preferências de idioma.`,
    practice: "Pesquise como criar um 'ThemeContext' básico para alternar entre as cores preto e branco em sua aplicação."
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
    practice: "Crie um componente 'Container' que centraliza qualquer conteúdo que for passado dentro dele."
  },
  {
    id: 14,
    title: "Aula 14: React Router - Rotas e Navegação",
    description: "Criando uma aplicação de várias páginas (SPA).",
    content: `Aprendemos a usar o \`react-router-dom\` para navegar entre diferentes telas sem recarregar a página.

Usamos os componentes \`<BrowserRouter>\`, \`<Routes>\` e \`<Route>\`.`,
    practice: "Adicione uma nova rota '/sobre' em seu projeto que exiba uma descrição sobre você."
  },
  {
    id: 15,
    title: "Aula 15: Consumindo APIs com Fetch",
    description: "Buscando dados do mundo real.",
    content: `Aprendemos a usar o comando \`fetch\` dentro de um \`useEffect\` para carregar dados de uma API externa (como a JSONPlaceholder).

Lidamos com estados de \`loading\`, \`error\` e \`data\`.`,
    practice: "Tente buscar a lista de usuários da URL 'https://jsonplaceholder.typicode.com/users' e exiba os nomes em uma lista."
  },
  {
    id: 16,
    title: "Aula 16: Custom Hooks - Reutilização Máxima",
    description: "Extraindo sua própria lógica.",
    content: `Se você usa a mesma lógica em vários lugares, crie seu próprio Hook!

Exemplo: \`useFetch\`, \`useLocalStorage\`, \`useAuth\`.`,
    practice: "Tente criar um hook chamado 'useToggle' que alterna um valor entre true e false."
  },
  {
    id: 17,
    title: "Aula 17: Performance com useMemo",
    description: "Evitando cálculos desnecessários.",
    content: `O \`useMemo\` guarda o resultado de um cálculo pesado para que ele não seja refeito em toda renderização, a menos que suas dependências mudem.`,
    practice: "Crie uma função que simula um cálculo demorado e use o useMemo para otimizá-la."
  },
  {
    id: 18,
    title: "Aula 18: Otimização com useCallback",
    description: "Memorizando funções.",
    content: `Similar ao useMemo, mas para funções. Evita que funções sejam recriadas desnecessariamente, o que é útil ao passar funções para componentes filhos otimizados com \`React.memo\`.`,
    practice: "Explique com suas palavras a diferença entre useMemo e useCallback."
  },
  {
    id: 19,
    title: "Aula 19: React.memo",
    description: "Impedindo renderizações inúteis.",
    content: `O \`React.memo\` é um Higher Order Component que impede que um componente seja renderizado novamente se suas props não mudarem.`,
    practice: "Aplique o React.memo em um componente simples de exibição de texto."
  },
  {
    id: 20,
    title: "Aula 20: Trabalhando com Imagens e Ativos",
    description: "Melhores práticas para arquivos estáticos.",
    content: `Como importar imagens, usar a pasta \`public\` e otimizar assets para que sua aplicação carregue rápido.`,
    practice: "Adicione uma imagem de sua preferência ao projeto e exiba-a usando um componente React."
  },
  {
    id: 21,
    title: "Aula 21: Portals - Renderizando fora do Root",
    description: "O segredo dos modais e tooltips.",
    content: `Portals permitem que você renderize um componente em qualquer lugar do DOM, mantendo-o logicamente dentro da sua árvore de componentes React.`,
    practice: "Crie um Modal simples que apareça centralizado na tela usando ReactDOM.createPortal."
  },
  {
    id: 22,
    title: "Aula 22: Error Boundaries - Tratando Falhas",
    description: "Não deixe seu app quebrar por inteiro.",
    content: `Error Boundaries capturam erros em qualquer lugar na árvore de componentes abaixo deles e exibem uma interface de fallback amigável.`,
    practice: "Crie um componente que 'quebra' de propósito e envolva-o em um Error Boundary."
  },
  {
    id: 23,
    title: "Aula 23: Bibliotecas de UI (Shadcn/UI)",
    description: "Componentes prontos e bonitos.",
    content: `Introdução ao Shadcn/UI, uma das coleções de componentes mais populares atualmente, baseada em Tailwind e Radix UI.`,
    practice: "Visite o site do shadcn/ui e veja como ele funciona."
  },
  {
    id: 24,
    title: "Aula 24: Testes Unitários com Vitest",
    description: "Garantindo que seu código funciona.",
    content: `Introdução aos testes no ambiente Vite usando o Vitest. Aprendemos a testar lógica pura de JavaScript antes de testar componentes.`,
    practice: "Escreva um teste simples para uma função que soma dois números."
  },
  {
    id: 25,
    title: "Aula 25: React Testing Library",
    description: "Testando a interação do usuário.",
    content: `Aprendemos a testar se um botão realmente dispara um evento ou se um texto está visível na tela, focando na experiência do usuário.`,
    practice: "Escreva um teste que verifica se um botão com o texto 'Enviar' existe no seu componente."
  },
  {
    id: 26,
    title: "Aula 26: TypeScript Essentials para React",
    description: "Segurança e produtividade.",
    content: `Tipando props, estados e eventos. O TypeScript ajuda a evitar erros comuns de 'undefined' e torna o desenvolvimento muito mais profissional.`,
    practice: "Converta um componente funcional simples para TypeScript, definindo uma interface para suas Props."
  },
  {
    id: 27,
    title: "Aula 27: Gerenciamento de Formulários com React Hook Form",
    description: "Formulários complexos sem dor de cabeça.",
    content: `A biblioteca definitiva para lidar com validações, erros e submissões de formulários de forma performática.`,
    practice: "Tente criar um formulário de cadastro com validação de 'campo obrigatório' usando React Hook Form."
  },
  {
    id: 28,
    title: "Aula 28: Deploy para Produção",
    description: "Seu site online para todo o mundo.",
    content: `Aprendemos a gerar o build de produção e hospedar gratuitamente na Vercel ou Netlify com integração contínua (GitHub).`,
    practice: "Crie uma conta na Vercel e conecte um repositório seu para fazer o deploy."
  },
  {
    id: 29,
    title: "Aula 29: Próximos Passos (Next.js e Carreira)",
    description: "O que estudar depois do React?",
    content: `Uma visão geral do ecossistema: Next.js para SSR, Remix, React Native e como se preparar para entrevistas técnicas.`,
    practice: "Pesquise qual a principal diferença entre o React puro e o Next.js."
  },
  {
    id: 30,
    title: "Aula 30: Conclusão e Projeto Final",
    description: "Você agora é um Desenvolvedor React!",
    content: `Parabéns por completar as 30 aulas! Agora é hora de construir seu projeto de portfólio consolidando tudo o que aprendeu.

O céu é o limite para o que você pode criar agora. Continue praticando e construindo!`,
    practice: "Crie um projeto autoral (ex: Clone do Linktree, App de Clima ou Dashboard) e compartilhe com a comunidade!"
  }
];
