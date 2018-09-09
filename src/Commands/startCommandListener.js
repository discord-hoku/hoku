const getCommands = require('./GetCommands.js');

module.exports = async function (client) {
    var cmds = await getCommands(client);
    let commands = cmds.commands
    let aliases = cmds.aliases

    client.discord.on('message', async message => {

        if (message.author.bot) return;

        let msg = message.content;
        let content = message.content.slice(client.options.prefix.length).split(" ")
        let args = content.slice(1)
        let command = content[0]

        if (!(msg.startsWith(client.options.prefix) || msg.match(`^<@!?${client.discord.user.id}> `))) return;
        if (msg.match(`^<@!?${client.discord.user.id}> `)) command = args.shift();

        let cmd
        if (command in commands) cmd = require(commands[command])
        else if (command in aliases) cmd = require(aliases[command])
        else return 0;
        
        try {
            cmd.run(client, message, args);
        } catch (e) {
            console.log(e)
        }
    })
}