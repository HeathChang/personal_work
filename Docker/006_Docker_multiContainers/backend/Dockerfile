FROM node:16.13.0

#setting for working directory
WORKDIR /appOld

#copy the package.file into working dicrectory
COPY package.json .

#install all required dependencies of the project
RUN npm install

#copy the remainng code to working dicrectory
COPY . .

#port used by this appOld
EXPOSE 80

ENV MONGODB_USERNAME=root
ENV MONGODB_PASSWORD=secret

#specify thecommand that should be executed
CMD ["npm","start"]