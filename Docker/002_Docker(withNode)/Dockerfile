FROM node
#FROM node:12  -> use version 12 Node
WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

EXPOSE 80

CMD [ "node", "server.js" ]





