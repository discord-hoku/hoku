var Hoku = require('../src/index');

var client = new Hoku.Client({ // Client token,
  prefix: 'h!'
});

client.on('ready', () => {
  console.log('hi')
})

client.login('NDIxMjgxODE5MDUzMjYwODEz.Dshr0g.kvuTZu4P4E8w6ar--rJ8aF1ecDU');