let Parser = require('rss-parser');
let parser = new Parser();


exports.parseRssToJson = async(url) => {
    const feed = await parser.parseURL(url);
    return feed
}