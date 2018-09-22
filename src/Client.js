var Discord = require('discord.js')
var DiscordTools = require('discordtools')

var startCommandListener = require('./Commands/startCommandListener.js')

class HokuClient {
    constructor(token, options) {
        this.token = token

        this.discord = new Discord.Client()
        this.tools = new DiscordTools.Client(this.token);

        if (!options) options = {};

        this.options = options
        
        if (!this.options.prefix) this.options.prefix = undefined // will only respond to mentions
        if (!this.options.commandsDir) this.options.commandsDir = 'commands'

        startCommandListener(this);

    }

    login() {
        return this.discord.login(this.token)
    }

    on(...args) {
        return this.discord.on(...args)
    }
}

module.exports = HokuClient