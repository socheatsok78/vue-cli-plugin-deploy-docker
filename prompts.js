module.exports = pkg => {
    const prompts = [
        {
            type: 'input',
            name: 'containerTag',
            message: 'The container tag name.',
            validate: input => !!input,
            default: `${pkg.name}:latest`
        }
    ]

    return prompts
}
