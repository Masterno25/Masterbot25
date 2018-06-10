const Discord = require('discord.js')
const client = new Discord.Client()
const bot = new Discord.Client();
require("opusscript");

client.on('message', message => {
  // If the message is "ping"
  if (message.content === 'ping') {
    // Send "pong" to the same channel
    message.channel.send('pong');
  }
});

if(message.content.startsWith("devtime!sondage")){
  if(message.member.hasPermission("BAN_MEMBERS")) {

let args = message.content.split(" ").slice(1);
let thingToEcho = args.join(" ")
var embed = new Discord.RichEmbed()
    .setDescription('Sondage')
  .addField(thingToEcho, "Répondre avec :white_check_mark: ou :x:")
  .setColor("0xB40404")
  .setTimestamp()
message.channel.sendEmbed(embed)
.then(function (message){
  message.react("?")
  message.react("?")
}).catch(function(){
  
});
message.delete()
}else{
return message.reply("Tu n'as pas la permission.")
  }
}

/**
 * Represents a game that is part of a user's presence.
 */
class Game {
  constructor(data) {
    /**
     * The name of the game being played
     * @type {string}
     */
    this.name = data.name;
  }
}

bot.on('message', message => {
  if (message.content === 'Quel est le meilleur pokemon ?') {
    message.reply('Rototaupe le dieu !')
  }
})

bot.on('message', message => {
  if (message.content === '!reload') {
    client.destroy()
  }
})

bot.on('message', message => {
  if (message.content === '!reload') {
    console.log("Je me reload!")
  }
})

// NOTE: INTRODUCED IN VERSION 11.3 AND REPLACES setGame
client.on("ready", () => {
  client.user.setActivity({game: {name: 'C est un test', type: 0}});
});

bot.login(process.env.)
