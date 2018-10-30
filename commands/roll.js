const Discord = require('discord.js');


exports.run = (client, message) => {
        message.channel.startTyping();
        message.channel.stopTyping();
        var diceRoll = Math.floor(Math.random() * 6) + 1;
        message.channel.sendMessage(":game_die: Your dice landed on " +"**"+diceRoll+"**")
        message.channel.stopTyping();

}
