const Discord = require("discord.js")

exports.run = async (client, message, args) => {

  
var channel = message.channel.name

		
      message.channel.clone({position: message.channel.position});
      message.channel.delete();

	



};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 3,
  kategori: "sunucu"
};

exports.help = { 
	name: 'nuke', 
  description: "Bot bulunduğunuz kanalı siler ve yeniden oluşturur.",
  usage: 'nuke'
}
