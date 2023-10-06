# Use the official Nginx image as the base image
FROM nginx:alpine

# Copy HTML, CSS, and image files to the Nginx web server directory
COPY index.html /usr/share/nginx/html/index.html
COPY style.css /usr/share/nginx/html/style.css
COPY chat.jpeg /usr/share/nginx/html/chat.jpeg
COPY script.js /usr/share/nginx/html/script.js