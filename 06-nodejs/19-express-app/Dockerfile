# Reference: https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
FROM node:latest

LABEL author="Prashanth Puranik"
LABEL email="puranik@digdeeper.in"

# All shell commands we run will be from this directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .


