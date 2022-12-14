FROM arm64v8/node:18

WORKDIR /app
COPY . /app
RUN ulimit -n 1024000 && npm install -g npm@latest 
RUN ulimit -n 1024000 && npm install -g @angular/cli
RUN ulimit -n 1024000 && npm install
RUN ls -la
RUN ulimit -n 1024000 && ng build --configuration production

## Start the application
CMD ["node", "dist/app/server/main.js"]

EXPOSE 4000