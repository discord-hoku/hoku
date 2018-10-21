var Discord = require('discord.js');
var DiscordTools = require('discordtools');
var startCommandListener = require('./Commands/StartCommandListener.js');

/**
 * @extends {Client}
 */
class HokuClient extends Discord.Client {

    /**
     * HokuClient Options
     * @param {object} [options]
     * @param {string} [options.prefix=null] Prefix, Optional, Default will respond only to mention
     * @param {string} [options.commandsDir=/commands] The directory where to store the commands, Optional, Default is /commands
     * @param {Array} [options.owners=null] Owner. 
     * @returns {object}
     */
    constructor(token, options = {}) {
        this.token = token;
        this.tools = new DiscordTools.Client(this.token);
        this.options = options;

        if (!options) options = {};
        if (typeof options.prefix === 'undefined') options.prefix = '';
        if (typeof options.owners === 'undefined') options.owner = null;
        if (typeof options.commandsDir === 'undefined') this.options.commandsDir = 'commands';
        startCommandListener(this);
    }

    /**
     * @type {string}
     */
    get prefix() {
        if (typeof this.options.prefix === 'undefined' || typeof this.options.prefix === null) throw new Error('NO prefix has been set.');
        return this.options.prefix;
    }

    /**
     */
    get owners() {
        if (!this.options.owners) return null;
        if (typeof this.options.owner === 'string') return [this.users.get(this.options.owner)];
        const owners = [];
        for (const owner of this.options.owner) owners.push(this.users.get(owner));
        return owners;
    }

    /**
     * Start the bot.
     */
    connect() {
        return this.login(this.token);
    }
}

module.exports = HokuClient;