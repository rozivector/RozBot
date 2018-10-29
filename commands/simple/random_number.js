const commando = require('discord.js-commando');

class RandomNumberCommand extends commando.Command 
{ 
    constructor(client)
    {
        super(client,{
            name: 'number',
            group: 'simple',
            memberName: 'number',
            description: 'Generate a random number'
        });
    }

    async run(message, args)
    {
        message.channel.startTyping();
        message.channel.stopTyping();
        var RandomNumber = Math.floor(Math.random() * 100);
        message.channel.sendMessage(":repeat: Your random number is " +"**"+ RandomNumber+"**")
        message.channel.stopTyping(true);
    }
}

module.exports = RandomNumberCommand;