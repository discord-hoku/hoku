const fs = require("fs");

module.exports = async (client) => {
    let commands = {};

    async function loadCommands(dir) {
        fs.readdirSync(dir).forEach(async file => {
            if (file.endsWith(".js")) {
                var commandFile = require(dir + file)
                commands[file.replace(".js", "")] = dir + file
                if (commandFile.config) if (commandFile.config.aliases) {
                    commandFile.config.aliases.forEach(alias => {
                        commands[alias] = dir + file
                    })
                }
            }
            else if (!file.includes(".") || file != "_disabled") await loadCommands(dir + file + "/"); 
        });
        return;
    }

    await loadCommands(process.cwd() + "/" + client.options.commandsDir + '/');

    return commands;
}