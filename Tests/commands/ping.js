var PingCommand = {
    run: (client, message) => {
        message.channel.send('hi!')
      //  throw 'HI!'
    }
}

module.exports = PingCommand