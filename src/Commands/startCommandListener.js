var GetCommands = require('./GetCommands')

module.exports = async (Client) => {
    var commands = GetCommands(Client)
    console.log(commands)
    Client.DiscordClient.on('message', (message) => {
        if (message.author.bot) return;
        
        const args = message.content.slice(Client.opts.prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        
        commands.forEach(c => {
            if (c.config.name === command) {
                c.run(message, args, Client.DiscordClient)
            }
        })
        
    })
}