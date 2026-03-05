const e=[{id:1,videoUrl:"https://www.youtube.com/embed/SqcY0GlETPk",category:"Fundamentos",difficulty:"Iniciante",readingTime:"60 min",title:"Aula 1: Introdução ao JavaScript Moderno",description:"Compreender o papel do JavaScript e dar os primeiros passos na consola.",proTip:"Os erros são os teus melhores professores. Se aparecer vermelho na consola, lê com atenção! A curiosidade e a tentativa-erro são as chaves para aprender programação.",content:`### O que vais aprender nesta aula:
- Compreender a diferença entre HTML, CSS e JavaScript
- Reconhecer o papel do JavaScript na web moderna
- Abrir e utilizar a consola do navegador como ferramenta de desenvolvimento
- Executar os teus primeiros comandos JavaScript
- Conhecer um pouco da história e importância do JavaScript
- Experimentar interação básica com o utilizador

---

### 🧠 Teoria: A Analogia da Casa Inteligente

Para entender o JavaScript, vamos usar uma analogia clara:
- **HTML** é a estrutura da casa — paredes, portas, janelas (o conteúdo estático).
- **CSS** é a decoração — cores, móveis, iluminação (o aspeto visual).
- **JavaScript** é a eletricidade, canalização e automação — faz as luzes acenderem, as portas abrirem sozinhas e a água correr (interatividade e comportamento dinâmico).

**Porquê isto importa para ti?** Sem JavaScript, os websites seriam apenas folhetos estáticos. Com ele, criamos aplicações rápidas, interativas e que parecem nativas como o Gmail, Netflix ou Spotify. Em 2026, é a base obrigatória para qualquer developer profissional.

> 💡 **Sabias que?** O JavaScript foi criado em apenas 10 dias por Brendan Eich em 1995. Originalmente chamava-se Mocha, depois LiveScript, e finalmente JavaScript para aproveitar a popularidade do Java na época. Hoje é a linguagem mais usada no mundo!

---

### 💻 Prática: A Consola do Navegador

Abre as Ferramentas de Programador no teu navegador (<kbd>F12</kbd> ou <kbd>Ctrl+Shift+J</kbd>) e vai ao separador **consola**. É aqui que a magia acontece!

**1. O teu primeiro comando**
\`\`\`javascript
console.log("Olá, mundo!");
\`\`\`

**2. Variáveis e Interação**
\`\`\`javascript
let nome = "Sandro Pereira";
console.log("Bem-vindo ao curso de React, " + nome + "! 🚀");
alert("Bem-vindo à tua jornada!");
\`\`\`

**3. Interação Real**
\`\`\`javascript
let resposta = prompt("Pronto para aprender JavaScript moderno?");
console.log("Resposta do aluno:", resposta);
\`\`\`

**4. Cálculo simples**
\`\`\`javascript
console.log(2026 - 1995); // Quantos anos tem o JavaScript em 2026?
console.log(10 * 30); // Horas totais estimadas para este curso
\`\`\`

---

### ⚠️ Dica de Mindset
Experimenta mudar os valores e ver o que acontece. A curiosidade e a tentativa-erro são as chaves para aprender programação rapidamente. Não tenhas medo de "partir" nada na consola!

---

### 🚀 Reforço de Confiança
- Todos os grandes developers começaram exatamente onde estás agora — com o primeiro \`console.log()\`.
- Erro = Aprendizagem. Cada mensagem vermelha na consola é um passo para a mestria.
- Não precisas de ser um génio em matemática. Persistência e prática diária valem mais.
- Em poucas semanas vais olhar para trás e ver o quanto já evoluíste!

---

### 📋 Resumo & Próximos Passos
- [ ] Entendi a diferença entre HTML, CSS e JavaScript.
- [ ] Sei abrir e usar a consola do navegador.
- [ ] Executei comandos como \`console.log\`, \`alert\` e \`prompt\`.
- [ ] Estou pronto para aprender sobre variáveis na próxima aula.`,practice:"Cria um programa na consola que apresente uma mini-apresentação pessoal interativa. Usa pelo menos 3 comandos console.log(), variáveis para o teu nome, idade e objetivo no curso, e inclui pelo menos um prompt() e um alert().",playground:{html:`<!-- Testa o teu código JavaScript aqui -->
<h1 id='titulo'>Olá Mundo!</h1>
<button id='btn'>Clica-me</button>`,css:`body { font-family: sans-serif; text-align: center; padding: 20px; }
button { padding: 10px 20px; cursor: pointer; }`,js:`// Escreve aqui o teu código da Aula 1
const btn = document.getElementById('btn');
btn.onclick = () => {
  const nome = prompt('Qual é o teu nome?');
  alert('Bem-vindo ao curso, ' + nome + '!');
  console.log('Utilizador saudado: ' + nome);
};`},resources:[{name:"MDN - JavaScript First Steps",url:"https://developer.mozilla.org/pt-PT/docs/Learn/JavaScript/First_steps"},{name:"W3Schools - JS Introduction",url:"https://www.w3schools.com/js/js_intro.asp"}],quizzes:[{question:"Qual é o papel principal do JavaScript numa página web?",options:["Definir a estrutura e conteúdo da página","Estilizar e dar cor aos elementos","Adicionar interatividade e comportamento dinâmico","Substituir o HTML completamente"],correctAnswer:2},{question:"Pergunta de bónus: O React é mantido por qual empresa?",options:["Google","Meta (Facebook)","Microsoft","Amazon"],correctAnswer:1}]},{id:2,category:"Fundamentos",difficulty:"Iniciante",readingTime:"60 min",title:"Aula 2: Variáveis, Tipos de Dados e Operadores",description:"Dominar o controlo de dados e lógica básica em JavaScript moderno.",proTip:"Sempre que possível, usa const. Só muda para let se souberes que o valor vai mudar. Isto reduz erros e melhora a legibilidade.",content:'### O que vais aprender nesta aula:\n- Declarar variáveis com `let`, `const` e entender quando usar cada uma\n- Identificar os 7 tipos primitivos de dados em JavaScript\n- Utilizar operadores aritméticos, de comparação e lógicos\n- Trabalhar com strings usando template literals\n- Compreender coerção de tipos e evitar armadilhas comuns\n\n---\n\n### 🧠 Teoria: A Analogia das Caixas Rotuladas\n\nAs variáveis são como "caixas" onde guardamos informação:\n- **`const`** é uma caixa lacrada — podes guardar algo dentro (ex: um objeto), mas não podes trocar a caixa por outra. É para valores que não mudam.\n- **`let`** é uma caixa aberta — podes mudar o conteúdo quantas vezes quiseres.\n- **`var`** é uma caixa antiga com comportamento imprevisível — evita-a em 2026!\n\n**Porquê isto importa para ti?** Escolher corretamente entre `let` e `const` evita bugs difíceis de encontrar (como reatribuições acidentais) e torna o teu código mais legível e seguro — algo que recrutadores valorizam imediatamente.\n\n> 💡 **Sabias que?** JavaScript tem apenas 7 tipos primitivos: `string`, `number`, `bigint`, `boolean`, `null`, `undefined` e `symbol`. Tudo o resto (arrays, objetos, funções) é tecnicamente um `object`!\n\n---\n\n### 💻 Prática: Variáveis e Operadores Seguros\n\nAbre a consola e experimenta:\n\n**1. Declaração e Reatribuição**\n```javascript\nconst nome = "Sandro";\nlet idade = 30;\nidade = 31; // Válido\n// nome = "João"; // Erro! const não pode ser reatribuído\n```\n\n**2. Template Literals (Moderno e Legível)**\n```javascript\nconst linguagem = "JavaScript";\nconst ano = 2026;\nconsole.log(`Estou a aprender ${linguagem} em ${ano}!`);\n```\n\n**3. Operadores de Comparação Segura**\n```javascript\nconsole.log(5 == "5");  // true (perigoso! faz coerção)\nconsole.log(5 === "5"); // false (seguro! compara valor e tipo)\n```\n\n---\n\n### ⚠️ Dica Técnica\nEm português europeu e boas práticas globais, usa nomes descritivos em `camelCase`. Ex: `const nomeUtilizador = "Sandro";` em vez de `const n = "Sandro";`.\n\n---\n\n### 🚀 Reforço de Confiança\n- Mesmo os melhores developers confundem-se com `==` vs `===` no início.\n- Cada variável bem nomeada é um passo para código que o "tu do futuro" conseguirá ler.\n- Estás a construir o vocabulário da tua nova língua digital.\n\n---\n\n### 📋 Resumo & Próximos Passos\n- [ ] Sei quando usar `const` vs `let`.\n- [ ] Conheço os tipos primitivos (string, number, boolean...).\n- [ ] Uso `===` para comparações seguras.\n- [ ] Sei criar strings dinâmicas com template literals.',practice:"Cria um programa que calcule o IMC (Índice de Massa Corporal). Usa const para nome e altura, let para peso (que pode mudar). Calcula IMC = peso / (altura * altura) e exibe o resultado usando template literals.",playground:{html:"<div id='app'></div>",css:"#app { font-family: system-ui; padding: 2rem; border-radius: 1rem; background: #f0f9ff; }",js:`const nome = 'Sandro';
const altura = 1.75;
let peso = 75;

const imc = peso / (altura * altura);
const msg = \`Olá \${nome}, o teu IMC é \${imc.toFixed(2)}\`;

document.getElementById('app').textContent = msg;`},resources:[{name:"MDN - Grammar and types",url:"https://developer.mozilla.org/pt-PT/docs/Web/JavaScript/Guide/Grammar_and_types"},{name:"JavaScript.info - Variables",url:"https://javascript.info/variables"}],quizzes:[{question:"Qual operador deves usar para comparar valor e tipo de forma segura?",options:["==","=","===","!="],correctAnswer:2},{question:"Pergunta de bónus: O React é mantido por qual empresa?",options:["Google","Meta (Facebook)","Microsoft","Amazon"],correctAnswer:1}]},{id:3,category:"Fundamentos",difficulty:"Iniciante",readingTime:"60 min",title:"Aula 3: Controle de Fluxo – Condicionais e Loops",description:"Utilizar estruturas condicionais e loops para tomar decisões e repetir tarefas.",proTip:"Evita o 'aninhamento excessivo' (muitos if dentro de if) usando return cedo ou guard clauses. Código limpo é código legível!",content:`### O que vais aprender nesta aula:
- Utilizar estruturas condicionais (\`if/else\`, \`switch\`) para tomar decisões
- Implementar loops (\`for\`, \`while\`, \`for...of\`) para repetir tarefas
- Usar o operador ternário para decisões simples e rápidas
- Combinar condições com operadores lógicos (\`&&\`, \`||\`, \`!\`)
- Aplicar boas práticas para evitar código confuso

---

### 🧠 Teoria: A Analogia do Semáforo Inteligente

O controle de fluxo é como o sistema nervoso de uma aplicação:
- **Condicionais (\`if/else\`)** são como semáforos: se o sinal está verde → avança; se está vermelho → para.
- **Loops (\`for\`)** são como rotinas diárias: repete a mesma sequência (acordar, pequeno-almoço, trabalho) todos os dias até chegar ao fim de semana.

**Porquê isto importa para ti?** Em React, vais usar isto constantemente para mostrar ou esconder componentes (ex: mostrar botão de login se não estiver autenticado) e para listar dados (ex: mostrar todos os produtos de um carrinho).

> 💡 **Sabias que?** O operador ternário (\`condição ? verdadeiro : falso\`) é o favorito dos developers React para decidir o que renderizar no ecrã de forma elegante.

---

### 💻 Prática: Decisões e Repetições

**1. Condicional e Ternário**
\`\`\`javascript
const idade = 20;
if (idade >= 18) {
  console.log("Acesso permitido");
}

const status = idade >= 18 ? "Adulto" : "Menor";
console.log(status);
\`\`\`

**2. Loop Moderno (for...of)**
\`\`\`javascript
const tecnologias = ["React", "JavaScript", "Tailwind"];
for (const tech of tecnologias) {
  console.log(\`Estou a dominar \${tech}!\`);
}
\`\`\`

**3. Guard Clauses (Código Limpo)**
\`\`\`javascript
if (!utilizadorLogado) return "Faz login primeiro";
// ... resto da lógica
\`\`\`

---

### ⚠️ Dica Técnica
Em React, evita usar o \`for\` tradicional para renderizar listas no ecrã. Usaremos o \`.map()\`, que aprenderemos na Aula 5, mas a lógica de repetição que estás a aprender agora é a base de tudo!

---

### 🚀 Reforço de Confiança
- Loops infinitos acontecem a todos (até aos seniors!). Se a consola travar, fecha o separador e respira fundo.
- Cada \`if\` bem colocado torna a tua aplicação mais inteligente e robusta.
- Divide problemas grandes em decisões pequenas.

---

### 📋 Resumo & Próximos Passos
- [ ] Consigo usar \`if/else\` para lógica simples.
- [ ] Entendo como o operador ternário simplifica o código.
- [ ] Sei iterar sobre uma lista usando \`for...of\`.
- [ ] Percebo a importância dos operadores lógicos (\`&&\`, \`||\`).`,practice:"Cria um programa que verifica a força de uma password. Ela deve ter pelo menos 8 caracteres. Usa um loop para contar se tem números e condicionais para classificar como 'Fraca' ou 'Forte'.",resources:[{name:"MDN - Control flow",url:"https://developer.mozilla.org/pt-PT/docs/Web/JavaScript/Guide/Control_flow_and_error_handling"},{name:"W3Schools - JS Loop For",url:"https://www.w3schools.com/js/js_loop_for.asp"}],quizzes:[{question:"Qual é a principal vantagem do operador ternário?",options:["É mais rápido que o if/else","Permite escrever condicionais simples de forma concisa","Funciona apenas com números","Substitui os loops"],correctAnswer:1},{question:"Pergunta de bónus: O React é mantido por qual empresa?",options:["Google","Meta (Facebook)","Microsoft","Amazon"],correctAnswer:1}]},{id:4,category:"Fundamentos",difficulty:"Iniciante",readingTime:"60 min",title:"Aula 4: Funções e Escopo",description:"Aprender a criar blocos de código reutilizáveis e entender a visibilidade das variáveis.",proTip:"Se estás a copiar e colar o mesmo código mais de duas vezes, transforma-o numa função! É o primeiro passo para código profissional.",content:`### O que vais aprender nesta aula:
- Declarar funções com as sintaxes clássica e moderna (Arrow Functions)
- Compreender parâmetros (o que entra) e retorno (o que sai)
- Dominar os conceitos de Escopo Global, de Função e de Bloco
- Entender o que é Hoisting e como evitá-lo usando \`let\` e \`const\`
- Aplicar funções como peças modulares de um sistema

---

### 🧠 Teoria: A Analogia da Receita de Cozinha

As funções são os "módulos" do teu código:
- **Função** = uma receita (ex: "Bolo de Laranja").
- **Parâmetros** = os ingredientes (ovos, açúcar, farinha).
- **Chamada** = o ato de cozinhar seguindo a receita.
- **Retorno** = o bolo pronto a ser servido!

**Porquê isto importa para ti?** No React moderno, TUDO é uma função. Cada componente que vês no ecrã é, tecnicamente, uma função que retorna HTML (JSX). Se não dominares funções, o React parecerá "mágico" e confuso.

> 💡 **Sabias que?** As Arrow Functions (\`() => {}\`) não têm o seu próprio \`this\`. Isto resolve 90% dos bugs clássicos de JavaScript quando trabalhamos com eventos e temporizadores!

---

### 💻 Prática: Criando Blocos Reutilizáveis

**1. Sintaxe Moderna (Arrow Function)**
\`\`\`javascript
const calcularDesconto = (preco, percentagem) => {
  return preco * (percentagem / 100);
};
console.log(calcularDesconto(100, 20)); // 20
\`\`\`

**2. Escopo de Bloco (Segurança)**
\`\`\`javascript
if (true) {
  const segredo = "1234";
  console.log(segredo); // Funciona
}
// console.log(segredo); // Erro! Protegido pelo escopo.
\`\`\`

**3. Retorno Imediato**
\`\`\`javascript
const dobro = n => n * 2; // Conciso e elegante
\`\`\`

---

### ⚠️ Dica de Carreira
Em entrevistas técnicas, perguntam quase sempre a diferença entre \`function declaration\` e \`arrow function\`. A resposta chave envolve \`hoisting\` e o comportamento do \`this\`.

---

### 🚀 Reforço de Confiança
- Funções bem escritas são como bons amigos: confiáveis, previsíveis e sempre prontas a ajudar.
- Não tentes fazer funções que fazem tudo. Uma função deve fazer apenas UMA coisa e bem.
- Estás a aprender a "falar" a língua nativa do React.

---

### 📋 Resumo & Próximos Passos
- [ ] Sei criar funções com a seta (\`=>\`).
- [ ] Entendo a diferença entre \`let\`, \`const\` e \`var\` no escopo.
- [ ] Consigo passar dados para funções através de parâmetros.
- [ ] Sei como extrair um resultado usando \`return\`.`,practice:"Cria uma calculadora modular. Define 4 funções (somar, subtrair, multiplicar, dividir) e uma função principal 'calcular(op, a, b)' que decide qual usar. Inclui uma verificação para não permitir divisão por zero!",resources:[{name:"MDN - Functions",url:"https://developer.mozilla.org/pt-PT/docs/Web/JavaScript/Guide/Functions"},{name:"JavaScript.info - Arrow Functions",url:"https://javascript.info/arrow-functions-basics"}],quizzes:[{question:"Porque é que as arrow functions são tão populares no React?",options:["São mais rápidas a executar","Têm sintaxe concisa e não têm o seu próprio 'this'","Substituem o HTML","Funcionam apenas em dispositivos móveis"],correctAnswer:1},{question:"Pergunta de bónus: O React é mantido por qual empresa?",options:["Google","Meta (Facebook)","Microsoft","Amazon"],correctAnswer:1}]},{id:5,category:"Fundamentos",difficulty:"Iniciante",readingTime:"60 min",title:"Aula 5: Arrays e Objetos – Estruturas de Dados",description:"Organizar e transformar dados complexos usando métodos modernos.",proTip:"Pensa nos teus dados como 'fotografias'. Quando precisas de alterar algo em React, cria uma nova fotografia (cópia) em vez de rabiscar a original!",content:`### O que vais aprender nesta aula:
- Criar e manipular listas com métodos modernos (\`map\`, \`filter\`, \`reduce\`)
- Organizar informação semântica em Objetos
- Dominar a Desestruturação (extrair dados de forma limpa)
- Utilizar o Spread Operator (\`...\`) para manter a imutabilidade
- Aplicar boas práticas para lidar com dados que vêm de APIs

---

### 🧠 Teoria: A Analogia da Caixa de Ferramentas

- **Array** = Uma gaveta organizada por ordem (ferramenta 0, ferramenta 1...). Útil para listas de coisas iguais (ex: lista de compras).
- **Objeto** = Uma gaveta organizada por etiquetas (cor: "azul", tamanho: "grande"). Útil para descrever uma coisa complexa (ex: um utilizador).

**Porquê isto importa para ti?** No React, os teus dados serão quase sempre um "Array de Objetos". O método \`.map()\` será o teu melhor amigo para transformar esses dados em elementos visuais no ecrã automaticamente.

> 💡 **Sabias que?** O React depende da "Imutabilidade". Se mudares um valor dentro de um array original, o React pode não perceber que deve atualizar o ecrã. Por isso, usamos sempre o spread operator para criar cópias!

---

### 💻 Prática: Manipulação de Dados Realista

**1. Transformação com .map()**
\`\`\`javascript
const precos = [10, 20, 30];
const comIVA = precos.map(p => p * 1.23); // [12.3, 24.6, 36.9]
\`\`\`

**2. Filtragem com .filter()**
\`\`\`javascript
const tarefas = [
  { id: 1, texto: "Estudar", feita: true },
  { id: 2, texto: "Praticar", feita: false }
];
const pendentes = tarefas.filter(t => !t.feita);
\`\`\`

**3. Desestruturação e Spread**
\`\`\`javascript
const utilizador = { nome: "Sandro", idade: 30 };
const { nome } = utilizador; // Extrai "Sandro"
const atualizado = { ...utilizador, cidade: "Lisboa" }; // Cópia segura
\`\`\`

---

### ⚠️ Dica Técnica
Evita métodos que alteram o array original como \`.push()\` ou \`.splice()\`. Prefere sempre métodos que retornam um novo array (\`.map\`, \`.filter\`, \`[...array]\`).

---

### 🚀 Reforço de Confiança
- Até os seniors se esquecem da sintaxe do \`.reduce()\` às vezes. O importante é saber que ele existe.
- Dominar estes métodos de array é o que separa um "ajudante" de um "developer React profissional".
- Estás a aprender a gerir o "combustível" (dados) das tuas aplicações.

---

### 📋 Resumo & Próximos Passos
- [ ] Sei extrair dados de objetos usando \`{ }\`.
- [ ] Consigo transformar uma lista usando \`.map()\`.
- [ ] Sei filtrar itens de uma array usando \`.filter()\`.
- [ ] Entendo porque devo criar cópias em vez de mudar o original.`,practice:"Cria um array de objetos chamado 'produtos', onde cada um tem nome e preco. Usa o .filter() para listar apenas os produtos com preço superior a 50€ e o .map() para criar uma nova lista apenas com os nomes desses produtos.",resources:[{name:"MDN - Array Methods",url:"https://developer.mozilla.org/pt-PT/docs/Web/JavaScript/Reference/Global_Objects/Array"},{name:"JavaScript.info - Objects",url:"https://javascript.info/object"}],quizzes:[{question:"Qual é o método de array mais utilizado no React para renderizar listas no ecrã?",options:["forEach()","push()","map()","pop()"],correctAnswer:2},{question:"Pergunta de bónus: O React é mantido por qual empresa?",options:["Google","Meta (Facebook)","Microsoft","Amazon"],correctAnswer:1}]},{id:6,category:"Fundamentos",difficulty:"Iniciante",readingTime:"60 min",title:"Aula 6: Manipulação do DOM",description:"Interagir com a página web selecionando e modificando elementos HTML.",proTip:"Prefere textContent em vez de innerHTML quando não precisas de renderizar HTML real, por razões de segurança (evita ataques XSS).",content:`### O que vais aprender nesta aula:
- Selecionar elementos HTML usando \`querySelector\` e \`getElementById\`
- Modificar conteúdo, estilos e atributos de forma dinâmica
- Criar e remover elementos do ecrã com JavaScript
- Responder a interações do utilizador através de Event Listeners

---

### 🧠 Teoria: A Analogia do Teatro e o Guião Dinâmico

Imagina que o teu website é uma peça de teatro:
- **HTML** é o guião original (as falas e estrutura).
- **CSS** é o cenário e os figurinos.
- **JavaScript (DOM)** é o diretor que pode mudar as falas ou a posição dos atores em tempo real, dependendo da reação do público.

**Porquê isto importa para ti?** O React automatiza a manipulação do DOM para ser mais eficiente, mas entender como o browser funciona por baixo do capô é essencial para resolver bugs complexos e entender o "Virtual DOM".

---

### 💻 Prática: Dando Vida à Página

**1. Seleção e Alteração**
\`\`\`javascript
const titulo = document.querySelector("h1");
titulo.textContent = "Olá, mundo dinâmico!";
titulo.style.color = "#2563eb";
\`\`\`

**2. Escutar o Utilizador**
\`\`\`javascript
const botao = document.querySelector("#meuBotao");
botao.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
\`\`\`

**3. Criar Elementos**
\`\`\`javascript
const novoItem = document.createElement("li");
novoItem.textContent = "Nova Tarefa";
document.querySelector("ul").appendChild(novoItem);
\`\`\`

---

### ⚠️ Dica Essencial
Não abuses da manipulação direta do DOM quando começares a usar React. O React quer ter o controlo total do que é exibido para garantir performance!

---

### 🚀 Reforço de Confiança
- Manipular o DOM pela primeira vez é quando sentes que realmente tens "super-poderes" na web.
- Se algo não aparecer, verifica se selecionaste o ID ou Classe correta (# vs .).
- Estás quase a chegar ao React, onde tudo isto se torna automático e muito mais poderoso.

---

### 📋 Resumo & Próximos Passos
- [ ] Sei selecionar elementos por ID e Classe.
- [ ] Consigo mudar o texto e a cor de um elemento via JS.
- [ ] Entendo como adicionar um evento de clique.
- [ ] Sei criar um elemento novo e colocá-lo na página.`,practice:"Cria um pequeno contador HTML com um <span> para o número e dois botões (+ e -). Usa JavaScript para atualizar o número no ecrã sempre que um botão for clicado.",resources:[{name:"MDN - Manipulating the DOM",url:"https://developer.mozilla.org/pt-PT/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents"}],quizzes:[{question:"Qual é o método mais moderno e flexível para selecionar um elemento no DOM?",options:["getElementById()","getElementsByTagName()","querySelector()","select()"],correctAnswer:2},{question:"Pergunta de bónus: O React é mantido por qual empresa?",options:["Google","Meta (Facebook)","Microsoft","Amazon"],correctAnswer:1}]},{id:7,category:"Fundamentos",difficulty:"Iniciante",readingTime:"60 min",title:"Aula 7: Introdução ao React – O Primeiro Componente",description:"Entrar no ecossistema React e criar o teu primeiro componente funcional.",proTip:"Nunca esqueças de fechar tags em JSX! Mesmo tags como <img> devem ser escritas como <img /> (self-closing).",content:`### O que vais aprender nesta aula:
- Compreender o que é o React e porque é a escolha n.º 1 do mercado
- Configurar o ambiente de desenvolvimento moderno com o Vite
- Criar e exportar o teu primeiro Componente Funcional
- Dominar o JSX: a mistura poderosa de HTML e JavaScript
- Entender as regras básicas de sintaxe do React

---

### 🧠 Teoria: A Analogia dos Blocos de Construção (Lego)

Imagina que estás a construir uma nave espacial:
- **Componentes React** são as peças individuais (o motor, a asa, o cockpit).
- **Props** são os encaixes que permitem ligar as peças.
- **JSX** é o manual que descreve como cada peça deve ser montada.

**Porquê isto importa para ti?** Em vez de escreveres um ficheiro HTML gigante e confuso, vais criar pequenas peças (Componentes) que podes reutilizar em qualquer lado. Isto torna o desenvolvimento 10x mais rápido e fácil de manter.

> 💡 **Sabias que?** O React foi criado pelo Facebook em 2011 para resolver o problema de atualizar as notificações sem recarregar a página. Hoje, é usado pela Netflix, Airbnb, Uber e milhões de outras empresas.

---

### 💻 Prática: O Teu Primeiro Componente

**1. Estrutura de um Componente**
\`\`\`jsx
function BemVindo() {
  return (
    <div className="card">
      <h1>Olá, Aluno Premium!</h1>
      <p>Este é o meu primeiro componente React.</p>
    </div>
  );
}
export default BemVindo;
\`\`\`

**2. Regras de Ouro do JSX**
- Usa \`className\` em vez de \`class\`.
- Usa \`htmlFor\` em vez de \`for\`.
- Retorna sempre apenas UM elemento pai (usa \`<> </>\` se necessário).
- Expressões JavaScript ficam dentro de \`{ }\`.

---

### ⚠️ Dica de Mindset
No início, o JSX parece estranho porque mistura lógica com visual. Dá-lhe 2 dias e nunca mais vais querer voltar ao HTML puro. É o segredo da produtividade moderna.

---

### 🚀 Reforço de Confiança
- Parabéns! Acabaste de entrar no mundo do desenvolvimento profissional.
- Não precisas de decorar todas as configurações do Vite; foca-te em escrever componentes.
- Estás a aprender a ferramenta que mais paga salários altos no mundo do desenvolvimento web.

---

### 📋 Resumo & Próximos Passos
- [ ] Instalei o meu primeiro projeto com Vite.
- [ ] Percebo que um componente é apenas uma função que retorna HTML.
- [ ] Sei a diferença entre \`className\` e \`class\`.
- [ ] Estou pronto para passar dados entre componentes.`,practice:"Cria um componente chamado 'CartaoPerfil' que exiba um título, uma descrição e um botão. Usa JSX e garante que todas as tags estão corretamente fechadas.",resources:[{name:"React Docs - Your First Component",url:"https://react.dev/learn/your-first-component"},{name:"Vite Guide",url:"https://vitejs.dev/guide/"}],quizzes:[{question:"O que é o JSX no ecossistema React?",options:["Uma nova linguagem de programação","Uma extensão de sintaxe que permite escrever HTML dentro do JavaScript","Um substituto para o CSS","Uma base de dados"],correctAnswer:1},{question:"Pergunta de bónus: O React é mantido por qual empresa?",options:["Google","Meta (Facebook)","Microsoft","Amazon"],correctAnswer:1}]},{id:8,category:"Fundamentos",difficulty:"Iniciante",readingTime:"60 min",title:"Aula 8: Props – Comunicando entre Componentes",description:"Passar dados entre componentes para criar interfaces modulares e reutilizáveis.",proTip:"Tenta desestruturar as tuas props logo nos parâmetros da função: function Utilizador({ nome }) { ... }. Fica muito mais limpo!",content:`### O que vais aprender nesta aula:
- Passar dados do Componente Pai para o Componente Filho
- Desestruturar as Props para um código mais legível e profissional
- Utilizar a prop especial \`children\` para criar componentes "contentores"
- Compreender o Fluxo Unidirecional de dados (sempre de cima para baixo)
- Definir valores padrão para as tuas props

---

### 🧠 Teoria: A Analogia da Receita e do Chef

- **Componente Pai (O Chef)** = decide quais os ingredientes e passa-os adiante.
- **Props (Os Ingredientes)** = as informações específicas que variam (ex: "Tomate", "Sal").
- **Componente Filho (A Receita)** = sabe como exibir os ingredientes, mas não os escolhe.

**Porquê isto importa para ti?** Props permitem que o mesmo componente (ex: um botão) tenha cores, textos ou comportamentos diferentes sem teres de criar 50 botões diferentes. Reutilização é o nome do jogo.

> 💡 **Sabias que?** Em React, as props são de "Apenas Leitura" (Read-Only). O filho nunca deve tentar mudar uma prop que recebeu; se precisar de mudar algo, usamos o "Estado" (Aula 9).

---

### 💻 Prática: Passando Informação

**1. Passagem Básica**
\`\`\`jsx
// Filho
function Saudacao(props) {
  return <h1>Olá, {props.nome}!</h1>;
}

// Pai
<Saudacao nome="Sandro" />
\`\`\`

**2. Desestruturação (Recomendado)**
\`\`\`jsx
function Produto({ nome, preco }) {
  return (
    <div>
      <h3>{nome}</h3>
      <p>Preço: {preco}€</p>
    </div>
  );
}
\`\`\`

**3. A prop Children**
\`\`\`jsx
function Moldura({ children }) {
  return <div className="border-gold">{children}</div>;
}
\`\`\`

---

### ⚠️ Dica Técnica
Sempre que passares números ou booleanos como props, usa as chavetas: \`<Contador valor={10} active={true} />\`. Strings podem ir entre aspas: \`nome="Sandro"\`.

---

### 🚀 Reforço de Confiança
- Dominar props é o que te permite criar sistemas de design consistentes.
- Se o componente filho não estiver a receber os dados, verifica se o nome da prop no Pai é idêntico ao nome no Filho (sensível a maiúsculas!).
- Estás a aprender a conectar as peças do teu puzzle.

---

### 📋 Resumo & Próximos Passos
- [ ] Sei passar uma string do Pai para o Filho.
- [ ] Consigo desestruturar props nos parâmetros da função.
- [ ] Entendo como usar o \`children\` para envolver conteúdo.
- [ ] Percebo que as props não podem ser alteradas pelo Filho.`,practice:"Cria um componente 'CartaoProduto' que recebe 'nome', 'preco' e 'categoria' como props. Depois, no App.jsx, renderiza três cartões com produtos diferentes.",resources:[{name:"React Docs - Passing Props",url:"https://react.dev/learn/passing-props-to-a-component"}],quizzes:[{question:"Como é que os dados fluem no React por padrão?",options:["Do Filho para o Pai","Em ambas as direções livremente","Do Pai para o Filho (Unidirecional)","Apenas entre componentes irmãos"],correctAnswer:2},{question:"Pergunta de bónus: O React é mantido por qual empresa?",options:["Google","Meta (Facebook)","Microsoft","Amazon"],correctAnswer:1}]},{id:9,category:"Hooks",difficulty:"Iniciante",readingTime:"60 min",title:"Aula 9: Estado com useState – Interatividade",description:"Gerir a 'memória' do componente para criar interfaces dinâmicas que reagem ao utilizador.",proTip:"Nunca modifies o estado diretamente! Usa sempre a função setter (setEstado) para que o React saiba que deve atualizar o ecrã.",content:`### O que vais aprender nesta aula:
- Utilizar o hook \`useState\` para dar "memória" aos teus componentes
- Compreender a diferença entre variáveis normais e variáveis de Estado
- Atualizar o estado de forma correta e imutável
- Lidar com estados complexos (objetos e arrays)
- Usar funções de atualização (Updater Functions) para evitar bugs de timing

---

### 🧠 Teoria: A Analogia dos Pensamentos vs Factos

- **Props (Factos Externos)** = Informações que te dão (ex: o teu nome na certidão de nascimento). Tu não as podes mudar.
- **Estado (Pensamentos Internos)** = Coisas que tu decides e mudas na tua cabeça (ex: o que vais comer ao jantar). O componente controla e altera o seu próprio estado.

**Porquê isto importa para ti?** Sem Estado, a tua aplicação seria "morta". Não podias abrir menus, preencher formulários ou adicionar itens a um carrinho. O Estado é o que torna o React "Reativo".

> 💡 **Sabias que?** Quando o Estado muda, o React executa a função do componente novamente (re-render) e atualiza apenas a parte do ecrã que realmente mudou. É por isso que é tão rápido!

---

### 💻 Prática: O Teu Primeiro Hook

**1. O Contador Clássico**
\`\`\`jsx
import { useState } from 'react';

function Contador() {
  const [contagem, setContagem] = useState(0);

  return (
    <button onClick={() => setContagem(contagem + 1)}>
      Clicaste {contagem} vezes
    </button>
  );
}
\`\`\`

**2. Estado com Objetos (Spread Operator)**
\`\`\`jsx
const [user, setUser] = useState({ nome: "Sandro", idade: 30 });

const fazerAniversario = () => {
  setUser({ ...user, idade: user.idade + 1 });
};
\`\`\`

---

### ⚠️ Dica Técnica
Sempre que o novo estado depender do valor anterior (como somar +1), usa a sintaxe de função: \`setContagem(prev => prev + 1)\`. É muito mais seguro em aplicações rápidas!

---

### 🚀 Reforço de Confiança
- Se o ecrã não atualizar, verifica se chamaste a função \`setEstado\` (ex: \`setContagem\`).
- Não tenhas medo de criar vários \`useState\` no mesmo componente. É normal e recomendado.
- Estás a dar vida e inteligência à tua interface.

---

### 📋 Resumo & Próximos Passos
- [ ] Percebo que o estado é privado ao componente.
- [ ] Sei inicializar um estado com \`useState\`.
- [ ] Consigo atualizar o estado através de um evento de clique.
- [ ] Entendo que nunca devo fazer \`estado = novoValor\` diretamente.`,practice:"Cria um componente 'Alternador' com um botão que diz 'LIGADO' ou 'DESLIGADO'. Usa um estado booleano para alternar o texto e a cor do botão a cada clique.",resources:[{name:"React Docs - useState",url:"https://react.dev/reference/react/useState"}],quizzes:[{question:"O que acontece quando o estado de um componente é atualizado?",options:["A página inteira é recarregada","O componente sofre um re-render (atualiza o visual)","O componente é destruído","Nada acontece até guardarmos manualmente"],correctAnswer:1},{question:"Pergunta de bónus: O React é mantido por qual empresa?",options:["Google","Meta (Facebook)","Microsoft","Amazon"],correctAnswer:1}]},{id:10,category:"Hooks",difficulty:"Iniciante",readingTime:"60 min",title:"Aula 10: Efeitos com useEffect – Sincronização",description:"Lidar com efeitos secundários: chamadas de API, timers e eventos globais.",proTip:"Sempre que usares timers ou subscrições, usa a função de cleanup do useEffect para evitar fugas de memória (memory leaks).",content:`### O que vais aprender nesta aula:
- Executar código "fora" do fluxo normal do React com o \`useEffect\`
- Dominar o Array de Dependências (quando é que o efeito corre?)
- Fazer pedidos a APIs externas (fetching de dados)
- Limpar efeitos (Cleanup) para evitar bugs de performance
- Sincronizar o teu componente com sistemas externos (LocalStorage, Browser APIs)

---

### 🧠 Teoria: A Analogia do Assistente Pessoal

Imagina que o teu componente é um Escritório:
- **Renderização** = O trabalho principal de secretária (escrever JSX).
- **useEffect** = O assistente que sai do escritório para fazer recados (ir buscar dados à API, mudar o título do separador, ligar um cronómetro).
- **Array de Dependências** = A lista de compras. O assistente só sai se algo na lista mudar. Se a lista estiver vazia \`[]\`, ele só sai no primeiro dia de trabalho (montagem).

**Porquê isto importa para ti?** Quase todas as apps reais precisam de ir buscar dados à internet. O \`useEffect\` é o local correto para fazer isso sem travar a interface do utilizador.

---

### 💻 Prática: Conetando com o Mundo

**1. Executar apenas na Montagem (Primeira vez)**
\`\`\`jsx
useEffect(() => {
  console.log("O componente apareceu no ecrã!");
}, []); // Array vazio = corre apenas uma vez
\`\`\`

**2. API Real (Fetching)**
\`\`\`jsx
useEffect(() => {
  fetch('https://api.exemplo.com/dados')
    .then(res => res.json())
    .then(dados => setEstado(dados));
}, []);
\`\`\`

**3. Cleanup (Limpeza)**
\`\`\`jsx
useEffect(() => {
  const timer = setInterval(() => console.log("Tic"), 1000);
  return () => clearInterval(timer); // Limpa ao sair do componente
}, []);
\`\`\`

---

### ⚠️ Dica Técnica
Cuidado com os loops infinitos! Se atualizares o estado dentro de um \`useEffect\` e esse estado estiver no array de dependências, o efeito vai correr para sempre.

---

### 🚀 Reforço de Confiança
- O \`useEffect\` é um dos hooks mais poderosos e complexos. É normal demorar um pouco a "clicar".
- Pensa sempre: "Quando é que eu quero que este código corra?". A resposta ditará o que metes no array \`[]\`.
- Estás a aprender a conectar a tua app à realidade dinâmica da internet.

---

### 📋 Resumo & Próximos Passos
- [ ] Sei executar código apenas uma vez no início.
- [ ] Entendo como fazer pedidos a uma API.
- [ ] Percebo para que serve a função de retorno (cleanup).
- [ ] Consigo reagir a mudanças de variáveis específicas.`,practice:"Cria um componente que exibe o tamanho da janela (largura) em tempo real. Usa useEffect para adicionar um Event Listener de 'resize' e não te esqueças de o remover na função de limpeza.",resources:[{name:"React Docs - useEffect",url:"https://react.dev/reference/react/useEffect"}],quizzes:[{question:"Quando é que um useEffect com um array de dependências vazio ([]) é executado?",options:["Em todas as atualizações","Apenas quando o componente é montado pela primeira vez","Nunca","Apenas quando o componente é destruído"],correctAnswer:1},{question:"Pergunta de bónus: O React é mantido por qual empresa?",options:["Google","Meta (Facebook)","Microsoft","Amazon"],correctAnswer:1}]},{id:11,category:"Hooks",difficulty:"Intermédio",readingTime:"60 min",title:"Aula 11: Hooks Personalizados – Reutilização",description:"Extrair lógica complexa para funções reutilizáveis, mantendo os teus componentes limpos e modulares.",proTip:"Pergunta-te: 'Estou a repetir esta lógica em mais de um componente?' Se sim, é hora de criar um hook personalizado!",content:`### O que vais aprender nesta aula:
- Criar os teus próprios Hooks (\`usePersonalizado\`)
- Extrair lógica de estado e efeitos de componentes pesados
- Partilhar comportamento entre componentes sem duplicar código
- Seguir as "Regras dos Hooks" em funções customizadas
- Criar uma biblioteca de utilitários poderosa para os teus projetos

---

### 🧠 Teoria: A Analogia das Ferramentas Especializadas

- **Hooks Nativos (\`useState\`, \`useEffect\`)** = Martelo e Chave de Fendas básicos.
- **Hooks Personalizados** = Uma ferramenta combinada que criaste (ex: um berbequim elétrico com guia) para fazer um trabalho específico muito mais rápido.

**Porquê isto importa para ti?** Em projetos profissionais, não queres 200 linhas de lógica dentro do teu ficheiro visual. Queres extrair essa lógica para um ficheiro à parte. Isto torna o teu código testável, limpo e muito fácil de ler — algo que os Seniors adoram!

> 💡 **Sabias que?** A convenção de começar o nome por \`use\` (ex: \`useForm\`) é obrigatória. Permite que as ferramentas de lint verifiquem se estás a usar os hooks corretamente.

---

### 💻 Prática: Criando o useFetch

\`\`\`javascript
// O Teu Hook Customizado (useFetch.js)
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url).then(r => r.json()).then(d => {
      setData(d);
      setLoading(false);
    });
  }, [url]);

  return { data, loading };
}

// Usando no Componente
const { data, loading } = useFetch('https://api.exemplo.com');
\`\`\`

---

### ⚠️ Dica Técnica
Um Hook personalizado pode retornar qualquer coisa: um valor, um array, um objeto ou até uma função. Escolhe o que for mais fácil de usar para quem consumir o hook.

---

### 🚀 Reforço de Confiança
- Criar hooks personalizados é o momento em que deixas de ser um "iniciante" e passas a ser um "arquiteto" de software.
- Se o código parecer complexo, começa por escrever tudo no componente e só depois "corta e cola" para o hook.
- Estás a criar o teu próprio arsenal de ferramentas.

---

### 📋 Resumo & Próximos Passos
- [ ] Sei que um hook deve começar por \`use\`.
- [ ] Consigo extrair lógica de \`useState\` para uma função externa.
- [ ] Entendo como passar parâmetros para um hook.
- [ ] Percebo que hooks personalizados podem chamar outros hooks.`,practice:"Cria um hook personalizado chamado 'useCounter' que aceite um valor máximo e forneça funções para incrementar, decrementar e repor o valor.",resources:[{name:"React Docs - Custom Hooks",url:"https://react.dev/learn/reusing-logic-with-custom-hooks"}],quizzes:[{question:"Qual é a principal vantagem de usar Hooks Personalizados?",options:["Tornar o código mais lento","Reutilizar lógica de comportamento entre diferentes componentes","Substituir o uso de CSS","Esconder o código de outros programadores"],correctAnswer:1},{question:"Pergunta de bónus: O React é mantido por qual empresa?",options:["Google","Meta (Facebook)","Microsoft","Amazon"],correctAnswer:1}]},{id:12,category:"Navegação",difficulty:"Intermédio",readingTime:"60 min",title:"Aula 12: Rotas com React Router – Navegação SPA",description:"Criar aplicações de página única com navegação fluida entre diferentes vistas e URLs.",proTip:"Nunca uses <a href> em apps React Router! Usa <Link to> para evitar que a página inteira recarregue e percas o estado.",content:`### O que vais aprender nesta aula:
- Configurar o \`React Router v6\`, o padrão da indústria para navegação
- Criar rotas dinâmicas com parâmetros (ex: \`/produto/:id\`)
- Utilizar os hooks \`useNavigate\` e \`useParams\`
- Implementar navegação programática (mudar de página após um clique)
- Criar páginas de erro personalizadas (404)

---

### 🧠 Teoria: A Analogia do GPS e da SPA

Num site antigo (Multi Page App), mudar de página era como mudar de casa: tinhas de fechar tudo, mudar as malas e abrir a nova casa (recarregar tudo).
Numa **SPA (Single Page Application)** com React Router, mudar de página é como mudar de divisão na mesma casa: a estrutura base mantém-se, apenas o conteúdo do ecrã muda instantaneamente.

**Porquê isto importa para ti?** Os utilizadores esperam que as apps web sejam tão rápidas como as apps do telemóvel. O React Router permite criar essa experiência "instantânea" enquanto mantém URLs que podem ser partilhados e guardados nos favoritos.

---

### 💻 Prática: O Mapa da Tua App

**1. Configuração de Rotas**
\`\`\`jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/sobre" element={<Sobre />} />
    <Route path="/perfil/:username" element={<Perfil />} />
  </Routes>
</BrowserRouter>
\`\`\`

**2. Navegação Segura**
\`\`\`jsx
import { Link, useNavigate } from 'react-router-dom';

<Link to="/sobre">Ir para Sobre</Link>

const navigate = useNavigate();
const submeter = () => {
  // ... lógica
  navigate('/sucesso');
};
\`\`\`

---

### ⚠️ Dica Técnica
Usa o componente \`NavLink\` em vez de \`Link\` para menus de navegação. Ele adiciona automaticamente uma classe \`active\` ao link quando o utilizador está nessa página!

---

### 🚀 Reforço de Confiança
- Se a página ficar em branco, verifica se o \`path\` da rota corresponde exatamente ao que escreveste no link.
- O erro 404 é teu amigo; cria uma página divertida para ele para melhorar a experiência do utilizador.
- Estás a transformar o teu site numa verdadeira aplicação profissional.

---

### 📋 Resumo & Próximos Passos
- [ ] Instalei e configurei o \`react-router-dom\`.
- [ ] Sei criar rotas estáticas e dinâmicas.
- [ ] Consigo navegar programaticamente usando \`useNavigate\`.
- [ ] Entendo como capturar parâmetros da URL com \`useParams\`.`,practice:"Cria um sistema de mini-blog com duas páginas: uma Lista de Posts e uma Página de Detalhe. A página de detalhe deve exibir o ID do post capturado da URL.",resources:[{name:"React Router Guide",url:"https://reactrouter.com/en/main/start/overview"}],quizzes:[{question:"Qual é o hook utilizado para aceder aos parâmetros dinâmicos de uma URL (ex: :id)?",options:["useParams()","useNavigate()","useRoute()","useQuery()"],correctAnswer:0},{question:"Pergunta de bónus: O React é mantido por qual empresa?",options:["Google","Meta (Facebook)","Microsoft","Amazon"],correctAnswer:1}]},{id:13,category:"Estado Global",difficulty:"Intermédio",readingTime:"60 min",title:"Aula 13: Gestão de Estado Global com Context API",description:"Partilhar informação entre componentes distantes sem precisar de passar props manualmente por todos os níveis.",proTip:"Usa a Context API com moderação. Se o dado é usado apenas por dois componentes próximos, continua a usar props!",content:`### O que vais aprender nesta aula:
- Resolver o problema do "Prop Drilling" (passar dados por componentes que não precisam deles)
- Criar e fornecer Contexto com \`createContext\` e \`Provider\`
- Consumir dados em qualquer profundidade com o hook \`useContext\`
- Criar estados globais para Temas (Dark/Light) e Autenticação
- Organizar a lógica de contexto em ficheiros separados

---

### 🧠 Teoria: A Analogia do Megafone vs Telefone Estragado

- **Prop Drilling** = Passar um segredo de pessoa em pessoa numa fila de 50 pessoas. Se a pessoa 25 se esquecer, o segredo perde-se. É cansativo e propenso a erros.
- **Context API** = Usar um megafone (Provider). Quem quiser ouvir a mensagem (Consumer), basta prestar atenção, não importa onde esteja na sala.

**Porquê isto importa para ti?** Algumas informações precisam de estar em todo o lado: "Quem é o utilizador?", "Qual é o idioma?", "O carrinho está vazio?". Sem Contexto, terias de passar estas props por dezenas de componentes, criando um "código esparguete".

---

### 💻 Prática: Criando um Tema Global

**1. Criar o Contexto (ThemeContext.js)**
\`\`\`jsx
export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(false);
  return (
    <ThemeContext.Provider value={{ dark, setDark }}>
      {children}
    </ThemeContext.Provider>
  );
}
\`\`\`

**2. Consumir o Contexto**
\`\`\`jsx
const { dark, setDark } = useContext(ThemeContext);
return <div className={dark ? 'bg-black' : 'bg-white'}>...</div>
\`\`\`

---

### ⚠️ Dica de Carreira
O Context API é nativo do React e resolve 90% das necessidades de estado global. Só salta para ferramentas complexas como Redux se o projeto for realmente gigantesco e tiver mudanças de estado ultra-frequentes.

---

### 🚀 Reforço de Confiança
- Se o \`useContext\` retornar \`undefined\`, verifica se esqueceste de envolver a tua aplicação com o \`Provider\` no \`main.jsx\` ou \`App.jsx\`.
- O Contexto torna a tua arquitetura muito mais profissional e escalável.
- Estás a aprender a gerir o "cérebro central" da tua aplicação.

---

### 📋 Resumo & Próximos Passos
- [ ] Entendo o que é Prop Drilling e porque é mau.
- [ ] Sei criar um ficheiro de Contexto com Provider.
- [ ] Consigo aceder a dados globais em qualquer componente.
- [ ] Sei como envolver a app com múltiplos Providers.`,practice:"Cria um Contexto de Autenticação (AuthContext) que guarda o nome do utilizador. Exibe o nome do utilizador na Barra de Navegação e na Página de Perfil sem passar props entre elas.",resources:[{name:"React Docs - Context",url:"https://react.dev/reference/react/useContext"}],quizzes:[{question:"Qual é o principal problema que a Context API resolve?",options:["Lentidão do JavaScript","Prop Drilling (passagem excessiva de props)","Falta de estilização","Erros de sintaxe no HTML"],correctAnswer:1},{question:"Pergunta de bónus: O React é mantido por qual empresa?",options:["Google","Meta (Facebook)","Microsoft","Amazon"],correctAnswer:1}]},{id:14,category:"Performance",difficulty:"Avançado",readingTime:"60 min",title:"Aula 14: Performance em React – useMemo e useCallback",description:"Otimizar aplicações evitando cálculos caros e re-renderizações desnecessárias em componentes pesados.",proTip:"Regra de ouro: Não otimizes prematuramente! Só usa estes hooks se tiveres problemas reais de lentidão detetados no Profiler.",content:`### O que vais aprender nesta aula:
- Compreender como o React decide quando re-renderizar um componente
- Memoizar cálculos pesados com o hook \`useMemo\`
- Estabilizar funções para evitar quebras de dependência com \`useCallback\`
- Prevenir re-renderizações de componentes filhos com o \`React.memo\`
- Utilizar o React DevTools Profiler para encontrar gargalos de performance

---

### 🧠 Teoria: A Analogia do Bloco de Notas (Cache)

Imagina que és um contabilista:
- **Sem Memoização** = Todos os dias, fazes a mesma conta matemática complexa de 5 horas para saber o lucro anual, mesmo que nada tenha mudado.
- **Com useMemo** = Fazes a conta uma vez, escreves o resultado num post-it e colas no monitor. Amanhã, só refazes a conta se o chefe te der novos números. Se os números forem os mesmos, apenas lês o post-it (instântaneo!).

**Porquê isto importa para ti?** Em apps grandes, re-renderizações desnecessárias podem tornar a interface lenta e "pesada". Saber quando usar estas ferramentas é o que separa um developer Júnior de um Sénior/Especialista.

---

### 💻 Prática: Otimizando o Código

**1. useMemo (Para Valores)**
\`\`\`jsx
const listaFiltrada = useMemo(() => {
  return listaGigante.filter(item => item.valor > 100);
}, [listaGigante]); // Só recalcula se a lista original mudar
\`\`\`

**2. useCallback (Para Funções)**
\`\`\`jsx
const submeter = useCallback(() => {
  console.log("Submetido!");
}, []); // A função mantém a mesma referência de memória
\`\`\`

---

### ⚠️ Dica Técnica
Não coloques \`useMemo\` em tudo! Ele próprio tem um pequeno custo de memória. Usa-o apenas para cálculos que demoram visivelmente ou quando a estabilidade de referência é obrigatória (ex: em dependências de \`useEffect\`).

---

### 🚀 Reforço de Confiança
- A performance é um jogo de equilíbrio. Menos código é muitas vezes mais rápido do que código "otimizado" mas complexo.
- Se não sentes lentidão na tua app, provavelmente não precisas destes hooks ainda.
- Estás a aprender a afinar o "motor" do teu software.

---

### 📋 Resumo & Próximos Passos
- [ ] Entendo a diferença entre \`useMemo\` (valor) e \`useCallback\` (função).
- [ ] Sei identificar componentes que re-renderizam sem necessidade.
- [ ] Percebo o conceito de estabilidade de referência.
- [ ] Sei que a otimização prematura deve ser evitada.`,practice:"Cria uma lista de 500 números aleatórios e um botão para os ordenar. Usa o useMemo para garantir que a ordenação (cálculo caro) só acontece quando a lista realmente muda, e não em cada clique noutros botões da página.",resources:[{name:"React Docs - useMemo",url:"https://react.dev/reference/react/useMemo"},{name:"React Docs - useCallback",url:"https://react.dev/reference/react/useCallback"}],quizzes:[{question:"Para que serve o hook useMemo?",options:["Para fazer chamadas a APIs","Para guardar o resultado de cálculos caros e evitar repetições desnecessárias","Para mudar o tema da aplicação","Para criar animações"],correctAnswer:1},{question:"Pergunta de bónus: O React é mantido por qual empresa?",options:["Google","Meta (Facebook)","Microsoft","Amazon"],correctAnswer:1}]},{id:15,category:"Testes",difficulty:"Intermédio",readingTime:"60 min",title:"Aula 15: Testes em React – Jest e RTL",description:"Garantir a qualidade do código com testes unitários e de interação.",proTip:"Nunca testes a implementação interna (como o estado). Testa o que o utilizador vê e faz. Isto torna os teus testes resilientes a mudanças no código.",content:`### O que vais aprender nesta aula:
- Configurar o ambiente de testes com \`Jest\` e \`React Testing Library (RTL)\`
- Escrever testes unitários para componentes isolados
- Simular eventos do utilizador (cliques, escrita em inputs)
- Utilizar seletores acessíveis (\`getByRole\`, \`getByText\`)
- Garantir que a tua aplicação não "parte" ao fazer novas alterações

---

### 🧠 Teoria: A Analogia dos Inspetores de Qualidade

Testes automatizados são como inspetores numa fábrica:
- **Testes Unitários** = Verificam se cada peça individual (parafuso, motor) funciona perfeitamente.
- **Jest** = O motor que corre os testes e dá o relatório.
- **React Testing Library** = O utilizador virtual que "toca" nos botões e lê os textos para ver se está tudo no sítio.

**Porquê isto importa para ti?** Em empresas grandes, é proibido enviar código sem testes. Eles dão-te a liberdade de mudar tudo na tua app com a certeza absoluta de que não estragaste nada que já estava a funcionar. É o fim do "medo de tocar no código".

---

### 💻 Prática: O Teu Primeiro Teste

**1. Testar se um Texto Aparece**
\`\`\`jsx
import { render, screen } from '@testing-library/react';
import Saudacao from './Saudacao';

test('exibe a mensagem correta', () => {
  render(<Saudacao nome="Sandro" />);
  const elemento = screen.getByText(/Olá, Sandro/i);
  expect(elemento).toBeInTheDocument();
});
\`\`\`

**2. Simular um Clique**
\`\`\`jsx
import userEvent from '@testing-library/user-event';

test('incrementa o contador ao clicar', async () => {
  render(<Contador />);
  const botao = screen.getByRole('button');
  await userEvent.click(botao);
  expect(screen.getByText(/Clicaste 1 vez/i)).toBeInTheDocument();
});
\`\`\`

---

### ⚠️ Dica Técnica
Usa sempre \`screen.debug()\` durante o desenvolvimento dos testes para ver o que o utilizador virtual está a "ver" no HTML naquele momento. Ajuda imenso a encontrar erros de seleção!

---

### 🚀 Reforço de Confiança
- Escrever testes parece lento no início, mas poupa-te centenas de horas de debug no futuro.
- Começa por testar apenas o "caminho feliz" (o que deve acontecer se tudo correr bem).
- Estás a tornar-te um developer profissional e confiável.

---

### 📋 Resumo & Próximos Passos
- [ ] Percebo a diferença entre Jest e RTL.
- [ ] Sei escrever um teste básico de renderização.
- [ ] Consigo simular um evento de clique num teste.
- [ ] Entendo que os testes devem focar-se no comportamento, não no código interno.`,practice:"Escreve testes para um componente de formulário de login simples. Verifica se os campos de email e password existem e se o botão de login está presente no ecrã.",resources:[{name:"React Testing Library Docs",url:"https://testing-library.com/docs/react-testing-library/intro/"},{name:"Jest Matchers",url:"https://jestjs.io/docs/using-matchers"}],quizzes:[{question:"Qual é a abordagem recomendada pela React Testing Library?",options:["Testar a implementação interna das funções","Testar da perspetiva do utilizador e da acessibilidade","Testar apenas o design CSS","Não testar, apenas confiar no código"],correctAnswer:1},{question:"Pergunta de bónus: O React é mantido por qual empresa?",options:["Google","Meta (Facebook)","Microsoft","Amazon"],correctAnswer:1}]},{id:16,category:"TypeScript",difficulty:"Intermédio",readingTime:"60 min",title:"Aula 16: TypeScript com React – Tipagem Estática",description:"Adicionar segurança ao código React detetando erros antes de executar.",proTip:"Não tentes tipar tudo perfeitamente à primeira. Começa com as props dos novos componentes e vai avançando gradualmente. O 'any' deve ser o teu último recurso!",content:`### O que vais aprender nesta aula:
- Integrar o \`TypeScript\` num projeto React moderno
- Definir tipos e interfaces para as tuas Props e Estados
- Tipar corretamente os hooks nativos (\`useState\`, \`useRef\`)
- Lidar com eventos de formulário e cliques em TypeScript
- Detetar erros de lógica enquanto escreves, antes mesmo de abrir o browser

---

### 🧠 Teoria: A Analogia do Co-Piloto Inteligente

Programar sem TypeScript é como voar um avião sozinho à noite: só descobres que estás na direção errada quando bates em algo (erro no browser).
**TypeScript** é como ter um co-piloto e um radar de última geração: ele avisa-te a vermelho no código: "Atenção, estás a tentar passar um Texto para uma função que só aceita Números!".

**Porquê isto importa para ti?** Quase todos os projetos de média/grande dimensão em 2026 usam TypeScript. Ele torna o código auto-documentado e evita 80% dos bugs comuns de "undefined" que desesperam os programadores.

---

### 💻 Prática: Tipando Componentes Profissionais

**1. Props com Interface**
\`\`\`tsx
interface BotaoProps {
  texto: string;
  ativo: boolean;
  onClick: () => void;
}

const Botao: React.FC<BotaoProps> = ({ texto, ativo, onClick }) => (
  <button onClick={onClick} disabled={!ativo}>{texto}</button>
);
\`\`\`

**2. useState Tipado**
\`\`\`tsx
const [utilizadores, setUtilizadores] = useState<Utilizador[]>([]);
\`\`\`

---

### ⚠️ Dica Técnica
Usa \`Types\` para uniões simples (ex: \`type Status = "sucesso" | "erro"\`) e \`Interfaces\` para objetos e componentes. O teu editor (VS Code) vai dar-te sugestões automáticas brilhantes!

---

### 🚀 Reforço de Confiança
- O TypeScript pode ser frustrante na primeira semana (muitos erros vermelhos). É normal! Ele está a ensinar-te a ser um programador melhor e mais rigoroso.
- Depois de te habituares, nunca mais vais querer escrever JavaScript "puro" em projetos sérios.
- Estás a subir de nível para o padrão de elite do desenvolvimento.

---

### 📋 Resumo & Próximos Passos
- [ ] Entendo o que é um tipo primitivo no TS.
- [ ] Sei criar uma Interface para um componente.
- [ ] Consigo tipar um estado de Array de objetos.
- [ ] Percebo como o TS me ajuda a evitar erros de "null".`,practice:"Converte um componente simples de 'Lista de Tarefas' para TypeScript. Define uma interface 'Tarefa' com 'id', 'texto' e 'concluida' e garante que a array no useState segue esse tipo.",resources:[{name:"React TypeScript Cheatsheet",url:"https://react-typescript-cheatsheet.netlify.app/"},{name:"TypeScript Handbook",url:"https://www.typescriptlang.org/docs/handbook/intro.html"}],quizzes:[{question:"Qual é a principal vantagem de usar TypeScript com React?",options:["Tornar o ficheiro final mais pequeno","Detetar erros de tipo durante o desenvolvimento (antes de correr o código)","Substituir o uso de bibliotecas de CSS","Não precisar de aprender JavaScript"],correctAnswer:1},{question:"Pergunta de bónus: O React é mantido por qual empresa?",options:["Google","Meta (Facebook)","Microsoft","Amazon"],correctAnswer:1}]},{id:17,category:"Design",difficulty:"Intermédio",readingTime:"60 min",title:"Aula 17: Styled Components – CSS-in-JS",description:"Estilizar componentes de forma modular e dinâmica usando JavaScript.",proTip:"Pensa nos teus componentes como unidades completas: lógica + design no mesmo ficheiro. Isto evita estilos 'órfãos' que ninguém sabe onde estão.",content:`### O que vais aprender nesta aula:
- Criar componentes estilizados com a sintaxe de \`tagged templates\`
- Passar Props para o CSS para mudar o design dinamicamente (ex: cor baseada no estado)
- Implementar Temas Globais (Dark/Light Mode) com \`ThemeProvider\`
- Organizar estilos de forma modular e evitar conflitos de nomes de classes
- Utilizar herança de estilos para criar componentes base

---

### 🧠 Teoria: A Analogia do Designer Integrado

O CSS tradicional é como ter um balde de tinta gigante e atirar contra a parede: às vezes acertas onde queres, mas muitas vezes sujas o que não devias (conflitos de classes).
**Styled Components** é como ter uma caneta de precisão para cada peça de Lego: tu pintas a peça diretamente e a cor fica presa a ela, aconteça o que acontecer.

**Porquê isto importa para ti?** Em apps grandes, o CSS torna-se um pesadelo de manter. Com Styled Components, se apagares o componente JS, o CSS apaga-se automaticamente com ele. Limpeza total!

---

### 💻 Prática: Estilos Inteligentes

**1. Criar um Botão Estilizado**
\`\`\`jsx
import styled from 'styled-components';

const BotaoLegal = styled.button\`
  background: \${props => props.primario ? '#2563eb' : 'white'};
  color: \${props => props.primario ? 'white' : '#2563eb'};
  padding: 10px 20px;
  border-radius: 8px;
  border: 2px solid #2563eb;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }
\`;
\`\`\`

**2. GlobalStyles**
\`\`\`jsx
const GlobalStyle = createGlobalStyle\`
  body { font-family: 'Inter', sans-serif; }
\`;
\`\`\`

---

### ⚠️ Dica Técnica
Usa a extensão "vscode-styled-components" no teu VS Code para teres realce de sintaxe e sugestões de CSS dentro das strings de JavaScript. Faz toda a diferença!

---

### 🚀 Reforço de Confiança
- Escrever CSS dentro do JS pode parecer "errado" ao início, mas é a forma mais poderosa de criar sistemas de design dinâmicos.
- Não precisas de decorar todas as propriedades; o que já sabes de CSS aplica-se aqui 100%.
- Estás a aprender a arte de criar UI modular e profissional.

---

### 📋 Resumo & Próximos Passos
- [ ] Instalei o \`styled-components\`.
- [ ] Sei criar um elemento estilizado básico.
- [ ] Consigo alterar o CSS com base numa prop.
- [ ] Percebo as vantagens de não usar ficheiros .css externos.`,practice:"Cria um componente 'Card' estilizado que mude a cor da borda dependendo de uma prop 'status' (ex: 'sucesso' -> verde, 'erro' -> vermelho).",resources:[{name:"Styled Components Docs",url:"https://styled-components.com/docs"}],quizzes:[{question:"Como se passam variáveis do JavaScript para o CSS no Styled Components?",options:["Através de ficheiros JSON externos","Através de props passadas ao componente estilizado","Não é possível passar variáveis","Usando !important no CSS"],correctAnswer:1},{question:"Pergunta de bónus: O React é mantido por qual empresa?",options:["Google","Meta (Facebook)","Microsoft","Amazon"],correctAnswer:1}]},{id:18,category:"Data",difficulty:"Intermédio",readingTime:"60 min",title:"Aula 18: React Query – Gestão de Dados",description:"Simplificar a busca, cache e sincronização de dados do servidor.",proTip:"Nunca uses useEffect para buscar dados se puderes usar React Query! Ele resolve problemas de cache e estados de erro que demorarias semanas a implementar sozinho.",content:`### O que vais aprender nesta aula:
- Dominar o hook \`useQuery\` para buscar dados de APIs de forma profissional
- Gerir estados de \`Loading\`, \`Error\` e \`Success\` automaticamente
- Configurar Cache e Invalidação de dados (manter os dados frescos)
- Implementar "Mutations" para enviar dados (POST, PUT, DELETE)
- Reduzir drasticamente o código repetitivo (boilerplate) de gestão de dados

---

### 🧠 Teoria: A Analogia do Gestor de Armazém Inteligente

- **Sem React Query (useEffect)** = Sempre que precisas de um produto, corres até à fábrica (API) para o buscar, mesmo que tenhas acabado de chegar de lá. É cansativo e lento.
- **Com React Query** = Tens um gestor de armazém (Cache). Se pedires o produto, ele vê se já o tem. Se for recente, entrega-te na hora. Se estiver "velho" (stale), ele entrega-te o que tem mas corre à fábrica para trazer um novo e atualizar-te depois.

**Porquê isto importa para ti?** Gestão de estado de servidor é o trabalho mais comum de um developer React. O React Query (TanStack Query) é a ferramenta padrão do mercado que torna as tuas apps ultra-rápidas e robustas.

---

### 💻 Prática: Fetching Profissional

**1. Configurar o Client**
\`\`\`jsx
const queryClient = new QueryClient();
<QueryClientProvider client={queryClient}>...</QueryClientProvider>
\`\`\`

**2. Usar o Hook Mágico**
\`\`\`jsx
const { data, isLoading, error } = useQuery({
  queryKey: ['utilizadores'],
  queryFn: () => fetch('https://api.exemplo.com/users').then(res => res.json())
});

if (isLoading) return <p>A carregar...</p>;
if (error) return <p>Ocorreu um erro!</p>;
\`\`\`

---

### ⚠️ Dica Técnica
Usa o \`staleTime\` para definir quanto tempo os dados são considerados "frescos" antes do React Query tentar ir buscá-los novamente. Para dados que mudam pouco, um \`staleTime\` de 5 minutos poupa imensas chamadas à rede!

---

### 🚀 Reforço de Confiança
- O React Query elimina a necessidade de \`useState\` e \`useEffect\` para 90% dos dados da tua app. É um alívio enorme para o teu código!
- O nome "TanStack Query" é o nome oficial moderno, mas toda a gente ainda lhe chama carinhosamente de React Query.
- Estás a aprender a lidar com dados como um developer Sénior.

---

### 📋 Resumo & Próximos Passos
- [ ] Percebo o conceito de Cache e dados "Stale".
- [ ] Sei buscar dados usando \`useQuery\`.
- [ ] Consigo tratar estados de erro de forma elegante.
- [ ] Entendo como atualizar a cache após uma mutação.`,practice:"Implementa uma lista de 'Posts' usando o useQuery. Adiciona um botão que, ao ser clicado, força a atualização dos dados (refetch).",resources:[{name:"TanStack Query Docs",url:"https://tanstack.com/query/latest"}],quizzes:[{question:"Para que serve o 'queryKey' no React Query?",options:["Para dar estilo ao componente","Para identificar e organizar os dados na cache de forma única","Para definir a password da API","Para mudar a cor do botão de loading"],correctAnswer:1},{question:"Pergunta de bónus: O React é mantido por qual empresa?",options:["Google","Meta (Facebook)","Microsoft","Amazon"],correctAnswer:1}]},{id:19,category:"Formulários",difficulty:"Intermédio",readingTime:"60 min",title:"Aula 19: React Hook Form – Validação",description:"Criar formulários complexos com performance otimizada e validação robusta.",proTip:"Usa a abordagem 'uncontrolled' do React Hook Form para evitar re-renderizações desnecessárias em cada tecla que o utilizador prime. A tua app vai voar!",content:`### O que vais aprender nesta aula:
- Criar formulários profissionais com o \`React Hook Form\`
- Registar inputs e gerir o estado do formulário sem \`useState\` manual
- Implementar validação nativa (obrigatório, tamanho mínimo, padrões)
- Integrar com bibliotecas de esquema como \`Zod\` ou \`Yup\` para validações complexas
- Tratar submissões e exibir mensagens de erro de forma amigável

---

### 🧠 Teoria: A Analogia do Secretário de Formulários

Gerir formulários em React "puro" é como anotar cada letra que alguém escreve num papel e verificar tudo a cada segundo. É exaustivo (lento).
**React Hook Form** é como ter um secretário: tu dizes-lhe as regras (ex: "o email é obrigatório") e ele só te entrega o formulário final quando tudo estiver correto. Ele não te incomoda enquanto o utilizador está a escrever.

**Porquê isto importa para ti?** Formulários são o ponto de contacto principal entre o utilizador e o negócio. Um formulário que trava ou que não explica os erros afasta clientes. Esta biblioteca é a mais amada pelos developers pela sua simplicidade e velocidade.

---

### 💻 Prática: Formulário de Contacto

**1. O básico do useForm**
\`\`\`jsx
const { register, handleSubmit, formState: { errors } } = useForm();

const onSubmit = (dados) => console.log(dados);

return (
  <form onSubmit={handleSubmit(onSubmit)}>
    <input {...register("email", { required: "Email obrigatório" })} />
    {errors.email && <span>{errors.email.message}</span>}
    <button type="submit">Enviar</button>
  </form>
);
\`\`\`

---

### ⚠️ Dica Técnica
Usa a função \`reset()\` fornecida pelo hook para limpar o formulário automaticamente após uma submissão bem-sucedida. O utilizador agradece!

---

### 🚀 Reforço de Confiança
- Validar formulários é um dos trabalhos mais chatos que existem, mas o React Hook Form torna-o quase divertido.
- Se o erro não aparecer, verifica se estás a aceder à propriedade correta dentro do objeto \`errors\`.
- Estás a construir a ponte de confiança entre o utilizador e a tua base de dados.

---

### 📋 Resumo & Próximos Passos
- [ ] Sei registar um input usando o spread operator \`{...register}\`.
- [ ] Consigo definir regras de validação simples.
- [ ] Sei como capturar e exibir mensagens de erro.
- [ ] Entendo a vantagem de performance sobre os formulários "controlados" tradicionais.`,practice:"Cria um formulário de 'Registo de Utilizador' com campos para Nome, Email e Password. O campo Password deve ter um tamanho mínimo de 8 caracteres e o Email deve ser obrigatório.",resources:[{name:"React Hook Form Docs",url:"https://react-hook-form.com/get-started"},{name:"Zod Validation Guide",url:"https://zod.dev/"}],quizzes:[{question:"Qual é a principal vantagem de usar React Hook Form em vez de gerir tudo com múltiplos useState?",options:["É mais colorido","Melhor performance (menos re-renderizações) e código mais limpo","Não precisa de HTML","É a única forma de fazer formulários"],correctAnswer:1},{question:"Pergunta de bónus: O React é mantido por qual empresa?",options:["Google","Meta (Facebook)","Microsoft","Amazon"],correctAnswer:1}]},{id:20,category:"Segurança",difficulty:"Avançado",readingTime:"60 min",title:"Aula 20: Autenticação e Proteção de Rotas",description:"Implementar sistemas de Login, tokens JWT e áreas privadas seguras.",proTip:"Nunca confies apenas no frontend. A segurança real é feita no servidor; o frontend apenas esconde o que o utilizador não deve ver. Mantém sempre o teu backend seguro!",content:`### O que vais aprender nesta aula:
- Criar um sistema de Autenticação robusto com \`Context API\`
- Gerir sessões de utilizador com \`Tokens JWT\` e LocalStorage
- Criar componentes de "Rota Protegida" para esconder áreas sensíveis
- Implementar fluxos de Login e Logout completos
- Persistir o utilizador ligado mesmo após atualizar a página (F5)

---

### 🧠 Teoria: A Analogia do Sistema de Segurança do Prédio

- **Login** = Identificar-te na receção com o teu Cartão de Cidadão.
- **Token (JWT)** = O cartão magnético temporário que a receção te dá. Ele diz onde podes entrar.
- **Rota Protegida** = As portas que só abrem se encostares o teu cartão magnético. Se não tiveres cartão, a porta redireciona-te para a receção (Login).

**Porquê isto importa para ti?** Quase todas as apps profissionais têm uma área de "Admin" ou "Dashboard". Saber como proteger estas rotas de forma que utilizadores mal-intencionados não as vejam é uma competência crítica de nível Sénior.

---

### 💻 Prática: O Componente de Proteção

**1. O AuthContext (O Coração)**
\`\`\`jsx
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const login = (dados) => setUser(dados);
  const logout = () => setUser(null);

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};
\`\`\`

**2. A Rota Protegida**
\`\`\`jsx
function RotaPrivada({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
}

// No App.jsx
<Route path="/admin" element={<RotaPrivada><AdminPage /></RotaPrivada>} />
\`\`\`

---

### ⚠️ Dica Essencial
Guarda o token no LocalStorage para que o utilizador não tenha de fazer login sempre que abre o browser. Mas lembra-te: nunca guardes passwords ou dados ultra-sensíveis lá!

---

### 🚀 Reforço de Confiança
- Autenticação é um dos temas que mais assusta iniciantes. Vai com calma, o fluxo é sempre o mesmo: Identificar -> Guardar Token -> Verificar Token.
- Se o utilizador "perder" o acesso ao atualizar, verifica se estás a carregar o token do LocalStorage no \`useEffect\` do teu Provider.
- Estás a aprender a proteger o valor do teu negócio.

---

### 📋 Resumo & Próximos Passos
- [ ] Sei criar um contexto global para o utilizador.
- [ ] Consigo redirecionar utilizadores não logados.
- [ ] Entendo o que é um Token e para que serve.
- [ ] Sei como limpar os dados no Logout.`,practice:"Implementa um sistema onde a página '/dashboard' só é visível se o utilizador estiver 'autenticado' no teu Contexto. Se não estiver, redireciona-o para a página de '/login'.",resources:[{name:"JWT.io Introduction",url:"https://jwt.io/introduction"},{name:"React Router Navigate",url:"https://reactrouter.com/en/main/components/navigate"}],quizzes:[{question:"Qual é a melhor forma de proteger uma rota no React?",options:["Apagar o ficheiro do servidor","Usar um componente que verifica o estado de autenticação e redireciona se necessário","Pedir ao utilizador para não entrar","Mudar a cor do link para preto"],correctAnswer:1},{question:"Pergunta de bónus: O React é mantido por qual empresa?",options:["Google","Meta (Facebook)","Microsoft","Amazon"],correctAnswer:1}]},{id:21,category:"Testes",difficulty:"Avançado",readingTime:"60 min",title:"Aula 21: Testes Avançados e Mocking",description:"Simular cenários complexos, falhas de API e timers em testes de alta qualidade.",proTip:"Escreve testes como se estivesses a documentar o comportamento da app. Um bom teste deve ser legível por qualquer colega de equipa.",content:`### O que vais aprender nesta aula:
- "Mockar" (simular) chamadas de API para testes ultra-rápidos e independentes
- Testar Hooks Personalizados com a biblioteca \`renderHook\`
- Simular a passagem do tempo (\`fake timers\`) para testar atrasos ou cronómetros
- Testar fluxos complexos que envolvem Contexto e Rotas
- Utilizar o \`MSW (Mock Service Worker)\` para interceptar pedidos de rede

---

### 🧠 Teoria: A Analogia do Simulador de Voo

Testar uma API real nos teus testes é como treinar um piloto num avião a voar: se a internet falha ou a API cai, o teste falha sem culpa tua.
**Mocking** é o simulador de voo: tu crias um ambiente 100% controlado onde podes simular tempestades (erros 500), falta de combustível (timeout) ou um voo perfeito, tudo no teu computador sem gastar um cêntimo de internet.

**Porquê isto importa para ti?** Testes que dependem de APIs reais são lentos e instáveis. Saber simular estes cenários é o que permite ter uma "Pipeline de CI/CD" que corre 500 testes em menos de 1 minuto.

---

### 💻 Prática: Simulando a Realidade

**1. Mockando o Fetch**
\`\`\`javascript
global.fetch = jest.fn().mockResolvedValue({
  json: () => Promise.resolve({ nome: "Sandro", email: "sandro@teste.com" })
});
\`\`\`

**2. Testando um Hook Customizado**
\`\`\`jsx
const { result } = renderHook(() => useCounter());
act(() => {
  result.current.increment();
});
expect(result.current.count).toBe(1);
\`\`\`

---

### ⚠️ Dica Técnica
Sempre que testares mudanças de estado dentro de um \`renderHook\`, deves envolver a ação na função \`act(() => { ... })\`. Isto garante que o React processou todas as atualizações antes de verificares o resultado.

---

### 🚀 Reforço de Confiança
- Mocking pode parecer "batota", mas é engenharia de software inteligente: isolas o que queres testar.
- Não testes a API dos outros (ex: Google Maps), testa apenas como a TUA app reage aos dados que vêm de lá.
- Estás a criar um escudo indestrutível à volta do teu código.

---

### 📋 Resumo & Próximos Passos
- [ ] Sei o que significa "Mockar" um dado.
- [ ] Consigo testar a lógica de um Hook sem componentes visuais.
- [ ] Entendo para que serve o \`act\` nos testes.
- [ ] Sei simular um erro de servidor num teste.`,practice:"Escreve um teste para o hook 'useCounter' (da aula 11). Garante que ele começa em 0, que incrementa corretamente e que não ultrapassa o valor máximo definido.",resources:[{name:"Mock Service Worker (MSW)",url:"https://mswjs.io/"},{name:"Testing Library - renderHook",url:"https://testing-library.com/docs/react-testing-library/api/#renderhook"}],quizzes:[{question:"Qual é o principal objetivo de 'mockar' uma API durante os testes?",options:["Tornar os testes mais difíceis","Isolar o componente de falhas externas e tornar os testes mais rápidos e determinísticos","Pagar menos faturas de servidor","Não serve para nada no React moderno"],correctAnswer:1},{question:"Pergunta de bónus: O React é mantido por qual empresa?",options:["Google","Meta (Facebook)","Microsoft","Amazon"],correctAnswer:1}]},{id:22,category:"Performance",difficulty:"Avançado",readingTime:"60 min",title:"Aula 22: Performance Avançada e Lazy Loading",description:"Otimizar o carregamento de apps gigantes dividindo o código em pedaços menores.",proTip:"Usa o React DevTools Profiler para identificar exatamente qual o componente que está a travar a tua aplicação. Medir antes de otimizar é a chave!",content:`### O que vais aprender nesta aula:
- Implementar "Code Splitting" para não carregar a app toda de uma vez
- Dominar o \`React.lazy()\` e o componente \`Suspense\`
- Otimizar o carregamento de imagens e outros ficheiros pesados
- Virtualização de Listas (renderizar apenas o que o utilizador vê no ecrã)
- Analisar o tamanho do "Bundle" final da tua aplicação

---

### 🧠 Teoria: A Analogia das Malas e do Camião de Mudanças

- **Site Normal** = Um camião de mudanças que descarrega TODOS os móveis à porta de casa antes de te deixar entrar. Se a casa for grande, esperas horas (site lento).
- **Lazy Loading** = Pedes apenas a cama para dormir hoje. Amanhã, quando quiseres cozinhar, pedes o fogão. O camião entrega as peças conforme precisas delas. Entras em casa em segundos!

**Porquê isto importa para ti?** Se o teu site demorar mais de 3 segundos a carregar, 50% dos utilizadores desistem. Lazy loading é a técnica n.º 1 para manter as tuas aplicações rápidas, especialmente em telemóveis com internet lenta.

---

### 💻 Prática: Carregamento Preguiçoso

**1. Lazy Loading de Rotas (O mais comum)**
\`\`\`jsx
import { lazy, Suspense } from 'react';
const Dashboard = lazy(() => import('./pages/Dashboard'));

function App() {
  return (
    <Suspense fallback={<p>A carregar página...</p>}>
      <Routes>
        <Route path="/admin" element={<Dashboard />} />
      </Routes>
    </Suspense>
  );
}
\`\`\`

---

### ⚠️ Dica Técnica
Usa bibliotecas como \`react-window\` ou \`react-virtualized\` se tiveres de mostrar listas com mais de 1000 itens. Elas fazem com que o browser só processe os 5 ou 10 itens que estão visíveis no ecrã naquele momento!

---

### 🚀 Reforço de Confiança
- Code splitting é uma das técnicas mais impressionantes para mostrar em entrevistas de nível Sénior.
- O \`Suspense\` permite-te criar estados de loading (esqueletos/spinners) muito elegantes e profissionais.
- Estás a tornar a tua aplicação acessível a utilizadores com internet lenta em todo o mundo.

---

### 📋 Resumo & Próximos Passos
- [ ] Entendo o conceito de Code Splitting.
- [ ] Sei como usar \`React.lazy\` para carregar componentes.
- [ ] Consigo usar o \`Suspense\` para gerir o estado de espera.
- [ ] Percebo porque é que o bundle final deve ser pequeno.`,practice:"Transforma as rotas do teu projeto principal em rotas 'lazy'. Adiciona um componente de 'Spinner' ou uma mensagem de carregamento dentro do Suspense.",resources:[{name:"React Docs - Code Splitting",url:"https://react.dev/learn/code-splitting"},{name:"React Window Docs",url:"https://react-window.vercel.app/"}],quizzes:[{question:"O que faz a técnica de 'Virtualização de Listas'?",options:["Apaga os dados da lista para poupar espaço","Renderiza apenas os itens que estão visíveis na janela do utilizador","Converte a lista numa imagem","Não existe no React"],correctAnswer:1},{question:"Pergunta de bónus: O React é mantido por qual empresa?",options:["Google","Meta (Facebook)","Microsoft","Amazon"],correctAnswer:1}]},{id:23,category:"Segurança",difficulty:"Avançado",readingTime:"60 min",title:"Aula 23: Segurança em React – Boas Práticas",description:"Proteção contra ataques XSS, CSRF e injeção de código malicioso.",proTip:"Pensa como um atacante: 'Como é que eu poderia abusar deste formulário?'. Sanitizar todos os inputs do utilizador não é opcional, é obrigatório.",content:`### O que vais aprender nesta aula:
- Prevenir ataques de \`XSS (Cross-Site Scripting)\` sanitizando dados
- Evitar o uso perigoso de \`dangerouslySetInnerHTML\`
- Implementar uma \`CSP (Content Security Policy)\` robusta
- Gerir segredos e chaves de API com segurança no ambiente (\`.env\`)
- Validar e "limpar" dados que vêm de fontes externas

---

### 🧠 Teoria: A Analogia das Muralhas do Castelo

Segurança não é apenas uma porta trancada (Login). É um sistema de defesa em camadas:
- **XSS Prevention** = Filtrar a água que entra no castelo para garantir que não tem veneno (scripts maliciosos).
- **Environment Variables** = Guardar o mapa dos tesouros no cofre real (\`server-side\`), nunca na praça pública (\`client-side\`).
- **Sanitização** = Desinfetar qualquer objeto que venha de fora antes de o deixar entrar.

**Porquê isto importa para ti?** Um único erro de segurança pode expor dados de milhares de utilizadores e destruir a reputação de uma empresa. Developers que entendem de segurança são raros e extremamente valiosos.

---

### 💻 Prática: Defendendo o Código

**1. Sanitização de HTML (DOMPurify)**
\`\`\`jsx
import DOMPurify from 'dompurify';

const ConteudoSeguro = ({ htmlSujo }) => {
  const limpo = DOMPurify.sanitize(htmlSujo);
  return <div dangerouslySetInnerHTML={{ __html: limpo }} />;
};
\`\`\`

**2. Variáveis de Ambiente Seguras**
\`\`\`bash
# No ficheiro .env (Vite)
VITE_API_URL=https://api.segura.com
# NUNCA guardes chaves secretas aqui que o cliente não possa ver!
\`\`\`

---

### ⚠️ Dica Técnica
Nunca, em circunstância alguma, guardes passwords em texto limpo no LocalStorage. Se o utilizador for atacado por um script, a password será roubada instantaneamente.

---

### 🚀 Reforço de Confiança
- A segurança perfeita não existe, mas podes tornar o ataque tão difícil que o pirata desiste e vai para outro lado.
- O React já nos protege de muitos ataques por padrão (ao escapar strings), mas não baixa a guarda!
- Estás a tornar-te um guardião dos dados dos teus utilizadores.

---

### 📋 Resumo & Próximos Passos
- [ ] Entendo o perigo do \`dangerouslySetInnerHTML\`.
- [ ] Sei como usar o \`DOMPurify\` para limpar HTML.
- [ ] Consigo gerir variáveis de ambiente no Vite.
- [ ] Percebo que o frontend nunca deve ter segredos críticos.`,practice:"Cria um componente que recebe um comentário (que pode conter HTML malicioso como <script>alert('hack')<\/script>) e usa o DOMPurify para garantir que apenas texto seguro é renderizado.",resources:[{name:"OWASP Top 10",url:"https://owasp.org/www-project-top-ten/"},{name:"DOMPurify GitHub",url:"https://github.com/cure53/dompurify"}],quizzes:[{question:"Qual é a melhor forma de prevenir ataques XSS ao exibir conteúdo HTML dinâmico no React?",options:["Usar apenas <div>","Sanitizar o HTML com uma biblioteca como DOMPurify antes de o renderizar","Não usar JavaScript no site","Mudar a cor do texto para vermelho"],correctAnswer:1},{question:"Pergunta de bónus: O React é mantido por qual empresa?",options:["Google","Meta (Facebook)","Microsoft","Amazon"],correctAnswer:1}]},{id:24,category:"I18n",difficulty:"Intermédio",readingTime:"60 min",title:"Aula 24: Internacionalização (i18n)",description:"Criar aplicações globais que suportam múltiplos idiomas e moedas.",proTip:"Nunca concatenes strings traduzidas! Usa placeholders (ex: 'Olá {{nome}}') para manter a ordem correta das palavras em cada língua. A gramática muda, o teu código não deve quebrar.",content:`### O que vais aprender nesta aula:
- Configurar a biblioteca \`react-i18next\`, o padrão para traduções em React
- Organizar ficheiros de tradução em JSON (pt.json, en.json)
- Mudar o idioma da aplicação em tempo real sem recarregar
- Formatar datas, horas e moedas de acordo com a localização do utilizador
- Lidar com plurais e géneros em diferentes idiomas

---

### 🧠 Teoria: A Analogia dos Intérpretes Universais

Imagina que a tua aplicação é uma Conferência das Nações Unidas:
- **O Código** = O orador principal (fala o conteúdo).
- **i18n** = A cabine de intérpretes. Cada utilizador mete os auscultadores e ouve na sua língua nativa (Português, Inglês, Mandarim).
- **Localização** = Adaptar não só as palavras, mas também se o preço aparece com "€" ou "$" e se a data é "dia/mês" ou "mês/dia".

**Porquê isto importa para ti?** Se queres trabalhar para empresas internacionais ou ter utilizadores em todo o mundo, a internacionalização é obrigatória. Uma app que fala a língua do utilizador vende 3x mais.

---

### 💻 Prática: Falando Várias Línguas

**1. O Hook useTranslation**
\`\`\`jsx
import { useTranslation } from 'react-i18next';

function BoasVindas() {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <h1>{t('bem_vindo')}</h1>
      <button onClick={() => i18n.changeLanguage('en')}>English</button>
    </div>
  );
}
\`\`\`

**2. Ficheiro de Tradução (pt.json)**
\`\`\`json
{
  "bem_vindo": "Bem-vindo ao nosso curso!",
  "perfil": "O teu Perfil"
}
\`\`\`

---

### ⚠️ Dica Técnica
Usa a deteção automática de idioma para que a tua app abra logo em Inglês para um americano e em Português para um português. É um detalhe que demonstra extrema qualidade profissional!

---

### 🚀 Reforço de Confiança
- Internacionalizar uma app a meio do projeto é um pesadelo. Aprende a fazê-lo desde o dia 1 e serás o herói da tua equipa.
- Não precisas de saber falar as línguas; só precisas de criar a estrutura para os tradutores colocarem os textos.
- Estás a derrubar as fronteiras da tua aplicação.

---

### 📋 Resumo & Próximos Passos
- [ ] Instalei o \`i18next\` e o \`react-i18next\`.
- [ ] Sei criar ficheiros JSON para diferentes idiomas.
- [ ] Consigo mudar o idioma com um clique num botão.
- [ ] Percebo como formatar uma data para o padrão europeu.`,practice:"Cria uma interface simples com um título e um parágrafo. Implementa suporte para Português e Inglês, permitindo que o utilizador alterne entre eles através de botões com bandeiras.",resources:[{name:"react-i18next Documentation",url:"https://react.i18next.com/"},{name:"Intl.NumberFormat (MDN)",url:"https://developer.mozilla.org/pt-PT/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat"}],quizzes:[{question:"Qual é a principal vantagem de usar i18n em vez de criar vários sites diferentes para cada língua?",options:["É mais barato","Mantém um único código-fonte sincronizado para todos os idiomas","O Google prefere sites em várias línguas","Não há vantagem real"],correctAnswer:1},{question:"Pergunta de bónus: O React é mantido por qual empresa?",options:["Google","Meta (Facebook)","Microsoft","Amazon"],correctAnswer:1}]},{id:25,category:"Acessibilidade",difficulty:"Intermédio",readingTime:"60 min",title:"Aula 25: Acessibilidade (a11y) Profissional",description:"Garantir que a tua aplicação é utilizável por todos, incluindo pessoas com deficiências.",proTip:"Se o teu site não funciona apenas com o teclado (sem rato), ele não é acessível. Testa sempre a navegação com o TAB!",content:`### O que vais aprender nesta aula:
- Princípios fundamentais do \`WCAG (Web Content Accessibility Guidelines)\`
- Utilizar corretamente os \`ARIA Labels\`, \`Roles\` e \`Alt Text\`
- Gerir o "Foco" do teclado em formulários e modais
- Garantir contrastes de cor adequados para pessoas com baixa visão
- Testar a tua aplicação com Leitores de Ecrã (como o NVDA ou VoiceOver)

---

### 🧠 Teoria: A Analogia da Cidade Inclusiva e Rampas Digitais

Imagina que estás a construir uma cidade:
- **Web Sem Acessibilidade** = Uma cidade cheia de escadas e sem sinais sonoros. Pessoas em cadeiras de rodas ou cegas não podem circular.
- **Web Com Acessibilidade** = Construir com rampas, elevadores e avisos táteis desde o início. Isto ajuda não só quem tem deficiências, mas também uma mãe com um carrinho de bebé (utilizador com telemóvel ao sol) ou um idoso (utilizador com vista cansada).

**Porquê isto importa para ti?** Acessibilidade é um direito humano e, em muitos países, uma obrigação legal. Além disso, sites acessíveis têm um SEO (posicionamento no Google) muito melhor!

---

### 💻 Prática: Código Inclusivo

**1. Imagens com Significado**
\`\`\`jsx
<img src="avatar.jpg" alt="Foto de perfil do utilizador Sandro Pereira" />
\`\`\`

**2. Botões Sem Texto (Apenas Ícones)**
\`\`\`jsx
<button aria-label="Fechar Janela" onClick={fechar}>
  <XIcon />
</button>
\`\`\`

**3. Semântica Correta**
Usa \`<main>\`, \`<nav>\`, \`<header>\` e \`<footer>\` em vez de apenas \`<div>\`. Os leitores de ecrã usam isto como um mapa!

---

### ⚠️ Dica Técnica
Usa a ferramenta "Lighthouse" no Chrome ou a extensão "axe DevTools" para encontrar 90% dos erros de acessibilidade automaticamente em segundos.

---

### 🚀 Reforço de Confiança
- Tornar um site acessível não prejudica o design; pelo contrário, torna-o mais limpo e intuitivo para todos.
- Não precisas de ser um especialista em braille; só precisas de usar o HTML correto que o browser já conhece.
- Estás a construir uma web onde todos são bem-vindos.

---

### 📋 Resumo & Próximos Passos
- [ ] Entendo o que significa WCAG.
- [ ] Sei usar \`aria-label\` em botões de ícone.
- [ ] Percebo a importância do \`alt\` em imagens.
- [ ] Consigo navegar na minha app usando apenas o teclado.`,practice:"Faz uma auditoria de acessibilidade no teu projeto atual usando o Lighthouse. Corrige pelo menos 3 problemas encontrados (ex: contraste de cor, falta de alt text, ou estrutura de títulos).",resources:[{name:"The A11y Project",url:"https://www.a11yproject.com/"},{name:"WebAIM Contrast Checker",url:"https://webaim.org/resources/contrastchecker/"}],quizzes:[{question:"Qual tag HTML é fundamental para que um leitor de ecrã saiba o que é uma imagem?",options:["<src>","<alt>","<title>","<desc>"],correctAnswer:1},{question:"Pergunta de bónus: O React é mantido por qual empresa?",options:["Google","Meta (Facebook)","Microsoft","Amazon"],correctAnswer:1}]},{id:26,category:"Animações",difficulty:"Intermédio",readingTime:"60 min",title:"Aula 26: Animações e Micro-interações",description:"Criar experiências envolventes com Framer Motion e transições fluidas.",proTip:"Menos é mais. Animações devem guiar o utilizador e dar feedback, não distraí-lo ou tornar a app lenta. Usa movimentos suaves e intencionais!",content:`### O que vais aprender nesta aula:
- Diferença entre Animações CSS e Bibliotecas de Animação
- Dominar o \`Framer Motion\`, a biblioteca de animação n.º 1 para React
- Criar transições suaves de entrada e saída de elementos (\`AnimatePresence\`)
- Implementar micro-interações de feedback (botões que pulsam, ícones que rodam)
- Animar gestos como arrastar (\`drag\`) e pairar (\`hover\`)

---

### 🧠 Teoria: A Analogia da Coreografia Teatral e o Feedback Físico

Imagina que a tua aplicação é um ator num palco:
- **Sem Animação** = O ator aparece e desaparece instantaneamente como um fantasma. É assustador e pouco natural.
- **Com Animação** = O ator entra de lado, caminha suavemente e reage quando lhe tocas. Parece "vivo".
- **Micro-interações** = É como o "clique" físico de um interruptor de luz real. Dá ao utilizador a certeza de que a ação foi registada.

**Porquê isto importa para ti?** Animações de alta qualidade são o que separa um site "amador" de uma aplicação de "luxo" ou "premium". Elas aumentam a satisfação do utilizador e tornam a navegação intuitiva.

---

### 💻 Prática: Movimento Inteligente

**1. Animação Básica com Framer Motion**
\`\`\`jsx
import { motion } from 'framer-motion';

const Cartao = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    Conteúdo que sobe suavemente!
  </motion.div>
);
\`\`\`

**2. Feedback de Hover e Clique**
\`\`\`jsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Clica em mim!
</motion.button>
\`\`\`

---

### ⚠️ Dica Técnica
Para melhor performance, anima sempre propriedades como \`transform\` (scale, rotate, translate) e \`opacity\`. Evita animar \`width\`, \`height\` ou \`margin\`, pois estas forçam o browser a recalcular o layout todo, o que pode causar lentidão.

---

### 🚀 Reforço de Confiança
- O Framer Motion facilita tanto as coisas que vais querer animar tudo. Tenta manter o equilíbrio!
- Se a animação não estiver a correr, verifica se importaste o componente \`motion\` corretamente.
- Estás a adicionar a "camada de magia" final ao teu produto.

---

### 📋 Resumo & Próximos Passos
- [ ] Instalei o \`framer-motion\`.
- [ ] Sei animar a entrada de um componente.
- [ ] Consigo criar efeitos de hover e clique.
- [ ] Percebo a importância de animar apenas o necessário para performance.`,practice:"Cria um Modal (janela flutuante) que surge com um efeito de 'zoom' vindo do centro e desaparece suavemente quando o utilizador clica em 'Fechar'.",resources:[{name:"Framer Motion Documentation",url:"https://www.framer.com/motion/"},{name:"Animista (CSS Animation generator)",url:"https://animista.net/"}],quizzes:[{question:"Qual propriedade do Framer Motion controla o estado final da animação?",options:["start","initial","animate","end"],correctAnswer:2},{question:"Pergunta de bónus: O React é mantido por qual empresa?",options:["Google","Meta (Facebook)","Microsoft","Amazon"],correctAnswer:1}]},{id:27,category:"Testes",difficulty:"Avançado",readingTime:"60 min",title:"Aula 27: Testes End-to-End com Cypress",description:"Simular fluxos reais do utilizador no navegador, do início ao fim.",proTip:"Usa atributos 'data-cy' ou 'data-testid' para os teus seletores. As classes CSS mudam frequentemente para design e podem quebrar os teus testes sem necessidade. Mantém os teus testes resilientes!",content:`### O que vais aprender nesta aula:
- O que são Testes \`End-to-End (E2E)\` e porque são a última linha de defesa
- Instalar e configurar o \`Cypress\`, a ferramenta líder para testes reais
- Escrever "User Journeys" (ex: Registo -> Login -> Compra)
- Interagir com elementos reais do browser (escrever, clicar, navegar)
- Integrar os teus testes num pipeline automático (CI)

---

### 🧠 Teoria: A Analogia dos Utilizadores Beta Robóticos

- **Testes Unitários (Aula 15)** = Testar se a lâmpada funciona fora do carro.
- **Testes E2E** = Ter um robô que entra no carro, liga a chave, acende as luzes e conduz até à próxima cidade para ver se tudo (motor, bateria, pneus) funciona em conjunto.

**Porquê isto importa para ti?** Podes ter todos os teus componentes a funcionar bem sozinhos, mas se a página de Login não conseguir falar com a página de Perfil, o utilizador fica preso. O Cypress garante que o "fluxo principal" do teu negócio nunca para de funcionar.

---

### 💻 Prática: O Robô que Navega por Ti

**1. O Teu Primeiro Teste de Fluxo**
\`\`\`javascript
// cypress/e2e/login.cy.js
describe('Fluxo de Autenticação', () => {
  it('deve permitir ao utilizador fazer login e ver o dashboard', () => {
    cy.visit('/login');
    cy.get('[data-cy=email]').type('aluno@premium.com');
    cy.get('[data-cy=password]').type('senha123');
    cy.get('[data-cy=submit]').click();

    cy.url().should('include', '/dashboard');
    cy.get('h1').should('contain', 'Bem-vindo');
  });
});
\`\`\`

---

### ⚠️ Dica de Mindset
Os testes E2E são mais lentos que os unitários. Não testes todos os pequenos detalhes com Cypress; usa-o para os fluxos críticos onde o erro custaria dinheiro à empresa (ex: o checkout de uma loja).

---

### 🚀 Reforço de Confiança
- Ver o Cypress a abrir o browser e a clicar nos botões sozinho é uma das experiências mais satisfatórias para um programador.
- Se o teste falhar, o Cypress tira um "print" e grava um vídeo automaticamente. É como ter um detetive privado para os teus bugs.
- Estás a garantir que a tua app é sólida como uma rocha.

---

### 📋 Resumo & Próximos Passos
- [ ] Instalei o Cypress no meu projeto.
- [ ] Sei escrever um comando de visita e clique.
- [ ] Consigo verificar se a URL mudou após uma ação.
- [ ] Percebo a importância dos testes de integração completa.`,practice:"Cria um teste Cypress que: 1. Visita a página inicial, 2. Clica numa aula, 3. Verifica se o título da aula está correto no ecrã.",resources:[{name:"Cypress Documentation",url:"https://docs.cypress.io/"},{name:"Testing Library - Cypress",url:"https://testing-library.com/docs/cypress-testing-library/intro/"}],quizzes:[{question:"Qual é a principal diferença entre um teste unitário e um teste End-to-End (E2E)?",options:["E2E é mais rápido","Unitário testa peças isoladas; E2E testa o fluxo completo no browser real","Unitário é apenas para CSS","Não há diferença"],correctAnswer:1},{question:"Pergunta de bónus: O React é mantido por qual empresa?",options:["Google","Meta (Facebook)","Microsoft","Amazon"],correctAnswer:1}]},{id:28,category:"Deploy",difficulty:"Avançado",readingTime:"60 min",title:"Aula 28: Deployment e CI/CD Profissional",description:"Automatizar a publicação da app com pipelines de integração contínua.",proTip:"Configura um 'Health Check'. Se a nova versão da app falhar no arranque, o teu pipeline deve fazer 'Rollback' automático para a versão anterior. Segurança acima de tudo!",content:`### O que vais aprender nesta aula:
- O que é \`CI (Integração Contínua)\` e \`CD (Entrega Contínua)\`
- Publicar a tua aplicação na \`Vercel\` ou \`Netlify\` de forma profissional
- Configurar \`GitHub Actions\` para correr testes automaticamente em cada commit
- Gerir diferentes Ambientes (Staging para testes, Produção para clientes)
- Monitorizar erros em tempo real com ferramentas como o \`Sentry\`

---

### 🧠 Teoria: A Analogia da Linha de Montagem Automatizada

Imagina uma fábrica de automóveis:
- **Sem CI/CD** = Tu montas o carro à mão e, no fim, rezas para que ele ligue e entregas ao cliente.
- **Com CI/CD** = Sempre que apertas um parafuso (fazes Push no GitHub), robôs testam se ele está firme, se o motor liga e se a pintura está seca. Se tudo passar, o carro é colocado automaticamente no camião para entrega. Se algo falhar, a linha para e avisa-te do erro.

**Porquê isto importa para ti?** Deploys manuais são perigosos e lentos. Automação permite que publiques novas funcionalidades 10x por dia com confiança total. É isto que as empresas de tecnologia modernas exigem.

---

### 💻 Prática: Automatizando com GitHub Actions

**1. Exemplo de Workflow (.yml)**
\`\`\`yaml
name: Testes e Deploy
on: [push]
jobs:
  build-and-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Instalar Dependências
        run: npm install
      - name: Correr Testes
        run: npm test
      - name: Build do Projeto
        run: npm run build
\`\`\`

---

### ⚠️ Dica Técnica
Nunca coloques chaves de API reais no código. Usa os "Secrets" do GitHub e as variáveis de ambiente da Vercel. Isto garante que mesmo que o teu código seja público, os teus acessos continuam secretos.

---

### 🚀 Reforço de Confiança
- Ver o "check verde" no GitHub após um commit é o sinal de que fizeste um bom trabalho.
- O deployment moderno é tão simples que podes ter o teu site online em menos de 2 minutos.
- Estás a aprender a entregar valor de forma contínua e profissional.

---

### 📋 Resumo & Próximos Passos
- [ ] Liguei o meu repositório à Vercel ou Netlify.
- [ ] Configurei a minha primeira GitHub Action.
- [ ] Entendo a diferença entre \`npm run dev\` e \`npm run build\`.
- [ ] Sei onde guardar chaves secretas de forma segura.`,practice:"Faz o deploy do teu projeto do curso para a Vercel. Configura uma variável de ambiente no painel da Vercel e verifica se o teu site a consegue ler.",resources:[{name:"GitHub Actions Guide",url:"https://docs.github.com/en/actions"},{name:"Vite Deployment Guide",url:"https://vitejs.dev/guide/static-deploy.html"}],quizzes:[{question:"Qual é a principal vantagem de usar um sistema de CI/CD como o GitHub Actions?",options:["Ter mais bugs no código","Garantir que os testes correm sempre antes do código ser publicado","Não precisar de escrever código","Mudar a cor do terminal"],correctAnswer:1},{question:"Pergunta de bónus: O React é mantido por qual empresa?",options:["Google","Meta (Facebook)","Microsoft","Amazon"],correctAnswer:1}]},{id:29,category:"Arquitetura",difficulty:"Avançado",readingTime:"60 min",title:"Aula 29: Arquitetura e Escalabilidade",description:"Estruturar projetos gigantes que centenas de developers podem manter simultaneamente.",proTip:"Pergunta-te: 'Se eu tiver que remover esta funcionalidade, quantos ficheiros tenho que tocar?'. Quanto menos ficheiros, melhor é a tua arquitetura e mais isolado está o teu código.",content:`### O que vais aprender nesta aula:
- Organizar pastas de forma profissional (ex: \`Feature-Sliced Design\`)
- Aplicar os princípios \`SOLID\` no desenvolvimento de componentes React
- Criar camadas de abstração para serviços de API e Lógica de Negócio
- Separar o que é "Visual" (UI) do que é "Lógica" (Hooks/Serviços)
- Preparar a aplicação para crescer sem se tornar um pesadelo técnico

---

### 🧠 Teoria: A Analogia do Planeamento Urbano e Zonas Isoladas

Imagina que estás a planear uma cidade:
- **Arquitetura Má** = Casas, fábricas e hospitais todos misturados no mesmo quarteirão. Se houver um incêndio na fábrica, o hospital arde também. É o caos.
- **Arquitetura Boa (Modular)** = Zonas residenciais num lado, zona industrial noutro, com estradas claras a ligá-las. Se precisares de renovar a fábrica, as casas nem percebem.

**Porquê isto importa para ti?** No início, meter tudo numa pasta é fácil. Mas quando tens 500 componentes, encontrar um erro torna-se impossível. Uma boa arquitetura é o que permite que uma equipa de 50 programadores trabalhe no mesmo projeto sem se atropelar.

---

### 💻 Prática: Estrutura Feature-First

**1. Organização Sugerida**
\`\`\`text
src/
  components/  (Botões, inputs genéricos)
  features/    (Carrinho, Login, Feed - lógica completa)
  hooks/       (Utilitários globais)
  services/    (Chamadas de API isoladas)
  pages/       (As vistas da aplicação)
\`\`\`

**2. Isolar a API**
\`\`\`javascript
// services/api.js
export const buscarUtilizadores = () => fetch('/users').then(r => r.json());
\`\`\`

---

### ⚠️ Dica Essencial
Não compliques demasiado cedo! Começa simples e evolui a arquitetura conforme sentires necessidade. "Over-engineering" (complicar o que é simples) é um erro comum de quem está a começar a aprender arquitetura.

---

### 🚀 Reforço de Confiança
- Arquitetura é mais uma "arte de organizar" do que uma ciência exata. Não há uma única forma correta, mas há formas muito erradas!
- Se consegues explicar onde está cada parte do teu código em 10 segundos, a tua arquitetura é boa.
- Estás a preparar-te para liderar grandes projetos.

---

### 📋 Resumo & Próximos Passos
- [ ] Entendo a importância de separar Lógica de Visual.
- [ ] Sei como organizar pastas por Funcionalidade (Features).
- [ ] Percebo que componentes devem ter uma Responsabilidade Única.
- [ ] Estou pronto para o meu Projeto Final Profissional.`,practice:"Reorganiza a estrutura de pastas do teu projeto atual. Cria uma pasta 'services' para as tuas chamadas de API e uma pasta 'components' para elementos reutilizáveis.",resources:[{name:"Feature-Sliced Design",url:"https://feature-sliced.design/"},{name:"SOLID Principles for React",url:"https://medium.com/dailyjs/applying-solid-principles-to-react-3d1534a448cd"}],quizzes:[{question:"O que diz o Princípio da Responsabilidade Única (Single Responsibility)?",options:["Um componente deve fazer tudo o que a app precisa","Cada componente ou função deve ter apenas uma razão para mudar e fazer apenas uma coisa bem","Ninguém é responsável pelo código","Fazer código o mais rápido possível"],correctAnswer:1},{question:"Pergunta de bónus: O React é mantido por qual empresa?",options:["Google","Meta (Facebook)","Microsoft","Amazon"],correctAnswer:1}]},{id:30,category:"Conclusão",difficulty:"Avançado",readingTime:"60 min",title:"Aula 30: Projeto Final Profissional",description:"Consolidar 30 aulas de conhecimento numa aplicação completa pronta para o mercado.",proTip:"Qualidade sobre Quantidade. Um projeto final perfeito, com testes, acessibilidade e boa arquitetura vale mais do que 10 projetos incompletos no teu portefólio. Brilha nos detalhes!",content:`### O que vais fazer hoje:
- Aplicar TODOS os conceitos aprendidos nestas 30 aulas
- Construir uma aplicação completa "do zero ao deploy"
- Implementar Autenticação, Estado Global e Consumo de API Real
- Garantir que o código está testado, acessível e otimizado
- Escrever um README profissional para o teu GitHub

---

### 🎓 Teoria: A Tua "Tese de Mestrado" em React

Este projeto não é apenas um exercício; é a tua prova física de evolução. É o que vais mostrar nas entrevistas para provar que és um developer React de elite.
Deve demonstrar que sabes:
- **Planear** a arquitetura.
- **Executar** com código limpo e TypeScript.
- **Garantir** qualidade com Testes.
- **Entregar** através de um Deploy automático.

**Porquê isto importa para ti?** O mercado não procura pessoas que viram vídeos; procura pessoas que sabem CONSTRUIR. Hoje, tu és um Construtor.

---

### 🚀 Prática Final: A Tua Check-list de Sucesso
- [ ] **Funcionalidade:** A app resolve um problema real?
- [ ] **TypeScript:** Estás a usar tipos em vez de 'any'?
- [ ] **Estado:** Usaste Context API ou Hooks para gerir dados?
- [ ] **Performance:** Implementaste Lazy Loading em alguma rota?
- [ ] **Acessibilidade:** As imagens têm 'alt' e os botões têm 'labels'?
- [ ] **Testes:** Tens pelo menos um teste unitário e um E2E?
- [ ] **Documentação:** O teu README explica como correr o projeto?

---

### ⚠️ Dica de Carreira Final
Não pares aqui. O ecossistema React muda todos os anos. Mantém a curiosidade, segue os blogs oficiais e, acima de tudo, continua a construir. O teu futuro começou há 30 aulas atrás.

---

### 🚀 Parabéns, Developer Premium!
Concluíste a jornada. Agora, o código é teu. Domina o mundo!

---

### 📋 Resumo da Jornada
- [ ] Dominei os fundamentos do JS Moderno.
- [ ] Criei componentes complexos e reutilizáveis.
- [ ] Aprendi a gerir dados e efeitos de forma profissional.
- [ ] Tornei-me um developer completo, pronto para o mercado.`,practice:"Finaliza o teu projeto, faz o Push para o GitHub, garante que o Deploy na Vercel está ativo e partilha o link do teu certificado no LinkedIn! Tu conseguiste! 🏆",resources:[{name:"React Roadmap 2026",url:"https://roadmap.sh/react"},{name:"Build a Portfolio that gets you hired",url:"https://www.freecodecamp.org/news/how-to-build-a-portfolio/"}],quizzes:[{question:"Qual é o passo mais importante após terminar este curso?",options:["Parar de estudar","Continuar a construir projetos reais e manter-se atualizado com a comunidade","Esquecer o React e mudar para outra área","Esperar que o emprego apareça sozinho"],correctAnswer:1},{question:"Pergunta de bónus: O React é mantido por qual empresa?",options:["Google","Meta (Facebook)","Microsoft","Amazon"],correctAnswer:1}]}];export{e as l};
