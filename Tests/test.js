var hoku = require('../src/index')

var client = new hoku.Client('NDkzMDcxNDk0MDYzMzI1MTk0.DofpXg.Cd_SkeNnGxkqtKy_9hXyhQUgT-k', { // stop leaking the token
    prefix: 'h!', // if the there isn't the prefix, it will respond only to mention
    commandsDir: 'Tests/commands', // default is "commands"
    owners: ['408953935223717898'], // your user id
    messages: {
      //  ownerOnly: (command, message) => 'Sorry, the command `' + 'command.config.name' + '` can be triggered only by the owners of the bot!'
    }
})

client.on('ready', () => {
  console.log('hi')
})

client.login()