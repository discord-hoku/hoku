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
            try {
                commands[command].run(client, message, args);
            } catch (e) {
                var c = []
                client.options.owners.forEach(o => {
                    s.push(client.users.get(String(o)).username + '#' + client.users.get(String(o)).discriminator)
                })
                message.channel.send('The command trigerred an error: `' + e + '`' + '\nContact ' + c.join(', ') + ' and report this error!')
            }
        } catch (e) {
            return; // command doesn't exist
        }
    })
}