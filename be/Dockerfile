FROM node:16-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8989

# Start the application
CMD ["npm", "run", "start:prod"]