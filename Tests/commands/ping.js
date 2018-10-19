var Command = require('../../src').Command
var ping = new Command({
    run: (client, message) => {
        message.channel.send('pong')
    }
})
module.exports = ping