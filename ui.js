module.exports = api => {
    api.describeTask({
        match: /vue-cli-service docker:build/,
        description: 'Build a new docker container',
        prompts: [
            {
                name: 'tag',
                type: 'input',
                description: `Name and optionally a tag in the 'name:tag' format`,
                default: 'app:latest'
            }
        ],
        onBeforeRun: ({ answers, args }) => {
            if (answers.tag) args.push(`--tag ${answers.tag}`)
        }
    })

    api.describeTask({
        match: /vue-cli-service docker:run/,
        description: 'Run application in docker',
        prompts: [
            {
                name: 'publish',
                type: 'input',
                description: `Publish a container's port(s) to the host`,
                default: '8088:80'
            },
            {
                name: 'interactive',
                type: 'confirm',
                description: 'Keep STDIN open even if not attached',
                default: true
            },
            {
                name: 'tty',
                type: 'confirm',
                description: 'Allocate a pseudo-TTY',
                default: true
            },
            {
                name: 'rm',
                type: 'confirm',
                description: 'Automatically remove the container when it exits',
                default: true
            },
        ],
        onBeforeRun: ({ answers, args }) => {
            if (answers.publish) args.push(`--publish ${answers.publish}`)
            if (answers.interactive) args.push(`--interactive`)
            if (answers.tty) args.push(`--tty`)
            if (answers.rm) args.push(`--rm`)
        }
    })
}
