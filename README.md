Iniciamos um novo projeto node;
Criamos uma rota com express;
Adicionamos o nodemon para inicializar o nosso servidor e reiniciar o servidor automaticamente a qualquer alteração.

Conectamos nosso servidor com o mysql;
Criamos tabelas no mysql usando um script node;
Salvamos o nosso atendimento no banco de dados.



node 12.22.5
nmp 6.14.14

nmp init "nome do projeto" 
criar index.js
instalar o express com "nmp install express"

  "scripts": {
    "start": "node index.js",


2.0.12
npm install -- save-dev nodemon

 "scripts": {
    "start": "nodemon index.js",


    npm start


npm install -- save-dev nodemon
npm install body-parser
npm install mysql
npm install moment

List all the containers. docker ps -aq.
Stop all running containers. docker stop $(docker ps -aq)
Remove all containers. docker rm $(docker ps -aq)
Remove all images. docker rmi $(docker images -q)


# .env arquivo é carregado por padrão:
# docker-compose --env-file .env.dev config
# docker-compose --env-file ./path/ .env.dev up 



# docker-compose down && docker-compose --env-file .env.dev up 
# docker-compose down && docker-compose --env-file .env.stage up
# docker-compose down && docker-compose --env-file .env.prod up
