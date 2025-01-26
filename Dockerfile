# Use the latest Node.js image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy all files into the container
COPY . .

# Expose port 10000 (Render default) and 3000 (our choice)
EXPOSE 10000 3000

# Start the application
CMD ["node", "server.js"]