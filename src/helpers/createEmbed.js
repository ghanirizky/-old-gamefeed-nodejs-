const { MessageEmbed } = require('discord.js');
const {PATH_IMAGE} = require('../common/constant')
// const {} = require('../common/')

const checkString = (string) => {
	return string ? string : '-'
}

exports.createEmbed = (title, url, author, author_url, description, categories, iso_date, game_detail) => {
	let exampleEmbed = new MessageEmbed()
	.setColor('#0099ff')
	.setTitle(title)
	.setURL(url)
	.setAuthor(author,PATH_IMAGE ,author_url)
	.addFields(
		{ name: "Categories", value: categories },
	)
	.setTimestamp(new Date(iso_date))
	.setImage(PATH_IMAGE)
	
	if(description.includes("Game Details")){
		exampleEmbed.addFields(
			{ name: 'Title', value: checkString(game_detail.title)},
			{ name: 'Size', value: checkString(game_detail.size) },
			{ name: 'Genre', value: checkString(game_detail.genre) },
			{ name: 'Release Date', value: checkString(game_detail.release_date)},
		)
		if(game_detail.developer){
			exampleEmbed.addFields(
				{ name: 'Developer / Publisher', value: `${checkString(game_detail.developer)} / ${checkString(game_detail.publisher)}` },
			)
		}
		if(game_detail.steam_url){
			exampleEmbed.addFields(
				{ name: 'Support the Game', value: checkString(game_detail.steam_url)},
			)
		}
		
	}else{
		exampleEmbed.setDescription(checkString(description))
	}
    

    return exampleEmbed
}

