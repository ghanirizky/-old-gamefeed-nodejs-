const { MessageEmbed } = require('discord.js');
var formatter = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
  
	//minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
	// maximumFractionDigits: 0
});

exports.createEmbedCryptoList = (data, no) => {
	let exampleEmbed = new MessageEmbed()
	.setColor(data.color)
	.setURL("https://www.livecoinwatch.com")
	.addFields(
		{ name: "Rate", value: formatter.format(data.rate)},
		{ name: "All-time High", value: formatter.format(data.allTimeHighUSD) },
		{ name: "Volume", value: formatter.format(data.volume) },
		{ name: "Cap", value: formatter.format(data.cap) },
	)
	.setAuthor(`${no}. ${data.name} ${data.symbol ? `- ${data.symbol}` : ""}`,data.png64 ,"https://www.livecoinwatch.com")
	.setTimestamp(new Date())
    
    return exampleEmbed
}

