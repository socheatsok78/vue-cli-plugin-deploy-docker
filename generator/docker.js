module.exports = {
    install(api, options) {
        if (options.containerTag) {
            api.extendPackage({
                scripts: {
                    'docker:build': `docker build . -t ${options.containerTag}`,
                    'docker:run': `docker run --rm -it -p 8088:80 ${options.containerTag}`
                },
            });
        }

        api.render('./template')
    }
}
