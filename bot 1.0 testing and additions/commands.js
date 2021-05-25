

const gif = require('./commands/gif.js');
const hibot = require('./commands/choochoo.js');
const reply = require('./commands/reply.js')

const commands = { hibot, gif , reply};

module.exports = async function(msg) {
  if (msg.channel.id == '800271964266430485') {
    let tokens = msg.content.split(' ');
    let command = tokens.shift();
    if (command.charAt(0) === '!') {
      command = command.substring(1);
      commands[command](msg, tokens);
    }
  }
};
