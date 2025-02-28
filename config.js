const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_07_05_02_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQyLFxuICAgICAgICA4NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDk2LFxuICAgICAgICA2OSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDQwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTYwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTczLFxuICAgICAgICA0NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDY1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTcwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxODUsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDUyLFxuICAgICAgICAzMixcbiAgICAgICAgMTE4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTkzLFxuICAgICAgICA0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMzksXG4gICAgICAgIDYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjEwLFxuICAgICAgICA4NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDUzLFxuICAgICAgICA4MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNTksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDkwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDI3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDY1LFxuICAgICAgICA2OSxcbiAgICAgICAgMjAzLFxuICAgICAgICA0MixcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxODgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTY1LFxuICAgICAgICA0OCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDI0LFxuICAgICAgICAxNCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDczLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDg4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTkxLFxuICAgICAgICA1MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMixcbiAgICAgICAgMTAsXG4gICAgICAgIDcxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDYwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMzAsXG4gICAgICAgIDc1LFxuICAgICAgICAxODUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNSxcbiAgICAgICAgMjIzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxODYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgODksXG4gICAgICAgIDI4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDM1LFxuICAgICAgICAyMyxcbiAgICAgICAgMTM1LFxuICAgICAgICA5NSxcbiAgICAgICAgODAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgODgsXG4gICAgICAgIDIxMixcbiAgICAgICAgODcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk3LFxuICAgICAgICA5MixcbiAgICAgICAgMjIzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDI5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDczLFxuICAgICAgICAxODMsXG4gICAgICAgIDU2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDc4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTY5LFxuICAgICAgICA2OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgOTIsXG4gICAgICAgIDUzLFxuICAgICAgICA0LFxuICAgICAgICA2MCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI4LFxuICAgICAgICAxMjksXG4gICAgICAgIDE1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxODIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDU0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA4NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDc1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODIsXG4gICAgICAgIDkwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTM4LFxuICAgICAgICA5MixcbiAgICAgICAgMjA0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDU2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOCxcbiAgICAgICAgMjUzLFxuICAgICAgICA0NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxODgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTAxLFxuICAgICAgICA0NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDcsXG4gICAgICAgIDMxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEzMixcbiAgICAgICAgODIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTAxLFxuICAgICAgICAxODgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjIzLFxuICAgICAgICAxNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDMxLFxuICAgICAgICAxMTksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxODYsXG4gICAgICAgIDQ4LFxuICAgICAgICA4OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDI3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIxMixcbiAgICAgICAgNjQsXG4gICAgICAgIDk2LFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMjIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiaFYyQzJDUFFnV1J2cDZ0L3JwdTdZeHQ0N283dWhVbUJKUk5kcUdPUk9iVT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiblBXYVVDTTFSU1NEbmtlODBFX0QwQVwiLFxuICBcInBob25lSWRcIjogXCI4MTQ2MTQ1OS02ZDhmLTQxN2ItYmVmMi00YTNhN2ViZWUyOGRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODMsXG4gICAgICAyMDEsXG4gICAgICAzMixcbiAgICAgIDE3MyxcbiAgICAgIDU1LFxuICAgICAgMjI2LFxuICAgICAgMTQzLFxuICAgICAgMTA2LFxuICAgICAgMTUyLFxuICAgICAgMjUwLFxuICAgICAgMTY3LFxuICAgICAgNDksXG4gICAgICA1MSxcbiAgICAgIDIyNixcbiAgICAgIDE1NSxcbiAgICAgIDE4LFxuICAgICAgMjEsXG4gICAgICAxMSxcbiAgICAgIDEyMSxcbiAgICAgIDEyNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzLFxuICAgICAgNjUsXG4gICAgICAyNDAsXG4gICAgICAyNDEsXG4gICAgICAxMzUsXG4gICAgICAyNSxcbiAgICAgIDIwMixcbiAgICAgIDE0OCxcbiAgICAgIDkxLFxuICAgICAgMTA0LFxuICAgICAgMjAwLFxuICAgICAgNDksXG4gICAgICA3MSxcbiAgICAgIDI0MSxcbiAgICAgIDY0LFxuICAgICAgMTE3LFxuICAgICAgMjAyLFxuICAgICAgNDgsXG4gICAgICAyMzEsXG4gICAgICAyMDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiODhKRkNOVjFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDc2OTA1MjMzMTo5NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjMxNDEzMDM5Mjg0MzUwOjk0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0piUnFpZ1FwTUNGdmdZWUJDQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiaWlQYlAwY3U1WklneXAxQVlFeEM1dzkrUWRBUnFFeitDNkVFQVJEUCtROD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJrU1I0eG5OaU43WmdpNkUyaU1JZTNXVm9RYWxnVWxWM3c5WkdUMERTWUFsY0lXNFRIYjkrTTNqSVl5N041eHhhQWVobUVlelh4Y3VxK2dzWHhBWENBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJlekNNQ3g0UTIvTDBqTXlnS0Rsa0pXc3gydVh2aGw3YzlYK1JtcCsvcEpNMmpMcDVScEFZQkxZSmRReWFzUTRQMkRCaXBIWWkySE5hakNXOGNXRC9DUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3NjkwNTIzMzE6OTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA3NixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQwNzI2MzEyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUFhJXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQWEkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJqQzFVU1VvU0t2MXBMOHdDRktTK25EeFNJeFZRZE1lMmpXY3Rha1pSSzF3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjg0NTg0NTk4LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwxLDJdfSxcInRpbWVzdGFtcFwiOlwiMTc0MDM4MzY4NjE5MlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
