const {getLatestFeed, createEmbedFreeGames} = require('../../helpers')
const {URL_FEED_FREEGAMES, FILE_FREEGAMES} = require('../../common/constant')

exports.createMessage = async (channel) => {
    const data = await getLatestFeed(URL_FEED_FREEGAMES, FILE_FREEGAMES)
    console.log(`Checking [${URL_FEED_FREEGAMES}] feed...`)
    
    if(data.length){
        for(const item of data){
            const embedData = createEmbedFreeGames(item.title, item.link, "FREE GAMES", item.link, item.contentSnippet, item.pubDate)
            channel.send({ embeds: [embedData] });
        }
    }else{
        console.log(`There's no new feed from ... [${URL_FEED_FREEGAMES}]`)
    }
    console.log("======================")
}
