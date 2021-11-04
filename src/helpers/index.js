const {createEmbed} = require('./createEmbed')
const {getGameDetail} = require('./getGameDetail')
const {getLatestFeed} = require('./getLatestFeed')
const {createEmbedFreeGames} = require('./createEmbedFreeGames')
const {createEmbedCryptoList} = require('./createEmbedCryptoList')
const {readFile} = require('./readFile')
const {createFile} = require('./createFile')


module.exports = {
    createEmbed,
    getGameDetail,
    getLatestFeed,
    createEmbedFreeGames,
    createEmbedCryptoList,
    readFile,
    createFile
}