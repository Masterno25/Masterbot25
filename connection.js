const Discord = require('discord.js')
const bot = new Discord.Client()
const token = 'NDQ4NTM2MDQyMTYxODMxOTM3.De3OKA.gDGtxIGShFmal2OKwuk9b6RBkTE'
const client = new Discord.Client() ;

client.on('message', message => {
  // If the message is "ping"
  if (message.content === 'ping') {
    // Send "pong" to the same channel
    message.channel.send('pong');
  }
});

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
  if (message.content === 'Quel est le meilleur pokemon?') {
    message.reply('Rototaupe le dieu {ayy}  !')
  }
})



bot.login('NDQ4NTM2MDQyMTYxODMxOTM3.De3OKA.gDGtxIGShFmal2OKwuk9b6RBkTE')