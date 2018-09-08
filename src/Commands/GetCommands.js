var {readdirSync} = require('fs')

module.exports = (Client) => {

    var cmds = []

    readdirSync(process.cwd() + '/' + Client.opts.commandsDir).forEach(f => {
        var cmd = require(process.cwd() + '/' + Client.opts.commandsDir + '/' + f)
        cmds.push(cmd)
    })

    return cmds
}