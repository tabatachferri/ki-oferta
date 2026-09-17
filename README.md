# KiOferta

Webapp desenvolvido para a disciplina de Dispositivos Móveis com HTML, CSS e JavaScript.

## Parte A — Pesquisa sobre framework CSS

### A1. O que é o framework e qual abordagem ele segue?

O framework escolhido foi o **Bootstrap 5**. Ele é um conjunto de estilos e componentes prontos para a interface, como grades, botões, menus e formulários. Sua abordagem é *mobile first*: os estilos são pensados primeiro para telas pequenas e depois adaptados para telas maiores com pontos de quebra responsivos. No projeto, ele é usado como uma base de estilos que pode ser complementada pelo CSS próprio.

### A2. Como você incluiu o framework na página?

Incluí o CSS minificado do Bootstrap por CDN no arquivo `src/index.html`, usando uma tag `<link>` dentro do `<head>`. O link do Bootstrap vem antes de `./css/style.css`; assim, o CSS próprio do KiOferta é carregado depois e pode ajustar as regras do framework quando necessário. Também foram usados `integrity` e `crossorigin`, conforme o exemplo da documentação.

### A3. Cite três benefícios que você percebeu ao usar.

Primeiro, a página já recebe uma normalização visual entre navegadores, sem que seja necessário escrever regras básicas para muitos elementos. Segundo, a estrutura para telas pequenas já está prevista pelo framework, o que torna mais rápido aplicar espaçamentos, alinhamentos e responsividade. Terceiro, a documentação traz exemplos concretos de componentes e classes, então é mais fácil testar uma solução visual sem começar o CSS do zero.

### A4. Cite duas limitações ou desvantagens.

O arquivo do Bootstrap aumenta o que a pessoa usuária precisa baixar, mesmo que o projeto utilize apenas uma pequena parte dele. Além disso, é preciso aprender os nomes e o comportamento das classes do framework; quando uma regra pronta entra em conflito com o visual desejado, sobrescrevê-la pode exigir conhecer a ordem de carregamento e a especificidade dos seletores.

### A5. Ele estiliza usando classes ou IDs? Por quê?

Ao observar a documentação e os exemplos, o Bootstrap usa principalmente **classes**, como `container`, `row`, `btn` e `navbar`. Classes podem ser reutilizadas em vários elementos e combinadas para formar variações, enquanto um ID deve ser único na página. Por isso, classes deixam o framework mais flexível e evitam que o estilo fique preso a um único elemento.

### A6. Fontes

1. **Get started with Bootstrap — Bootstrap v5.3.** https://getbootstrap.com/docs/5.3/getting-started/introduction/ — acesso em 16 set. 2026.
2. **Introduction to the CSS cascade — MDN Web Docs.** https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Cascade/Introduction — acesso em 16 set. 2026.

## Como executar

```bash
npm install
npm run dev
```
## Parte B — Construção da Tela 1 (Início)

### B1. O que foi construído?

A Tela 1 · Início do estudo de caso, pensada para 420px de largura: cabeçalho com o nome do app, campo de busca em destaque, texto de apoio, categorias em grade de 2 colunas, rodapé de contribuinte e a barra de navegação inferior. Os ícones ainda não entram nessa etapa — apenas placeholders neutros (`.icone-placeholder`), estilizados por CSS, marcam onde eles vão ficar.

### B2. Onde estão as classes e ids?

O HTML da tela é gerado em `src/js/paginas/home.js`, com classes próprias (`busca-form`, `categoria-item`, `tab-bar`, etc.) — nenhuma classe do Bootstrap é usada nessa tela específica. O estilo correspondente fica em `src/css/inicio.css`, importado em `src/index.html` logo depois de `./css/style.css`, seguindo o mesmo padrão de link já usado no projeto.

Em `src/css/inicio.css`, a paleta, a tipografia e os espaçamentos do estudo de caso viram variáveis CSS declaradas em `:root` (`--cor-primaria`, `--cor-destaque`, `--txt-preco`, `--espaco-cartao`, entre outras), reaproveitáveis pelas próximas telas.

### B3. Decisão: vocês usariam esse framework no KiOferta?

Mantivemos o Bootstrap no projeto, seguindo a orientação do professor de utilizar um framework CSS. Na prática, porém, ele funciona como uma camada de base — reset entre navegadores e componentes genéricos — e não como fonte do visual final das telas.

Isso porque o estudo de caso já define um sistema de design bem específico: paleta própria em `oklch`, uma escala tipográfica de sete degraus e uma grade de espaçamento fixa de 4px. Reaproveitar as classes do Bootstrap (grid, tipografia padrão, cores padrão) exigiria sobrescrever boa parte delas de qualquer forma, o que gera mais atrito de especificidade do que escrever CSS direto com os tokens do case. Por isso, a Tela 1 foi construída inteiramente com CSS próprio, deixando o Bootstrap disponível para uso pontual em outras partes do projeto.