FROM arm64v8/node:18

COPY . .
RUN rm package-lock.json && npm install -g npm@latest && npm install -g @angular/cli && npm install && ng build --configuration production


## Start the application
CMD ["node", "dist/app/server/main.js"]

EXPOSE 4000