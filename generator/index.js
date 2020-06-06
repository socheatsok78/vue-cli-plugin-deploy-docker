const docker = require('./docker')

module.exports = (api, options, rootOptions) => {
    docker.install(api, options)
}
