const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready', function () {
	console.log("Mily est ici!")
	bot.user.setStatus("online")
})

var lastAsk
var prefix = ";";

bot.on('message', function(message) {
	if(message.content === "<@373835182857388053>") {
		message.reply("Hey there! :heart:")
	}
	else if(message.content.indexOf("<@373835182857388053>") > -1 & message.content !== lastAsk) {
		var rand = Math.floor(Math.random() * 6) +1
		if (rand === 1) {
			message.reply("Yes! ;D")
		}
		else if (rand === 2) {
			message.reply("No! :(")
		}
		else if (rand === 3) {
			message.reply("Of course!")
		}
		else if (rand === 4) {
			message.reply("I don't know... :p")
		}
		else if (rand === 5) {
			message.reply("I'll ask my mom right now! She usually says yes :p")
		}
		else if (rand === 6) {
			message.reply("Lucie doesn't want me to, so no!")
		}
		lastAsk = message.content
	}
	//COMMANDS//
	var cmd = message.content.split(" ")
	
	if (cmd[0] == prefix+"slap") {
		if (cmd[1] != null) {
			message.reply("What are you trying to do there? :angry:")	
		}
		else {
			message.reply(prefix+"slap USER - Slaps an user >;)")
		}
	}
	//COMMANDS//
	
	//console.log(message.author+" "+message.content)
})

bot.login('MzczODM1MTgyODU3Mzg4MDUz.DNYueA._mvtG6BPNwwqZ1XNs50Ho_rZZXM')
