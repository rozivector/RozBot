const Discord = require('discord.js'); // Importing discord.js & require method

const client = new Discord.Client();
const prefix = 'r!';
const printahs = '<@481305515092213763> ';

global.servers = {};

let gamery = [' | r!help | V 1.0'];


client.on('ready', () => {
    client.user.setStatus('idle') // Can be 'online', 'idle', 'dnd', or 'invisible'
    setInterval(function() 
    {
        let statuses = ['Justice' + gamery, 'luckily' + gamery, 'Made with Love' + gamery, 'Rozi Vector#9416' + gamery, 'Serve you' + gamery, 'Sniper' + gamery, 'Love Rabbit' + gamery, 'Cool Stuff' + gamery, '24/7 Support' + gamery, `in ${client.guilds.size} servers`+ gamery];
        let status = statuses[Math.floor(Math.random()*statuses.length)];
        client.user.setPresence({
            game: {
                name: status,
                type: 0 // type of presence: 0 for playing game, 1 for live on twitch, 2 for listening to, 3 for watching
                }
        ,});
        client.user.setPresence({
        activity: {
            name: status,
            type: 0 // type of presence: 0 for playing game, 1 for live on twitch, 2 for listening to, 3 for watching
            }
            ,});
    }, 7000)

});

//aktifitas pesan bot
client.on('message', function(message){

    if(message.author.bot || !message.guild) return;
    if(message.content == 'hello ' + printahs || message.content == 'hi ' + printahs)
    {
        message.channel.startTyping();
        message.channel.sendMessage('Hi there ' + message.author + ", nice to see you! :smile: ");
        message.channel.stopTyping(true);
    };
    

    {
    
    if(message.content == prefix + 'owner' || message.content == printahs + 'owner')
    {
        message.channel.startTyping();
        let embed = new Discord.RichEmbed()
        .setAuthor("BOT OWNER", client.user.displayAvatarURL)
        .addField(':robot: My owner is :smile:', 'Rozi Vector#9416' , true)
        .setColor('#FFD800')
        .setDescription(":flag_id: **OwO** Made with discord.js :rabbit2:")
        message.channel.sendMessage(embed);
        message.channel.stopTyping(true);
    }
    };

    //if(message.content == prefix+'testers')
    //{message.channel.send("text (can be blank it)", {
            //file: "https://4.bp.blogspot.com/-LQGpRKEEghA/W9chDLzcW5I/AAAAAAAABSA/vtiitM-yazwjogWfYHkplUBD0M7-TeHyACLcBGAs/s1600/coin_heads.png"
        // })}; //Send an image message


    if(message.content == printahs + 'help')
    {
        message.channel.startTyping();
        message.channel.sendMessage("**RozBot v 1.0 - Help** :blue_book: \nOfficial First release - 31th October 2018 \n \n`r!help`, show help commands \n`r!owner`. show the bot owner's name \n`r!contact`. contact or report our bot \n`r!avatar`, show your avatar \n`r!avatar @Username`, show the avatar someone  \n`r!userinfo`, show your user information \n`r!userinfo @Username`, show the user information someone \n`r!serverinfo`, Get the server information \n`r!link [URL] [Description]`, set embed for your link without preview. \n`r!rabbit`, get a cute random rabbit images. \n`r!cream`, get a random image of cream the rabbit. \n`r!hack` or `r!heck`, Start playing fun hack game. \n`r!reverse (your text)`, send a reverse text message \n`r!meter (characteristic)`, test a skill of characteristic that you have in percent % \n`r!guild`, how many I have joined the server. \n`r!ping`, count the ping how long bot respond to the discord \n`r!flip`, play with flip a coin \n`r!say (your text)`, Repeats what you just typed \n`r!roll`, roll a dice \n`r!number`, generate your random number (range: 0-100) \n`r!support`, Support My bot development \n`r!invite`, Invite bot into your server \n`r!hello` or `r!hi`, say hello \n`owo`, it's furry! \n\nReady to serve! :wink:");
        message.channel.stopTyping(true);
    };



    if(message.content == printahs + 'hi' || message.content == prefix + 'hi' || message.content == prefix + 'hello' || message.content == printahs + 'hello')
    {
        message.channel.startTyping();
        message.channel.sendMessage('Hi there ' + message.author + ", nice to see you! :smile: ")
        message.channel.stopTyping(true);
    };


    if(message.content == 'owo')
    {
        message.channel.sendMessage("What's this? OwO")
    };
    if(message.content == 'OwO')
    {
        message.channel.sendMessage("What's this? OwO")
    };
    if(message.content == 'oWO')
    {
        message.channel.sendMessage("What's this? OwO")
    };
    if(message.content == 'owO')
    {
        message.channel.sendMessage("What's this? OwO")
    };
    if(message.content == 'OWo')
    {
        message.channel.sendMessage("What's this? OwO")
    };
    if(message.content == 'Owo')
    {
        message.channel.sendMessage("What's this? OwO")
    };
    if(message.content == 'oWo')
    {
        message.channel.sendMessage("What's this? OwO")
    };
    if(message.content == 'OWO')
    {
        message.channel.sendMessage("What's this? OwO")
    };



    if(message.content == prefix+'support' || message.content == prefix+'contact' || message.content == prefix+'invite')
                    {
                        message.channel.startTyping();
                        let embed = new Discord.RichEmbed()
                        .setAuthor('Support our bot!', client.user.displayAvatarURL)
                        .setDescription("Here's the special perks:")
                        .setColor('#FFD800')
                        .addField(':arrow_forward: Invite bot', `[Click here](${'https://discordapp.com/oauth2/authorize?client_id=481305515092213763&permissions=371776&scope=bot'})`, true)
                        .addField(':earth_asia: Join my server', `[Click here](${'http://discord.gg/rKjFGps'})`, true)
                        .addField(':pencil: Contact us', `[Click here](${'https://goo.gl/forms/0km4ybWuVWLQ83T33'})`, true)
                        .addField('<:YouTube:506769226766483457> My Channel', `[Click here](${'https://www.youtube.com/user/rozivector1999'})`, true)
                        .addField('<:twitch:506770621498392594> My Streaming', `[Click here](${'https://www.twitch.tv/rozivector'})`, true)
                        .addField(':earth_asia: My Website', `[Click here](${'http://rozivector.blogspot.com'})`, true)
                        .setFooter("Now support 24/7 online bot! Made with discord.js")
                        message.channel.sendMessage(embed)
                        message.channel.stopTyping(true);
                    };

        {

            let comrade = message.content.slice(prefix.length).trim().split(' ');
            let user = message.mentions.users.first();
            var member = message.guild.member(user)

    
                

                const ColorMap = 
                {
                    'online' : '#00FF00',
                    'idle' : '#FF8000',
                    'streaming' : '#A901DB',
                    'dnd' : '#FF0000',
                    'offline' : '#848484'
                };
                const ngebot = 
                {
                    'true' : 'Bot User',
                    'false' : 'Regular User'
                };
                const StatusMap = 
                {
                    'online' : `<:online:504813930313547776>`,
                    'idle' : `<:idle:504813930321805333>`,
                    'streaming' : `<:streaming:504813930309222400>`,
                    'offline' : `<:offline:504813929780871191>`,
                    'dnd' : `<:dnd:504813930246438912>`

                };

                const StatusText = 
                {
                    'online' : 'Online',
                    'idle' : 'Idle',
                    'dnd' : 'Do Not Disturb',
                    'offline' : 'Offline',
                    'streaming' : 'Streaming'
                } 

                const verlev = 
                {
                    '0' : 'None',
                    '1' : 'Low',
                    '2' : 'Medium',
                    '3' : 'High',
                    '4' : 'Very High'

                }
                if(message.content == prefix+'userinfo') 
                {
                    message.channel.startTyping();
                    let user = message.author;
                    var member = message.guild.member(user) 
                    {message.channel.sendMessage()};
                    let embed = new Discord.RichEmbed()
                    .setDescription("Here is the information: ")
                    .setAuthor(`${user.username}#${user.discriminator}`, user.displayAvatarURL)
                    .setThumbnail(user.displayAvatarURL)
                    .addField('Username', user.username, true)
                    .addField('ID', user.id, true)
                    .addField('Discriminator', `#${user.discriminator}`, true)
                    .addField('Nickname', `${member.nickname ? '' + member.nickname + '' : 'None'}`, true)
                    .addField('Registered', new Date(user.createdAt).toISOString().replace(/T/, ' ').replace(/\..+/, ''), true)
                    .addField('Joined', new Date(member.joinedAt).toISOString().replace(/T/, ' ').replace(/\..+/, ''), true)
                    .addField('Status', StatusMap[user.presence.status]+' '+StatusText[user.presence.status], true)
                    .addField('Member Type', ngebot[user.bot], true)
                    .setColor(ColorMap[user.presence.status])
                    .setThumbnail(user.displayAvatarURL)
                    message.channel.sendMessage(embed)
                    message.channel.stopTyping(true);
                };

                if(message.content == prefix + 'serverinfo')
                {
                    message.channel.startTyping();
                    let embed = new Discord.RichEmbed()
                    .setAuthor(`${message.guild.name}`, `${message.guild.iconURL ? message.guild.iconURL : ""}`)
                    .setDescription('Here is the server information: ')
                    .setThumbnail(`${message.guild.iconURL ? message.guild.iconURL : ""}`)
                    .addField('Server Name: ', message.guild.name, true)
                    .addField('Server ID: ', message.guild.id, true)
                    .addField('Server Owner: ', `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, true)
                    .addField('Server Region: ', `${message.guild.region}`, true)
                    .addField('Members: ', `${message.guild.members.filter(mb => mb.user.bot === false).size} users & ${message.guild.members.filter(mb => mb.user.bot === true).size} bots`, true)
                    .addField('Channels: ', `${message.guild.channels.findAll("type", "text").length} text & ${message.guild.channels.findAll("type", "voice").length} voice`, true)
                    .addField('Server Roles: ', `${message.guild.roles.size}`, true)
                    .addField('Server Emojis: ', `${message.guild.emojis.size}`, true)
                    .addField('Verification Level: ', verlev[`${message.guild.verificationLevel}`], true)
                    .addField('Server Created: ', new Date(message.guild.createdAt).toISOString().replace(/T/, ' ').replace(/\..+/, ''), true)
                    .setColor('#FFD800')
                    message.channel.sendMessage(embed)
                    message.channel.stopTyping(true);

                };


                if(message.content == prefix+'guild') 
                {
                    message.channel.startTyping();
                    message.channel.sendMessage("I'm in " + `${client.guilds.size}` + " servers!")
                    message.channel.stopTyping(true);
                };
                

                if(message.content == prefix+'userinfo '+member) 
                {
                    message.channel.startTyping();
                    let embed = new Discord.RichEmbed()
                    .setDescription("Here is the information: ")
                    .setAuthor(`${user.username}#${user.discriminator}`, user.displayAvatarURL)
                    .setThumbnail(user.displayAvatarURL)
                    .addField('Username', user.username, true)
                    .addField('ID', user.id, true)
                    .addField('Discriminator', `#${user.discriminator}`, true)
                    .addField('Nickname', `${member.nickname ? '' + member.nickname + '' : 'None'}`, true)
                    .addField('Registered', new Date(user.createdAt).toISOString().replace(/T/, ' ').replace(/\..+/, ''), true)
                    .addField('Joined', new Date(member.joinedAt).toISOString().replace(/T/, ' ').replace(/\..+/, ''), true)
                    .addField('Status', StatusMap[user.presence.status]+' '+StatusText[user.presence.status], true)
                    .addField('Member Type', ngebot[user.bot], true)
                    .setColor(ColorMap[user.presence.status])
                    .setThumbnail(user.displayAvatarURL)
                    message.channel.sendMessage(embed)
                    message.channel.stopTyping(true);};
                ;
        
                if(!message.content.startsWith(prefix)) return;
                let command = message.content.split(" ")[0];
                command = command.slice(prefix.length);

                let args = message.content.split(" ").slice(1);
                if(command == 'say'){
                    message.channel.startTyping();
                    let say = args.join(' ');
                    if (!say) 
                    return message.channel.send("**[Error]** I tried send an empty message!");
                    message.delete();
                    let embed = new Discord.RichEmbed()
                    .setDescription(say)
                    .setColor('RANDOM')
                    message.channel.send(embed)
                    message.channel.stopTyping(true);
                };

                var flip = require('flip-text');
                if(command == 'reverse'){
                    message.channel.startTyping();
                    let textrev = args.join(' ');
                    if (!textrev) 
                    return message.channel.send("**[Error]** Send some text to reverse it, following the command!");
                    message.channel.send(flip(textrev));
                    message.channel.stopTyping(true);
                };



                    const prog0 = ["https://3.bp.blogspot.com/-QA7UEGzkPcg/W9MdOKOhmgI/AAAAAAAABP4/qOLJMMpSJ2EV6CUONr103j1PX55A0LbUACLcBGAs/s320/progress-overall-0.png"];
                    const prog6 = ["https://3.bp.blogspot.com/-D9FMS2Fg_IE/W9MdQurF_TI/AAAAAAAABQc/iiBNTvO0BcgdTiOoYWpHrJN5ItIYC5nNgCLcBGAs/s320/progress-overall-6.png"];
                    const prog13 = ["https://2.bp.blogspot.com/-zx7fvepKuSA/W9MdOq_JK9I/AAAAAAAABQA/M7m22ENfyesqRdZgdVINKKX1OtI6j-meACLcBGAs/s320/progress-overall-13.png"];
                    const prog20 = ["https://4.bp.blogspot.com/-TBDuwaXeTRE/W9MdPO-u3BI/AAAAAAAABQE/dwBh3NeSdIM-mIKj7LrJzoe5ktbMuzfcgCLcBGAs/s320/progress-overall-20.png"];
                    const prog26 = ["https://1.bp.blogspot.com/-ZHrPmA0NSX8/W9MdPBtKsDI/AAAAAAAABQI/7YIAZO1yKykQ_-L_rv4KxdHs9AkFoN_xgCLcBGAs/s320/progress-overall-26.png"];
                    const prog33 = ["https://1.bp.blogspot.com/-Kff7N7X-eAg/W9MdPkli4cI/AAAAAAAABQM/H3qYqAqr96QgTLNze4yqgsghPCphsekyQCLcBGAs/s320/progress-overall-33.png"];
                    const prog40 = ["https://2.bp.blogspot.com/-hOSzKis7WJA/W9MdP7GJX3I/AAAAAAAABQQ/NLiqtFPkeeoUJMaJI0SzGy1IraSyXvnnwCLcBGAs/s320/progress-overall-40.png"];
                    const prog46 = ["https://2.bp.blogspot.com/-zDPArdclwkU/W9MdQCVabkI/AAAAAAAABQU/gC8vhEiP5gYf4Mf1JWlq7SQVM7IoCkaowCLcBGAs/s320/progress-overall-46.png"];
                    const prog53 = ["https://1.bp.blogspot.com/-0c4hzCYT_BM/W9MdQtWUUkI/AAAAAAAABQY/cprhbBuS_zYTzsJ9SRinSgbmGjozZ3-HgCLcBGAs/s320/progress-overall-53.png"];
                    const prog60 = ["https://4.bp.blogspot.com/-6L0ao2_7ivQ/W9MdRJd2hfI/AAAAAAAABQg/-zTTiWnvJEs_FQ-2dkeG0ftqPT8y7X8gwCLcBGAs/s320/progress-overall-60.png"];
                    const prog66 = ["https://2.bp.blogspot.com/-XG9KznYkIr8/W9MdRkAwELI/AAAAAAAABQo/72hAfzp8C2gvmnYO7yc4agJVEMMZTbvFQCLcBGAs/s320/progress-overall-66.png"];
                    const prog73 = ["https://4.bp.blogspot.com/-3iuNQV3pT9Y/W9MdRttpEbI/AAAAAAAABQk/TkDV-GzRd54eELiUhB_z5luUJbsv445igCLcBGAs/s320/progress-overall-73.png"];
                    const prog80 = ["https://2.bp.blogspot.com/-gQ8Xd55zZOU/W9MdSBSTZUI/AAAAAAAABQs/smywwOOWfugAujVVpy8bnab1izPxTsbugCLcBGAs/s320/progress-overall-80.png"];
                    const prog86 = ["https://4.bp.blogspot.com/-rBt56d0bAX8/W9MdSwASRKI/AAAAAAAABQ0/0fvITDNf7TIAy1L6_Fiz4hSFa35CP57DACLcBGAs/s320/progress-overall-86.png"];
                    const prog93 = ["https://2.bp.blogspot.com/-vvqlchr-Nek/W9MdS3jFBuI/AAAAAAAABQw/H7W4xeev6yYBbf5Q00l6Wh1q6adpW28VgCLcBGAs/s320/progress-overall-93.png"];
                    const prog100 = ["https://4.bp.blogspot.com/-i8iCi4e_8Vs/W9MdOD9HqQI/AAAAAAAABP8/_WHw87kkUUUwS298dAk_jukFNluKD5LuACLcBGAs/s320/progress-overall-100.png"];
 
                    var mat = Math.floor(Math.random() * 100);
                    var met = Math.floor(Math.random() * 9);
                    if(mat == '0' && met == '0')
                    {var nproc1 = prog0;}
                    else
                    if(mat >= '0' && mat <= '6')
                    {var nproc1 = prog6;}
                    else
                    if(mat > '6' && mat <= '13')
                    {var nproc1 = prog13;}
                    else
                    if(mat > '13' && mat <= '20')
                    {var nproc1 = prog20;}
                    else
                    if(mat > '20' && mat <= '26')
                    {var nproc1 = prog26;}
                    else
                    if(mat > '26' && mat <= '33')
                    {var nproc1 = prog33;}
                    else
                    if(mat > '33' && mat <= '40')
                    {var nproc1 = prog40;}
                    else
                    if(mat > '40' && mat <= '46')
                    {var nproc1 = prog46;}
                    else
                    if(mat > '46' && mat <= '53')
                    {var nproc1 = prog53;}
                    else
                    if(mat > '53' && mat <= '60')
                    {var nproc1 = prog60;}
                    else
                    if(mat > '60' && mat <= '66')
                    {var nproc1 = prog66;}
                    else
                    if(mat > '66' && mat <= '73')
                    {var nproc1 = prog73;}
                    else
                    if(mat > '73' && mat <= '80')
                    {var nproc1 = prog80;}
                    else
                    if(mat > '80' && mat <= '86')
                    {var nproc1 = prog86;}
                    else
                    if(mat > '86' && mat <= '99')
                    {var nproc1 = prog93;}
                    else
                    if(mat == '100')
                    {
                        met = '0';
                        var nproc1 = prog100;
                    }

                    if(!message.content.startsWith(prefix)) return;
                    let spow = message.content.split(" ")[0];
                    spow = spow.slice(prefix.length);
                    let spawn = message.content.split(" ").slice(1);
                    if(spow == 'meter'){
                        message.channel.startTyping();
                        let metry = spawn.join(' ');
                        if (!metry) 
                        return message.channel.send("**[Error]** Enter your characteristic following the command!");
                        let embed = new Discord.RichEmbed()
                        .setDescription(":arrow_forward: " + metry + ": " + mat +"." + met + "%")
                        .setColor('#FFD800')
                        .setImage(`${nproc1}`)
                        message.channel.send(embed)
                        message.channel.stopTyping();
                    };
    

        
                {
                    if(!message.content.startsWith(prefix)) return;
                    let somok = message.content.split(" ")[0];
                    somok = somok.slice(prefix.length);
                    let dem = message.content.split(" ").slice(1);
                    let dar = message.content.split(" ").slice(2);
                    if(somok == 'link'){
                        message.channel.startTyping();
                        let link = dem[0];
                        let desc = dar.join(" ");
                        if (!link) 
                        return message.channel.send("**[Error]** Type the valid URL following the command!");
                        if (!desc)
                        desc = "Link:";
                        let user = message.author;
                        message.delete();
                        let embed = new Discord.RichEmbed()
                        .setAuthor(`🔗 ${desc}`)
                        .setDescription(`${link}`)
                        .setColor('RANDOM')
                        .setFooter(`${user.username}#${user.discriminator}`, user.displayAvatarURL)
                        .setTimestamp();
                        message.channel.send(embed)
                        message.channel.stopTyping(true);
                    };

                };
                message.channel.stopTyping();

                try{
                    let perintah = require(`./commands/${command}.js`);
                    perintah.run(client, message, comrade);
                    }
                    catch (e)
                    {console.log(e.stack)}
                    finally 
                    {
                        console.log(command)
                    }
                



                    message.channel.stopTyping(true);
     }});






client.on('ready',function(){
    console.log("RozBot is Ready, My Boss!");
});

client.login(process.env.BOT_TOKEN);
