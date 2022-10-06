FROM node:14

WORKDIR /appOld

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "node", "appOld.mjs" ]