import fs from 'fs'
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let text = `
*—◉ 𝑮𝒊𝒕𝒉𝒖𝒃 𝒅𝒆𝒍 𝒃𝒐𝒕
 *https://github.com/elrebelde21/The-LoliBot-MD-V2*

*—◉ 𝑻𝒖𝒕𝒐𝒓𝒊𝒂𝒍 𝒃𝒐𝒙𝒎𝒊𝒏𝒆 𝒉𝒐𝒕𝒔*
> 𝑻𝒖𝒕𝒐𝒓𝒊𝒂𝒍: https://youtu.be/wWyBHtKzx9Q
> 𝑷𝒂́𝒈𝒊𝒏𝒂: https://dash.boxmineworld.com/register?ref=VU4Pd51F
> 𝑫𝒂𝒔𝒉𝒃𝒐𝒂𝒓𝒅: https://dash.boxmineworld.com
> 𝑷𝒂𝒏𝒆𝒍: https://panel.boxmineworld.com
> 𝑺𝒐𝒑𝒐𝒓𝒕𝒆 𝒔𝒐𝒃𝒓𝒆 𝒍𝒂 𝒑𝒂́𝒈𝒊𝒏𝒂: https://discord.gg/84qsr4v 

------------------------------------

*—◉ 𝑻𝒖𝒕𝒐𝒓𝒊𝒂𝒍 𝒂𝒄𝒊𝒅𝒊𝒄𝒏𝒐𝒅𝒆𝒔 𝒉𝒐𝒕𝒔*
> 𝑻𝒖𝒕𝒐𝒓𝒊𝒂𝒍: https://youtu.be/HyCqmXDHGeQ
> 𝑷𝒂́𝒈𝒊𝒏𝒂: https://billing.acidicnodes.ml/register?ref=PDnm1xiH
> 𝑺𝒐𝒑𝒐𝒓𝒕𝒆 𝒔𝒐𝒃𝒓𝒆 𝒍𝒂 𝒑𝒂́𝒈𝒊𝒏𝒂: https://whatsapp.acidicnodes.com

------------------------------------

*—◉ 𝑪𝒐𝒎𝒂𝒏𝒅𝒐 𝒕𝒆́𝒓𝒎𝒖𝒙*
*[❗] 𝑵𝒐 𝒅𝒊𝒔𝒑𝒐𝒏𝒊𝒃𝒍𝒆 𝒑𝒐𝒓 𝒆𝒍 𝒎𝒐𝒎𝒆𝒏𝒕𝒐 𝒆𝒍 𝒍𝒂 𝑽2.[❗]*
(𝑺𝒊 𝒒𝒖𝒊𝒆𝒓𝒆 𝒊𝒏𝒔𝒕𝒂𝒍𝒂𝒓 𝒂𝒕𝒓𝒂𝒗𝒆 𝒅𝒆 𝒕𝒆́𝒓𝒎𝒖𝒙 𝒉𝒂𝒄𝒆𝒓𝒍𝒐 𝒄𝒐𝒏 𝒍𝒂 𝒗𝒆𝒓𝒔𝒊𝒐́𝒏 𝒂𝒏𝒕𝒆𝒓𝒊𝒐.)

🔸 𝑽𝒊́𝒅𝒆𝒐 𝒕𝒖𝒕𝒐𝒓𝒊𝒂𝒍
https://youtu.be/gh5NajZOTA8

𝒔𝒊 𝒏𝒆𝒄𝒆𝒔𝒊𝒕𝒂𝒔 𝒂𝒚𝒖𝒅𝒂 𝒆𝒏𝒕𝒓𝒂 𝒂𝒍 𝒈𝒓𝒖𝒑𝒐 𝒅𝒆𝒍 𝒃𝒐𝒕

📌 *https://chat.whatsapp.com/Lus9S60MABnH9lF4Wf2T7k*

 𝑶 𝒆𝒔𝒄𝒓𝒊𝒃𝒊𝒎𝒆 𝒂𝒍 wa.me/5492266466080*
 𝒔𝒐𝒍𝒐 𝒑𝒐𝒓 𝒕𝒆𝒎𝒂 𝒅𝒆𝒍 𝒃𝒐𝒕

🔸 𝒏𝒆𝒄𝒆𝒔𝒊𝒕𝒂 2 𝒄𝒆𝒍𝒖 𝒔𝒐𝒍𝒐 𝒑𝒂𝒓𝒂 𝒆𝒔𝒄𝒂𝒏𝒆𝒂𝒓 𝒆𝒍 𝑸𝑹
🔸 𝑰𝒏𝒔𝒕𝒂𝒍𝒂𝒓 𝒕𝒆𝒓𝒎𝒖𝒙 𝒅𝒆 𝑮𝒐𝒐𝒈𝒍𝒆

 𝒑𝒂𝒔𝒐 𝒏𝒖𝒎𝒆𝒓𝒐 1*
 
🔸 termux-setup-storage
    (𝒍𝒆 𝒅𝒂𝒓 𝒆𝒍 𝒑𝒆𝒓𝒎𝒊𝒕𝒆)

🔸  apt update 

🔸  pkg upgrade 

🔸 pkg install git -y

🔸 pkg install nodejs -y

🔸 pkg install ffmpeg -y

🔸 pkg install imagemagick -y

🔸 pkg install yarn

🔸 git clone https://github.com/elrebelde21/The-LoliBot-MD

🔸  cd The-LoliBot-MD

🔸 npm install

🔸 yarn install 

🔸 npm install

🔸 npm update

🔸 ls

🔸 npm start 
 (𝒚 𝒂𝒄𝒂 𝒒𝒖𝒆 𝒗𝒂𝒏 𝒎𝒂𝒏𝒅𝒂 𝒆𝒍 𝑸𝑹 𝒕𝒆𝒏𝒆𝒓 𝒍𝒂  𝒐𝒑𝒄𝒊𝒐𝒏 𝒔𝒂𝒄𝒂 𝒖𝒏𝒂 𝒄𝒂𝒑𝒕𝒖𝒓𝒂 𝒚 𝒎𝒂𝒏𝒅𝒂𝒍𝒂  𝒂 𝒕𝒖 𝒐𝒕𝒓𝒐 𝒄𝒆𝒍𝒖 𝒚 𝒆𝒔𝒄𝒂𝒏𝒆𝒂)
`.trim()   
conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝙲𝙸𝙾𝙽 - 𝙸𝙽𝚂𝚃𝙰𝙻𝙰𝚁𝙱𝙾𝚃',
body: 'ᴛʜᴇ lolibot﹣ MD',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `https://github.com/elrebelde21/The-LoliBot-MD-V2`}}})   
}
handler.command = /^(instalarbot)/i
export default handler
