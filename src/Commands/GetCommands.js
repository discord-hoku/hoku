const fs = require('fs');

module.exports = async (client) => {
    let commands = {};

    async function loadCommands(dir) {
        fs.readdirSync(dir).forEach(async (file) => {
            if (file.endsWith('.js')) {
                var command = require(dir + file);
                if (command.enabled) {
                if (!command.name) command.name = file.replace('.js', '');
                commands[command.name] = command;

                if (command.config)
                    if (command.config.aliases) {
                        command.config.aliases.forEach((alias) => {
                            commands[alias] = dir + file;
                        })
                    }
                }
            } else if (!file.includes('.') || file != '_disabled') await loadCommands(dir + file + '/');
        });
        return;
    }

    await loadCommands(process.cwd() + '/commands/');
    return commands;
}