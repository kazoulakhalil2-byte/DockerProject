# Use Node.js base image
FROM node:18

# Set working directory inside container
WORKDIR /app

# Copy only package files first (for better caching)
COPY NewDocker/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your app
COPY NewDocker/ .

# Expose port
EXPOSE 3000

# Start the app
CMD ["node", "server.js"]


