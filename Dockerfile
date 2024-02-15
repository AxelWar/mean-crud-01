# Define the base image with the Node.js version that matches your application's requirements
FROM node:20.10.0

# Set the working directory in the Docker container
WORKDIR /server

# Copy package.json and package-lock.json (if available) to the working directory
COPY ./server/package*.json ./

# Install the application dependencies
# If you want to include devDependencies (for `nodemon`, etc.), you can skip the --only=production
RUN npm install --only=production

# Copy the rest of your application's source code into the Docker container
COPY ./server .

# Expose the port that your application listens on
EXPOSE 4000

# Command to run your application
# Use `node` directly for production environments or keep using `nodemon` for development
CMD [ "node", "index.js" ]
