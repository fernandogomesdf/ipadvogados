# Use official nginx image as the base image
FROM arm64v8/nginx:1.23.2

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY ./www/ /usr/share/nginx/html/

# Expose port 80
EXPOSE 80