FROM node:16.20.2-alpine

WORKDIR /Node.JS/backend

COPY package*.json ./

RUN npm install --legacy-peer-deps

RUN npm install -g @babel/core @babel/cli

COPY . .

# Build source từ src/ sang build/
RUN npm run build-src

# Container start bằng node server (file đã build)
CMD ["node", "build/server.js"]



#Start file docker file
# docker build --tag node-docker .
#Start docker container
#docker run -p 8081:8081 -d node-docker