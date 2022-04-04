const CC = require("currency-converter-lt");
const format = require("format-number");
const { readFile } = require("../../helpers");
const { PATH_FILE ,LOGO_IMAGE} = require("../../common/constant");

const createEmbeed = (from, to, value ,result) => {
  return {
    color: "#0099ff",
    title: `Currency Converter`,
    thumbnail: {
			url: LOGO_IMAGE,
		},
    fields: [
      { name: "From", value: from, inline: true },
      {
        name: "To",
        value: to,
        inline: true,
      },
      {
        name: "Value",
        value: String(value),
        inline: true,
      },
      { name: "Result", value: result},
      { name: "List of available currency", value: "g!cvt list"},
    ],
    timestamp: new Date(),
  };
};

exports.convert = async (msg, from, to, value = 1) => {
  let data = await readFile("currency.json");
  const a = Object.keys(data).find((e) => e === from);
  const b = Object.keys(data).find((e) => e === to);
  if (!a || !b) {
    msg.reply(`Format currency tidak sesuai`);
    return;
  }

  let currencyConverter = new CC({ from, to, amount: value });
  const cValue = await currencyConverter.convert();

  const result = format({ prefix: `${to} ` })(cValue, {
    noSeparator: false,
  });

  const embedData = createEmbeed(from, to, value , result);

  msg.reply({
    embeds: [embedData],
  });
};

exports.currencyList = async (msg) => {
  msg.reply({
    files: [`${PATH_FILE}/currency.json`],
  });
  return;
};
