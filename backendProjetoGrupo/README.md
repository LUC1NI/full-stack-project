# 🎬 Sistema de Gerenciamento de Filmes

Este é um sistema básico desenvolvido com *ASP.NET Core 8 (Minimal API)* que permite gerenciar um catálogo de filmes, incluindo funcionalidades de cadastro, listagem, atualização e remoção, com suporte a *gêneros de filmes*.

---

## 📌 Funcionalidades

- ✅ Cadastro de filmes com gênero
- ✅ Listagem de filmes e gêneros
- ✅ Atualização e exclusão de registros
- ✅ Relacionamento entre Filme e Gênero (1:N)

---

## 🛠️ Tecnologias Utilizadas

- [.NET 8](https://dotnet.microsoft.com/)
- SQLite
- Entity Framework Core
- Minimal API
- Git e GitHub

---

## 🧩 Relacionamento entre Entidades

- Um *Filme* pertence a um *Gênero*
- Um *Gênero* pode estar associado a *vários Filmes*

---

## 🚀 Como Configurar e Executar

### ✅ Pré-requisitos

- .NET 8 SDK instalado: [Download .NET 8](https://dotnet.microsoft.com/download/dotnet/8.0)
- Editor de código como [Visual Studio Code](https://code.visualstudio.com/) ou Visual Studio
- Git instalado

### ⚙️ Passo a passo

1. Clone este repositório:
git clone https://github.com/LUC1NI/backend-projeto-grupo.git
cd backend-projeto-grupo

2. Restaure os pacotes:
dotnet restore


3. Crie o banco de dados e aplique as migrations:
dotnet ef database update


4. Execute o projeto:
dotnet run


5. Acesse no navegador:
http://localhost:5085


## 📮 Principais Endpoints

### 🎥 Filmes

| Método | Rota            | Descrição                     |
|--------|-----------------|-------------------------------|
| GET    | /filmes         | Lista todos os filmes         |
| GET    | /filmes/{id}    | Detalhes de um filme          |
| POST   | /filmes         | Cadastrar um novo filme       |
| PUT    | /filmes/{id}    | Atualizar um filme            |
| DELETE | /filmes/{id}    | Remover um filme              |

### 🏷️ Gêneros

| Método | Rota             | Descrição                     |
|--------|------------------|-------------------------------|
| GET    | /generos         | Lista todos os gêneros        |
| GET    | /generos/{id}    | Detalhes de um gênero         |
| POST   | /generos         | Cadastrar um novo gênero      |
| PUT    | /generos/{id}    | Atualizar um gênero           |
| DELETE | /generos/{id}    | Remover um gênero             |

## 📹 Demonstração

Link para o vídeo demonstrativo: https://youtu.be/bbWR3ktFpnU

## 👥 Equipe

- João Vitor Lucini – Models, Migrations, Organização
- Gabriel – Endpoints de Filmes
- Leonardo – AppDbContext, Parte dos Endpoints de genero
- Tiago – Outra parte dos Endpoints de genero, README