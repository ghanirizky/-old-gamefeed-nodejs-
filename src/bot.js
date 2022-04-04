require("dotenv").config();
const { DISCORD_BOT_TOKEN, FILE_CRYPTO_LIST } = require("./common/constant");
const {
  game3rb,
  freegames,
  crypto,
  bitly,
  moneyConverter,
  otherController,
} = require("./controller");
const { createFile, readFile } = require("./helpers/");
const { Client, Intents } = require("discord.js");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.on("ready", async () => {
  console.log(`${client.user.tag} has logged in.`);
  client.user.setActivity('| g!help', { type: 'LISTENING' });
  const channelGame3rb = client.channels.cache.get("881639659577425950");
  const channelFreeGames = client.channels.cache.get("882283760215818251");
  const channelCrypto = client.channels.cache.get("905782025565388840");
  const channelCrypto2 = client.channels.cache.get("909033029412995112");

  await crypto.getList(channelCrypto);

  setInterval(async () => {
    await crypto.getList(channelCrypto);
    await crypto.getList(channelCrypto2);
    await game3rb.createMessage(channelGame3rb);
    // await freegames.createMessage(channelFreeGames)
  }, 600000);
});

client.on("messageCreate", async (msg) => {
  //#LIMIT OF CRYPTOLIST
  if (msg.content.startsWith("g!climit")) {
    const content = msg.content.split(" ")[1];
    if (!isNaN(content)) {
      if (content > 100 || content < 3) {
        msg.reply(
          "***The valid number to list the crypto list are [3 - 100]***"
        );
      } else {
        const data = await readFile(FILE_CRYPTO_LIST);
        data.limit = Number(content);
        await createFile(FILE_CRYPTO_LIST, data);
        msg.reply(`Success set crypto list limit to ***${content}***`);
      }
    }
  }

  //#CURRENCY OF CRYPTOLIST
  if (msg.content.startsWith("g!curr")) {
    const content = msg.content.split(" ")[1];

    if (!content.match("IDR") && !content.match("USD")) {
      msg.reply("***The available currency are [IDR, USD]***");
    } else {
      const data = await readFile(FILE_CRYPTO_LIST);
      data.currency = content;
      console.log(data);
      await createFile(FILE_CRYPTO_LIST, data);
      msg.reply(`Success set crypto list currency to ***${content}***`);
    }
  }

  //# DELETE MESSAGE COMMAND
  if (msg.content.startsWith("g!prune")) {
    const content = msg.content.split(" ")[1];
    if (!isNaN(content)) {
      if (content > 100 || content < 0) {
        msg.reply("The valid number to delete message is [1 - 100]");
      } else {
        const tempChannel = client.channels.cache.get(msg.channelId);
        tempChannel.bulkDelete(content);
      }
    }
  }

  //SHORTEN LINK BITLY
  if (msg.content.startsWith("g!shorten")) {
    const content = msg.content.split(" ")[1];
    const shortenLink = await bitly.shortenLink(content);
    if (shortenLink) msg.reply(`Shorten Link: ***${shortenLink}***`);
    else msg.reply(`Invalid Link`);
  }

  //CONVERT MONEY
  if (msg.content.startsWith("g!cvt")) {
    const content = msg.content.split(" ");

    if (content.length == 2) {
      if (content[1] === "list") await moneyConverter.currencyList(msg);
      else msg.reply("Format command salah!, ex: ***g!cvt USD IDR 10***");
      return;
    }

    if (content.length > 2) {
      const from = content[1];
      const to = content[2];
      const amount = content[3] ? Number(content[3]) : 1;
      if (isNaN(amount)) {
        msg.reply(
          "Format command salah!\nFormat: ***g!cvt [FROM] [TO] [AMOUNT]***\ncontoh: ***g!cvt USD IDR 10***"
        );
        return;
      }

      await moneyConverter.convert(
        msg,
        from.toUpperCase(),
        to.toUpperCase(),
        amount
      );
      return;
    }

    msg.reply("Format command salah!");
  }

  if (msg.content.startsWith("g!help")) {
    const content = msg.content.split(" ");
    if (content[0] != "g!help") return;

    if (content.length > 1) return otherController.commandHelp(msg, content[1]);

    otherController.help(msg);
  }
});

client.login(DISCORD_BOT_TOKEN);
