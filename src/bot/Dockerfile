# Getting a base image
FROM node:alpine

# Specifying a work directory
WORKDIR /usr/salim/bot

# Copying the dependencies
COPY ./package.json ./

# Installing the dependencies
RUN npm install

# Copying the source code
COPY ./ ./

# Building the app
RUN npm run build

# Starting the app
CMD ["npm", "start"]
