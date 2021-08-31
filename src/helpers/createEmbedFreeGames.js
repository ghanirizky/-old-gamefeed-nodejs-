const { MessageEmbed } = require('discord.js');
const {PATH_IMAGE_FREEGAMES} = require('../common/constant')
// const {} = require('../common/')

exports.createEmbedFreeGames = (title, url, author, author_url, description, iso_date) => {
	let exampleEmbed = new MessageEmbed()
	.setColor('#0099ff')
	.setTitle(title)
	.setURL(url)
	.setAuthor(author,PATH_IMAGE_FREEGAMES ,author_url)
	.setTimestamp(new Date(iso_date))
	.setImage(PATH_IMAGE_FREEGAMES)
	.setDescription(description)
    
    return exampleEmbed
}

