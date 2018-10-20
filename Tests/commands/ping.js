var Command = require('../../src').Command
var ping = new Command({
    ownerOnly: true,
    run: (client, message) => {
        message.channel.send('pong')
    }
})
module.exports = ping