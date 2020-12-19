FROM amazonlinux:2018.03
MAINTAINER Will Connelly <me@willconnelly.com.au>

# Add node repo
RUN curl -sL https://rpm.nodesource.com/setup_15.x | bash -

# Install system dependencies
RUN yum install -y vi curl nginx nodejs

RUN npm i nodemon -g
RUN npm i typescript -g

# nginx config
RUN mkdir -p /etc/nginx/conf.d
RUN touch /etc/nginx/conf.d/default.conf

# necessary for nginx to start correctly
RUN echo "NETWORKING=yes" > /etc/sysconfig/network

# Proxy to the React app
COPY default.conf /etc/nginx/conf.d/

WORKDIR /var/www/docs

RUN npm install

EXPOSE 8080
