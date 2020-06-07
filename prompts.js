module.exports = pkg => {
    const prompts = [
        {
            type: 'input',
            name: 'tag',
            message: `Name and optionally a tag in the 'name:tag' format`,
            validate: input => !!input,
            default: `${pkg.name}:latest`
        }
    ]

    return prompts
}
