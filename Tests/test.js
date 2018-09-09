var hoku = require('../src/index')
var client = new hoku.Client('YOUR TOKEN', {
    prefix: 'h!',
    commandsDir: 'Tests/commands', // default is "commands"
    owners: ['454072114492866560'] // your user id
})

client.login()