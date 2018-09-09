/*var GetCommands = require('./GetCommands')

module.exports = async (Client) => {
    var commands = GetCommands(Client)
    Client.DiscordClient.on('message', (message) => {
        if (message.author.bot) return;
        
        const args = message.content.slice(Client.opts.prefix.length).trim().split(" ");
        const command = args.shift().toLowerCase();
        
        commands.forEach(c => {
            if (c.config.name === command) {
                c.run(message, args, Client.DiscordClient)
            }
        })
        
    })
}*/

const getCommands = require('./getCommands.js');

module.exports = async function(client) {
    const commands = await getCommands(client);
    client.discord.on('message', async message => {

        if (message.author.bot) return;
    
        let msg = message.content;
        let content = message.content.slice(client.opts.prefix.length).split(" ")
        let args = content.slice(1)
        let command = content[0]
    
        if (!(msg.startsWith(client.opts.prefix.length) || msg.match(`^<@!?${client.discord.user.id}> `))) return; // if it doesnt start with the prefix or mention, do not process it as a command
        if (msg.match(`^<@!?${client.discord.user.id}> `)) command = args.shift();
        
        if (commands[command]) try { require(commands[command]).run(client, message, args); } catch(e) { console.log(e) }
    })
}