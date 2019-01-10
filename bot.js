const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});



client.on('ready', () => {
 client.role.find('name' , 'TOP') 
 console.log('got the Role')

});




client.on("message", message => {
if (message.content.startsWith('!creater')){
message.guild.createRole({name : "Rainbow .", color : "RANDOM"}).then(r => {// Toxic Codes
});




client.login(process.env.BOT_TOKEN);
