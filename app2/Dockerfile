FROM node:14.18.1-slim AS application

WORKDIR /usr/src/app

COPY package.json /usr/src/app

RUN npm install

COPY server.js /usr/src/app

RUN npm install -g supervisor

CMD [ "supervisor", "server.js" ]