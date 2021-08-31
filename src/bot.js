require('dotenv').config();
const constant = require('./common/constant')
const {game3rb, freegames} = require('./controller')


const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready', async () => {
    console.log(`${client.user.tag} has logged in.`)
    const channel = client.channels.cache.get('880697006224470019');

    await game3rb.createMessage(channel)
    await freegames.createMessage(channel)
    setInterval(async() => {
        await game3rb.createMessage(channel)
    }, 600000)

    setInterval(async() => {
        await freegames.createMessage(channel)
    }, 86400000)

})

client.login(constant.DISCORD_BOT_TOKEN)



