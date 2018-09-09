module.exports.run = function (client, message, args) {
    message.channel.send('Pong')
}

module.exports.config = {
    aliases: ["hello", "pong"],
    name: 'ping'
}

/*module.exports.help = {
    name: "ping"
}*/