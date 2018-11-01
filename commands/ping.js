const {RichEmbed} = require('discord.js');
exports.run = (client, message) => {

    message.channel.startTyping();
	let start = Date.now(); 
	message.channel.sendMessage(':hourglass_flowing_sand: ').then(message => { 
   	 let diff = (Date.now() - start); 
   	 let API = (client.ping).toFixed(2)
        
        let embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .addField("Pong!", "Your response to bot" + `\`${diff}ms\``, true)
        .addField("Response to API", `\`${API}ms\``, true)
        message.edit(embed);
      
    });
  }
    message.channel.stopTyping();
    

}
