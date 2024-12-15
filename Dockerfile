FROM node:20-alpine
WORKDIR /app
COPY ./backend/package.json ./package.json
COPY ./backend/package-lock.json ./package-lock.json
COPY ./backend/tsconfig.json ./tsconfig.json
COPY ./backend/prisma ./prisma
COPY ./backend/src ./src
COPY ./shared ./shared

RUN npm install

CMD ["npm", "run", "start"]

EXPOSE 3000