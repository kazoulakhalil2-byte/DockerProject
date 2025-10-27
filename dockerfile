# Dockerfile (simple)
FROM node:18-alpine

WORKDIR /app

# copy dependency manifests first for better cache
COPY package*.json ./

# install production deps
RUN npm ci --only=production

# copy rest of sources
COPY . .

EXPOSE 3000

CMD ["node", "server.js"]
