module.exports = {
    config: {
        enabled: true, // is enabled?
        name: 'ping' //, how to call it?
    }, /*
    help: {
        displayName: 'test' // how to display the command in the help command
    }*/
    run: (message, args, client) => {
        message.channel.send('Pong')
    }

}