#React Docker setup
# project setup requires node
FROM node:16.13.0

#
WORKDIR /appOld

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

