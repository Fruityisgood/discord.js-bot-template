module.exports = {
    name: 'ping',
    description: "Get help!",
    execute(message, args){
        message.channel.send('pong!');
    }
}
