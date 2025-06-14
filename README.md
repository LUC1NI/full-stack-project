# full-stack-project

Projeto full-stack com backend em C# e frontend em React, focado em desenvolvimento web moderno e integrado.

---

## 🧰 Tecnologias Utilizadas

### 🔙 Back-end (ASP.NET Core)
- .NET 7 SDK
- C#
- Entity Framework Core
- Swagger (opcional, mas recomendado)
- API RESTful

### 🔜 Front-end (React)
- React.js (Create React App)
- Axios para consumo da API
- React Router (se aplicável)
- Estilização com CSS/Styled Components/Tailwind (dependendo do projeto)

---

## 🛠️ Pré-requisitos

- Git instalado
- Node.js (versão 14 ou superior)
- .NET 7 SDK ([instale aqui](https://dotnet.microsoft.com/en-us/download/dotnet/7.0))
- Editor recomendado: Visual Studio Code

---

## 🚀 Como Rodar o Projeto

### ▶️ Front-end: `frontend-filmes`

Passos para execução do front-end:

```bash
# Clone o repositório (se ainda não tiver)
git clone <url-do-repositorio>
cd full-stack-project/frontend-filmes

# Instale as dependências
npm install
# ou
yarn install

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
