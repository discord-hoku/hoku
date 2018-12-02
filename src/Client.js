var Discord = require('discord.js');
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
    constructor(options = {}) {

        super()

        this.options = {...options, ...this.options};

        if (!options) options = {};
        if (typeof options.prefix === 'undefined') this.options.prefix = '';
        if (typeof options.owners === 'undefined') this.options.owner = null;

        require('./utils/checkDirectorySync')('commands')
        require('./utils/checkDirectorySync')('events')

        require('./Events/runEvents')(this)

        this.on('ready', () => {
            startCommandListener(this);
        })
    }

    /**
     * @type {string}
     */
    get prefix() {
        if (typeof this.options.prefix === 'undefined' || typeof this.options.prefix === null) throw new Error('No prefix has been set.');
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
}

module.exports = HokuClient;
