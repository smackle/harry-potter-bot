require("dotenv").config();

const Discord = require("discord.js")
const { Client } = require("discord.js");
// const fetch = require("node-fetch");
const client = new Client();
const PREFIX = "m.";
// let nerds = require('nerds');
// const harryPotterSpells = require('harry-potter-spells')
const talkedRecently = new Set();    

const artists =[];


client.on("ready", () =>{
    client.user.setActivity('Get Ready!')
 console.log("Music Bot is online!")
    });
client.on("warn", console.warn);
client.on("error", console.error);

client.on("message", async message => {
    if (message.author.bot || !message.guild) return;
    if (message.content.indexOf(PREFIX) !== 0) return;

    const args = message.content.slice(PREFIX.length).trim().split(" ");
    const cmd = args.shift().toLowerCase();

    if (cmd === "ping") return message.channel.send(`Pong! \`${client.ws.ping}ms\``);

    if(message.channel.id == "845606633547366440" || message.channel.id =='550371111377043466'){
    if(cmd === "artist" || cmd === "a") {

        if(message.member.roles.cache.some(role => role.name === 'Retry'))
        {
            const { guild } = message
        
            const randomartist = artists[Math.floor(Math.random() * artists.length)];
    
            message.reply("Hmm. So you are retrying. I see. You are **"+randomartist+"** now."); 
            if (!message.guild.me.hasPermission('MANAGE_NICKNAMES')) return message.channel.send('I don\'t have permission to change your nickname!');
         message.member.setNickname(randomartist.replace('changeNick ', ''));  
      }
    
     else{

        if (talkedRecently.has(message.author.id)) {
            message.reply("You gotta wait to use this command again chief. Ask a mod if you really really wanna change it.");
      } 
      else {
        
        const { guild } = message
        
        const randomartist = artists[Math.floor(Math.random() * artists.length)];

        replylist = [`Oh my. You are **${randomartist}**.`,
        `Damn son. You are **${randomartist}**.`,
        `Looks like you are **${randomartist}** now.`,
        `Well well well. It's **${randomartist}** yall.`,
        `Hot damn. you got **${randomartist}**.`    
    ]
    const randomreply = replylist[Math.floor(Math.random() * replylist.length)];

        message.reply(randomreply);  
        if (!message.guild.me.hasPermission('MANAGE_NICKNAMES')) return message.channel.send('I don\'t have permission to change your nickname!');
         message.member.setNickname(randomartist.replace('changeNick ', '')); 
        
        talkedRecently.add(message.author.id);
        setTimeout(() => {
            talkedRecently.delete(message.author.id);
        }, 43200000);
    }

        }

    }

    }
    else 
    message.channel.send('Move to <#845606633547366440>')




if(cmd == "servers"){
    if (message.author.id=='511234972602859521') {
        bot.guilds.cache.forEach((guild) => {
            message.channel.send(" - " + guild.name + " - " + guild.id + " - " + guild.memberCount + " - ");
            })
        }
}
})

client.login(process.env.token);
