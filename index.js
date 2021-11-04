const PORT = process.env.PORT || 8000;
const env = require('dotenv').config()
const Discord = require("discord.js")
const client = new Discord.client()


client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!` )
})

client.on("message", msg =>{
  if(msg.content === 'ping'){
    msg.reply("pong")
  }
})

client.login(process.env.TOKEN)

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));