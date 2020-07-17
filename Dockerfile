FROM node:10.12
WORKDIR /app
COPY . /app/
EXPOSE 3000
RUN npm install \
    && node src/app.js