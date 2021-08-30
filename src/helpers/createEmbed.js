const { MessageEmbed } = require('discord.js');
const {PATH_IMAGE} = require('../common/constant')
// const {} = require('../common/')

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
			{ name: 'Title', value: game_detail.title },
			{ name: 'Size', value: game_detail.size },
			{ name: 'Genre', value: game_detail.genre },
			{ name: 'Release Date', value: game_detail.release_date},
		)
		if(game_detail.developer){
			exampleEmbed.addFields(
				{ name: 'Developer / Publisher', value: `${game_detail.developer} / ${game_detail.publisher }` },
			)
		}
		if(game_detail.steam_url){
			exampleEmbed.addFields(
				{ name: 'Support the Game', value: game_detail.steam_url},
			)
		}
		
	}else{
		exampleEmbed.setDescription(description)
	}
    

    return exampleEmbed
}

