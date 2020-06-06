# vue-cli-plugin-deploy-docker

> 🐳 Dockerize Your Vue.js Application \w Nginx

[![npm-version](https://img.shields.io/npm/v/vue-cli-plugin-deploy-docker/latest)][npm-url]
[![npm-download](https://img.shields.io/npm/dm/vue-cli-plugin-deploy-docker)][npm-url]

# Installation

Using Vue CLI

```sh
vue add deploy-docker
```

or install manually

```sh
yarn add -D vue-cli-plugin-deploy-docker

# Invoke the plugin
vue invoke vue-cli-plugin-deploy-docker
```

# Usage

This plugin will create a `Dockerfile`, `.dockerignore` and `nginx.conf` in the root of your project.

`Nginx` is an HTTP(s) server that will run in your docker container. It uses a configuration file to determine how to serve content/which ports to listen on/etc. [See the nginx configuration documentation](https://www.nginx.com/resources/wiki/start/topics/examples/full/) for an example of all of the possible configuration options.

See [Deployment | Vue CLI document](https://cli.vuejs.org/guide/deployment.html#docker-nginx) for more detail.

### Build the container

Run the following command to build the container:

```sh
yarn docker:build
```

### Run the container

Run the following command to start the container:

> Note: please make sure that you already built the container before running it

```sh
yarn docker:run
```

## License

License under [MIT](LICENSE)

[npm-url]: https://www.npmjs.com/package/vue-cli-plugin-deploy-docker
