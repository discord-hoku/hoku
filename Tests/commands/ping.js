var {Command} = require('../src/index')

class PingCommand extends Command {
    constructor(client) {
        name: "ping",
        aliases: ["pong"],
        ownerOnly: false,
        nsfw: false,
        guildOnly: false
    }
    
    async function run() {
        return message.channel.send(`Pong! ${message.client.ping}ms.`);
    }
};

module.exports = PingCommand;
