module.exports = {
    name: "balance",
    aliases: ["bal", "balance"],
    permissions: [],
    description: "Check you balance",
    execute(message, args, cmd, client, discord, profileData) {
      message.channel.send(`Your wallet bal is ${profileData.coins}, your bank bal is ${profileData.bank}`);
    },
  };
  