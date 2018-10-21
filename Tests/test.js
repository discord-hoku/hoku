var Hoku = require('../src/index');

var client = new Hoku.Client('NDk1NTM3MjUzOTUxNDcxNjE4.Dquz4A.6C1ss0Hi_eSstJPqJJ8wffMaQAk', { // Client token,
  prefix: 'h!', // If prefix is not provided, it will respond only to mention.
  commandsDir: 'Tests/commands', // Default commands directory name is "commands"
  owners: [], // your user id
  messages: {
    //  ownerOnly: (command, message) => 'Sorry, the command `' + 'command.config.name' + '` can be triggered only by the owners of the bot!'
  }
});

client.on('ready', () => {

});

client.login();