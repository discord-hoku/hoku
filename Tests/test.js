var hoku = require('../src/index')

var client = new hoku.Client('NDg4MDQzMzUzNjc4NTQ0ODk2.DnZk2g.T3L1QOlL49oA2Cpi98h5b3KmzRk', { // stop leaking the token
    prefix: 'h!',
    commandsDir: 'Tests/commands', // default is "commands"
    owners: ['408953935223717898'], // your user id
    messages: {
      //  ownerOnly: (command, message) => 'Sorry, the command `' + 'command.config.name' + '` can be triggered only by the owners of the bot!'
    }
})

client.login()