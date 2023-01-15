FROM node:16.13.0

WORKDIR /appOld

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]