module.exports = {
    name: 'help',
    description: "Get help!",
    execute(message, args){
        message.channel.send('Make more files in commands to add cool commands. Change this command to something that fits you by going to help.js');
    }
}
