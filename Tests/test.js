var hoku = require('../src/index')

var client = new hoku.Client('NDg4MDQzMzUzNjc4NTQ0ODk2.DnhCtw.Mtftr-Sh1hmWIIIV_zc8gh9eTc4', { // stop leaking the token
    prefix: 'h!', // will respond only to mention
    commandsDir: 'Tests/commands', // default is "commands"
    owners: ['408953935223717898'], // your user id
    messages: {
      //  ownerOnly: (command, message) => 'Sorry, the command `' + 'command.config.name' + '` can be triggered only by the owners of the bot!'
    }
})

client.login()