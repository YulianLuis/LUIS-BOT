let handler = async (m) => {
global.db.data.chats[m.chat].isBanned = false
m.reply('š¬ššš šššš ššš ššššššššššš„³\nšØšššš ššššš šššššššššš..')
}
handler.help = ['unbanchat']
handler.tags = ['owner']
handler.command = /^unbanchat$/i
handler.rowner = true
export default handler
