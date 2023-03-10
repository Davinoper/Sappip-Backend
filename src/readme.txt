________Rodar no termina para inicializar o container_________

docker run --rm --name sappip \
  -p 27017:27017 \
  -e MONGO_INITDB_DATABASE=sappip \
  mongo
______________________________________________________________

______________Para rodar o projeto____________________________

!Instalar o yarn

#Instala as dependencias
yarn install

#Roda o projeto
yarn dev