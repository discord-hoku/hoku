var hoku = require('../src/index')

var client = new hoku.Client('NDk1NTM3MjUzOTUxNDcxNjE4.Dquz4A.6C1ss0Hi_eSstJPqJJ8wffMaQAk', { // stop leaking the token
    prefix: 'h!', // if the there isn't the prefix, it will respond only to mention
    commandsDir: 'Tests/commands', // default is "commands"
    owners: [], // your user id
    messages: {
      //  ownerOnly: (command, message) => 'Sorry, the command `' + 'command.config.name' + '` can be triggered only by the owners of the bot!'
    }
})

client.on('ready', () => {
  
})

client.login()