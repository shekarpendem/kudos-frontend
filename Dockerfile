FROM node

RUN mkdir /app
WORKDIR /app

COPY package*.json /app/

RUN npm install -g @angular/cli@8.0.1

RUN npm install

COPY src /app/src

EXPOSE 4200

CMD [ "npm", "start" ]
