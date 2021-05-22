require("dotenv").config();

const Discord = require("discord.js")
const { Client } = require("discord.js");
// const fetch = require("node-fetch");
const client = new Client();
const PREFIX = "hp.";
let nerds = require('nerds');
const harryPotterSpells = require('harry-potter-spells')
const talkedRecently = new Set();    


const hphouse =[
    `Gryffindor`,
    `Hufflepuff`,
    `Ravenclaw`,
    `Slytherin`
];
const hparray =[
    `Whomping Willow`,
    `Cedric Diggory`,
    `Seamus Finnegan`,
    `Cho Chang`,
    `Kreacher the house elf`,
    `Hedwig`,
    `Gilderoy Lockhart`,
    `Fenrir Greyback`,
    `Nagini`,
    `The Sorting Hat`,
    `Severus Snape`,
    `Hermione Granger`,
    `Harry Potter`,
    `Rubeus Hagrid`,
    `Ron Weasley`,
    `Sirius Black`,
    `Albus Dumbledore`,
    `Minerva Mcgonagall`,
    `Tom Riddle/Lord Voldemort`,
    `Bellatrix Lestrange`,
    `Luna Lovegood`,
    `Dolores Jane Umbridge`,
    `Horrace Slughorn`,
    `Draco Malfoy`,
    `Ginny Weasley`,
    `Lucius Malfoy`,
    `Gilderoy Lockhart`,
    `Fred Weasly`,
    `George Weasley`,
    `Remus Lupin`,
    `Dobby the house elf`,
    `Neville Longbottom`,
    `Alastor "Mad Eye" Moody`,
    `Molly Weasley`,
    `Arthur Weasley`,
    `Rita Skeeter`,
    `Sybill Trelawney`,
    `Peter Pettigrew (Wormtail)`,
    `Salazar Slytherin`,
    `Pomona Sprout`,
    `Kingsley Shacklebolt`,
    `Narcissa Malfoy`,
    `Fleur Delecour`,
    `Xenophilius Lovegood`,
    `Moaning Myrtle`,
    `Filius Flitwick`,
    `Aunt Marge`,
    `Nearly Headless Nick`,
    `Gellert Grindelwald`,
    `Dementors`,
    `Buckbeak`
        ];


client.on("ready", () =>{
    client.user.setActivity('HP Event Soon!')
 console.log("HP Bot is online!")
    });
client.on("warn", console.warn);
client.on("error", console.error);

client.on("message", async message => {
    if (message.author.bot || !message.guild) return;
    if (message.content.indexOf(PREFIX) !== 0) return;

    const args = message.content.slice(PREFIX.length).trim().split(" ");
    const cmd = args.shift().toLowerCase();

    if (cmd === "ping") return message.channel.send(`Pong! \`${client.ws.ping}ms\``);


    if(cmd === "name") {

        if(message.member.roles.cache.some(role => role.name === 'Ravenclaw' || role.name === 'Slytherin' || role.name === 'Gryffindor' || role.name === 'Hufflepuff'))
        {
            message.reply('Your house has been assigned. So you cant choose a character anymore. Ask mods for help!')
    }
    else{
        
        const randomname = hparray[Math.floor(Math.random() * hparray.length)];
        //message.reply("as "+randomname);
        if (!message.guild.me.hasPermission('MANAGE_NICKNAMES')) return message.channel.send('I don\'t have permission to change your nickname!');
        message.member.setNickname(randomname.replace('changeNick ', ''));
        message.reply("You are **"+randomname+"**. Nickname changed successfuly. See you soon!");
    }
}

    if(cmd === "house") {

        if(message.member.roles.cache.some(role => role.name === 'Ravenclaw' || role.name === 'Slytherin' || role.name === 'Gryffindor' || role.name === 'Hufflepuff'))
        {
            message.reply('You have been assigned one house already.')
    }
    
    else{
        const { guild } = message
        
        const randomhouse = hphouse[Math.floor(Math.random() * hphouse.length)];

        var role= guild.roles.cache.find(role => role.name === randomhouse);
        message.member.roles.add(role);

        message.reply("You are assigned in **"+randomhouse+"**.");
        if(randomhouse == 'Ravenclaw') message.channel.send('https://tenor.com/view/harry-potter-ravenclaw-flames-logo-seal-gif-5254360')
        if(randomhouse == 'Slytherin') message.channel.send('https://cdn.discordapp.com/attachments/550371111377043466/845600633813204992/463b937ae9dccedb1e807c69406a59cb.gif')
        if(randomhouse == 'Gryffindor') message.channel.send('https://images-ext-2.discordapp.net/external/UvSE64VKq-PYNGfqByX_gmx3be5pGz2qn_AXviBn0-8/%3Fcid%3D73b8f7b18aaf110f780c50d7c4bbe9e1b147a7666be384fc%26rid%3Dgiphy.mp4%26ct%3Dg/https/media2.giphy.com/media/GvMo19TyWuMiQ/giphy.mp4')
        if(randomhouse == 'Hufflepuff') message.channel.send('https://media.giphy.com/media/PMp40oEvNfKve/giphy.gif')
        }

    }

     if(cmd === 'spell'){

        // var parts = message.content.split(" ");
        // var search = args.join(" ")
        // if(!search) {
        //     message.channel.send('Please type a character name with the command too.')        
        //     }

        // if(parts.length > 1) {
        //     search = parts.slice(1, parts.length).join(" "); }
          //   console.log(harryPotterSpells.all)
             const randomspell = harryPotterSpells.all[Math.floor(Math.random() * harryPotterSpells.all.length)];
             console.log(randomspell)
             const embed = new Discord.MessageEmbed()
             .setTitle("Spell: "+randomspell.name)
             .setDescription(`Type: ${randomspell.type}\nEffect: ${randomspell.effect}`)
             message.channel.send(embed)
     }





if(cmd == "servers"){
    if (message.author.id=='511234972602859521') {
        bot.guilds.cache.forEach((guild) => {
            message.channel.send(" - " + guild.name + " - " + guild.id + " - " + guild.memberCount + " - ");
            })
        }
}
})

client.login(process.env.token);
