require('dotenv').config();
const constant = require('./common/constant')
const {game3rb, freegames, crypto} = require('./controller')
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});

client.on('ready', async () => {
    console.log(`${client.user.tag} has logged in.`)
    const channelGame3rb = client.channels.cache.get('881639659577425950');
    const channelFreeGames = client.channels.cache.get('882283760215818251');
    const channelCrypto =  client.channels.cache.get('905782025565388840');
    
    setInterval(async() => {
        await crypto.getList(channelCrypto)
        await game3rb.createMessage(channelGame3rb)
    }, 600000)

    setInterval(async() => {
        await freegames.createMessage(channelFreeGames)
    }, 86400000)
})

client.login(constant.DISCORD_BOT_TOKEN)



