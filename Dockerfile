FROM arm64v8/node:18

WORKDIR /app
COPY . /app
RUN npm install -g npm@latest 
RUN npm install -g @angular/cli
RUN npm install
RUN ng build --configuration production

## Start the application
CMD ["node", "/app/dist/app/server/main.js"]

EXPOSE 4000