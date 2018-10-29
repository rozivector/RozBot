const commando = require('discord.js-commando');

class DiceRollCommand extends commando.Command 
{ 
    constructor(client)
    {
        super(client,{
            name: 'roll',
            group: 'simple',
            memberName: 'roll',
            description: 'Rolls a six sided dice'
        });
    }

    async run(message, args)
    {
        message.channel.startTyping();
        message.channel.stopTyping();
        var diceRoll = Math.floor(Math.random() * 6) + 1;
        message.channel.sendMessage(":game_die: Your dice landed on " +"**"+diceRoll+"**")
        message.channel.stopTyping(true);
    }
}

module.exports = DiceRollCommand;