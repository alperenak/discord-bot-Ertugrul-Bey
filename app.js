const Discord = require('discord.js');
var fs = require("fs")
const client = new Discord.Client();
const messages = require("./mesajlar/nasilsin");
const sozler = require("./sozler/sozler");
const haddin = require("./haddin/haddin")
const data = fs.readFileSync("./data/data.json")
function fetchData(user) {
    const killingUser = {
        "killing": user
    }
    fs.writeFileSync("./data/data.json", JSON.stringify(killingUser), (err) => console.log(err))
}
client.on('ready', () => {

    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {

    if (msg.content === 'Beyim') {
        msg.reply(`Hoşgeldin Gardaşım!`);
    }
    // else if(message.author.id == "ID of the user"){
    //     message.delete()
    // }
    else if (msg.author.id===JSON.parse(data).killing.id){
        msg.delete()
    }
    else if (msg.content==='Affet Beyim'){
        msg.channel.send('Gayrı bir daha olmasın!')
        fetchData("")
    }
    else if (msg.content.startsWith('Gayrı senin dilini kesme vakti geldi')) {
        const user = msg.mentions.users.first();
        const auther = msg.author
        // const fer=JSON.stringify(userKill) 
        // // If we have a user mentioned
        if (user) {
            //     // Now we get the member from the user
            const member = msg.guild.member(user);
            const member1 = msg.guild.member(auther)
            //     // If the member is in the guild
            if (member && user.id !== "714313117383000087" && user.id !== "691410803001393212") {
                msg.channel.send(`BURADA DEVLET BENİM!${user}`, {
                    files: [
                        "./sesler/devlet.mp3",
                    ]
                }).then(()=>{
                    fetchData(user)

                })
            }
            else {
                msg.channel.send(`Asıl senin dilini kesme vakti geldi! ${auther} Unutma! Burada Devlet Benim !`, {
                    files: [
                        "./sesler/devlet.mp3",
                    ]
                }).then(()=>{
                    fetchData(auther)
                });
            }
        }
    }
    else if (msg.content === 'Toy Kurulsun') {
        msg.channel.send(JSON.parse(data))
    }
    else if (msg.content === 'Menzil Nereyedir?') {
        msg.channel.send(JSON.parse(data))
    }
    else if (msg.content === 'Toy Kurulsun') {
        msg.channel.send(JSON.parse(data))
    }
    else if (msg.content === 'Toy Kurulsun') {
        msg.channel.send(JSON.parse(data))
    }

    else if (msg.content === 'Nasılsın Beyim') {
        msg.reply(messages[Math.floor(Math.random() * messages.length)]);
    }
    else if (msg.content === "Beyim bir şey diyesin") {
        msg.reply(sozler[Math.floor(Math.random() * sozler.length)]);
    }
    else if (msg.content.startsWith('Haddini aşmayasın')) {
        const user = msg.mentions.users.first();
        // If we have a user mentioned
        if (user) {
            // Now we get the member from the user
            const member = msg.guild.member(user);
            // If the member is in the guild
            if (member && user.id !== "714313117383000087" && user.id !== "691410803001393212") {
                msg.channel.send(`${haddin[Math.floor(Math.random() * haddin.length)]} ${user}`);
            }
            else {
                msg.channel.send(`Asıl sen haddini aşmayasın ! ${msg.author} Burada devlet benim`)
            }
            var role = member.guild.roles.cache.find(role => role.name === "ben cezalıyım");

            member.roles.add(role);
        }
    }
    else if (msg.content.startsWith('Cezanı Ertuğrul Bey kesecek')) {
        const user = msg.mentions.users.first();
        const auther = msg.author
        // If we have a user mentioned
        if (user) {
            // Now we get the member from the user
            const member = msg.guild.member(user);
            const member1 = msg.guild.member(auther)
            // If the member is in the guild
            if (member && user.id !== "714313117383000087" && user.id !== "691410803001393212") {
                var role = member.guild.roles.cache.find(role => role.name === "ben cezalıyım");
                member.roles.add(role);
                msg.channel.send(`Sana buyruğumu tekrarlatma demiştim ${user}. Buranın Uç Beyi benim, burada nizamda benim! törede benim!`)
                msg.channel.send(`${user}===${role}`)
            }
            else {
                console.log(member1)
                var role = member1.guild.roles.cache.find(role => role.name === "ben cezalıyım");
                member1.roles.add(role);
                msg.channel.send(`Sana buyruğumu tekrarlatma demiştim ${auther}. Buranın Uç Beyi benim, burada nizamda benim! törede benim!`)
                msg.channel.send(`${auther}===${role}`)
            }
        }
    }



    //     else {
    //         console.log(member1)
    //         var role = member1.guild.roles.cache.find(role => role.name === "ben cezalıyım");
    //         member1.roles.add(role);
    //         msg.channel.send(`Sana buyruğumu tekrarlatma demiştim ${auther}. Buranın Uç Beyi benim, burada nizamda benim! törede benim!`)
    //         msg.channel.send(`${auther}===${role}`)

    //     }

    // msg.channel.send("BURADA DEVLET BENİM!", {
    //     files: [
    //       "./sesler/devlet.mp3",
    //     ]
    //   });   
    else if (msg.content.startsWith('Gardaşım')) {
        const user = msg.mentions.users.first();
        // If we have a user mentioned
        if (user) {
            // Now we get the member from the user
            const member = msg.guild.member(user);
            // If the member is in the guild
            if (member) {
                msg.channel.send(`Maşallah yiğidime ${user}`);
            }
        }
    }
    else if (msg.content.startsWith('Ben Kimim')) {
        const user = msg.mentions.users.first();
        if (user) {
            // Now we get the member from the user
            const member = msg.guild.member(user);
            // If the member is in the guild
            if (member) {
                msg.reply(`Sen ${user.id}`);
            }
        }
    }
    // else if(msg.content==='Burada Devlet Benim'){
    //     var VC=msg.member.voice.channel
    //     if(!VC){
    //         msg.reply('Burada olmaman gerek!')
    //     }
    //     VC.join()
    //     .then(connection => {
    //         const dispatcher = connection.play("./sesler/devlet.mp3")
    //         dispatcher.on("end", end => {VC.leave()});
    //     })
    //     .catch(console.error);
    // }
    else if (msg.content === 'Beyim Medet') {
        msg.reply('Beyim')
        msg.reply('Nasılsın Beyim')
        msg.reply('Beyim bir şey diyesin')
        msg.reply('Haddini aşmayasın @user')

    }
    else if (msg.content === 'Değil mi Beyim?') {
        msg.reply('Haklısın Gardaşım')
    }

});
function sill() {
}

client.login('token');
