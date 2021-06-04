## Desafio Estagio Tributei

## INICIANDO
- Clone o projeto usando o git `git clone [link do repositório]`.
- Com o node instalado na sua maquina, rode o comando `npm install`.
## CONFIGURANDO O BANCO
- Configurar os dados da conexão com o banco no arquivo src/config/databese.js
- Use o comando `npx sequelize db:create` para criar a base de dados.
- Use o comando `npx sequelize db:migrate` para criar as tabelas no banco de dados.
##
- Rode `npm start` para iniciar o servidor que vai rodar na porta `3000`.


## ROTAS
1 - Rota para listar os posts com a quantidade total de comentários e um array com todos os comentários de cada post: (GET) `http://localhost:3000/posts`.
2 - Rota para criar um post: (POST) `http://localhost:3000/posts`.
3 - Rota para listar todos os comentários de um post específico: (GET) `http://localhost:3000//posts/:post_id/comments`.
4 - Rota para criar um comentário para um post específico: (POST) `http://localhost:3000//posts/:post_id/comments`.