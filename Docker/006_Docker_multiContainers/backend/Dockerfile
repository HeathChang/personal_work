FROM node

#setting for working directory
WORKDIR /app

#copy the package.file into working dicrectory
COPY package.json .

#install all required dependencies of the project
RUN npm install

#copy the remainng code to working dicrectory
COPY . .

#port used by this app
EXPOSE 80

#specify thecommand that should be executed
CMD ["node","app.js"]