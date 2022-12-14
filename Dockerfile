FROM arm64v8/node:18-alpine

WORKDIR /usr/src/www
COPY . /usr/src/www

## Start the application
CMD ["npm", "run", "start"]

EXPOSE 4000