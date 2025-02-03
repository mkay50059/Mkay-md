//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kegoimark9@gmail.com";
global.location = "Nairobi,Kenya.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github = process.env.GITHUB || "https://github.com/Frecyber/Mkay-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaihcQv84Om8LP59fO3f";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaihcQv84Om8LP59fO3f";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1d4a42b28790d0f7a7195.jpg";
global.devs = "255620814108,255764182801,255776663848,255752593977";
global.sudo = process.env.SUDO || "255620814108,255764182801,255776663848,255752593977";
global.owner = process.env.OWNER_NUMBER || "254799508700,254786001347";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "composing";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEo4RnRvd1lwenJqeXlGN1p0ZlhGZFJZNC91eXBzdVNlbm1rWXRQR0oyND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK05yRGd3VkYrMlJuR2NEYmJlbURJZHFMTWVGZ3NwcFd6UnZ2Y2l2ZHZWND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwQ2ZLT3h0SXFIZ1hCYTd0N1RIQXVGV3Qva0JCN1NPSWV0eElqdVBNZ1ZzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5VmRqUjdVMDFVcHN0K0ZoWGdCMlFPTWN0bmU2ckc4WGYzRWtOUE5rckVZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9GamZCMkpHNEJoQ1dmWXBvOFBpejZEQ0NDRXpMajVZQXpJcVJscW05blU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IngwNXhSdXpEMVlOYVQzc2w2b2tsUjFGcUJnU0Nzd1JpT0VYNTd4REsxQmc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS083cStaQkd1SExVUlJBNFZxODE5dTNSdFJXOTg0eGFOb0VjS0grRC8ycz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVlpMUTRwRzU2cmtFYXJLOHN1dFE5MzQ3cEM0bitKVTdIaURabHpBRUQzUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ink4VHVrWDN2QUx2UVRHZktWUTdOUVNPNFZiQkNCYVRVNVVhMEh3N1YyWlQ4Vk94NUhMajJRMkQrc3pCNmN2ZEV6WGFPTU10UGNYZzY5bzJXeFVVemdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA1LCJhZHZTZWNyZXRLZXkiOiJxU1dGelNTTDBaNGF6MjB2QmNvVjkzM0tmbXZhWEtsUVdXMStDVk1SbnI4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJsdHhZWk9EMVJ3LUJBWTVvUDk0UUh3IiwicGhvbmVJZCI6ImMxZGIyZWQzLTBjOGYtNDNkZi05NTI0LWJmOGJiMDk1YTVhNiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3cnRuVmRqRCtwUjZUaFJtb1QzNUd2dFFOMFk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib2RIanFnUEpITjd1YlhMQ1owT0l3VjdIRStJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkNCNUpNUlo2IiwibWUiOnsiaWQiOiIyNTQ3OTk1MDg3MDA6MjdAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiVW5rbm93biJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSlh0cWl3UTFkQ0V2UVlZQXlBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoicjlUK1doWnBGc2JyaXRoRUpwc2U5eDgyckxGQm0wVnBqTHFDWlFoY0JpVT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiMjZWMzZXRzUxaWlCZ3BDa1Z1U1BSRGRBUVRjRmlsOWtERCtqRXdVTlY2YnVXRnZzdTYzLzdCK2R1by96VllFM3BZVktRcWJhVGdZQ2pSMUErTGJGQmc9PSIsImRldmljZVNpZ25hdHVyZSI6Ikk0cHd5RzhJc3dPOE9QMDZuMC9FTi9ST3RjTWplN2dpY3BOVmo1dXpaNjNldmdENkJreW5BcEJZMi9jZXVnZjE0Q1hjRHI2b01RUXFRU0V0OG1xRGdBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0Nzk5NTA4NzAwOjI3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmEvVS9sb1dhUmJHNjRyWVJDYWJIdmNmTnF5eFFadEZhWXk2Z21VSVhBWWwifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3Mzg2MTQ4ODIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQmJVIn0="
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Kenya| enjoy your time| this is MKAY- 𝚳𝐃",
  author: process.env.PACK_AUTHER || "MKAY",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "MKAY-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "MKAY",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "MKAY").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
