const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});



client.on('ready', () => {
 client.guilds.get("530707459442999296") 
 console.log('got the guild')

});








client.login(process.env.BOT_TOKEN);
