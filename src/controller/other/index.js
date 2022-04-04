module.exports = {
  help: (msg) => {
    const helpEmbeed = {
      title: "Command List",
      description:
        "```\ng!cvt     : Currency Converter\n\ng!shorten : Shorten link to bitly\n\ng!prune   : Delete message in that channel\n```",
      color: 15925248,
      fields: [
        {
          name: "How to use command",
          value: "```\ng!help [Command name]\n```",
        },
      ],
    };

    msg.reply({
      embeds: [helpEmbeed],
    });
  },

  commandHelp: (msg, command) => {
    const commandList = [
      {
        key: "cvt",
        embed: {
          title: "Currency Converter | g!cvt",
          description:
            "```\nA universal currency converter that enables the easy conversion of currency values based on present-day exchange rates\n```",
          color: 2481902,
          fields: [
            {
              name: "Format",
              value: "```\ng!cvt [FROM] [TO] [AMOUNT]\n```",
            },
            {
              name: "Example",
              value: "```\ng!cvt USD IDR 5\n```",
            },
            {
              name: "List of available currency",
              value: "```\ng!cvt list\n```",
            },
          ],
          timestamp: new Date(),
        },
      },
      {
        key: "shorten",
        embed: {
          title: "Shorten Link | g!shorten",
          description: "```\nMake your links shorter using bit.ly\n```",
          color: 2481902,
          fields: [
            {
              name: "Format",
              value: "```\ng!shorten [Links]\n```",
            },
            {
              name: "Example",
              value: "```\ng!shorten https://google.com/\n```",
            },
          ],
          timestamp: new Date(),
        },
      },
      {
        key: "prune",
        embed: {
          title: "Delete Message | g!prune",
          description: "```\nDelete message in preferred channel\n```",
          color: 2481902,
          fields: [
            {
              name: "Format",
              value: "```\ng!prune [AMOUNT]\n```",
            },
            {
              name: "Example",
              value: "```\ng!prune 5\n```",
            },
            {
              name: "Min",
              value: "```\n1\n```",
              inline: true,
            },
            {
              name: "Max",
              value: "```\n100\n```",
              inline: true,
            },
          ],
          timestamp: new Date(),
        },
      },
    ];

    const commandFind = commandList.find((list) => list.key === command);
    if (!commandFind) return msg.reply("Command not found");

    msg.reply({
      embeds: [commandFind.embed],
    });
    return
  },
};
