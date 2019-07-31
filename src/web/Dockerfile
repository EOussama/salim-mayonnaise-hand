# Getting a base image
FROM node:alpine AS builder

# Specifying a work directory
WORKDIR /usr/salim/web

# Copying the dependencies
COPY ./package.json ./

# Installing the dependencies
RUN npm install

# Copying the source code
COPY ./ ./

# Building the app
RUN npm run build --prod

# Setting up an Nginx build
FROM nginx:alpine

# Copying the built files
COPY --from=builder /usr/salim/web/dist/salim-the-mayonnaise-finger /usr/share/nginx/html
