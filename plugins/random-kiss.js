const axios = require('axios')

let handler = async(m, { conn, args }) => {
  new Promise((resolve, reject) => {
    axios.get(`https://nekos.life/api/v2/img/kiss`).then((res) => {
      // if (m.mentionedJid) {
      //   conn.sendFile(m.chat, res.data.url, '', `Mpppsss....\n@${m.sender.split('@')[0]} sedang mencium @${args[0].split('@')[1]}`, m, {contextInfo: {
      //     mentionedJid: [args[0],m.sender]
      //   }})
      // }else (!m.mentionedJid) {
        conn.sendFile(m.chat, res.data.url, '', 'Mpppsss.... aahhhh... kimochi yamete...', m)
      // }
    }).catch(reject)
  })
}

handler.help = ['kiss']
handler.tags = ['images']
handler.command = /^kiss$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 1000
handler.limit = true

module.exports = handler