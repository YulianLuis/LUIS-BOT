let limit = 50
import fs from 'fs'
import fetch from 'node-fetch'
import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper';
let handler = async (m, { conn, args, isPrems, isOwner, usedPrefix, command }) => {
if (!args || !args[0]) throw `πΈππ ππππΜ ππππππππ?  ππ£ππ§ππ¨π ππ‘ ππ£π‘πππ ππ ππ€πͺππͺππ π₯ππ§π πππ¨πππ§πππ§ ππ‘ ππͺπππ€`
conn.reply(m.chat, `β³ππ¨π₯ππ§π πͺπ£π€π¨ π¨πππͺπ£ππ€π¨ π¦πͺπ ππ£π«πππ’π€π¨ π¨πͺπ¨ ππͺπππ€..β³`, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'π«π π©ππ',
body: 'π»ππ π³ππππ©ππ-π΄π«',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `https://github.com/elrebelde21/The-LoliBot-MD`}}})
let chat = global.db.data.chats[m.chat]
const isY = /y(es)/gi.test(args[1])
const { thumbnail, audio: _audio, title } = await youtubedl(args[0]).catch(async _ => await youtubedlv2(args[0])).catch(async _ => await youtubedlv3(args[0]))
const limitedSize = (isPrems || isOwner ? 350 : limit) * 3074
let audio, source, res, link, lastError, isLimit
for (let i in _audio) {
try {
audio = _audio[i]
isLimit = limitedSize < audio.fileSizeH
if (isLimit) continue
link = await audio.download()
if (link) res = await fetch(link)
isLimit = res?.headers.get('content-length') && parseInt(res.headers.get('content-length')) < limitedSize
if (isLimit) continue
if (res) source = await res.arrayBuffer()
if (source instanceof ArrayBuffer) break
} catch (e) {
audio = link = source = null
lastError = e
}}
if ((!(source instanceof ArrayBuffer) || !link || !res.ok) && !isLimit) throw '[β] π¬ππππ: ' + (lastError || 'π΅π πππ πππππππ πππππππππ ππ πππππ')
conn.sendFile(m.chat, source, title + '.mp3', null, m, false, { mimetype: 'audio/mp4' })
}
handler.help = ['mp3', 'a'].map(v => 'yt' + v + ` <url>`)
handler.tags = ['downloader']
handler.command = /^yt(a|mp3)$/i
export default handler
