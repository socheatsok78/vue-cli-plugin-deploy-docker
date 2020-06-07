const shell = require('shelljs');

module.exports = (api, options) => {
    api.registerCommand(
        'docker:build',
        {
            description: 'Build a new docker container',
            usage: 'vue-cli-service docker:build [options]',
            options: {
                '--tag': "Name and optionally a tag in the 'name:tag' format"
            }
        },
        answers => {
            console.log(`🐳  Building a new docker container`)

            const args = []

            if (answers.tag) args.push(`--tag ${answers.tag}`)

            const params = args.join(' ')

            if (!shell.which('docker')) {
                shell.echo(`Sorry, this script requires 'docker' cli.`);
                shell.exit(1);

                return
            }

            if (shell.exec(`docker build . ${params}`).code !== 0) {
                shell.echo('Error: Docker build failed');
                shell.exit(1);
            }
        }
    )

    api.registerCommand(
        'docker:run',
        {
            description: 'Run application in docker',
            usage: 'vue-cli-service docker:run [options]',
            options: {
                '-i': 'Keep STDIN open even if not attached',
                '-t': 'Allocate a pseudo-TTY',
                '--rm': 'Automatically remove the container when it exits',
                '--publish [host:container]': "Publish a container's port(s) to the host"
            }
        },
        answers => {
            console.log(`🐳  Running application in docker container`)

            const args = []

            if (answers.publish) args.push(`--publish ${answers.publish}`)
            if (answers.interactive) args.push(`--interactive`)
            if (answers.tty) args.push(`--tty`)
            if (answers.rm) args.push(`--rm`)

            const params = args.join(' ')

            if (!shell.which('docker')) {
                shell.echo(`Sorry, this script requires 'docker' cli.`);
                shell.exit(1);

                return
            }

            if (shell.exec(`docker run ${params}`).code !== 0) {
                shell.echo('Error: Docker build failed');
                shell.exit(1);
            }
        }
    )
};
