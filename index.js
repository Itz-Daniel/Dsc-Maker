//leaked by Radiant#1106
//youtube.com/CyberneticsDevelopment
//IMPORTING NPM PACKAGES
const Discord = require('discord.js');
const colors = require("colors");
const fs = require("fs");
const Enmap = require("enmap");
//Create the bot client
const client = new Discord.Client({
    allowedMentions: { 
		parse: [ "roles", "users" ],
      	repliedUser: false,
    },
	failIfNotExists: false,
    partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
	intents: [ 
		Discord.Intents.FLAGS.GUILDS,
		Discord.Intents.FLAGS.GUILD_MEMBERS,
		Discord.Intents.FLAGS.GUILD_VOICE_STATES,
		Discord.Intents.FLAGS.GUILD_PRESENCES,
		Discord.Intents.FLAGS.GUILD_MESSAGES,
		Discord.Intents.FLAGS.DIRECT_MESSAGES,
	],
});
client.on("warn", e => console.log(e.stack ? String(e.stack).grey : String(e).grey))
client.on("debug", e => console.log(e.stack ? String(e.stack).grey : String(e).grey))
client.on("rateLimit", e => console.log(JSON.stringify(e).grey))
//DEFINE THE CONFIGURATION FILE
client.config = require("./config.json");
//Define some global collections
client.createingbotmap = new Discord.Collection();
client.cooldowns = new Discord.Collection();
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

client.currentServerIP = String(Object.values(require('os').networkInterfaces()).reduce((r, list) => r.concat(list.reduce((rr, i) => rr.concat(i.family === 'IPv4' && !i.internal && i.address || []), [])), [])).split(".")[3].split(",")[0];

client.allServers = {
	current: client.config.servers[client.currentServerIP] ? client.config.servers[client.currentServerIP] : Object.keys(client.config.servers)[0],
	least: null,
	stats: [],
}


//CREATING THE DATABASES
client.setups = new Enmap({name: "setups",dataDir: "./dbs/others"});
client.bots = new Enmap({name: "bots",dataDir: "./dbs/bots"});
client.payments = new Enmap({name: "payments", dataDir: "./dbs/payments"});
client.payments.ensure("payments", {users: []});
client.payments.ensure("invitepayments", {users: []});
client.staffrank = new Enmap({name: "staffrank",dataDir: "./dbs/others"});
client.ticketdata = new Enmap({name: "ticketdata",dataDir: "./dbs/others"});
/**
 * @INFO LOADING SYSTEMS AND MODULES
 */
require("./modules/commands")(client)
require("./modules/dashboard/index")(client)
require("./modules/tickets/OrderSystem")(client)
require("./modules/tickets/TicketSystem")(client)
require("./modules/others/payment_system")(client)
require('./index_other_tasks')
/**
 * @INFO LOGGING INTO THE BOT CLIENT
 */
client.login(client.config.token);
client.on("ready", () => {
	const stringlength = 69;
	console.log("\n")
	console.log(`     ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓`.bold.yellow)
	console.log(`     ┃ `.bold.yellow + " ".repeat(-1+stringlength-` ┃ `.length)+ "┃".bold.yellow)
	console.log(`     ┃ `.bold.yellow + `Discord Bot is online!`.bold.yellow + " ".repeat(-1+stringlength-` ┃ `.length-`Discord Bot is online!`.length)+ "┃".bold.yellow)
	console.log(`     ┃ `.bold.yellow + ` /--/ ${client.user.tag} /--/ `.bold.yellow+ " ".repeat(-1+stringlength-` ┃ `.length-` /--/ ${client.user.tag} /--/ `.length)+ "┃".bold.yellow)
	console.log(`     ┃ `.bold.yellow + " ".repeat(-1+stringlength-` ┃ `.length)+ "┃".bold.yellow)
	console.log(`     ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛`.bold.yellow)
	console.log("")
	console.log(` [ONLINE] `.yellow + `Logged in as: `.green + `${client.user.tag}`.yellow);
})