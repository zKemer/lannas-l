const Discord = require("discord.js");
const db = require('croxydb'); // creating database

const ayarlar = require("../ayarlar.json");
exports.run = async (client, message, args) => {
 
    if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send('<:pusula_x:791401835088445451> Bu komutu kullanmak için gerekli yetkiye sahip değilsin')
       
    if(!args[0])return message.channel.send("<:pusula_x:791401835088445451> Bir sayı belirtmedin.")
    if(isNaN(args[0]))return message.channel.send("<:pusula_x:791401835088445451> Bir sayı belirtmedin.")
db.set(`${message.guild.id}ban`,args[0]) 


    message.channel.send("<:pusula_tik:791401834559569960> Ban koruma başarıyla ayarlandı.")
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ban-koruma"],
  permLevel: 0
};

exports.help = {
  name: "ban-koruma",
  description: "Yardım Menüsünü Gösterir.",
  usage: "yardım"
};
