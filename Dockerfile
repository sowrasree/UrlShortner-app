FROM node:16.14.2-slim

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json
RUN npm install
RUN npm install -g @angular/cli@latest

COPY . /app


CMD ["/bin/bash"]
