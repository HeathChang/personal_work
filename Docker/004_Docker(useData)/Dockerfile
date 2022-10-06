FROM node:14
#FROM node:12  -> use version 12 Node

WORKDIR /appOld

COPY package.json .

RUN npm install

COPY . .

ARG DEFAULT_PORT=80

#ENV PORT 80
ENV PORT $DEFAULT_PORT


EXPOSE $PORT


#Volume
#Anonymous:: VOLUME [ "/appOld/feedback" ]

# => inside my appOld conatainer which should be mapped to some folder outside of the container.

# run-time command
CMD [ "node", "server.js" ]





