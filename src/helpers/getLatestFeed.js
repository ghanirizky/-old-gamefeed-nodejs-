const {parseRssToJson} = require('./parseRssToJson')
const {createFile} = require('./createFile')
const {readFile} = require('./readFile')

exports.getLatestFeed = async (url_feed, file_name) => {
    const rssData = await parseRssToJson(url_feed)
    const feed = rssData.items
    if(feed){
        const data = await readFile(file_name)
        if(data.last_date != feed[0].isoDate){
            let lastIndex = feed.findIndex(e => e.isoDate == data.last_date)
            if(!lastIndex){
                lastIndex = feed.length
            }
            const newestFeed = feed.slice(0, lastIndex)
            await createFile(file_name, {last_date: feed[0].isoDate})

            
            
            return newestFeed.sort(function(a,b){
                return new Date(a.isoDate) - new Date(b.isoDate);
            });
        }

        return []
    }
}
