# Around the U.S. — Backend (Express + MongoDB)

## Descrição do projeto

Este repositório contém o **back-end** do projeto "Around the U.S." ("EUA Afora"), que evolui a partir do projeto front-end original.

O projeto front-end consiste em um perfil de usuário com layout responsivo, desenvolvido em HTML, CSS e JavaScript, com integração a APIs. A interface se adapta automaticamente a diferentes tamanhos de tela por meio de Media Queries, garantindo uma boa experiência em diferentes dispositivos.

A página simula um perfil de usuário com funcionalidades completas, incluindo edição de dados, adição de cards com imagens, curtidas e visualização em tela cheia, com navegação por meio de popups dinâmicos.

Nesta etapa, o projeto passa a contar com uma **API RESTful própria**, desenvolvida com Node.js e Express.js, integrada a um banco de dados MongoDB por meio do Mongoose.

Os dados de usuários e cards, que anteriormente eram armazenados em arquivos JSON, passaram a ser persistidos no banco de dados MongoDB.

---

## Funcionalidades implementadas

### No front-end

- Edição de Perfil — alterar nome e ocupação
- Criação de Cards — adicionar novos cards com imagem e título
- Curtidas — sistema de likes com feedback visual
- Visualização de Imagem — ampliar imagens em popup
- Fechamento de Popups — via botão, clique externo ou tecla Esc
- Mensagens de Erro — validações com destaque visual e feedback amigável
- Popup de Confirmação — garantia de alterações antes da aplicação
- Layout responsivo adaptado a múltiplos dispositivos

### No back-end

- API RESTful desenvolvida com Express.js
- Integração com banco de dados MongoDB
- Modelos Mongoose para usuários e cards
- Criação e consulta de usuários
- Criação, consulta e exclusão de cards
- Atualização do perfil do usuário
- Atualização do avatar do usuário
- Sistema de curtidas e remoção de curtidas
- Validação dos dados utilizando Mongoose
- Validação de URLs utilizando expressão regular
- Tratamento de erros HTTP 400, 404 e 500
- Tratamento de registros inexistentes com `orFail()`
- Prevenção de curtidas duplicadas utilizando `$addToSet`
- Remoção de curtidas utilizando `$pull`
- Middleware temporário para identificação do usuário através de `req.user`
- Separação da aplicação em rotas, controllers e models

---

## Tecnologias e técnicas utilizadas

### Front-end

- HTML5
- CSS3
- Media Queries
- JavaScript (ES6+)
- Validate.js
- APIs integradas

### Back-end

- **Node.js** — ambiente de execução JavaScript no servidor
- **Express.js** — framework para criação do servidor e das rotas da API
- **MongoDB** — banco de dados utilizado para persistência dos dados
- **Mongoose** — ODM utilizado para modelagem e interação com o MongoDB
- **Nodemon** — reinicialização automática do servidor durante o desenvolvimento
- **ESLint** — linter configurado com o guia de estilo do Airbnb (`airbnb-base`)
- **EditorConfig** — padronização de estilo do código
- **REST API** — arquitetura utilizada para disponibilização dos recursos
- **Express Router** — organização das rotas da API
- **Mongoose Schema e Models** — definição e gerenciamento das entidades
- **MongoDB Operators** — utilização de `$addToSet` e `$pull`
- **Validação personalizada** — validação de URLs através de expressão regular

---

## Estrutura do projeto

```text
web_project_around_express/
├── controllers/
│   ├── cards.js
│   └── users.js
├── models/
│   ├── card.js
│   └── user.js
├── routes/
│   ├── cards.js
│   └── users.js
├── app.js
├── package.json
├── package-lock.json
├── .editorconfig
├── .eslintrc
├── .gitignore
└── README.md

## Como usar

Clone o repositório:

```bash
git clone https://github.com/ericdoouro/web_project_around_express.git
```

Instale as dependências:

```bash
npm install
```

Para rodar o servidor:

```bash
npm run start
```

Para rodar o servidor com hot reload (desenvolvimento):

```bash
npm run dev
```

O servidor estará disponível em `http://localhost:3000`.

Para rodar o linter:

```bash
npm run lint
```
