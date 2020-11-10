FROM node:alpine

WORKDIR /app

ADD . ./

RUN npm install --only=prod

EXPOSE 3000

CMD ["npm","start"]