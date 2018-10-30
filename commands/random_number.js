const Discord = require('discord.js');


exports.run = (client, message) => {
        message.channel.startTyping();
        message.channel.stopTyping();
        var RandomNumber = Math.floor(Math.random() * 100);
        message.channel.sendMessage(":repeat: Your random number is " +"**"+ RandomNumber+"**")
        message.channel.stopTyping();
}