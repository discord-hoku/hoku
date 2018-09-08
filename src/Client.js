var {Client} = require('discord.js')
var startCommandListener = require('./Commands/startCommandListener.js')

class HokuClient {
    constructor(token, opts) {
        this.DiscordClient = new Client()

        this.token = token

        if (!opts) {throw "You need to declare a second arg to the Client class named Opts"}

        this.opts = opts
        
        if (!this.opts.prefix) this.opts.prefix = '!'
        if (!this.opts.commandsDir) this.opts.commandsDir = 'commands'
        if (!this.opts.categories) throw 'You need to give to Opts an proprety named `category`' 

        startCommandListener(this)   
    }

    login() {
        return this.DiscordClient.login(this.token)
    }

    on() {
        return this.DiscordClient.on
    }
}

module.exports = HokuClient