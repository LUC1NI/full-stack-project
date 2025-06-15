# Full Stack Project 🎬

Projeto full stack com **back-end em C# (ASP.NET Core)** e **front-end em React**, voltado para o desenvolvimento de aplicações web modernas com comunicação via API REST.

---

## 🧰 Tecnologias Utilizadas

### 🔙 Back-end (ASP.NET Core)
- .NET 7 SDK
- C#
- Entity Framework Core
- API RESTful
- Swagger (para documentação da API - opcional, mas recomendado)

### 🔜 Front-end (React)
- React.js (Create React App)
- Axios (para requisições HTTP)
- React Router DOM (para navegação entre páginas)
- React Icons (para uso de ícones)
- Estilização com CSS/Styled Components/Tailwind (dependendo do projeto)

---

## 🛠️ Pré-requisitos

Antes de começar, certifique-se de ter o seguinte instalado na sua máquina:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [.NET 7 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/7.0)
- Editor recomendado: **Visual Studio Code**

---

## 🚀 Passo a Passo para Rodar o Projeto

### ▶️ Clonando o Repositório

Abra o terminal na pasta onde deseja salvar o projeto e execute:

```bash
git clone <url-do-repositorio>
cd full-stack-project

# Instale as dependências
npm install

npm install react-router-dom

npm install react-icons

# Inicie o servidor de desenvolvimento
npm start
# ou
yarn start
```
---

## 🖥️ O que foi feito no Front-end

O front-end foi desenvolvido em React e possui as seguintes funcionalidades principais:

- Navegação entre páginas usando React Router.
- Listagem de filmes e gêneros.
- Cadastro de novos filmes e gêneros.
- Gerenciamento de gêneros, incluindo exclusão com confirmação.
- Consumo da API do back-end para operações de CRUD.


O front-end estará disponível em `http://localhost:3000` por padrão.

---

### ▶️ Back-end: `backendProjetoGrupo`

O back-end foi entregue na Parte 1 do trabalho, mas para garantir o funcionamento completo da aplicação, siga os passos abaixo para configurar e rodar o back-end:

```bash
# Acesse a pasta do back-end
cd full-stack-project/backendProjetoGrupo

# Restaure as dependências do .NET
dotnet restore

# Compile o projeto
dotnet build

# Execute a aplicação
dotnet run
```

O back-end estará disponível em `http://localhost:5000` (ou outra porta configurada).

## 📌 Notas Adicionais

- Certifique-se de que o back-end esteja rodando antes de iniciar o front-end para que a aplicação funcione corretamente.