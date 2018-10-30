const {RichEmbed} = require('discord.js');

exports.run = (client, message) => {


message.channel.startTyping();
        message.channel.stopTyping();
        
        var chance = Math.floor(Math.random() * 2);
        if(chance == 0)
        {
            const embed = new RichEmbed()
            .setDescription(":taurus: Your coin landed on Heads!")
            .setColor('#FAFF00')
            .setImage("https://4.bp.blogspot.com/-LQGpRKEEghA/W9chDLzcW5I/AAAAAAAABSA/vtiitM-yazwjogWfYHkplUBD0M7-TeHyACLcBGAs/s1600/coin_heads.png")
            message.channel.sendMessage(embed);
        }
        else
        {
            embed = new RichEmbed()
            .setDescription(":sagittarius: Your coin landed on Tails!")
            .setColor('#FAFF00')
            .setImage("https://3.bp.blogspot.com/-ZJzZQJXFPkc/W9chDAifa_I/AAAAAAAABSE/GptuKSJBOoIdoUNxZIyeSbhx2TXDW3aDwCLcBGAs/s1600/coin_tails.png")
            message.channel.sendMessage(embed);
        }
        message.channel.stopTyping();
    }