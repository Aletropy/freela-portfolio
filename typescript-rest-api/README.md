# API REST para Gerenciador de Tarefas

Esta é uma API RESTful robusta e bem estruturada para um sistema de gerenciador de tarefas (To-Do List), construída com as melhores práticas de desenvolvimento back-end.

## O Problema Resolvido

Toda aplicação moderna, seja web ou mobile, precisa de um back-end confiável para gerenciar seus dados. Esta API serve como a espinha dorsal para qualquer front-end, oferecendo todas as operações necessárias para criar, ler, atualizar e deletar tarefas de forma eficiente.

## Features

- **Arquitetura Organizada:** O código é separado em rotas, controllers e modelos, facilitando a manutenção e escalabilidade.
- **Banco de Dados Simples:** Utiliza SQLite, que é baseado em arquivo e não requer um servidor de banco de dados, tornando a configuração e execução do projeto extremamente simples.
- **Operações CRUD Completas:** Todos os endpoints para gerenciar o ciclo de vida de uma tarefa estão implementados.
- **Validações Básicas:** Inclui validações simples para garantir a integridade dos dados.

## Documentação da API

Todos os endpoints estão sob o prefixo `/api`.

| Método HTTP | Endpoint          | Descrição                         | Exemplo de Body (JSON)                                |
|-------------|-------------------|-----------------------------------|-------------------------------------------------------|
| `POST`      | `/tasks`          | Cria uma nova tarefa.             | `{"title": "Minha Tarefa", "description": "Detalhes"}` |
| `GET`       | `/tasks`          | Lista todas as tarefas.           | N/A                                                   |
| `GET`       | `/tasks/{id}`     | Obtém uma única tarefa pelo ID.   | N/A                                                   |
| `PUT`       | `/tasks/{id}`     | Atualiza uma tarefa existente.    | `{"title": "Título Novo", "done": true}`              |
| `DELETE`    | `/tasks/{id}`     | Deleta uma tarefa.                | N/A                                                   |

## Como Executar

1.  **Clone e instale as dependências:**
    ```bash
    git clone https://github.com/Aletropy/freela-portfolio.git
    cd freela-portfolio/typescript-rest-api
    npm install
    ```

2.  **Execute em modo de desenvolvimento:**
    ```bash
    npm run dev
    ```
    ```fish
    yarn dev
    ```
    A API estará rodando em `http://localhost:3000`.

## Tecnologias Utilizadas

- **Node.js**
- **TypeScript**
- **Express.js** (para o servidor e rotas)
- **Sequelize** (ORM para interagir com o banco)
- **SQLite3** (banco de dados em arquivo)

---

**Pronto para construir o back-end do seu próximo projeto? Entre em contato!**
- **Email:** nixanha.mim@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/daviaportela/