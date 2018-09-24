var Discord = require('discord.js')
var DiscordTools = require('discordtools')

var startCommandListener = require('./Commands/startCommandListener.js')

/**
 * Hoku.Client
 * @class
 * @param {string} token The Application's Token
 * @param {object} options HokuClient Options
 * @param {string} [options.prefix=Respond only to mention] Prefix, Optional, Default will respond only to mention
 * @param {string} [options.commandsDir=/commands] The directory where to store the commands, Optional, Default is /commands
 * 
 * @returns {object} 
 */
class HokuClient {
    constructor(token, options) {
        this.token = token

        /**
         * Discord.js Propreties
         */
        this.discord = new Discord.Client()

        /**
         * Discord Tools
         */
        this.tools = new DiscordTools.Client(this.token);

        if (!options) options = {};

        /**
         * Options of the bot
         */
        this.options = options
        
        if (!this.options.prefix) this.options.prefix = undefined // will only respond to mentions
        if (!this.options.commandsDir) this.options.commandsDir = 'commands'

        startCommandListener(this);

    }

    /**
     * Start the bot
     */
    login() {
        return this.discord.login(this.token)
    }

    /**
     * 
     * @param {string} eventName 
     * @param {function} cb 
     */
    on(eventName, cb) {
        return this.discord.on(eventName, cb)
    }
}

module.exports = HokuClient