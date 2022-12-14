FROM arm64v8/node:18-alpine

WORKDIR /usr/src/www
COPY . /usr/src/www
RUN rm package-lock.json
RUN rm -rf node_modules

## Start the application
CMD ["npm", "run", "start"]

EXPOSE 4000