FROM arm64v8/node:18

COPY . .
RUN sudo rm package-lock.json && sudo npm install -g npm@latest && sudo npm install -g @angular/cli && sudo npm install && sudo ng build --configuration production

## Start the application
CMD ["node", "dist/app/server/main.js"]

EXPOSE 4000