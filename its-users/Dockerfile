#1 La imagen que vamos a usar
FROM node:18-buster

#2 El directorio de trabajo dentro de la maquina
WORKDIR /

#3 Copia archivos necesarios
COPY package*.json ./
RUN npm i -g @nestjs/cli
RUN npm ci --force

# /
# package*.json
# node_modules

# Creamos el .dockerignore para definir que archivos / carpetas no copiar
COPY . .
# src
# *.env.....

# RUN npx prisma generate
RUN nest build
# dist

# Este es el Micro servicio usuarios => PORT=3001
EXPOSE 3001

CMD [ "node", "dist/main.js" ]
