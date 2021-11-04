const {createEmbedCryptoList} = require('../../helpers')
const axios = require('axios');

exports.getList = async (channel) => {

    const param = {
        "currency": "USD",
        "sort": "rank",
        "order": "ascending",
        "offset": 0,
        "limit": 10,
        "meta": true
    }

    const config = {
        method: 'post',
        url: 'https://api.livecoinwatch.com/coins/list',
        headers: { 
          'x-api-key': '29797eeb-8b90-4ca0-9752-5c06e78aaf0d', 
          'Content-Type': 'application/json'
        },
        data : param
    };

    const data = await axios(config)

    if(data.data.length){
        let index = 1
        
        await channel.bulkDelete(100)

        for(const item of data.data){
            const embedData = createEmbedCryptoList(item, index++)
            channel.send({ embeds: [embedData] });
        }
    }else{
        console.log(`Error`)
    }
    console.log("======================")
    
    return data
}
