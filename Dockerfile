FROM arm64v8/node:18

COPY . .
RUN sudo npm install -g npm@latest 
RUN sudo npm install -g @angular/cli@latest 
RUN sudo npm install
RUN sudo ng build --configuration production

## Start the application
CMD ["node", "dist/app/server/main.js"]

EXPOSE 4000