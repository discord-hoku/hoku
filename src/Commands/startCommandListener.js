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
            if (require(commands[command])) if (require(commands[command]).config) if (require(commands[command]).config.ownerOnly && !client.options.owners.includes(message.author.id)) return message.channel.send(client.options.messages.ownerOnly ? client.options.messages.ownerOnly(message, cmd) : 'You can\'t run the command!')
            require(commands[command]).run(client, message, args);
        } catch (e) {
            if (require(comands[command])) console.error(e); // command failed
            return; // command doesn't exist
        }
    })
}