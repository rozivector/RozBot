const commando = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
const { react } = require('discord.js');

class RabbitCommand extends commando.Command 
{ 
    constructor(client)
    {
        super(client,{
            name: 'rabbit',
            group: 'simple',
            memberName: 'rabbit',
            aliases: ['bunny'],
            description: 'Generate a random rabbit images'
        });
    }

    async run(message, args)
    {
        message.channel.startTyping();
        message.channel.stopTyping();
        const rando_imgs = ['https://media.giphy.com/media/b1gX8Em7wEQMM/giphy.gif', 
        'https://media.giphy.com/media/g2n5wagSFzBMk/giphy.gif', 
        'https://media.giphy.com/media/6L2qJUtTizY2I/giphy.gif', 
        'https://media.giphy.com/media/VSiNfsl8VIRIk/giphy.gif', 
        'https://media.giphy.com/media/2IodXMfbcVVrW/giphy.gif', 
        'https://media.giphy.com/media/GHPmyOgFZjR0k/giphy.gif', 
        'https://media.giphy.com/media/8nv5NfqUxWJt6/giphy.gif', 
        'https://media.giphy.com/media/QjOvMZPoiitA4/giphy.gif',
        'https://media.giphy.com/media/v310uFXwypbpK/giphy.gif', 
        'https://media.giphy.com/media/2RhdhRPfQNSRW/giphy.gif', 
        'https://media.giphy.com/media/DNk5EURGRDvTq/giphy.gif', 
        'https://media.giphy.com/media/14tf9peZdntGxO/giphy.gif', 
        'https://media.giphy.com/media/O4t7BBg6dotQA/giphy.gif',
        'https://media.giphy.com/media/aAhfe0O6OWqqY/giphy.gif', 
        'https://media.giphy.com/media/1VKi2xud4qsrS/giphy.gif',
        'https://media.giphy.com/media/871qwDxfSemEE/giphy.gif', 
        'https://media.giphy.com/media/53Bgsan5duLOE/giphy.gif',
        'https://media.giphy.com/media/4qlNG3rt5BC6I/giphy.gif', 
        'https://media.giphy.com/media/dV9CtuI5lvc8E/giphy.gif',
        'https://media1.tenor.com/images/1c136199752f9544ef668110f386e2e0/tenor.gif', 
        'https://2.bp.blogspot.com/-TC3sAFDm3kI/W7nel8tE6bI/AAAAAAAABNc/GYI8ipwBuSwpBiXMIA2GyLR0vx1tQo13gCLcBGAs/s1600/280px-Netherlandwarf.jpg', 
        'https://4.bp.blogspot.com/-dklMq1Zs1ek/W7nem5VXOQI/AAAAAAAABNk/WCONsM2XkYQbnXq4mfZOtl-RzxV0C42owCLcBGAs/s320/1024px-Wild_rabbit_us.jpg', 
        'https://2.bp.blogspot.com/-q5s2s9xDpng/W7nemJk2_YI/AAAAAAAABNg/yz31ncW-cTokWSvpg6eW4T6iJ_h5DvYQgCLcBGAs/s320/MareleAlb.jpg', 
        'https://3.bp.blogspot.com/-uGHy_Ze_Td8/W7nenA9OtKI/AAAAAAAABNo/KRDwpHSeXVkB6N4IzU-KNGPjckJNvD8dwCLcBGAs/s320/mw-860.jpg', 
        'https://4.bp.blogspot.com/-x6sGMPDxDEo/W7nenSxJnkI/AAAAAAAABNs/XDpMzUR3P6YE0Jc4xYm4MNUTkflfYtJkACLcBGAs/s1600/p.jpg'];
        const embed = new RichEmbed()
        .setDescription(':rabbit: Cute time! :smile:' )
        .setAuthor(message.author.username, message.author.displayAvatarURL)
        .setColor('#FAFF00')
        .setImage(rando_imgs[Math.floor(Math.random() * rando_imgs.length)])
    message.embed(embed)
    .then(message => {
    message.react('🥕')});
    message.channel.stopTyping(true);
    }
    
};



module.exports = RabbitCommand;