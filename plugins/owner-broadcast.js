import fs from 'fs'
let handler = async (m, { conn, text } ) => {  
let chatsall = Object.entries(conn.chats).filter(([_, chat]) => chat.isChats).map(v => v[0])
let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
let teks = text ? text : cc.text
for (let id of chatsall) { 
conn.sendButton(id, `*ββββ° πΎπ€π’πͺπ£πππππ€ β±βββ*\n*β*\n*β β§* ${text}\n*β*\n*ββββββββββββββββ*`, 'π¬πππ ππ ππ ππππππππππ πππππππ\n' + wm, fs.readFileSync('./src/avatar_contact.png'), [['π€ πΎππ½π΄π π€', '.owner'],['π π³πΎπ½π°π π', '.donasi']], false, { 
contextInfo: { externalAdReply: {
title: 'πͺπππππππππ πππππππ π πππππ πππ πππππ',
body: 'π»ππ π³ππππ©ππ-π΄π«', 
sourceUrl: `http://github.com/elrebelde21/The-LoliBot-MD`, 
thumbnail: fs.readFileSync('./Menu2.jpg') }}})}
m.reply(`β π¬π πππππππ πππ πππππππ π πππππ πππ πππππ*\n\n*nπ¬π πππππππ πππ ππ ππ ππππ πππππππ π πππππ πππ πͺππππ π·πππππππ. π«πππππππ.`)
}
handler.help = ['broadcast', 'bc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)$/i
handler.rowner = true
export default handler
