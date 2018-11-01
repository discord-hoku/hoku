var Hoku = require('../src/index');

var client = new Hoku.Client('NDM1NzQyNzg3NDU1OTQyNjc2.Dq5ZOw.oUbiYArgBtEb--a-VkWK2HUHEsw', { // Client token,
  prefix: 'h!', // If prefix is not provided, it will respond only to mention.
  commandsDir: 'Tests/commands', // Default commands directory name is "commands"
  owners: [], // your user id
  messages: {
    //  ownerOnly: (command, message) => 'Sorry, the command `' + 'command.config.name' + '` can be triggered only by the owners of the bot!'
  }
});

client.connect();