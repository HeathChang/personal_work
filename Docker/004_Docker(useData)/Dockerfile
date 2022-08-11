FROM node:14
#FROM node:12  -> use version 12 Node
WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 80


#Volume
#Anonymous:: VOLUME [ "/app/feedback" ]

# => inside my app conatainer which should be mapped to some folder outside of the container.


CMD [ "node", "server.js" ]





