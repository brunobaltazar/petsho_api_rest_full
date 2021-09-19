https://hub.docker.com/r/linuxserver/mysql-workbench#application-setup

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


Após subir container usa IP da sua maquina para realizar login

PGADMIN seu IP da maquina e porta 8001
BD      seu IP da maquina e porta 5432

192.168.40.193