var GetCommands = require('./GetCommands')

module.exports = async (Client) => {
    var commands = GetCommands(Client)
    console.log(commands)
    Client.DiscordClient.on('message', (msg) => {
        if (msg.author.bot) return;

        console.log(msg.content)
    })
}