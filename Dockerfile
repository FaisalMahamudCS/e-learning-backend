FROM node:slim
WORKDIR /app
COPY . /app
RUN npm install
EXPOSE 5001
CMD node index.js