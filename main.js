const Discord = require('discord.js');
const client = new Discord.Client();



client.once('ready', () => {
    client.user.setActivity("For your DMs 👀",{
        type:"WATCHING",
    })
    console.log('Support Bot is Online!');
});


// THIS MUST BE THE WAY
client.login(process.env.BOT_TOKEN);
