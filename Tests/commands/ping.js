var Command = require('../../src').Command;
var ping = new Command({
    ownerOnly: true,
    run: (client, message) => {
        message.channel.send('Pong!');
    }
});

module.exports = ping;