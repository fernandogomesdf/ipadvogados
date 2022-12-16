FROM --platform=linux/arm64 node:lts-alpine

WORKDIR /app
COPY . /app

## Start the application
CMD ["node", "/app/dist/app/server/main.js"]

EXPOSE 4000