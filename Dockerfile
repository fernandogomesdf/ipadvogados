FROM arm64v8/node:18

COPY . .
RUN npm install -g npm@latest 
RUN npm install -g @angular/cli
RUN npm install
RUN la -la
RUN ng build --configuration production

## Start the application
CMD ["node", "dist/app/server/main.js"]

EXPOSE 4000