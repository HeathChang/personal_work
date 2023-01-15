FROM node:14-alpine

WORKDIR /appOld

COPY package.json .

RUN npm install

COPY . .

EXPOSE 80

CMD ["node", "appOld.js"]