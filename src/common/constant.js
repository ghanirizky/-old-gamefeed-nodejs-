const path = require('path')
const rootPath = path.resolve(__dirname,'../..')
exports.DISCORD_BOT_TOKEN = process.env.BOT_TOKEN
exports.PATH_FILE = `${rootPath}/${process.env.PATH_FILE}`
exports.PREFIX = process.env.PREFIX
exports.BITLY_TOKEN = process.env.BITLY_TOKEN
exports.LIVECOIN_KEY = process.env.LIVECOIN_KEY

exports.LOGO_IMAGE = "https://ik.imagekit.io/0rdat3peflx/logo_gamefeed_mB3iNRvPE?ik-sdk-version=javascript-1.4.3&updatedAt=1649057990823"
exports.PATH_IMAGE = "https://imgur.com/t2r1Lqk.gif"
exports.PATH_IMAGE_FREEGAMES = "https://miro.medium.com/max/1400/1*mqfBmF0tvz-f4vcykjiMxQ.jpeg"

exports.URL_FEED_GAME3RB = 'https://www.game3rb.com/feed/'
exports.FILE_GAME3RB = 'last_update.json'

exports.URL_FEED_FREEGAMES = 'https://steamcommunity.com/groups/freegamesfinders/rss/'
exports.FILE_FREEGAMES = 'last_update_fgames.json'

exports.URL_CRYPTO = "https://www.livecoinwatch.com"
exports.FILE_CRYPTO_LIST = "crypto_list.json"

