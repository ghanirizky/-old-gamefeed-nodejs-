const {getLatestFeed, getGameDetail, createEmbed} = require('../../helpers')
const {URL_FEED_GAME3RB, FILE_GAME3RB} = require('../../common/constant')

exports.createMessage = async (channel) => {
    const data = await getLatestFeed(URL_FEED_GAME3RB, FILE_GAME3RB)
    console.log(`Checking [${URL_FEED_GAME3RB}] feed...`)
    
    if(data.length){
        for(const item of data){
            const gameDetail = getGameDetail(item.content)
            const embedData = createEmbed(item.title, item.link, "Game3rb", "https://www.game3rb.com", item.content, item.categories.join(","), item.isoDate, gameDetail)
            channel.send({ embeds: [embedData] });
        }
    }else{
        console.log(`There's no new feed... [${URL_FEED_GAME3RB}]`)
    }
    console.log("======================")
}
