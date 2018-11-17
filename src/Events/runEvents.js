const fs = require('fs');

module.exports = async (client) => {
    async function loadCommands(dir) {
        fs.readdirSync(dir).forEach(async (file) => {
            if (file.endsWith('.js')) {
                var event = require(dir + file);
                console.log(event)
                if (event.enabled) {
                    client.on(event.listenTo, (...args) => {
                        event.run(client, ...args)
                    })
                }

            } else if (!file.includes('.') || file != '_disabled') await loadCommands(dir + file + '/');
        });
        return;
    }

    await loadCommands(process.cwd() + '/events/');
}