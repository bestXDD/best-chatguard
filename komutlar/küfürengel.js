const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client ,message, args) =>{
  if (!message.member.permissions.has("MANAGE_GUILD")) return message.channel.send(`Bu Komutu Kullana Bilmek İçin \`Mesajları Yönet\` Yetkisine Sahip Olmalısın!`)
if(args[0] === 'aç') {
    db.set(`${message.guild.id}.kufur`, true)
    message.channel.send(`Reklam engel başarılı bir şekilde aktif edildi!`)
  return
}
if (args[0] === 'kapat') {
  db.delete(`${message.guild.id}.kufur`)
message.channel.send(`Küfür engel sistemi başarılı bir şekilde kapatıldı!`)
return
}
  message.channel.send('Lütfen **aç** veya **kapat** yazın. Örnek Kullanım: **küfür-engel aç/kapat**')
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['küfürengel'], 
 permLevel: 0
};

exports.help = {
 name: 'küfürengel',
 description: 'küfürleri engeller',
 usage: 'küfürengel'
};