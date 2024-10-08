//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "234807973737";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMk4rOVZjMDlpZXdBU01kVnVoQnN5WmM2aXl3QjZGTmFXbFc5YjE4aGpVcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaW1XSHRFK1d3Q2oxdk5jSVg4L1E4d05XaS85Ry9mNE94azV3c2VBWWxXMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpRUt2TjJHbzFnWTFXRktZRzI2a3I5b1RoU1I1T3dpM0orZ1YraDl5TldnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOTkR5bjVNcml1cVd4aWdvbXZWbW9LcXQwVUtVdmR2bE1YekZNaFFUV0FnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktBdlhSdE5JcmlVT1FBbmFTOG1yK2JYSjFiUDAzbTZEamJHekhOVm1KR2M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNxaTRUR0k5cG80aHhDaTR4OEo4T094YzdQNjFQb2M1ZElyWkxUaU1FaHc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0lVSm5Sc3lOSUVNa3pEeXlMcml5VGdFNEdHeGpSZ2wwam05dkdnRTMwQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQkNaV1RUVzcrYVloc2NHTkM2UlE1bjJ3K09tME5GUkdWUGJNZ2RQdW5BZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNwc1pMa3RacGU4RWtGeFhVbzMrQzMzQUdVc3FyMDNnV2ZhTVBXeGlwNVNQbVRWNWZZOGFkU1FMNklFNWtsSTAxMXIzSnVnS3pLQ2VyZlhMWE8zWGh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODksImFkdlNlY3JldEtleSI6IkxSS0pYT0xlZFVFaXFwY3Vtd1lZa01Fc2Fwd2E0Q0dtZTJoQ2ZEK295SU09IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImFsRDI4SWFfVGlLWlVlaUhfWVZEOFEiLCJwaG9uZUlkIjoiYTc0MGJiMjEtYTRkNS00ZjI2LThiNjMtNDBjZThmYmZkYTRkIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1IQWcyUlZmaXdmU3JoMVNLdGptRkFkdHIrWT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzYjJpTnVuall5VUZHN25naHVaNXlxc0hqRTA9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTEpYREIyTTQiLCJtZSI6eyJpZCI6IjIzNDgwNzk3MzA3Mzc6MTFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiREUgSEVBVkVOIERFQ09SIEdMT0JBTCBTRVJWSUNFUyBMSU1JVEVEIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNaVZ6cWNERU5XKy83VUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIwYWxKSi9zeVo5bmNTbk5DaXgrdlR3ZUdHLzk2b1BKMHlEbG5aWE1YOUVFPSIsImFjY291bnRTaWduYXR1cmUiOiJuS1I3aXJnMVYyaTlYc1JlTTVNNnlzZU1vdTZiSjQzMHZDREFJQ3l2YWVyZTlZL2l5T053MTFoK3BncGEvbUtvY1kxemlleXVCaHArUUM1OFVROG5CQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiYnlQOWJacXk3M1JVdUxCVkc0RzZwNnY0NUVsS0FLc2FMdkZhcHM3ejdaNTU0bkY4Zi9hUzkzQkViU1JnUGlJUy9XbkZVUWZhbHBQbnEzZDRQSW1HalE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MDc5NzMwNzM3OjExQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmRHcFNTZjdNbWZaM0VwelFvc2ZyMDhIaGh2L2VxRHlkTWc1WjJWekYvUkIifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjM4NTA1OTUsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBUFM4In0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
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
