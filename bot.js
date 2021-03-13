const Discord = require('discord.js');
const bot = new Discord.Client();
const { token, prefix } = require('./ayarlar.json')
const fs = require('fs');

bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./komutlar').filter(file => file.endsWith('.js'))

for(const file of commandFiles){
    const command = require(`./komutlar/${file}`)
    bot.commands.set(command.name, command)

}

bot.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot ) return;

    const args = message.content.slice(prefix.length).trim().split(" ")
    const command = args.shift().toLocaleLowerCase();

    if(!bot.commands.has(command)) return;

    try{
        bot.commands.get(command).execute(message, args)
    } catch(error){
    console.error(error)
    }
})

bot.on("ready", () =>{
    console.log(` ${bot.user.username} Adlı Bot Aktif`)
    bot.user.setActivity('Gelişme Aşamasında!!');
})

bot.on("message", (message) =>{
    if(message.content.toLocaleLowerCase() === 'sa')  {
        message.channel.send('Aleyküm Selam!');
    }
})

bot.on("message", (message) =>{
    if(message.content.toLocaleLowerCase() === 'selamun aleyküm')  {
        message.channel.send('Aleyküm Selam!');
    }
})

bot.on("message", (message) =>{
    if(message.content.toLocaleLowerCase() === 'selamun aleykum')  {
        message.channel.send('Aleyküm Selam!');
    }
})

bot.on("message", (message) =>{
    if(message.content.toLocaleLowerCase() === 'naber')  {
        message.channel.send('İyidir Senden?');
    }
})

bot.on("message", (message) =>{
    if(message.content.toLocaleLowerCase() === 'iyi')  {
        message.channel.send('Allah İyilik Versin');
    }
})

bot.on("message", (message) =>{
    if(message.content.toLocaleLowerCase() === 'iyidir')  {
        message.channel.send('Allah İyilik Versin');
    }
})


bot.on("message", (message) =>{
    if(message.content.toLocaleLowerCase() === 'sanada')  {
        message.channel.send('Eyw');
    }
})


bot.on('message', message =>{
    const args = message.content.toLocaleLowerCase().split(" ");

    switch(args[0]){
        case 'nah':
            const embed = new Discord.MessageEmbed()
            .setAuthor('Hediye', 'http://sicanzi.com/images/nah.png', 'http://sicanzi.com')
            .setTitle('NAH')
            .setURL('http://sicanzi.com')
            .setColor('#7208db')
            .setDescription(`<@${message.author.id}> BUYUR`)
            message.channel.send(embed)
        break;
    }
})

bot.on('message', message =>{
    const args = message.content.toLocaleLowerCase().split(" ");

    switch(args[0]){
        case '!avatar':
            const embed = new Discord.MessageEmbed()
            .setAuthor('Avatar')
            .setTitle('Avatar\'ın')
            .setColor('#7208db')
            .setDescription(`<@${message.author.id}> BUYUR`)
            .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
        break;
    }
})

bot.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.id === '819850076343894039')
    channel.send(`${member} Server\'a Hoşgeldin İyi Eğlenceler!`)
})

bot.on('guildMemberRemove', member => {
    const channel = member.guild.channels.cache.find(ch => ch.id === '819850076343894039')
    channel.send(`${member} Server\'dan Çıktı Tekrar Görüşmek Üzere!`)
})


bot.login(token);