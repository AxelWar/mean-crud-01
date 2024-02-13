# Define the base image
FROM node:20.10.0

# Set the working directory in the Docker container
WORKDIR /usr/src/app

# Copy the server package.json and package-lock.json (if available)
COPY ./server/package*.json ./

# Install dependencies
RUN npm install

# Copy the server source code into the Docker container
COPY ./server .

# Expose the port the server listens on
EXPOSE 3000

# Command to run the server
CMD [ "npm", "run", "dev" ]
