class Command {
    constructor(options, run) {
        this.nsfw = Boolean(options.nsfw) || false
        this.ownerOnly = Boolean(options.ownerOnly) || false
        this.guildOnly = Boolean(options.guildOnly) || false 

        this.aliases = options.aliases || []
    
        this.run = run || (() => {})
    }
}

module.exports = Command