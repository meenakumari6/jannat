//@Prem-babu3608
////////////////////////////////////////////////////////
/////// WARNING => JO CREDIT NAME CHANGE KREGA USKA ID BAN KAR DIYA JAYEGA + THIS BOT IS MADE BT PREM BABU
const fs = require("fs");
module.exports.config = {
	name: "Khana",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "PREM BABU", //////@prem-babu3608
	description: "THIS BOT IS MR PREM SHARMA",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("Khana") ||
     react.includes("khana") || react.includes("KHAna") || react.includes("खाना") ||
react.includes("kHana") ||
react.includes("khAna")) {
		var msg = {
				body: `★━━━━━━━━━━━━━★🌶️𝐊𝐡𝐚 𝐋𝐨 𝐌𝐞𝐫𝐢 𝐉𝐚𝐚𝐧🌶️ ★━━━━━━━━━━━━━★`,attachment: fs.createReadStream(__dirname + `/noprefix/khana.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🍲", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

	}
