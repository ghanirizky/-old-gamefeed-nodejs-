const {createEmbedCryptoList} = require('../../helpers')
const axios = require('axios');
const { readFile } = require('../../helpers');

exports.getList = async (channel) => {

    const param = await readFile('crypto_list.json')

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
            const embedData = createEmbedCryptoList(item, index++, param.currency)
            channel.send({ embeds: [embedData] });
        }
    }else{
        console.log(`Error`)
    }
    return data
}
