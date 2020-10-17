const Discord = require('discord.js')

const client = new Discord.Client();

const config = require('./config.json');

const prefix = config.prefix

client.once ('ready', () => {
    console.log('Bot go brrrr')
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        message.channel.send('pong!');
   }else if(command === 'rick'){
        message.channel.send('https://media.giphy.com/media/g7GKcSzwQfugw/giphy.gif');
   }else if (command === 'p'){
       message.channel.send('https://tenor.com/view/nick-young-question-mark-huh-what-confused-gif-4995479')
   }
});

client.login(config.token);