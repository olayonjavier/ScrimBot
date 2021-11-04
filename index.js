const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });


client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}!` )
});

client.on("message", msg =>{
  if(msg.content === 'ping'){
    msg.reply("pong");
  }
});

client.login(token);
