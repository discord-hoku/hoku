const fs = require("fs");

module.exports = async (client) => {
    let commands = {};
    let aliases = {};

    function loadCommands(dir) {
        fs.readdirSync(dir).forEach(async file => {
            if (file.endsWith(".js")) {
                var c = require(dir + file)
                commands[c.config.name] = dir + file
                if (c.config.aliases) {
                    c.config.aliases.forEach(ali => {
                        aliases[ali] = dir + file
                    })
                }
            }
            else if (!file.includes(".") || file != "_disabled") await loadCommands(dir + file + "/"); 
        });
        return;
    }

    await loadCommands(process.cwd() + "/" + client.options.commandsDir + '/');

    return {commands, aliases};
}