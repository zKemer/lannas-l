const Discord = require("discord.js");
const Db = require('croxydb')
exports.run = async (client, message, args) => {
     let eklemekanal;
  if(Db.fetch(`bot-ekleme-kanalı_${message.guild.id}`) == undefined) {eklemekanal = "Ayarlanmamış" } else { eklemekanal = `<#${Db.fetch(`bot-ekleme-kanalı_${message.guild.id}`)}>` }
      let glstrc;
  if(Db.fetch(`bot-developer-rolü_${message.guild.id}`) == undefined) {glstrc = "Ayarlanmamış" } else { glstrc = `<@&${Db.fetch(`bot-developer-rolü_${message.guild.id}`)}>` }
  let onayred;
  if(Db.fetch(`onay-red-kanalı_${message.guild.id}`) == undefined) {onayred = "Ayarlanmamış" } else { onayred = `<#${Db.fetch(`onay-red-kanalı_${message.guild.id}`)}>` }
    let onayreds;
  if(Db.fetch(`onay-red-kanalıs_${message.guild.id}`)== undefined) {onayreds = "Ayarlanmamış" } else { onayreds = `<#${Db.fetch(`onay-red-kanalıs_${message.guild.id}`)}>` }
 
  if(args[0] == "sıfırla")  {  
    if(Db.fetch(`onay-red-kanalı_${message.guild.id}`)) if(Db.fetch(`onay-red-kanalıs_${message.guild.id}`))    if(Db.fetch(`bot-developer-rolü_${message.guild.id}`) )      if(Db.fetch(`bot-ekleme-kanalı_${message.guild.id}`)) {

    Db.delete(`onay-red-kanalıs_${message.guild.id}`)
    
    Db.delete(`onay-red-kanalı_${message.guild.id}`)
    Db.delete(`bot-developer-rolü_${message.guild.id}`)
     Db.delete(`bot-ekleme-kanalı_${message.guild.id}`) 
    
    
    message.channel.send("Bütün Botlist ayarları başarıyla sıfırlandı.")
  return
    } else {
    
    return message.channel.send("Botlist ayarlarını sıfırlamak için her şeyin ayarlı olması gerekiyor.")
  }
                            } else {
  const ayarlars = new Discord.MessageEmbed()


 .setDescription(`
 **Bot Log Kanalı:** ${onayreds}
 
  **Bot Onaylama/Reddetme Kanalı:** ${onayred}
 
 **Bot Ekleme Kanalı:** ${eklemekanal}
 
 **Bot Geliştiricisi Rolü:** ${glstrc}
 `)
 .setColor("#F0FFFF")
 
 
 return message.channel.send(ayarlars)
                            }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["bot-list-ayarları"],
  permLevel: 0
};

exports.help = {
  name: "botlist-ayarları",
  description: "YardÄ±m MenÃ¼sÃ¼nÃ¼ GÃ¶sterir.",
  usage: "yardÄ±m"
};

