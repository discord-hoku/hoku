var PingCommand = {
    // name: ping because i didn't set the name proprety so it takes the file name as name
    run: (client, message) => {
        message.channel.send('sal')
    }
}

module.exports = PingCommand