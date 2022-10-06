FROM node
#FROM node:12  -> use version 12 Node
WORKDIR /appOld

COPY package.json /appOld

RUN npm install

COPY . /appOld

EXPOSE 80

CMD [ "node", "server.js" ]





