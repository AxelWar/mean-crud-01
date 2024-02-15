# Define the base image with the Node.js version that matches your application's requirements
FROM node:20.10.0

WORKDIR /usr/src/app
COPY ./server/package*.json ./
RUN npm install --only=production
COPY ./server .
EXPOSE 4000
CMD [ "node", "index.js" ]