#React Docker setup
# project setup requires node
FROM node

#
WORKDIR /app

#
COPY package.json .

#
RUN npm install

#
COPY . .

#EXPOSE
EXPOSE 3000

#
CMD ["npm", "start"]

