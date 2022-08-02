FROM node:14
#FROM node:12  -> use version 12 Node
WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 80

CMD [ "node", "server.js" ]





