### Setup
Make sure `homepage` is set to the correct address in your `package.json`.

`NETWORKING=yes` must be in `/etc/sysconfig/network`.

Add your server configuration to `/etc/nginx/conf.d/default.conf`.

Run `nginx && npm start` in your docker-compose.yml, inside the container, or in your `Dockerfile`.

If using docker-compose make sure `stdin_open: true` is set in your containers configuration.
