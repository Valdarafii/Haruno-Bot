let fs = require('fs')
global.owner = ['62852164900260', '6288215569001','628998512588', '6283175998566', '6285693602003', '6283153189868'] // Letakan nomor kamu disini
global.APIs = { // API Prefix
  // nama: 'https://website'
  jonaz: 'https://jonaz-api-v2.herokuapp.com',
  neoxr: 'https://api.neoxr.eu.org/',
  nrtm: 'https://nurutomo.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zekais: 'http://zekais-api.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  vhtear: 'https://api.vhtear.com',
  lolhum: 'https://api.lolhuman.xyz',
  bx: 'https://bx-hunter.herokuapp.com',

}
global.APIKeys = { // APIKey nya disini
  // 'https://website': 'apikey'
  'https://api.neoxr.eu.org/': 'yntkts',
  'https://pencarikode.xyz': 'pais',
  'https://api.xteam.xyz': '43289a784037484e',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'FVe0JFCdME58YSKmhoDWdRtyuJt',
  'https://api.lolhuman.xyz': 'ed6c4f2c72b6f92f7d201464',
  'https://api.vhtear.com': 'sayahafiz',
  'http://zekais-api.herokuapp.com': 'grqgD6pU',
  'https://bx-hunter.herokuapp.com': 'Ikyy69',
}

// Sticker WM
global.packname = 'XyzXx'
global.author = 'Bot'

global.wait = '「 ⏱️ 」Harap tunggu...'
global.eror = '「❗」Server ERROR!'
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text='
global.watermark = '©XyzXx'
global.image = 'https://telegra.ph/file/1a3eac3701775793618b3.jpg'
global.thumbfoto = 'https://telegra.ph/file/39bbded9693c9338069fd.jpg'

global.multiplier = 20 // Semakin tinggi, semakin sulit naik level

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
