const getCommands = require('./GetCommands.js');

module.exports = async function (client) {
    var commands = await getCommands(client)

    client.discord.on('message', async message => {

        if (message.author.bot) return;

        let msg = message.content;
        let content = message.content.slice(client.options.prefix.length).split(" ")
        let args = content.slice(1)
        let command = content[0]

        if (!(msg.startsWith(client.options.prefix) || msg.match(`^<@!?${client.discord.user.id}> `))) return;
        if (msg.match(`^<@!?${client.discord.user.id}> `)) command = args.shift();
        
        try {
            if (commands[command].ownerOnly && !client.owners.includes(message.author.id)) return message.channel.send(client.options.messages.ownerOnly ? client.options.messages.ownerOnly(message, cmd) : 'You can\'t run the command!')
            commands[command].run(client, message, args);
            this.discord.emit('commandRun', command, message)
        } catch (e) {
            this.discord.emit('commandError', err, command, message)
            return; // command doesn't exist
        }
    })
}