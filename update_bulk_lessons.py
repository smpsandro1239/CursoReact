import re

def update_lesson_in_content(content, lesson_id, new_data):
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
    return re.sub(pattern, res + ",", content, flags=re.DOTALL)

filepath = 'react-course/src/data/lessons.js'
with open(filepath, 'r') as f:
    content = f.read()

# Lesson 2
lesson_2 = {
    "category": "Fundamentos",
    "difficulty": "Iniciante",
    "readingTime": "60 min",
    "title": "Aula 2: Variáveis, Tipos de Dados e Operadores",
    "description": "Dominar o controlo de dados e lógica básica em JavaScript moderno.",
    "proTip": "Sempre que possível, usa const. Só muda para let se souberes que o valor vai mudar. Isto reduz erros e melhora a legibilidade.",
    "content": """### O que vais aprender nesta aula:
- Declarar variáveis com \\`let\\`, \\`const\\` e entender a diferença
- Identificar os 7 tipos primitivos de dados em JavaScript
- Utilizar operadores aritméticos, de comparação e lógicos
- Trabalhar com strings usando template literals

---

### 🧠 Teoria: A Analogia das Caixas

- **\\`const\\`** é uma caixa lacrada — podes guardar algo dentro, mas não podes trocar a caixa por outra.
- **\\`let\\`** é uma caixa aberta — podes mudar o conteúdo quantas vezes quiseres.

**Por que isto importa?** Em React, escolher corretamente evita bugs de reatribuição acidental e torna o teu código mais seguro.

> 💡 **Sabias que?** JavaScript tem apenas 7 tipos primitivos. Tudo o resto (arrays, objetos, funções) é tecnicamente um objeto!

---

### 💻 Prática: Variáveis e Template Literals

**1. Declaração segura**
\\`\\`\\`javascript
const nome = "Sandro";
let idade = 30;
idade = 31; // Válido
\\`\\`\\`

**2. Template Literals (Moderno)**
\\`\\`\\`javascript
const linguagem = "JavaScript";
console.log(\\`Estou a aprender ${linguagem}!\\`);
\\`\\`\\`""",
    "practice": "Cria um programa que calcule o IMC (Peso / Altura²). Usa const para nome e altura, let para peso. Exibe o resultado usando template literals.",
    "resources": [
        {"name": "MDN - Grammar and types", "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types"}
    ],
    "quiz": {
        "question": "Qual é a diferença principal entre let e const?",
        "options": ["let é mais rápido", "const não pode ser reatribuído, let pode", "let é para números, const para texto", "Nenhuma"],
        "correctAnswer": 1
    }
}

# Lesson 7
lesson_7 = {
    "category": "Fundamentos",
    "difficulty": "Iniciante",
    "readingTime": "60 min",
    "title": "Aula 7: Introdução ao React – O Primeiro Componente",
    "description": "Entrar no ecossistema React e criar o teu primeiro componente funcional.",
    "proTip": "Nunca esqueças de fechar tags em JSX! Mesmo tags como <img> devem ser escritas como <img />.",
    "content": """### O que vais aprender nesta aula:
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
\\`\\`\\`jsx
export default function App() {
  return (
    <div className="app">
      <h1>Olá, React!</h1>
      <p>O meu primeiro componente.</p>
    </div>
  );
}
\\`\\`\\`

**2. Diferenças JSX**
- \\`class\\` vira \\`className\\`
- \\`for\\` vira \\`htmlFor\\`
- Expressões JS usam chavetas \\`{ }\\`""",
    "practice": "Cria um componente de perfil de utilizador (PerfilUsuario) que exiba nome, idade e cidade usando variáveis dentro do componente e JSX.",
    "resources": [
        {"name": "React Docs - Your First Component", "url": "https://react.dev/learn/your-first-component"}
    ],
    "quiz": {
        "question": "Qual é a principal vantagem da abordagem declarativa do React?",
        "options": ["É mais lenta", "Focas-te no 'o quê' em vez do 'como'", "Não precisa de JS", "Substitui o CSS"],
        "correctAnswer": 1
    }
}

# Lesson 8
lesson_8 = {
    "category": "Fundamentos",
    "difficulty": "Iniciante",
    "readingTime": "60 min",
    "title": "Aula 8: Props – Comunicando entre Componentes",
    "description": "Passar dados entre componentes para criar interfaces modulares e reutilizáveis.",
    "proTip": "Tenta desestruturar as tuas props logo nos parâmetros da função: function User({ name }) { ... }",
    "content": """### O que vais aprender nesta aula:
- Passar dados do pai para o filho usando props
- Desestruturar props para código mais limpo
- Utilizar a prop especial \\`children\\`
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
\\`\\`\\`jsx
// Filho
function Saudacao({ nome }) {
  return <h1>Olá, {nome}!</h1>;
}

// Pai
<Saudacao nome="Sandro" />
\\`\\`\\`

**2. Prop Children**
\\`\\`\\`jsx
function Card({ children }) {
  return <div className="card">{children}</div>;
}
\\`\\`\\`""",
    "practice": "Cria um componente 'Produto' que recebe nome, preco e descricao. Cria uma 'ListaProdutos' que renderiza vários componentes Produto usando map.",
    "resources": [
        {"name": "React Docs - Passing Props", "url": "https://react.dev/learn/passing-props-to-a-component"}
    ],
    "quiz": {
        "question": "Qual é a principal regra sobre props em React?",
        "options": ["Podem ser alteradas pelo filho", "São imutáveis (read-only)", "Devem ser sempre strings", "Só funcionam em classes"],
        "correctAnswer": 1
    }
}

# Lesson 9
lesson_9 = {
    "category": "Hooks",
    "difficulty": "Iniciante",
    "readingTime": "60 min",
    "title": "Aula 9: Estado com useState – Interatividade",
    "description": "Gerir a 'memória' do componente para criar interfaces dinâmicas que reagem ao utilizador.",
    "proTip": "Nunca modifies o estado diretamente! Usa sempre a função setter (setEstado) para que o React saiba que deve atualizar o ecrã.",
    "content": """### O que vais aprender nesta aula:
- Utilizar o hook \\`useState\\` para gerir estado local
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
\\`\\`\\`jsx
const [count, setCount] = useState(0);
<button onClick={() => setCount(count + 1)}>{count}</button>
\\`\\`\\`

**2. Função Updater (Seguro)**
\\`\\`\\`jsx
setCount(prev => prev + 1); // Garante o valor mais atual
\\`\\`\\`""",
    "practice": "Cria um conversor de temperatura (Celsius para Fahrenheit) onde o utilizador digita um valor e o resultado aparece instantaneamente no ecrã.",
    "resources": [
        {"name": "React Docs - useState", "url": "https://react.dev/reference/react/useState"}
    ],
    "quiz": {
        "question": "Qual é a forma correta de adicionar um item a um array no estado?",
        "options": ["setItems(items.push(new))", "setItems([...items, new])", "items = [...items, new]", "Nenhuma"],
        "correctAnswer": 1
    }
}

# Lesson 10
lesson_10 = {
    "category": "Hooks",
    "difficulty": "Iniciante",
    "readingTime": "60 min",
    "title": "Aula 10: Efeitos com useEffect – Sincronização",
    "description": "Lidar com efeitos secundários: chamadas de API, timers e eventos globais.",
    "proTip": "Sempre que usares timers ou subscrições, usa a função de cleanup do useEffect para evitar fugas de memória (memory leaks).",
    "content": """### O que vais aprender nesta aula:
- Executar código após a renderização com \\`useEffect\\`
- Controlar execuções com o array de dependências
- Realizar limpezas (cleanup) de efeitos
- Fazer requisições a APIs externas

---

### 🧠 Teoria: A Analogia do Assistente

- **Componente** = tu, focado no teu trabalho principal (UI).
- **useEffect** = o teu assistente que trata de tarefas paralelas (buscar café, verificar emails).
- **Dependências** = a lista de coisas que fazem o assistente trabalhar. Se a lista estiver vazia \\`[]\\`, ele só trabalha quando chegas (montagem).

**Por que isto importa?** Precisas de efeitos para conectar a tua app ao mundo real: bases de dados, APIs de clima, geolocalização, etc.

---

### 💻 Prática: Fetching de Dados

**1. Executar na montagem**
\\`\\`\\`jsx
useEffect(() => {
  console.log("Olá mundo!");
}, []); // [] = corre apenas uma vez
\\`\\`\\`

**2. API Real**
\\`\\`\\`jsx
useEffect(() => {
  fetch('url').then(res => res.json()).then(setData);
}, [dependencia]); // Corre quando a dependencia muda
\\`\\`\\`""",
    "practice": "Cria um componente que busca e exibe o clima de uma cidade (podes usar uma função fake com delay) sempre que o nome da cidade mudar num input.",
    "resources": [
        {"name": "React Docs - useEffect", "url": "https://react.dev/reference/react/useEffect"}
    ],
    "quiz": {
        "question": "Quando é que um useEffect com [] é executado?",
        "options": ["Em cada renderização", "Apenas na primeira (montagem)", "Nunca", "Apenas na desmontagem"],
        "correctAnswer": 1
    }
}

# Lesson 11
lesson_11 = {
    "category": "Hooks",
    "difficulty": "Intermédio",
    "readingTime": "60 min",
    "title": "Aula 11: Hooks Personalizados – Reutilização",
    "description": "Extrair lógica complexa para funções reutilizáveis, mantendo os teus componentes limpos e modulares.",
    "proTip": "Pergunta-te: 'Estou a repetir esta lógica em mais de um componente?' Se sim, é hora de criar um hook personalizado!",
    "content": """### O que vais aprender nesta aula:
- Criar hooks personalizados (useXyz)
- Partilhar lógica sem duplicar código
- Combinar múltiplos hooks nativos num só
- Seguir as Rules of Hooks em funções customizadas

---

### 🧠 Teoria: A Analogia das Receitas

- **Lógica duplicada** = copiar a mesma receita em 10 cadernos diferentes.
- **Hook personalizado** = criar uma receita mestra que todos podem referenciar.

**Por que isto importa?** Hooks personalizados permitem separar o 'comportamento' da 'aparência'. O teu componente fica focado no HTML/JSX e o Hook focado na lógica.

> 💡 **Sabias que?** A convenção \\`use\\` no nome é obrigatória para que o React saiba que aquela função pode conter outros hooks internamente.

---

### 💻 Prática: Criando useFetch

\\`\\`\\`javascript
function useOnline() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  // ... lógica de addEventListener
  return isOnline;
}
\\`\\`\\`""",
    "practice": "Cria um hook personalizado 'useCounter' que aceite um valor máximo e forneça funções para incrementar, decrementar e resetar.",
    "resources": [
        {"name": "React Docs - Custom Hooks", "url": "https://react.dev/learn/reusing-logic-with-custom-hooks"}
    ],
    "quiz": {
        "question": "Qual é a convenção de nomenclatura para hooks personalizados?",
        "options": ["hookXyz", "customXyz", "useXyz", "reactXyz"],
        "correctAnswer": 2
    }
}

# Lesson 12
lesson_12 = {
    "category": "Navegação",
    "difficulty": "Intermédio",
    "readingTime": "60 min",
    "title": "Aula 12: Rotas com React Router – Navegação SPA",
    "description": "Criar aplicações de página única com navegação fluida entre diferentes vistas e URLs.",
    "proTip": "Nunca uses <a href> em apps React Router! Usa <Link to> para evitar que a página inteira recarregue e percas o estado.",
    "content": """### O que vais aprender nesta aula:
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

\\`\\`\\`jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/blog/:id" element={<PostDetail />} />
  <Route path="*" element={<NotFound />} />
</Routes>
\\`\\`\\`""",
    "practice": "Cria um blog simples com uma página de lista de posts e uma página de detalhe que usa useParams() para identificar qual post exibir.",
    "resources": [
        {"name": "React Router Tutorial", "url": "https://reactrouter.com/en/main/start/tutorial"}
    ],
    "quiz": {
        "question": "Qual componente deves usar para navegar sem recarregar a página?",
        "options": ["<a>", "<Navigation>", "<Link>", "<Route>"],
        "correctAnswer": 2
    }
}

# Lesson 13
lesson_13 = {
    "category": "Estado Global",
    "difficulty": "Intermédio",
    "readingTime": "60 min",
    "title": "Aula 13: Gestão de Estado Global com Context API",
    "description": "Partilhar informação entre componentes distantes sem precisar de passar props manualmente por todos os níveis.",
    "proTip": "Usa a Context API com moderação. Se o dado é usado apenas por dois componentes próximos, continua a usar props!",
    "content": """### O que vais aprender nesta aula:
- Criar e fornecer contexto com \\`createContext\\` e \\`Provider\\`
- Consumir dados globais com \\`useContext\\`
- Resolver o problema do 'Prop Drilling'
- Persistir dados globais (ex: Temas ou Autenticação)

---

### 🧠 Teoria: A Analogia do Megafone

- **Prop Drilling** = passar um recado de pessoa em pessoa até chegar ao fim da fila.
- **Context API** = usar um megafone para que todos oiçam a mensagem diretamente.

**Por que isto importa?** Dados como 'Quem é o utilizador logado?' ou 'O tema é escuro ou claro?' são necessários em quase toda a app. O Contexto torna-os acessíveis em qualquer lado.

---

### 💻 Prática: ThemeContext

\\`\\`\\`jsx
const ThemeContext = createContext();

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Main />
    </ThemeContext.Provider>
  );
}
\\`\\`\\`""",
    "practice": "Cria um sistema de autenticação global (AuthContext) onde qualquer componente pode saber se o utilizador está logado e qual o seu nome.",
    "resources": [
        {"name": "React Docs - Context", "url": "https://react.dev/reference/react/useContext"}
    ],
    "quiz": {
        "question": "Qual é o principal problema que a Context API resolve?",
        "options": ["Prop Drilling", "Lentidão do JS", "Falta de CSS", "Erros de sintaxe"],
        "correctAnswer": 0
    }
}

# Lesson 14
lesson_14 = {
    "category": "Performance",
    "difficulty": "Avançado",
    "readingTime": "60 min",
    "title": "Aula 14: Performance em React – useMemo e useCallback",
    "description": "Otimizar aplicações evitando cálculos caros e re-renderizações desnecessárias em componentes pesados.",
    "proTip": "Regra de ouro: Não otimizes prematuramente! Só usa estes hooks se tiveres problemas reais de lentidão detetados no Profiler.",
    "content": """### O que vais aprender nesta aula:
- Memoizar cálculos com \\`useMemo\\`
- Estabilizar funções com \\`useCallback\\`
- Entender quando (e quando não) otimizar
- Prevenir re-renderizações de filhos com \\`React.memo\\`

---

### 🧠 Teoria: A Analogia do Bloco de Notas

- **Sem memoização** = fazer uma conta matemática gigante todas as manhãs.
- **Com useMemo** = fazer a conta uma vez, escrever o resultado num post-it e só refazer se os números mudarem.

**Por que isto importa?** Funções e objetos são recriados em cada renderização. Se passares estas referências para componentes filhos pesados, eles vão re-renderizar sem necessidade.

---

### 💻 Prática: Memoização

**1. useMemo (Valores)**
\\`\\`\\`jsx
const total = useMemo(() => calcular(dados), [dados]);
\\`\\`\\`

**2. useCallback (Funções)**
\\`\\`\\`jsx
const handleAdd = useCallback(() => { ... }, [dependencias]);
\\`\\`\\`""",
    "practice": "Otimiza uma lista de 1000 itens onde o cálculo do total deve ser memoizado para não travar a interface ao digitar num input de procura.",
    "resources": [
        {"name": "React Docs - useMemo", "url": "https://react.dev/reference/react/useMemo"},
        {"name": "React Docs - useCallback", "url": "https://react.dev/reference/react/useCallback"}
    ],
    "quiz": {
        "question": "Para que serve o useMemo?",
        "options": ["Memoizar cálculos caros", "Mudar o estilo CSS", "Fazer fetch de APIs", "Criar novas rotas"],
        "correctAnswer": 0
    }
}

content = update_lesson_in_content(content, 2, lesson_2)
content = update_lesson_in_content(content, 7, lesson_7)
content = update_lesson_in_content(content, 8, lesson_8)
content = update_lesson_in_content(content, 9, lesson_9)
content = update_lesson_in_content(content, 10, lesson_10)
content = update_lesson_in_content(content, 11, lesson_11)
content = update_lesson_in_content(content, 12, lesson_12)
content = update_lesson_in_content(content, 13, lesson_13)
content = update_lesson_in_content(content, 14, lesson_14)

with open(filepath, 'w') as f:
    f.write(content)
