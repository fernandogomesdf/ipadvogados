# Use official nginx image as the base image
FROM nginx:1.21.6

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY ./www/ /usr/share/nginx/html/

# Expose port 80
EXPOSE 80