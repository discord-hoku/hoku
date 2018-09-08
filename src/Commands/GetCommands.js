/*const fs = require('fs')

module.exports = (Client) => {

    var cmds = []

    fs.readdirSync(process.cwd() + '/' + Client.opts.commandsDir).forEach(f => {
        var cmd = require(process.cwd() + '/' + Client.opts.commandsDir + '/' + f)
        cmds.push(cmd)
    })

    return cmds
}*/

const fs = require("fs");

module.exports = async (client) => {
    let commands = {};

    async function loadCommands(dir) {
        /*await fs.readdir(dir, (err, files) => {
            if (err) throw err;

            files.forEach(file => {
                if (file.endsWith(".js")) commands[file.replace(".js", "")] = dir + file; // it's a .js file/command
                else if (!file.includes(".") || file != "_disabled") await loadCommands(dir + file + "/"); // it's a directory/category
            });
        })*/

        fs.readdirSync(dir).forEach(file => {
            if (file.endsWith(".js")) commands[file.replace(".js", "")] = dir + file; // it's a .js file/command
            else if (!file.includes(".") || file != "_disabled") await loadCommands(dir + file + "/"); // it's a directory/category
        });

        return;
    }

    await loadCommands(process.cwd() + "/" + client.opts.commandsDir);

    return commands;
}

/*

    let commands = {};

    async function loadCommands(dir) {
        fs.readdir(dir, (err, files) => {
            if (err) throw err;

            files.forEach(file => {
                if (file.endsWith(".js")) {
                    let commandConfig = require(dir + file).config;
                    if (commandConfig && typeof commandConfig == 'array') commands[file.replace(".js", "")] = commandConfig;
                    else commands[file.replace(".js", "")] = {};
                    
                    commands[file.replace(".js", "")].path = dir + file;

                    if (commands[file.replace(".js", "")].aliases) {
                        commands[file.replace(".js", "")].aliases.forEach(alias => {})
                    }
                } else if (!file.includes(".") && file != "_disabled") await loadCommands(dir + file + "/")
            })
        })
    }
*/