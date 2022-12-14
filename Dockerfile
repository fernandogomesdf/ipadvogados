FROM arm64v8/node:18

WORKDIR /usr/src/www
RUN chmod -R 765 /usr/src/www
COPY . /usr/src/www
RUN npm install -g npm@latest && npm install -g @angular/cli && npm install

## Start the application
CMD ["npm", "run", "start"]

EXPOSE 4000