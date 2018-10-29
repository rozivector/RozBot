const commando = require('discord.js-commando');

class sayCommand extends commando.Command 
{ 
    constructor(client)
    {
        super(client,{
            name: 'say',
            group: 'simple',
            memberName: 'say',
            description: 'say repeat from user message'
        });
    }

    async run(message, args){};

};
module.exports = sayCommand;
