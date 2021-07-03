let fetch = require('node-fetch')
let handler = async (m, { conn, text, command }) => {

  if (!text) throw `*Masukkan inputan yang benar ! Contoh :*\n*.${command} LTM BOT*`
  if (text.length > 15) throw `*Masukkan maksimal 15 karakter*`

  let img = global.API('xteam', '/textpro/blackpink', {
    text: text
  }, 'APIKEY')
  
  m.reply(global.wait)
  conn.sendFile(m.chat, img, 'img.jpg', null, m)
}
handler.help = ['blackpink'].map(v => v + ' *text*')
handler.tags = ['creator']
handler.limit = true
handler.exp = 5000
handler.command = /^(blackpink)$/i
module.exports = handler