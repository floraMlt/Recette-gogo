FROM node:20-alpine
WORKDIR /app
COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json
COPY ./src ./src

RUN npm install

CMD ["npm", "run", "start"]

EXPOSE 3000