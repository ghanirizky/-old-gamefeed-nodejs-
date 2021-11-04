require('dotenv').config();
const {DISCORD_BOT_TOKEN, FILE_CRYPTO_LIST} = require('./common/constant')
const {game3rb, freegames, crypto} = require('./controller')
const {createFile,readFile} = require('./helpers/')
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});


client.on('ready', async () => {
    console.log(`${client.user.tag} has logged in.`)
    const channelGame3rb = client.channels.cache.get('881639659577425950');
    const channelFreeGames = client.channels.cache.get('882283760215818251');
    const channelCrypto =  client.channels.cache.get('905782025565388840');

    await crypto.getList(channelCrypto)

    setInterval(async() => {
        await crypto.getList(channelCrypto)
        await game3rb.createMessage(channelGame3rb)
        await freegames.createMessage(channelFreeGames)
    }, 600000)
})

client.on('messageCreate', async msg => {
    //#LIMIT OF CRYPTOLIST
    if (msg.content.startsWith("g!climit")) {
        const content = msg.content.split(" ")[1]
        if(!isNaN(content)){
            if(content > 100 || content < 3){
                msg.reply('***The valid number to list the crypto list are [3 - 100]***')
            }else{
                const data = await readFile(FILE_CRYPTO_LIST)
                data.limit = Number(content)
                await createFile(FILE_CRYPTO_LIST, data)
                msg.reply(`Success set crypto list limit to ***${content}***`)
            }
        }
    }
    
    //# DELETE MESSAGE COMMAND
    else if(msg.content.startsWith("g!prune")){
        const content = msg.content.split(" ")[1]
        if(!isNaN(content)){
            if(content > 100 || content < 0){
                msg.reply('The valid number to delete message is [1 - 100]')
            }else{
                const tempChannel = client.channels.cache.get(msg.channelId);
                tempChannel.bulkDelete(content)
            }
        }
    }

    //#CURRENCY OF CRYPTOLIST
    else if(msg.content.startsWith("g!curr")){
        const content = msg.content.split(" ")[1]

        if(!content.match("IDR") && !content.match("USD")){
            msg.reply('***The available currency are [IDR, USD]***')
        }else{
            const data = await readFile(FILE_CRYPTO_LIST)
            data.currency = content
            console.log(data)
            await createFile(FILE_CRYPTO_LIST, data)
            msg.reply(`Success set crypto list currency to ***${content}***`)
        }
        
    }
});



client.login(DISCORD_BOT_TOKEN)



