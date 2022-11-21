//Coded by Tharindu Liyanage 2022
// Edit This File 
const fs = require('fs')
const chalk = require('chalk')
// You can Change this Buttons 
// 👈 You Can change this your choice
global.list = ('قائمة القوائم🧬')
global.allmenu = ('كل الق 🎉')
global.script = ('السكربت 🌈')
global.owner = ('المالك 🦋')
global.deploy = ('تطوير 🐥')
global.project = ('مشروع 🦋')
global.donate = ('تبرع 🚀')
global.stop = ('توقف 🛑')
global.skip = ('تخطي ⏩')
global.thanks = ('*مرحبا بك 💙*')
// 👈 You Can change this your choice
global.nextimg = ('الصورة التالية ➡️')
global.audio = ('🎶 صوت')
global.video = ('فيديو 📽')
global.yts = ('بحث اليوتيوب 🌐')
global.play = ('بدأ 🍿')
// 👈 You Can change this your choice

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
