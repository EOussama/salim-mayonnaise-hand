# Getting a base image
FROM node:alpine

# Specifying a work directory
WORKDIR /usr/salim/

# Copying the dependencies
COPY ./package.json /.

# Installing the dependencies
RUN npm install

# Copying the source code
COPY ./ ./

# Building the app

RUN npm run build

# Exposing a default port
EXPOSE 8080

# Starting the app
CMD ["npm", "start"]
