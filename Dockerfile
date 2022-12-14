FROM arm64v8/node:18

COPY . .

## Start the application
CMD ["node", "dist/app/server/main.js"]

EXPOSE 4000