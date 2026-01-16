export const lessons = [
  {
    id: 1,
    title: "Aula 1: Introdução ao React",
    description: "O que é React e por que utilizá-lo.",
    content: `React é uma biblioteca JavaScript para construção de interfaces de usuário. Desenvolvido pelo Facebook, ele permite criar aplicações web rápidas e escaláveis usando uma abordagem baseada em componentes.

Principais características:
- Declarativo: O React facilita a criação de UIs interativas.
- Baseado em Componentes: Crie componentes encapsulados que gerenciam seu próprio estado.
- Aprenda uma vez, escreva em qualquer lugar: Você pode desenvolver para web (React) ou mobile (React Native).`
  },
  {
    id: 2,
    title: "Aula 2: O que é JSX?",
    description: "Entendendo a sintaxe XML do React.",
    content: `JSX é uma extensão de sintaxe para JavaScript que se assemelha ao HTML. Ele é usado com o React para descrever como a interface do usuário deve parecer.

Exemplo:
const elemento = <h1>Olá, mundo!</h1>;

O JSX é transformado em chamadas JavaScript puras (React.createElement) pelo Babel.`
  },
  {
    id: 3,
    title: "Aula 3: Componentes e Props",
    description: "Criando blocos reutilizáveis de interface.",
    content: `Componentes são as peças fundamentais do React. Eles podem ser definidos como funções ou classes.

Props (propriedades) são argumentos passados para os componentes, permitindo que eles sejam dinâmicos.

function Saudacao(props) {
  return <h1>Olá, {props.nome}!</h1>;
}`
  },
  {
    id: 4,
    title: "Aula 4: O que é State?",
    description: "Gerenciando dados internos do componente.",
    content: `O State (estado) é um objeto que armazena dados que podem mudar ao longo do tempo e afetar o que é renderizado.

Diferente das props, o estado é gerenciado dentro do próprio componente. No React moderno, usamos o hook useState para isso.`
  },
  {
    id: 5,
    title: "Aula 5: Eventos em React",
    description: "Lidando com interações do usuário.",
    content: `Manipular eventos com elementos React é muito semelhante a manipular eventos com elementos DOM.

Diferenças:
- Eventos React são nomeados usando camelCase (ex: onClick).
- Com JSX, você passa uma função como o manipulador de eventos.`
  },
  {
    id: 6,
    title: "Aula 6: Condicionais e Listas",
    description: "Renderizando elementos dinamicamente.",
    content: `No React, você pode criar elementos que representam o comportamento necessário e usar operadores do JavaScript como 'if' ou o operador ternário para renderizá-los.

Para listas, usamos o método .map() e sempre devemos fornecer uma 'key' única para cada item.`
  },
  {
    id: 7,
    title: "Aula 7: Estilos em React",
    description: "Diferentes formas de estilizar seus componentes.",
    content: `Existem várias maneiras de estilizar componentes React:
1. CSS Tradicional (importando arquivos .css).
2. Inline Styles (usando objetos JS).
3. CSS Modules (escopo local por padrão).
4. CSS-in-JS (como Styled Components).
5. Frameworks de utilitários (como Tailwind CSS).`
  },
  {
    id: 8,
    title: "Aula 8: Formulários e Inputs",
    description: "Trabalhando com componentes controlados.",
    content: `No React, os componentes de formulário geralmente são 'controlados'. Isso significa que o estado do React é a 'fonte única da verdade'.

O valor do input é vinculado ao state e atualizado via onChange.`
  },
  {
    id: 9,
    title: "Aula 9: useEffect e Ciclo de Vida",
    description: "Executando efeitos colaterais.",
    content: `O hook useEffect permite realizar efeitos colaterais em componentes funcionais. Ele substitui métodos de ciclo de vida como componentDidMount, componentDidUpdate e componentWillUnmount.

Pode ser usado para chamadas de API, assinaturas ou manipulação manual do DOM.`
  },
  {
    id: 10,
    title: "Aula 10: useRef",
    description: "Acessando o DOM e persistindo valores.",
    content: `O useRef retorna um objeto ref mutável cuja propriedade .current é inicializada com o argumento passado.

É útil para acessar elementos do DOM diretamente ou para manter qualquer valor mutável que não deve disparar uma nova renderização.`
  },
  {
    id: 11,
    title: "Aula 11: useContext",
    description: "Compartilhando dados globalmente.",
    content: `A Context API fornece uma maneira de passar dados através da árvore de componentes sem ter que passar props manualmente em todos os níveis (prop drilling).`
  },
  {
    id: 12,
    title: "Aula 12: useMemo e useCallback",
    description: "Otimizando a performance.",
    content: `useMemo: Memoriza o valor resultante de uma função computacionalmente cara.
useCallback: Memoriza a própria definição da função para evitar recriações desnecessárias entre renderizações.`
  },
  {
    id: 13,
    title: "Aula 13: Hooks Customizados",
    description: "Reutilizando lógica de estado.",
    content: `Hooks customizados permitem extrair a lógica do componente em funções reutilizáveis. Eles devem sempre começar com a palavra 'use'.`
  },
  {
    id: 14,
    title: "Aula 14: React Router (Navegação)",
    description: "Criando rotas na aplicação.",
    content: `React Router é a biblioteca padrão para navegação em aplicações React. Ela permite definir URLs que mapeiam para componentes específicos.`
  },
  {
    id: 15,
    title: "Aula 15: Requisições com Fetch e Axios",
    description: "Consumindo APIs externas.",
    content: `Aprenda como buscar dados de servidores usando a API Fetch nativa do navegador ou a biblioteca Axios, lidando com estados de carregamento e erro.`
  },
  {
    id: 16,
    title: "Aula 16: React Query (TanStack Query)",
    description: "Gerenciamento de estado assíncrono.",
    content: `React Query facilita a busca, cache e atualização de dados assíncronos em aplicações React, eliminando a necessidade de gerenciar estados globais complexos para dados de API.`
  },
  {
    id: 17,
    title: "Aula 17: Redux Toolkit",
    description: "Gerenciamento de estado global robusto.",
    content: `Redux Toolkit é a forma recomendada de escrever Redux. Ele simplifica a configuração da store e a criação de reducers e actions.`
  },
  {
    id: 18,
    title: "Aula 18: Context API vs Redux",
    description: "Quando usar cada um?",
    content: `Discussão sobre as diferenças entre Context API (nativo) e Redux (biblioteca externa), e critérios para escolher a melhor ferramenta para seu projeto.`
  },
  {
    id: 19,
    title: "Aula 19: Styled Components",
    description: "CSS-in-JS na prática.",
    content: `Styled Components permite escrever CSS real dentro do JavaScript, usando tagged template literals para estilizar seus componentes.`
  },
  {
    id: 20,
    title: "Aula 20: Tailwind CSS no React",
    description: "Estilização rápida com utilitários.",
    content: `Como integrar e utilizar o Tailwind CSS para construir interfaces modernas e responsivas de forma extremamente rápida.`
  },
  {
    id: 21,
    title: "Aula 21: Portals e Modais",
    description: "Renderizando fora da hierarquia principal.",
    content: `Portals fornecem uma maneira de renderizar filhos em um nó do DOM que existe fora da hierarquia do componente pai, ideal para modais e tooltips.`
  },
  {
    id: 22,
    title: "Aula 22: Error Boundaries",
    description: "Tratamento de erros na renderização.",
    content: `Error Boundaries são componentes que capturam erros de JavaScript em qualquer lugar em sua árvore de componentes filhos e exibem uma UI de fallback.`
  },
  {
    id: 23,
    title: "Aula 23: Memoização e Performance",
    description: "Dicas avançadas de otimização.",
    content: `Aprofundamento em React.memo, técnicas de virtualização de listas e como identificar gargalos de performance usando as React DevTools.`
  },
  {
    id: 24,
    title: "Aula 24: Testes Unitários com Jest",
    description: "Garantindo a qualidade do código.",
    content: `Introdução ao Jest, o framework de testes mais popular para JavaScript, e como escrever seus primeiros testes unitários.`
  },
  {
    id: 25,
    title: "Aula 25: Testes de Integração com React Testing Library",
    description: "Testando como o usuário interage.",
    content: `Aprenda a testar seus componentes focando no comportamento e na acessibilidade, simulando interações reais do usuário.`
  },
  {
    id: 26,
    title: "Aula 26: TypeScript com React",
    description: "Adicionando tipagem estática.",
    content: `Como usar TypeScript para tornar suas aplicações React mais seguras e fáceis de manter, definindo tipos para Props e State.`
  },
  {
    id: 27,
    title: "Aula 27: Deploy de Aplicações (Vercel/Netlify)",
    description: "Colocando seu projeto no ar.",
    content: `Passo a passo para fazer o deploy de sua aplicação React em plataformas modernas como Vercel ou Netlify.`
  },
  {
    id: 28,
    title: "Aula 28: Server-Side Rendering (SSR) e Next.js",
    description: "Além do Client-Side Rendering.",
    content: `Introdução ao Next.js, o framework React para produção, e as vantagens de renderização no servidor para SEO e performance.`
  },
  {
    id: 29,
    title: "Aula 29: Introdução ao React Native",
    description: "React para dispositivos móveis.",
    content: `Uma visão geral de como levar seus conhecimentos de React para o desenvolvimento de aplicativos nativos para iOS e Android.`
  },
  {
    id: 30,
    title: "Aula 30: Projeto Final: Dashboard Completo",
    description: "Colocando tudo em prática.",
    content: `Nesta aula final, consolidamos todo o conhecimento construindo um Dashboard administrativo completo, com gráficos, autenticação e gerenciamento de dados.`
  }
];
