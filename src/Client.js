var Discord = require('discord.js');
var DiscordTools = require('discordtools');
var startCommandListener = require('./Commands/startCommandListener.js');

/**
 * @extends {Client}
 */
class HokuClient extends Discord.Client {

    /**
     * HokuClient Options
     * @param {object} [options]
     * @param {string} [options.prefix=null] Prefix, Optional, Default will respond only to mention
     * @param {string} [options.commandsDir=/commands] The directory where to store the commands, Optional, Default is /commands
     * @returns {object}
     */
    constructor(token, options = {}) {
        this.token = token;

        /**
         * Discord Tools
         */
        this.tools = new DiscordTools.Client(this.token);

        /**
         * HokuClient Options.
         */
        this.options = options;

        if (!options) options = {};
        if (typeof options.prefix === 'undefined') options.prefix = '';
        if (!options.commandsDir) this.options.commandsDir = 'commands';

        startCommandListener(this);
    }

    /**
     */
    get owners() {
        if (!this.options.owner) return null;
        if (typeof this.options.owner === 'string') return [this.users.get(this.options.owner)];
        const owners = [];
        for (const owner of this.options.owner) owners.push(this.users.get(owner));
        return owners;
    }

    /**
     * Start the bot.
     */
    connect() {
        return this().login(this.token);
    }
}

module.exports = HokuClient;