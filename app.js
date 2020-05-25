const Discord = require('discord.js');
const client = new Discord.Client();
const messages = require("./mesajlar/nasilsin");
const sozler =require("./sozler/sozler");
const haddin = require("./haddin/haddin")
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === 'Beyim') {
        msg.reply(`Hoşgeldin Gardaşım!`);

    }
    else if (msg.content === 'Nasılsın Beyim') {
        msg.reply(messages[Math.floor(Math.random() * messages.length)]);
    }
    else if(msg.content==="Beyim bir şey diyesin"){
        msg.reply(sozler[Math.floor(Math.random() * sozler.length)]);
    }
    else if (msg.content.startsWith('Haddini aşmayasın')) {
        const user = msg.mentions.users.first();
        // If we have a user mentioned
        if (user) {
            // Now we get the member from the user
            const member = msg.guild.member(user);
            // If the member is in the guild
            if (member) {
                msg.reply(`${haddin[Math.floor(Math.random() * haddin.length)]} ${user}`);
            }
        }
    }
    else if(msg.content==='Beyim Medet'){
        msg.reply('Beyim')
        msg.reply('Nasılsın Beyim')
        msg.reply('Beyim bir şey diyesin')
        msg.reply('Haddini aşmayasın @user')

    }
});

client.login('token');
