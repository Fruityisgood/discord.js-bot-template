const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '>'
const fs = require('fs');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`); 
    client.commands.set(command.name, command);
}


client.on('ready', async () => {
    console.log('Bot is online!')

    let statuses = [
        `Status 1`,
        `Status 2`,
        `Status 3`,
        `Status 4`,
        `Status 5`,
    ]

    setInterval(function () {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        client.user.setActivity(status, {
            type: "PLAYING",
        })
    }, 4000)
})
 
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'help'){
        client.commands.get('help').execute(message, args);
    } 
});

client.login('bot_token')
