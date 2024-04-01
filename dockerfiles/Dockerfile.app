# Use the official Node.js image as a base
FROM node:lts-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

COPY . . 

RUN yarn install

EXPOSE 3000 

CMD ["yarn","workspace","app" ,"dev"]
