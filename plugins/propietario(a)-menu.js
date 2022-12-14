import { xpRange } from '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, command, args, usedPrefix: _p, __dirname, isOwner, text, isAdmin, isROwner }) => {
  
  
const { levelling } = '../lib/levelling.js'
//let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {

let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)

let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let { money } = global.db.data.users[m.sender]
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),

exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,

level, limit, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
  
/*
const sections = [
{
title: `πππππΌ πΏπππππππΌπ½ππ`,
rows: [
{title: "βοΈ πππ£πͺ ππ§ππ£πππ₯ππ‘ βοΈ", description: null, rowId: `${usedPrefix}menu`},
{title: "β³οΈ πππ£πͺ πΎπ€π’π₯π‘ππ©π€ β³οΈ", description: null, rowId: `${usedPrefix}allmenu`},
{title: "π πππ‘π€πππππ | πππ£π π", description: null, rowId: `${usedPrefix}ping`}, 
{title: "π πΌππ©πͺππ‘ππ―ππ§ π", description: "πΌπΎπππΌππππΌπ πΌ ππΌ ππππππΌ πππππππ", rowId: `${usedPrefix}update`},
{title: "π ππππ£πππππ§ π", description: "ππππππΎππΌπ ππΌ πππππππΌπ", rowId: `${usedPrefix}reiniciar`},
{title: "π π½π€π§π§ππ§π©π’π₯ π", description: "π½ππππΌπ πΌππΎπππππ πΏπ πΎππππππ", rowId: `${usedPrefix}clear`},
{title: "π π½ππ£πππ§ πΎπππ© π", description: "ππππππ πππ πΏπ The Lolibot-MD ππ πΎππΌππ", rowId: `${usedPrefix}ban1`},   
{title: "π πΏππ¨πππ£πππ§ πΎπππ© π", description: "πππΌπππΏπΌπ πππ πΏπ The Lolibot-MD ππ πΎππΌπ", rowId: `${usedPrefix}}desban1`},    
{title: "π πΎπ€π’πͺπ£πππππ€ πππ£ππ§ππ‘ π", description: "πππππΌπ ππ πΌππππΎππ πΌ πππΏππ", rowId: `${usedPrefix}bc`}, 
{title: "π πΎπ€π’πͺπ£πππππ€ π ππ§ππ«πππ€ π", description: "πππππΌπ ππ πΌππππΎππ πΌπ πππππΌπΏπ", rowId: `${usedPrefix}comunicarpv`},  
{title: "π πΎπ€π’πͺπ£πππππ€ π ππ§πͺπ₯π€π¨ π", description: "πππππΌπ ππ πΌππππΎππ πΌ ππππππ", rowId: `${usedPrefix}bcgc`},  
]}, ] */
//let name = await conn.getName(m.sender)
let pp = './media/menus/Menuvid1.mp4'  
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
//let user = global.db.data.users[m.sender]
//user.registered = false

let menu = `
π Β‘ππ€π‘π! ${username}
β­ββγ *${wm}* γβββ¬£
ββοΈβοΈβοΈβοΈβοΈβοΈβοΈβοΈβοΈ
ββͺ *π¬ππππππππππ | EXP βΊ ${exp}*
ββͺ *π΅ππππ  βΊ* ${level}
ββͺ *πΉππ βΊ ${role}*
ββͺ *πππππππππ βΊ $ ${money}*
βββββββββββββββββββ
ββͺ *π­ππππ βΊ ${week}, ${date}*
ββͺ *πΌπππππππ  βΊ ${Object.keys(global.db.data.users).length}* 
ββοΈβοΈβοΈβοΈβοΈβοΈβοΈβοΈβοΈ
β°ββββββγ π  *${vs}* γβββββββ¬£

β­βγ ππ£ππ€π§π’ππππ€π£ ππ π’ππ£πͺ γββ¬£
βββββββββββββββββββ
βπβΊ _${usedPrefix}actualizar | update_
βπβΊ _${usedPrefix}reiniciar | restart_
βπβΊ _${usedPrefix}borrartmp | cleartmp_
βπβΊ _${usedPrefix}ban1 | banchat1_
βπβΊ _${usedPrefix}desban1 | unbanchat1_
βπβΊ _${usedPrefix}comunicar | broadcastall | bc_
βπβΊ _${usedPrefix}comunicarpv | broadcastchats | bcc_
βπβΊ _${usedPrefix}comunicargrupos | broadcastgc_
βπβΊ _${usedPrefix}bcgc_
β°ββββββββββββββββββββ¬£`.trim()
conn.sendHydrated(m.chat, menu, wm, pp, 'https://github.com/elrebelde21/The-LoliBot-MD', 'π»ππ π³ππππ©ππ-π΄π«', null, null, [
['πππ£πͺΜ ππ€π’π₯π‘ππ©π€ π«', '.allmenu'],
['πππ£πͺ πππ¨π₯π‘πππππ‘π π', '/menulista'],
['πππ£πͺ ππ§ππ£πππ₯ππ‘ β‘', '#menu']
], m,)
}

handler.help = ['infomenu'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(ownermenu)$/i
//handler.register = true
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
