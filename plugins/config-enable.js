let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => { 
const sections = [
{
title: `๐๐๐๐๐ผ ๐ฟ๐ ๐พ๐๐๐๐๐๐๐๐ผ๐พ๐๐๐`,
rows: [
{title: "๐ ๐๐๐๐พ๐๐๐", description: "๐พ๐ค๐ฃ๐ฉ๐๐ฃ๐๐๐ค ๐๐ ๐ก๐ ๐ฝ๐๐๐ฃ๐ซ๐๐ฃ๐๐๐ ๐ฅ๐๐ง๐ ๐๐ก ๐๐ง๐ช๐ฅ๐ค", rowId: `${usedPrefix + command} welcome`},
{title: "๐ ๐๐๐ฟ๐ ๐๐๐ฝ๐๐๐พ๐", description: "๐๐จ๐๐ง ๐๐ก ๐ฝ๐ค๐ฉ ๐๐ฃ ๐๐ค๐๐ค ๐๐ช๐๐ก๐๐๐ค ๐ค ๐๐ง๐๐ซ๐๐๐ค", rowId: `${usedPrefix + command} public`},
{title: "๐ ๐๐๐ฟ๐ ๐๐๐๐๐ +18", description: "๐๐ค๐จ๐ฉ๐ง๐๐ง ๐พ๐ค๐ข๐๐ฃ๐๐ค๐จ +18", rowId: `${usedPrefix + command} modohorny`},
{title: "๐ ๐ผ๐๐๐๐๐๐๐", description: "๐๐ก๐๐ข๐๐ฃ๐๐ง ๐๐ฃ๐ก๐๐๐๐จ ๐๐ ๐๐ง๐ช๐ฅ๐ค๐จ ๐๐ ๐๐๐๐ฉ๐จ๐ผ๐ฅ๐ฅ", rowId: `${usedPrefix + command} antilink`},   
{title: "๐ ๐ผ๐๐๐๐๐๐๐ 2", description: "๐๐ก๐๐ข๐๐ฃ๐๐ง ๐๐ฃ๐ก๐๐๐๐จ ๐ฆ๐ช๐ ๐๐ค๐ฃ๐ฉ๐๐ฃ๐๐ ๐๐ฉ๐ฉ๐ฅ๐จ", rowId: `${usedPrefix + command} antilink2`},    
{title: "๐  ๐ฟ๐๐พ๐๐๐พ๐", description: "๐๐ค๐ฉ๐๐๐๐๐๐๐๐ค๐ฃ๐๐จ ๐๐ ๐๐ง๐ช๐ฅ๐ค", rowId: `${usedPrefix + command} detect`},    
{title: "๐ ๐ผ๐๐๐๐๐๐๐๐๐๐", description: "๐๐ช๐๐ ๐๐ ๐ฃ๐๐ซ๐๐ก ๐ผ๐ช๐ฉ๐ค๐ขรก๐ฉ๐๐๐๐ข๐๐ฃ๐ฉ๐ ๐๐ฃ ๐พ๐๐๐ฉ๐จ", rowId: `${usedPrefix + command} autolevelup`},    
{title: "โ ๐๐๐๐๐๐๐พ๐", description: "๐๐จ๐๐ง ๐ก๐๐จ ๐๐ช๐ฃ๐๐๐ค๐ฃ๐๐จ ๐ฅ๐๐ง๐ ๐จ๐๐๐๐ง ๐ฎ/๐ค ๐รฑ๐๐๐๐ง ๐๐ฃ ๐๐ก ๐๐ง๐ช๐ฅ๐ค", rowId: `${usedPrefix + command} restrict`},    
{title: "โ ๐ผ๐๐๐๐๐๐ผ๐ฟ", description: "๐๐๐๐๐ง ๐ฆ๐ช๐ ๐๐ก ๐ฝ๐ค๐ฉ ๐ฉ๐๐ฃ๐๐ ๐ก๐ค๐จ ๐ข๐๐ฃ๐จ๐๐๐๐จ ๐๐ค๐ข๐ค ๐๐รญ๐๐ค", rowId: `${usedPrefix + command} autoread`},
{title: "๐ ๐ผ๐๐ฟ๐๐๐", description: "๐๐จ๐๐ง ๐ก๐ค๐จ ๐พ๐ค๐ข๐๐ฃ๐๐ค๐จ ๐๐ ๐ผ๐ช๐๐๐ค๐จ\n๐๐จ๐ ๐ผ๐ช๐๐๐ค ๐พ๐ค๐ข๐ข๐๐ฃ๐๐จ", rowId: `${usedPrefix + command} audios`},
{title: "๐ ๐ฝ๐๐ ๐๐๐๐๐๐๐ผ๐ ", description: "๐๐๐ง๐ ๐ฅ๐๐ง๐ข๐๐ฉ๐๐ง ๐ค ๐ฃ๐ค ๐ฆ๐ช๐ ๐๐ก ๐๐ค๐ฉ ๐จ๐ ๐ช๐ฃ๐ ๐ฉ๐๐ข๐ฅ๐ค๐ง๐๐ก๐ข๐๐ฃ๐ฉ๐ ๐๐ฃ ๐๐ง๐ช๐ฅ๐ค๐จ", rowId: `${usedPrefix + command} temporal`},
{title: "๐ antiviewonce", description: "๐๐๐๐๐ง ๐ฆ๐ช๐ ๐ฃ๐๐๐ ๐จ๐ ๐ค๐๐ช๐ก๐ฉ๐ ๐๐ฃ ๐๐ง๐ช๐ฅ๐ค๐จ", rowId: `${usedPrefix + command} antiver`},
{title: "๐ช ๐ผ๐๐๐๐๐๐๐พ๐๐๐", description: "๐๐ค๐๐ ๐๐ข๐๐๐๐ฃ, ๐ซ๐๐๐๐ค, ๐๐๐, ๐๐ฃ๐ก๐๐๐ ๐๐ฅ๐ ๐๐ ๐๐ค๐ฃ๐ซ๐๐ง๐ฉ๐๐ง๐ ๐๐ฃ ๐๐ฉ๐๐๐?๐๐ง ๐ผ๐ช๐ฉ๐ค๐ข๐๐ฉ๐๐๐๐ข๐๐ฃ๐ฉ๐", rowId: `${usedPrefix + command} autosticker`},
{title: "๐? ๐๐๐๐พ๐๐๐๐", description: "๐๐๐๐๐ง ๐ฆ๐ช๐ ๐จ๐ ๐๐ฃ๐ซ๐๐ ๐จ๐ฉ๐๐๐?๐๐ง๐จ ๐๐๐ก ๐๐ค๐ฉ", rowId: `${usedPrefix + command} stickers`},
{title: "โ๏ธ ๐๐พ๐๐๐๐", description: "๐๐๐๐๐ง ๐ฆ๐ช๐ ๐๐ก ๐ฝ๐ค๐ฉ ๐ง๐๐จ๐ฅ๐ค๐ฃ๐๐ ๐จ๐ค๐ก๐ค ๐๐ฃ ๐พ๐๐๐ฉ๐จ ๐๐ง๐๐ซ๐๐๐ค๐จ", rowId: `${usedPrefix + command} pconly`},
{title: "โ๏ธ ๐๐พ๐๐๐๐", description: "๐๐๐๐๐ง ๐ฆ๐ช๐ ๐๐ก ๐ฝ๐ค๐ฉ ๐ง๐๐จ๐ฅ๐ค๐ฃ๐๐ ๐จ๐ค๐ก๐ค ๐๐ฃ ๐พ๐๐๐ฉ๐จ ๐๐ ๐๐ง๐ช๐ฅ๐ค๐จ", rowId: `${usedPrefix + command} gconly`},
]}, ]
let name = await conn.getName(m.sender)
const listMessage = {
text: '*~ CENTRO DE CONFIGURACIรN*',
footer: `โญโโใ โฏโฏโฏโฏโฏโฏโฏโฏ ใโโฎ
โโกโกโกโกโกโกโกโกโกโกโกโกโกโก
โโค *โจ๐๐๐๐, ${name}!!*
โโกโกโกโกโกโกโกโกโกโกโกโกโกโก
โฐโโโกโฏโฏโฏโฏโฏโฏโฏโฏโโโโฏ
โโโโโโโโโโโโโโโ
โฃโง *๐๐ด๐ป๐ด๐ฒ๐ฒ๐ธ๐พ๐ฝ๐ฐ ๐๐ฝ๐ฐ ๐ณ๐ด ๐ป๐ฐ๐ ๐พ๐ฒ๐ฟ๐ธ๐พ๐ฝ๐ด๐ ๐๐๐ด ๐๐ฐ๐ป๐ด๐ฝ ๐ด๐ฝ ๐ป๐ฐ ๐๐ธ๐ถ๐๐ธ๐ด๐ฝ๐๐ด ๐ป๐ธ๐๐๐ฐ ๐พ ๐ณ๐ฐ ๐ฒ๐ป๐ธ๐ฒ๐บ ๐ด๐ฝ ๐ฐ๐ป๐ถ๐๐ฝ ๐ฑ๐พ๐๐พ๐ฝ ๐ณ๐ด ๐ด๐๐๐ด ๐ผ๐ด๐ฝ๐๐ฐ๐น๐ด*
โโกโกโกโกโกโกโกโกโกโกโกโกโกโก
โฃ เถฌโโน๏ธ _${usedPrefix}enable *welcome*_
โฃ เถฌโโน๏ธ _${usedPrefix}disable *welcome*_
โฃ เถฌโโน๏ธ _${usedPrefix}enable *public*_
โฃ เถฌโโน๏ธ _${usedPrefix}disable *public*_
โฃ เถฌโโน๏ธ _${usedPrefix}enable *modohorny*_
โฃ เถฌโโน๏ธ _${usedPrefix}disable *modohorny*_
โฃ เถฌโโน๏ธ _${usedPrefix}enable *antilink*_
โฃ เถฌโโน๏ธ _${usedPrefix}disable *antilink*_
โฃ เถฌโโน๏ธ _${usedPrefix}enable *antilink2*_
โฃ เถฌโโน๏ธ _${usedPrefix}disable *antilink2*_
โฃ เถฌโโน๏ธ _${usedPrefix}enable *detect*_
โฃ เถฌโโน๏ธ _${usedPrefix}disable *detect*_
โฃ เถฌโโน๏ธ _${usedPrefix}enable *restrict*_
โฃ เถฌโโน๏ธ _${usedPrefix}disable *restrict*_
โฃ เถฌโโน๏ธ _${usedPrefix}enable *pconly*_
โฃ เถฌโโน๏ธ _${usedPrefix}disable *pconly*_
โฃ เถฌโโน๏ธ _${usedPrefix}enable *gconly*_
โฃ เถฌโโน๏ธ _${usedPrefix}disable *gconly*_
โฃ เถฌโโน๏ธ _${usedPrefix}enable *autoread*_
โฃ เถฌโโน๏ธ _${usedPrefix}disable *autoread*_
โฃ เถฌโโน๏ธ _${usedPrefix}disable *temporal*_
โฃ เถฌโโน๏ธ _${usedPrefix}enable *temporal*_
โฃ เถฌโโน๏ธ _${usedPrefix}enable *audios*_
โฃ เถฌโโน๏ธ _${usedPrefix}disable *audios*_
โฃ เถฌโโน๏ธ _${usedPrefix}enable *temporal*_
โฃ เถฌโโน๏ธ _${usedPrefix}disable *temporal*_
โฃ เถฌโโน๏ธ _${usedPrefix}enable *antiviewonce*=
โฃ เถฌโโน๏ธ _${usedPrefix}disable *antiviewonce*_
โฃ เถฌโโน๏ธ _${usedPrefix}enable *autosticker*_
โฃ เถฌโโน๏ธ _${usedPrefix}disable *autosticker*_
โโโโโโโโโโโโโโโ
${wm}`, 
title: null,
buttonText: "๐๐๐๐๐๐๐๐๐๐ ๐๐๐๐ข",
sections }

let isEnable = /true|enable|(turn)?on|1/i.test(command)
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let bot = global.db.data.settings[conn.user.jid] || {}
let type = (args[0] || '').toLowerCase()
let isAll = false, isUser = false
switch (type) {
case 'welcome':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.welcome = isEnable
break
case 'detect':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.detect = isEnable
break
case 'delete':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = isEnable
break
case 'antidelete':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = !isEnable
break
case 'public':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['self'] = !isEnable
break
case 'antilink':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink = isEnable
break
case 'antilink2':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink2 = isEnable 
break
case 'modohorny':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.modohorny = isEnable          
break
case 'stickers':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.stickers = isEnable          
break
//case 'temporal':
//if (m.isGroup) {
//if (!(isAdmin || isOwner)) {
//global.dfail('admin', m, conn)
//throw false
//}}
//chat.temporal = isEnable          
//break
case 'temporal':
isAll = true
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
bot.temporal = isEnable
break
case 'autolevelup':
isUser = true
user.autolevelup = isEnable
break
case 'autosticker':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.autosticker = isEnable          
break
case 'audios':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.audios = isEnable          
break
case 'antiver':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiver = isEnable 
break
case 'restrict':
isAll = true
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
bot.restrict = isEnable
break
case 'nyimak':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['nyimak'] = isEnable
break
case 'autoread':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['autoread'] = isEnable
break
case 'pconly':
case 'privateonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['pconly'] = isEnable
break
case 'gconly':
case 'grouponly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['gconly'] = isEnable
break
case 'swonly':
case 'statusonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['swonly'] = isEnable
break
default:
if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, listMessage)
throw false
}
conn.sendButton(m.chat, `๐๏ธ ๐๐๐๐๐๐: ${type} 
๐๏ธ ๐๐๐๐๐๐: ${isEnable ? '๐ฐ๐ฒ๐๐ธ๐๐ฐ๐ณ๐พ' : '๐ณ๐ด๐๐ฐ๐ฒ๐๐ธ๐๐ฐ๐ณ๐พ'}
๐ฃ ๐๐๐๐: ${isAll ? '๐ด๐๐๐ด ๐ฑ๐พ๐' : isUser ? '' : '๐ด๐๐๐ด ๐ฒ๐ท๐ฐ๐'}`, author, null, [[`${isEnable ? 'โ๏ธ ๐ณ๐ด๐๐ฐ๐ฒ๐๐ธ๐๐ฐ๐ โ๏ธ' : 'โ๏ธ ๐ฐ๐ฒ๐๐ธ๐๐ฐ๐ โ๏ธ'}`, `${isEnable ? `#disable ${type}` : `#enable ${type}`}`], ['๐พ ๐ผ๐ด๐ฝ๐ ๐ฟ๐๐ธ๐ฝ๐ฒ๐ธ๐ฟ๐ฐ๐ป ๐พ', '#menu']], m)}

handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff)|[01])$/i
export default handler
