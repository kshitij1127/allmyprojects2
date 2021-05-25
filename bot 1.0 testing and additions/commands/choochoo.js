
const replies = ['hi ! how are you ?', 'hello !' , 'hey there ! whats up ?','how are you doing ?'];

module.exports = function(msg, args) {
  const index = Math.floor(Math.random() * replies.length);
  msg.channel.send(replies[index]);
};
