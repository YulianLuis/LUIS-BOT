import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {
if (!text) throw `*[βππππβ] πΈπ½πΆππ΄ππ΄ π΄π» π½πΎπΌπ±ππ΄ π³π΄ π°π»πΆππ½π° π²π°π½π²πΈπΎπ½ π° π±πππ²π°π*`
try {
let res = await fetch(`https://hadi-api.herokuapp.com/api/soundcloud/play?query=${text}`)
let json = await res.json()
let shortUrl = await (await fetch(`https://tinyurl.com/api-create.php?url=${json.result.download}`)).text()
let soundcloudt = `βββββ¬ ππππππππππ β­ββββΎβ
β¬
ββ£β¨ *ππΈπππ»πΎ:* ${json.result.title}
β΄
β¬
ββ£π *πππ» π³πΈππ΄π²ππΎ:* ${shortUrl}\nβ΄\n\n*- π΄πππππππ ππππππ...*\n\n_οΉ«α΄Κα΄ α΄Κsα΄Ιͺα΄ οΉ£ Κα΄α΄_`
conn.sendFile(m.chat, json.result.thumbnail, '', soundcloudt, m)
conn.sendFile(m.chat, json.result.download, 'error.mp3', null, m, false, { mimetype: 'audio/mp4' })
} catch (e) {
throw '*[βππππβ] π΄πππΎπ, π½πΎ ππ΄ π»πΎπΆππΎ π±πππ²π°π π»π° π²π°π½π²πΈπΎπ½ πΎ π»π° πΏπ°πΆπΈπ½π° π³π΄ π°πππ³π° πΏπ°ππ° π±πππ²π°π π»π° π²π°π½π²πΈπΎπ½ π΄πππ° π²π°πΈπ³π°, πΏπΎπ π΅π°ππΎπ πππ΄π»ππ° π° πΈπ½ππ΄ππ½ππ°ππ»πΎ πΌπ°π ππ°ππ³π΄*'
}}
handler.command = /^(spotify|music|soundcloud|cover)$/i
handler.register = true
handler.limit = 2
export default handler
