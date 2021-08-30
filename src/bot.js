require('dotenv').config();
const constant = require('./common/constant')
const {game3rb} = require('./controller')
const {createEmbed, getGameDetail} = require('./helpers')

const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const postFeed = async(channel) => {
    const data = await game3rb.getLatestFeed()
    console.log("Checking new feed...")
    
    if(data.length){
        for(const item of data){
            const gameDetail = getGameDetail(item.content)
            const embedData = createEmbed(item.title, item.link, "Game3rb", "https://www.game3rb.com", item.content, item.categories.join(","), item.isoDate, gameDetail)
            channel.send({ embeds: [embedData] });
        }
    }else{
        console.log("There's no new feed...")
    }
    console.log("======================")
}

client.on('ready', () => {
    console.log(`${client.user.tag} has logged in.`)
    const channel = client.channels.cache.get('881639659577425950');
    postFeed(channel)
    setInterval(async() => {
        postFeed(channel)
    }, 600000)

})

client.login(constant.DISCORD_BOT_TOKEN)



