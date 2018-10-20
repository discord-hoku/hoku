class Command {
    constructor(c) {
        this.ownerOnly = c.ownerOnly ? c.ownerOnly : false
        this.nsfw = c.nsfw ? c.nsfw : false
        this.guildOnly = c.guildOnly ? c.guildOnly : false
        this.dmOnly = c.dmOnly ? c.dmOnly : false
        //this.requiredPerms = c.requiredPerms ? c.requiredPerms : [] //SOON™
        this.run = c.run ? c.run : () => {}
    }
}

module.exports = Command