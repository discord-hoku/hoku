var hoku = require('../src/index')
var Client = new hoku.Client('NDg4MDQzMzUzNjc4NTQ0ODk2.DnWdVA.zKRFFRaSMi25mfjG8Pktn76WoPw', {
    prefix: 'h!',
    commandsDir: 'Tests/commands',
    owners: ['454072114492866560'],
    categories: ['basic']
})

Client.login()