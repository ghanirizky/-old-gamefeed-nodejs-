const {parseRssToJson, readFile, createFile} = require('../../helpers')

exports.getLatestFeed = async () => {
    const rssData = await parseRssToJson('https://www.game3rb.com/feed/rss')
    const feed = rssData.items
    if(feed){
        const data = await readFile('last_update.json')
        if(data.last_date != feed[0].isoDate){
            const lastIndex = feed.findIndex(e => e.isoDate == data.last_date)
            const newestFeed = feed.slice(0, lastIndex)
            await createFile('last_update.json', {last_date: feed[0].isoDate})
            
            return newestFeed.sort(function(a,b){
                return new Date(a.isoDate) - new Date(b.isoDate);
            });
        }

        return []
    }
}
