# Sistema de Gerenciamento de Frotas EPTA

## Visão Geral

Este projeto é uma aplicação fullstack desenvolvida como desafio técnico para a vaga de Desenvolvedor(a) Fullstack Júnior. O objetivo principal é fornecer um sistema de gerenciamento de frotas de veículos, permitindo que usuários autenticados cadastrem, visualizem, editem, arquivem/desarquivem e excluam veículos, além de visualizar um dashboard com dados resumidos da frota.

A aplicação é dividida em duas partes principais: um frontend construído com React e um backend com Node.js/Express, utilizando PostgreSQL como banco de dados relacional.

## Funcionalidades

### Autenticação (JWT)

- Registro de Usuário: Permite que novos usuários se cadastrem com email e password. As senhas são armazenadas com hash (bcryptjs).

- Login de Usuário: Autentica usuários existentes. Em caso de sucesso, um JSON Web Token (JWT) é gerado e retornado.

- Proteção de Rotas: Todas as rotas de gerenciamento de veículos e dashboard no backend são protegidas, exigindo um JWT válido.

- Logout: Funcionalidade para deslogar o usuário, limpando o token armazenado no navegador.

- Níveis de Acesso (role): Usuários podem ter a role de 'user' ou 'admin', permitindo futuras implementações de controle de acesso baseado em perfil.

### Dashboard

- Cards Informativos: Exibe cards com o total de veículos cadastrados, total de veículos ativos e total de veículos inativos, buscando os dados do backend.

- Navegação: Menu lateral simples para alternar entre "Dashboard" e "Relatórios" (página visual).

### Gerenciamento de Veículos (CRUD Completo)

- Cadastro de Veículo: Modal para adicionar novos veículos com nome e placa.

- Listagem de Veículos: Tabela no Dashboard que exibe todos os veículos cadastrados com nome, placa e status.

- Edição de Veículo: Permite editar nome e placa de um veículo existente através do modal.

- Arquivar/Desarquivar Veículo: Altera o status de um veículo entre 'ativo' e 'inativo'.

- Remoção de Veículo: Exclui um veículo permanentemente do banco de dados

## Tecnologias Utilizadas

### Frontend

- React: Biblioteca JavaScript para construção de interfaces de usuário.

- Styled Components: Biblioteca para estilização de componentes React utilizando CSS-in-JS.

- React Router DOM: Para gerenciamento de rotas e navegação na aplicação.

- Axios: Cliente HTTP baseado em Promises para fazer requisições ao backend.

### Backend

- Node.js: Ambiente de execução JavaScript no lado do servidor.

- Express: Framework web para Node.js, utilizado para construir a API RESTful.

- pg: Driver oficial do PostgreSQL para Node.js.

- bcryptjs: Biblioteca para hashing de senhas.

- jsonwebtoken: Para geração e verificação de JSON Web Tokens (JWT).

- dotenv: Para carregar variáveis de ambiente de arquivos .env.

- cors: Middleware para habilitar o Cross-Origin Resource Sharing (CORS).

### Banco de Dados

- PostgreSQL: Sistema de gerenciamento de banco de dados relacional.

### Ferramentas de Desenvolvimento

- Nodemon: Ferramenta que reinicia o servidor Node.js automaticamente a cada alteração de código.

- Thunder Client (VS Code Extension): Cliente REST API integrado ao VS Code para testar endpoints do backend.

- pgAdmin 4: Ferramenta gráfica para administração e desenvolvimento de bancos de dados PostgreSQL.

## Estrutura do Projeto

O projeto é organizado em duas pastas principais: backend e frontend.

``` 
fleet-management-app/
├── backend/
│   ├── src/
│   │   ├── config/          # Configurações (ex: conexão com DB)
│   │   ├── middlewares/     # Funções intermediárias (ex: autenticação JWT)
│   │   ├── routes/          # Definição das rotas da API (autenticação, veículos, dashboard)
│   │   ├── utils/           # Funções utilitárias (ex: hash de senha, JWT)
│   │   └── server.js        # Ponto de entrada do servidor Express
│   ├── .env.example         # Exemplo de variáveis de ambiente do backend
│   ├── .env                 # Variáveis de ambiente reais (IGNORADO pelo Git)
│   ├── database.sql         # Script SQL para criação das tabelas
│   ├── package.json         # Dependências e scripts do backend
│   └── README.md            # README específico do backend (opcional)
├── frontend/
│   ├── epta-app/
│   │   ├── public/          # Arquivos estáticos (index.html, manifest.json, favicon, logo)
│   │   ├── src/
│   │   │   ├── components/  # Componentes reutilizáveis (ex: PrivateRoute, VehicleFormModal)
│   │   │   ├── img/         # Imagens (ex: logo da EPTA)
│   │   │   ├── pages/       # Páginas da aplicação (Login, Register, Dashboard)
│   │   │   ├── services/    # Configurações de API (ex: Axios)
│   │   │   ├── styles/      # Definições de Styled Components para cada página/componente
│   │   │   ├── App.js       # Roteamento principal da aplicação React
│   │   │   └── index.js     # Ponto de entrada do React
│   │   ├── .env.example     # Exemplo de variáveis de ambiente do frontend
│   │   ├── .env             # Variáveis de ambiente reais (IGNORADO pelo Git)
│   │   ├── package.json     # Dependências e scripts do frontend
│   │   └── README.md        # README específico do frontend (opcional)
├── .gitignore               # Regras de ignorar arquivos para o repositório Git
└── README.md                # Este arquivo
``` 
## Como Rodar o Projeto

Siga os passos abaixo para configurar e executar a aplicação em seu ambiente local.

### Pré-requisitos
### Certifique-se de ter instalado em sua máquina:

- Node.js (versão 18 ou superior recomendada)

- npm (geralmente vem com o Node.js)

- PostgreSQL (servidor de banco de dados)

- pgAdmin 4 (ferramenta gráfica para PostgreSQL, opcional mas recomendado)

- Git

### Configuração do Banco de Dados (PostgreSQL)
- Inicie seu servidor PostgreSQL. Se estiver usando Docker, execute:
```
docker run --name fleet-postgres -e POSTGRES_PASSWORD=sua_senha_segura -p 5432:5432 -d postgres:16
```
- (Substitua sua_senha_segura pela senha desejada para o usuário postgres).

- Crie um banco de dados chamado fleet_db. Você pode usar o pgAdmin 4 ou o psql:
```
psql -U postgres -h localhost -p 5432
# Digite sua senha
CREATE DATABASE fleet_db;
\q
```
- Execute o script SQL para criar as tabelas users e vehicles. Navegue até a pasta backend e execute:
```
psql -U postgres -h localhost -p 5432 -d fleet_db -f database.sql
```
- Ou use o Query Tool do pgAdmin 4 para colar e executar o conteúdo de backend/database.sql.

### Configuração das Variáveis de Ambiente
### Backend:

- Crie um arquivo .env na pasta backend/.

- Copie o conteúdo de backend/.env.example para backend/.env.

- Preencha as variáveis com suas credenciais e configurações:
```
DATABASE_URL="postgresql://postgres:sua_senha_segura@localhost:5432/fleet_db"
JWT_SECRET="uma_chave_secreta_jwt_bem_forte_e_aleatoria"
PORT=3001
```
### Frontend:

- Crie um arquivo .env na pasta frontend/epta-app/.

- Copie o conteúdo de frontend/epta-app/.env.example para frontend/epta-app/.env.

- Preencha as variáveis:
```
REACT_APP_API_URL=http://localhost:3001/api
```
### Instalação das Dependências
- Instale as dependências do Backend:
```
cd backend
npm install
```
- Instale as dependências do Frontend:
```
cd ../frontend/epta-app
npm install
```
### Iniciando o Backend
- Em um novo terminal, navegue até a pasta backend/:
```
cd backend
npm run dev
```
- O servidor iniciará na porta 3001. Mantenha este terminal aberto.

### Iniciando o Frontend
- Em um segundo terminal separado, navegue até a pasta frontend/epta-app/:
```
cd frontend/epta-app
npm start
```
- O aplicativo React será compilado e aberto automaticamente em seu navegador (geralmente em http://localhost:3000). Mantenha este terminal aberto.
## Desafios e Aprendizados
### Durante o desenvolvimento deste projeto, enfrentei e superei diversos desafios, o que proporcionou um aprendizado valioso:

- Configuração de Ambiente Fullstack: A integração inicial de Node.js, Express e PostgreSQL, incluindo a configuração de variáveis de ambiente e a depuração de erros de conexão, foi um ponto de grande aprendizado.

- JSON Web Tokens (JWT): Esta foi a minha primeira experiência prática com JWTs. Entender o fluxo de geração, assinatura, verificação e o uso de middlewares para proteger rotas foi um desafio gratificante, aprofundando meu conhecimento em autenticação stateless.

- Gerenciamento de Dependências e Conflitos: Lidar com erros de Module not found e, principalmente, o persistente conflito do ESLint (Plugin "react" was conflicted between...) devido a incompatibilidades de versão do React/react-scripts, exigiu uma depuração aprofundada, limpeza de cache (npm cache clean --force, rm -rf node_modules) e fixação de versões (react@18.2.0).

- Layout e Responsividade com Styled Components: Refinar o layout para replicar o design do Figma, especialmente a transição entre telas (Login centralizada vs. Dashboard grudado no canto), e garantir a responsividade em diferentes tamanhos de tela, demandou atenção aos detalhes de Flexbox, position e media queries.

- Debugging no Frontend/Backend: A importância de usar as ferramentas de desenvolvedor do navegador (Console, Network) e logs no terminal do backend para identificar e resolver problemas de comunicação entre as camadas.
