var Discordie = require("discordie");
var client = new Discordie();

client.connect({
	token: "NDM4NTYxMjI5NTIzMzg2Mzc4.DcHQFw.lOXBzwp_ey-dPrRHuf99yQ5fZis"
});

client.Dispatcher.on("GATEWAY_READY", e => {
	console.log("Username: " + client.User.username);
});

client.Dispatcher.on("MESSAGE_CREATE", e => {
	if (e.message.content === "!dave") {
		e.message.channel.sendMessage("dave mustaine is no stranger to pain", {tts: true});
	} else if (e.message.content === "HELLO ME") {
		e.message.channel.sendMessage("MEET THE REAL ME");
	}
});

client.Dispatcher.on("MESSAGE_CREATE", e => {
	if (e.message.content === "nick") {
		e.message.channel.sendMessage("NICK");
	} else if (e.message.content === "pancakes sell") {
		e.message.channel.sendMessage("and I'm buying!");
	}
});

client.Dispatcher.on("MESSAGE_CREATE", e => {
	 if (e.message.content === "$loop") { 
      var interval = setInterval (function () {
        e.message.channel.sendMessage("dave mustaine is no stranger to pain", {tts: true});
      }, 1 * 3600000); 
    }
});

client.login(process.end.BOT_TOKEN);
