import uploadImage from '../lib/uploadImage.js'
import { sticker } from '../lib/sticker.js'
let handler = async (m, { conn, text }) => {
try {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
let img = await q.download()
let url = await uploadImage(img)
let scircle = global.API('dzx', '/api/canvas/circle', { url }) 
let stiker = await sticker(null, scircle, global.packname, global.author)
conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, { asSticker: true })
} catch (e) {
m.reply('*[βππππβ] π»πΎ ππΈπ΄π½ππΎ, πΎπ²ππππΈπΎ ππ½ π΄πππΎπ, πππ΄π»ππ° π° πΈπ½ππ΄ππ½ππ°ππ»πΎ, π½πΎ πΎπ»ππΈπ³π΄ ππ΄ππΏπΎπ½π³π΄π π° ππ½π° πΈπΌπ°πΆπ΄π½ π»π° π²ππ°π» ππ΄ π²πΎπ½ππ΄πππΈππ° π΄π½ πππΈπ²πΊπ΄π π²πΈππ²ππ»π°π*')
}}
handler.command = /^scircle|circle$/i
handler.register = true
handler.limit = 1
export default handler
/* `https://api.dhamzxploit.my.id/api/canvas/circle?url=${url}` */
