FROM node:10.4.0
WORKDIR /questions
COPY package*.json ./
RUN npm install
COPY  . .
COPY wait-for-it.sh .
EXPOSE 8080
CMD ["npm", "start"]