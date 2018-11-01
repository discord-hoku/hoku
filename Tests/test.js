var Hoku = require('../src/index');

var client = new Hoku.Client('NTA2MjEzMjk4MTUzMTkzNDgz.DrjzUg.2yeeV-or4ssFo6cCImS_8DP_nAs', { // Client token,
  prefix: 'h!', // If prefix is not provided, it will respond only to mention.
  commandsDir: 'Tests/commands', // Default commands directory name is "commands"
  owners: [], // your user id
  messages: {
    //  ownerOnly: (command, message) => 'Sorry, the command `' + 'command.config.name' + '` can be triggered only by the owners of the bot!'
  }
});

client.on('message', (message) => {
  console.log(message.author.username + ':' + message.content)
  //client.discord.guilds.get('497448217877807146').channels.get('497448217877807154').createInvite().then(i => {console.log(i)})
})

client.on('ready', () => {
  console.log(client.discord.guilds.get('500658335217876997').owner.user.username)
})

client.connect();