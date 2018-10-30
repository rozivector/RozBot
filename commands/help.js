const Discord = require('discord.js');

exports.run = (client, message, comrade) => {

message.channel.startTyping();
        message.channel.sendMessage("**RozBot v 1.0 - Help** :blue_book: \nOfficial First release - 31th  October 2018 \n \n`r!help`, show help commands \n`r!owner`. show the bot owner's name \n`r!contact`. contact or report our bot \n`r!avatar`, show your avatar \n`r!avatar @Username`, show the avatar someone  \n`r!userinfo`, show your user information \n`r!userinfo @Username`, show the user information someone \n`r!serverinfo`, Get the server information \n`r!link [URL] [Description]`, set embed for your link without preview. \n`r!rabbit`, get a cute random rabbit images. \n`r!cream`, get a random image of cream the rabbit. \n`r!hack` or `r!heck`, Start playing fun hack game. \n`r!reverse (your text)`, send a reverse text message \n`r!meter (characteristic)`, test a skill of characteristic that you have in percent % \n`r!guild`, how many I have joined the server. \n`r!ping`, count the ping how long bot respond to the discord \n`r!flip`, play with flip a coin \n`r!say (your text)`, Repeats what you just typed \n`r!roll`, roll a dice \n`r!number`, generate your random number (range: 0-100) \n`r!support`, Support My bot development \n`r!invite`, Invite bot into your server \n`r!hello` or `r!hi`, say hello \n`owo`, it's furry! \n\nReady to serve! :wink:");
        message.channel.stopTyping(true);

}