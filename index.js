require("dotenv").config();

const Discord = require("discord.js")
const { Client } = require("discord.js");
// const fetch = require("node-fetch");
const client = new Client();
const PREFIX = "-";

const talkedRecently = new Set();    

const artists =[];


client.on("ready", () =>{
    client.user.setActivity('Get Ready!')
 console.log("Event Bot is online!")
    });
client.on("warn", console.warn);
client.on("error", console.error);

client.on("message", async message => {
    if (message.author.bot || !message.guild) return;
    if (message.content.indexOf(PREFIX) !== 0) return;

    const args = message.content.slice(PREFIX.length).trim().split(" ");
    const cmd = args.shift().toLowerCase();

    marvelarray= [
        "Wolverine",
        "Spider-Man",
        "Thor",
        "Iron Man",
        "Hulk",
        "Captain America",
        "Daredevil",
        "Punisher",
        "Deadpool",
        "Mr. Fantastic",
        "Nick Fury",
        "Professor X",
        "Colossus",
        "Bucky Barnes",
        "Doctor Strange",
        "Jean Grey",
        "Elektra",
        "She-Hulk",
        "Black Panther",
        "Hawkeye",
        "Scarlet Witch",
        "Cable",
        "Hank Pym",
        "Moon Knight",
        "War Machine",
        "Carol Danvers",
        "Quicksilver",
        "Vision",
        "Black Widow",
        "Falcon",
        "Shang-Chi",
        "Adam Warlock",
        "Jessica Jones",
        "Hulk",
        "Banshee",
        "Harry Osborn",
        "Aunt May",
        "Valkyrie",
        "M",
        "Drax",
        "Watcher",
        "Rocket Raccoon",
        "Ant-Man",
        "Medusa",
        "Eros",
        "Star-Lord",
        "Uncle Ben",
        "Miles Morales",
        "Iron Man",
        "Gwen Stacy",
        "Mantis",
        "Yelena Belova",
        "Gamora",
        "Groot",
        "Ikaris",
        "Magneto",
        "Loki",
        "Okoye",
        "Pepper Potts",
        "Sersi",
        "Thanos",
        "Thor",
        "Ajak",
        "Ancient One",
        "Kate Bishop",
        "Peggy Carter",
        "Ego",
        "Jane Foster",
        "Agatha Harkness",
        "Heimdall",
        "Hela",
        "Maria Hill",
        "Happy Hogan",
        "Kingo",
        "Korg",
        "Kevin Feige",
        "Ned",
        "Makkari",
        "Malekith",
        "Ebony Maw",
        "M'Baku",
        "MJ",
        "Mobius",
        "Karl Mordo",
        "Killmonger",
        "Odin",
        "Yondu",
        "Ultron",
        "Wasp",
        "Jimmy Woo",
        "Zemo",
        "Jarwis",
        "Shuri",
        "Mystique",
        "Apocalypse",
        "Venom",
        "Vulture",
        "Norman Osborn",
        "Green Goblin",
        "Doctor Octopus",
        "Electro",
        "Mysterio",
        "Human Spider",
        "KingPin",
        "Red Skull"
        
    ]




    if (cmd === "ping") return message.channel.send(`Pong! \`${client.ws.ping}ms\``);

    if (cmd === "help") return message.channel.send("Type -marvel to choose a marvel character.") 

    // if(cmd === 'pair')
    // {
    //     const members = message.guild.roles.cache.get('851770390539665408').members.map(m=>m.user.id);
    //     const randommember1 = members[Math.floor(Math.random() * members.length)];
    //     //const randommember2 = members[Math.floor(Math.random() * members.length)];
        
    //     console.log(`<@${randommember1}>`)

    // //     replylist = [`**${randommember1}** and **${message.author.id}**.`,
    // //     `Damn son. You are **${randomartist}**.`,
    // //     `Looks like you are **${randomartist}** now.`,
    // //     `Well well well. It's **${randomartist}** yall.`,
    // //     `Hot damn. you got **${randomartist}**.`    
    // // ]
    //     message.channel.send(`<@${message.author.id}> and <@${randommember1}> will be a pair for the Movie Discussion.`)
    
    // }


    if(message.channel.id == "845606633547366440" || message.channel.id =='550371111377043466'){
    if(cmd === "marvel" || cmd === "marvelchar") {

       


        if(message.member.roles.cache.some(role => role.name === 'Retry'))
        {
            const { guild } = message
        
            const randomchar = marvelarray[Math.floor(Math.random() * marvelarray.length)];
    
            message.reply("Hmm. So you are retrying. I see. You are **"+randomchar+"** now."); 
            if (!message.guild.me.hasPermission('MANAGE_NICKNAMES')) return message.channel.send('I don\'t have permission to change your nickname!');
         message.member.setNickname(randomchar.replace('changeNick ', ''));  
      }
    
     else{

        if (talkedRecently.has(message.author.id)) {
            message.reply("You gotta wait for a day :)");
      } 
      else {
        
        const { guild } = message
        
        const randomchar = marvelarray[Math.floor(Math.random() * marvelarray.length)];

        replylist = [`You have been chosen as **${randomchar}**.`,
        `You are **${randomchar}**.`,
        `lol, you are **${randomchar}** now.`,
        `The bot chose **${randomchar}** for you.`,
        `Looks like we got a **${randomchar}** here.`    
    ]
    const randomreply = replylist[Math.floor(Math.random() * replylist.length)];

        message.reply(randomreply);  

        if (message.author.id != "511234972602859521")
        message.member.setNickname(randomchar.replace('changeNick ', '')); 
        
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
