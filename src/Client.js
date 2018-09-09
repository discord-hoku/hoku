var Discord = require('discord.js')
var startCommandListener = require('./Commands/startCommandListener.js')

class HokuClient {
    constructor(token, options) {
        this.discord = new Discord.Client()

        this.token = token

        if (!options) options = {};

        this.options = options
        
        if (!this.options.prefix) this.options.prefix = undefined // will only respond to mentions
        if (!this.options.commandsDir) this.options.commandsDir = 'commands'

        startCommandListener(this);
    }

    login() {
        return this.discord.login(this.token)
    }

    on() {
        return this.discord.on
    }
}

module.exports = HokuClient