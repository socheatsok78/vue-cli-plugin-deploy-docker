module.exports = {
    install(api, options) {
        api.extendPackage({
            scripts: {
                'docker:build': `vue-cli-service docker:build`,
                'docker:run': `vue-cli-service docker:run`
            },
        });

        api.render('./template')
    }
}
