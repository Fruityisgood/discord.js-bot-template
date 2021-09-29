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
        `Among Us`,
        `with Fruity`,
        `some gibberish`,
        `Discord`,
        `Modded Among Us`,
    ]

    setInterval(function () {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        client.user.setActivity(status, {
            type: "PLAYING",
        })
    }, 4000)
})


client.login('ODU3MDY5MDQ0OTYzMDgyMjUw.YNKNvw.oKHxnzFw0tLn0N50pVZsPXFkmcc')