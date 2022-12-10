FROM arm64v8/node:18-alpine

WORKDIR /usr/src/www
COPY . /usr/src/www

RUN npm install
RUN npm run build

## Start the application
CMD ["npm", "run", "start"]

EXPOSE 4000