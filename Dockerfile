FROM node:18-alpine


USER root
RUN mkdir -p /usr/src/www
WORKDIR /usr/src/www

COPY . /usr/src/www

RUN npm install
RUN npm run build

## Start the application
CMD ["npm", "run", "start"]

EXPOSE 4000