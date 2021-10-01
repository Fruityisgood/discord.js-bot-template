module.exports = {
    name: 'help',
    description: "Get help!",
    execute(message, args){
        message.channel.send('Run >tutorial for a tutorial on how to use this.');
    }
}
