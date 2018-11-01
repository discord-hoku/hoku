var Discord = require('discord.js');
var DiscordTools = require('discordtools');
var startCommandListener = require('./Commands/StartCommandListener.js');

/**
 * @extends {Client}
 */
class HokuClient {

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
        this.discord = new Discord.Client();

        this.broadcats = this.discord.broadcasts
        this.browser = this.discord.browser
        this.channels = this.discord.channels
        this.emojis = this.discord.emojis
        this.guilds = this.discord.guilds
        this.ping = this.discord.ping
        this.pings = this.discord.pings
        // this.presences = this.discord.presences
        this.readyAt = this.discord.readyAt
        this.readyTimestamp = this.discord.readyTimestamp
        this.shard = this.discord.shard
        this.status = undefined
        this.uptime = this.discord.uptime
        this.user = this.discord.user
        this.users = this.discord.users
        this.voiceConnections = this.discord.voiceConnections

        this.tools = new DiscordTools.Client(this.token);
        this.options = {...options, ...this.discord.options};

        if (!options) options = {};
        if (typeof options.prefix === 'undefined') options.prefix = '';
        if (typeof options.owners === 'undefined') options.owner = null;
        if (typeof options.commandsDir === 'undefined') this.options.commandsDir = 'commands';

        this.discord.on('ready', () => {
            startCommandListener(this);
            this.status = this.discord.status
        })
        
        /// this.status = this.discord.status
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
        return this.discord.login(this.token);
    }

    on(event, listener) {
        return this.discord.on(event, listener);
    }

    clearInterval(interval) {
        return this.discord.clearInterval(interval)
    }

    clearTimeout(timeout) {
        return this.discord.clearTimeout(timeout)
    }

    createVoiceBroadcast() {
        return this.discord.createVoiceBroadcast()
    }

    destory() {
        return this.discord.distroy()
    }

    fetchApplication(id) {
        return this.fetchApplication(id)
    }

    fetchInvite(invite) {
        return this.fetchInvite(invite);
    }

    fetchUser(id, cache) {
        return this.discord.fetchUser(id, cache)
    }

    fetchVoiceRegions() {
        return this.discord.fetchVoiceRegions()
    }

    fetchWebook(id, reason) {
        return this.discord.fetchWebhook(id, reason)
    }

    generateInvite(perms) {
        return this.discord.generateInvite(perms) 
    }

    setInterval(fn, delay, ...args) {
        return this.discord.setInterval(fn, delay, ...args)
    }

    setTimeout(fn, delay, ...args) {
        return this.discord.setTimeout(fn, delay, ...args)
    }

    sweepMessages(lifetime) {
        return this.discord.sweepMessages(lifetime)
    }

    syncGuilds(guilds) {
        return this.discord.syncGuilds(guilds)
    }
}

module.exports = HokuClient;