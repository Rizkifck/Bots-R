function handler(m) {


  this.sendContact(m.chat, '6285651045302', 'Rizkifck', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
