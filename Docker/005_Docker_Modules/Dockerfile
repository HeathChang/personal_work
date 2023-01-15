FROM node

WORKDIR /appOld

COPY package.json .

RUN npm install

COPY . .

CMD ["node", "appOld.js"]