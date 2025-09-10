# ✅ TickIt

[![Node.js](https://img.shields.io/badge/Node.js-v16%2B-green)](https://nodejs.org/)  [![React](https://img.shields.io/badge/React-Vite-blue)](https://vitejs.dev/)  [![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](https://www.typescriptlang.org/)  [![License](https://img.shields.io/badge/license-MIT-purple)](https://github.com/Daniel13s/TickIt/blob/main/LICENSE)

[![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)]()

O **TickIt** é um **To-Do List moderno** desenvolvido com **boas práticas de front-end**.  
Conta com design responsivo, animações suaves e funcionalidades que tornam a organização de tarefas simples e eficiente.

---

## ✨ Funcionalidades

- **CREATETASK** → Criar novas tarefas que são exibidas em uma lista organizada.
    
- **DELETETASK** → Remover tarefas com um clique no ícone 🗑️.
    
- **TASKFILTER** → Filtrar tarefas entre **pendentes** e **concluídas**.
    
- **SEARCHTASK** → Pesquisar tarefas pelo nome.
    
- **SEEDETAILS** → Exibir mais detalhes de uma tarefa com descrição extensa.
    
- **COMPLETETASK** → Marcar tarefas como concluídas, alterando seu estilo e exibindo ícone de ✔️.
    

---

## 🛠️ Tecnologias Utilizadas

- **TypeScript**
    
- **React com Vite**
    
- **Redux**
    
- **React Router DOM** (com hooks)
    
- **CSS**
    
- **LocalStorage**

- **Vitest**
    

---

## ▶️ Como Rodar o Projeto

### 🔧 Pré-requisitos

- [Node.js](https://nodejs.org/) v16+
    
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
    

### 🚀 Passos

```bash
# Clonar o repositório
git clone https://github.com/Daniel13s/TickIt.git
cd TickIt

# Instalar dependências
npm install
# ou
yarn install

# Rodar aplicação
npm run dev
# ou
yarn dev
```

### Teste
```bash
npm run test
```

Após iniciar, acesse no navegador:

```
http://localhost:5173
```
---
## Estrutura de pastas
```
src
 ┣ components
 ┃ ┣ animation
 ┃ ┃ ┣ BallMotion.css
 ┃ ┃ ┗ BallMotion.tsx
 ┃ ┣ Task.css
 ┃ ┣ Task.tsx
 ┃ ┣ TaskArea.css
 ┃ ┗ TaskArea.tsx
 ┣ pages
 ┃ ┣ DetailsTask.css
 ┃ ┣ DetailsTask.tsx
 ┃ ┣ Home.css
 ┃ ┗ Home.tsx
 ┣ redux
 ┃ ┣ task
 ┃ ┃ ┣ action-types.tsx
 ┃ ┃ ┗ reducer.tsx
 ┃ ┣ rootReducer.tsx
 ┃ ┗ store.tsx
 ┣ index.css
 ┣ main.tsx
 ┗ vite-env.d.ts
```
---
## 📷Preview

<img src="./images/TickIt.png">
