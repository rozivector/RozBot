const Discord = require('discord.js');

exports.run = (client, message, comrade) => {
                    let user = message.mentions.users.first() || message.author;
                    message.channel.startTyping();
                    message.channel.stopTyping();
                    let embed = new Discord.RichEmbed()
                    .setDescription(`Here's the avatar: \n[Download](${user.avatarURL})`)
                    .setAuthor(`${user.username}#${user.discriminator}`, client.user.displayAvatarURL)
                    .setImage(user.displayAvatarURL)
                    .setColor('RANDOM')
                    message.channel.sendMessage(embed)
                    message.channel.stopTyping();
                    };
