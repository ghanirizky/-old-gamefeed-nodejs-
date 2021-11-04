const { MessageEmbed } = require('discord.js');


const {URL_CRYPTO} = require('../common/constant')

exports.createEmbedCryptoList = (data, no, curr) => {

	const toCurr = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: curr,
	});

	const exampleEmbed = {
		color: data.color,
		url: URL_CRYPTO,
		author: {
			name: `${no}. ${data.name} ${data.symbol ? `- ${data.symbol}` : ""}`,
			icon_url: data.png64,
			url: URL_CRYPTO
		},
		thumbnail: {
			url: data.png64,
		},
		fields: [
			{ name: "Rate", value: toCurr.format(data.rate), inline: true},
			{ name: '\u200B', value: '\u200B', inline: true },
			{ name: "All-time High", value: toCurr.format(data.allTimeHighUSD), inline: true},
			{ name: "Volume", value: toCurr.format(data.volume), inline: true},
			{ name: '\u200B', value: '\u200B', inline: true },
			{ name: "Cap", value: toCurr.format(data.cap) , inline: true},
			// { name: "Circulating Suply", value: toCurr.format(data.circulatingSupply), inline: true},
			// { name: "Total Suply", value: toCurr.format(data.totalSupply) , inline: true},
			// { name: "Max Suply", value: toCurr.format(data.maxSupply) , inline: true},
		],
		timestamp: new Date(),
	};
    
    return exampleEmbed
}

