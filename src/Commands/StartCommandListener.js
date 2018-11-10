const getCommands = require('./GetCommands');

module.exports = async function (client) {
    var commands = await getCommands(client);

    client.on('message', async (message) => {

        if (message.author.bot) return undefined;
        let content = message.content.slice(client.options.prefix.length).split(' ');
        let args = content.slice(1);
        let command = content[0];
        if (!(message.content.startsWith(client.options.prefix) || message.content.match(`^<@!?${client.user.id}> `))) return;
        if (message.content.match(`^<@!?${client.user.id}> `)) command = args.shift();

        if (command in commands) {
            var cmd = commands[command];
            if (cmd.ownerOnly && !client.options.owners.includes(message.author.id)) return 0;
            if (message.channel.nsfw !== true && cmd.nsfw == true) return 0;
            if (message.channel.type == 'dm' && cmd.guildOnly == true) return 0;
            if (message.channel.type !== 'dm' && cmd.dmOnly == true) return 0;

            try {
                commands[command].run(client, message, args);
            } catch (e) {
                var c = [];
                client.options.owners.forEach((owner) => {
                    c.push(client.users.get(String(owner)).username + '#' + client.users.get(String(owner)).discriminator)
                });
                message.channel.send('The command trigerred an error: `' + e + '`' + '\nContact ' + c.join(', ') + ' and report this error.');
            }
        }
    });
}