let handler = async (m, { conn, text }) => {
  if(isNaN(text)) {
		var number = text.split`@`[1]
  } else if(!isNaN(text)) {
		var number = text
  }

  if(!text && !m.quoted) return conn.reply(m.chat, `*[ RESET DATABASE ]*\n\nTag user, tulis nomor, atau balas member yang ingin di RESET`, m)
  //let exists = await conn.isOnWhatsApp(number)
  // if (exists) return conn.reply(m.chat, `*Nomor target tidak terdaftar di WhatsApp*`, m)
  if(isNaN(number)) return conn.reply(m.chat, `*[ RESET DATABASE ]*\n\nNomor yang kamu masukkan tidak valid !`, m)
  if(number.length > 15) return conn.reply(m.chat, `*[ RESET DATABASE ]*\n\nNomor yang kamu masukkan tidak valid !`, m)
  try {
		if(text) {
			var user = number + '@s.whatsapp.net'
		} else if(m.quoted.sender) {
			var user = m.quoted.sender
		} else if(m.mentionedJid) {
  		  var user = number + '@s.whatsapp.net'
			}  
		} catch (e) {
  } finally {

	
  if(typeof global.DATABASE.data.users[user] == 'undefined') {
  global.DATABASE._data.users[user] = {
			exp: 0,
			limit: 10,
			lastclaim: 0,
			warning: 0,
			chat: 0,
			whitelist: false,
			isBanned: false,
			spam: 0
		}
	}
  
	let groupMetadata = m.isGroup ? await conn.groupMetadata(m.chat) : {}
  let participants = m.isGroup ? groupMetadata.participants : []
	let users = m.isGroup ? participants.find(u => u.jid == user) : {}
	let number = user.split('@')[0]
  
	global.DATABASE.data.users[user].exp = 0
	global.DATABASE.data.users[user].limit = 0
	global.DATABASE.data.users[user].lastclaim = 0
	global.DATABASE.data.users[user].warning = 0
	global.DATABASE.data.users[user].chat = 0
	global.DATABASE.data.users[user].whitelist = false
	global.DATABASE.data.users[user].isBanned = false
	global.DATABASE.data.users[user].spam = 0
 	
 	conn.reply(m.chat, `*[ RESET DATA BERHASIL ]*\n\nBerhasil me-reset data @${number}`, null, {contextInfo: {
    mentionedJid: [user]
 	}})

 
 }
}
handler.help = ['reset *62xx*', 'reset *(reply)*','reset *@user*']
handler.tags = ['owner']
handler.command = /^reset$/i
handler.admin = false
handler.owner = true
handler.group = false
handler.botAdmin = false
module.exports = handler