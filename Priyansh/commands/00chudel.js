const fs = require("fs");
module.exports.config = {
  name: "chudel",
    version: "2.1.1",
  hasPermssion: 0,
  credits: "virat", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async ({ api, event, Users, Currencies, args, utils, client, global }) => {
  var name = await Users.getNameUser(event.senderID);
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("chudel") ||
     react.includes("Chudel") ||
     react.includes("CHUDEL") ||
react.includes("ChuDeL")) {
    var msg = {
        body: `𝗘𝘀𝗶 𝗟𝗮𝗴𝘁𝗶 𝗛𝗮𝗶 𝗸𝗶𝘆𝗮 𝗬𝗲𝗵😂`,attachment: fs.createReadStream(__dirname + `/noprefix/chu.jpg)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🧟", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }
