require("dotenv").config();

const Discord = require("discord.js")
const { Client } = require("discord.js");
// const fetch = require("node-fetch");
const client = new Client();
const PREFIX = "m.";
// let nerds = require('nerds');
// const harryPotterSpells = require('harry-potter-spells')
const talkedRecently = new Set();    

const artists =[
        `Britney Spears`,
        `Bon Jovi`,
        `Queen`,
        `Bob Dylan`,
        `Tupac`,
        `Kuman Sanu`,
        `Mohammed Rafi`,
        `R. D. Burman`,
        `Backstreet Boys`,
        `Simon & Garfunkel`,
        `Kishore Kumar`,
        `Guns N' Roses`,
        `Taylor Swift`,
        `Eminem`,
        `Shreya Ghoshal`,
        `Shania Twain`,
        `Fleetwood Mac`,
        `Lil Nas X`,
        `Bruce Springsteen`,
        `The Rolling Stones`,
        `Aerosmith`,
        `Pink Floyd`,
        `AC/DC`,
        `Elton John`,
        `Michael Jackson`,
        `Led Zeppelin`,
        `Elvis Presley`,
        `The Beatles`,
        `Rihanna`,
        `Paul McCartney`,
        `Usher`,
        `Drake`,
        `Katy Perry`,
        `Bruno Mars`,
        `Maroon 5`,
        `Beyoncé`,
        `P!nk`,
        `Chris Brown`,
        `Justin Timberlake`,
        `Paul Anka`,
        `Kanye West`,
        `Jay-Z`,
        `Justin Bieber`,
        `50 Cent`,
        `J. Cole`,
        `Billie Eilish`,
        `Dua Lipa`,
        `Harry Styles`,
        `Selena Gomez`,
        `The Weeknd,`,
        `Camila Cabello`,
        `Halsey`,
        `Imagine Dragons`,
        `Post Malone`,
        `Zayn Malik`,
        `Charlie Puth`,
        `Nick Jonas`,
        `Niall Horan`,
        `Khalid`,
        `Nicki Minaj`,
        `Liam Payne`,
        `Lizzo`,
        `Cardi B`,
        `Conan Gray`,
        `Lana Del Rey`,
        `Charli XCX`,
        `Carly Rae Jepsen`,
        `Joji`,
        `Jon Bellion`,
        `Gorillaz`,
        `MGMT`,
        `Arctic Monkeys`,
        `Julian Casablancas`,
        `Fabrizio Moretti`,
        `Alex Turner`,
        `Wallows`,
        `Lorde`,
        `Dayglow`,
        `Troye Sivan`,
        `Powfu`,
        `bbno$`,
        `Clairo`,
        `The Neighbourhood`,
        `girl in red`,
        `The 1975`,
        `Jeremy Zucker`,
        `Kid Bloom`,
        `Beach Bunny`,
        `Olivia Rodrigo`,
        `Prateek Kuhad`,
        `Ritviz`,
        `Anuv Jain`,
        `Taba Chake`,
        `The Local Train`,
        `The Indian Ocean`,
        `Nirvana`,
        `Lifafa`,
        `Udbhav`,
        `Himesh Reshamiya`,
        `Piyush Mishra`,
        `RFAK`,
        `Momina Mustehsan`,
        `Ali Sethi`,
        `Tanmaya Bhatnagar`,
        `A.R. Rahman`,
        `Lucky Ali`,
        `Papon`,
        `KK`,
        `The Yellow Diary`,
        `Osho Jain`,
        `Radiohead`,
        `Car Seat Headrest`,
        `Death Grips`,
        `Tame Impala`,
        `6ix9ine`,
        `Eden`,
        `Cage The Elephant`,
        `Neutral Milk Hotel`,
        `5 Seconds of Summer`,
        `Kid Cudi`,
        `Travis Scott`,
        `Hans Zimmer`,
        `Playboi Carti`,
        `Kendrick Lamar`,
        `Lil Uzi Vert`,
        `Kodak Black`,
        `DaBaby`,
        `Blackbear`,
        `Beach House`,
        `XXXTENTACION`,
        `Sufjan Stevens`,
        `BTS`,
        `Labrinth`,
        `John Mayer`,
        `Hozier`,
        `Frank Ocean`,
        `bloodpound`,
        `Falguni Pathak`,
        `Chandrabindoo`,
        `Manoj Tiwari`,
        `Daler Mehndi`,
        `Sidhu Moose Wala`,
        `Khesari Lal Yadav`,
        `Diljit Dosanjh`,
        `Rakhi Sawant`,
        `Anu Malik`,
        `Ishq Bector`,
        `Yo Yo Honey Singh`,
        `Udit Narayan`,
        `Pankaj Udhas`,
        `Bappi Lahiri`,
        `Altaf Raja`,
        `Sonu Nigam`,
        `Dipzet`,
        `Seedhe Maut`,
        `Prabh Deep`,
        `Divine`,
        `Lata Mangeshkar`,
        `Baba Sehgal`,
        ];


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
