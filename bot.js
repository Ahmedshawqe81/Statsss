const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});



client.on('ready', () => {
 client.role.get('name' , 'TOP') 
 console.log('got the Role')

});








client.login(process.env.BOT_TOKEN);
