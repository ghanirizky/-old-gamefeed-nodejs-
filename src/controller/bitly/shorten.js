const {BITLY_TOKEN} = require("../../common/constant")

exports.shortenLink = async (link) => {
  const config = {
    method: "post",
    url: "https://api-ssl.bitly.com/v4/shorten",
    headers: {
      Authorization: `Bearer ${BITLY_TOKEN}`,
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      domain: "bit.ly",
      long_url: link,
    }),
  };

  try {
    const data = await axios(config);

    if(data.data.link) return data.data.link

    return false

  } catch (error) {
    return false
  }
};
