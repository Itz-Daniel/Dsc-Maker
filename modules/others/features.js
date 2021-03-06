
/**
 * STARTING THE MODULE WHILE EXPORTING THE CLIENT INTO IT
 * @param {*} client 
 */

 const { MessageEmbed } = require("discord.js");
 const { createbot } = require("../../settings.json");
 module.exports = async (client) => {
 
     let FeaturesChannelID = "936392558312058880"
     client.on('interactionCreate', async interaction => {
         if (!interaction.isSelectMenu()) return;
         if(interaction.message.channel.id == FeaturesChannelID) {
             if(interaction.values[0] === "System Bot"){
                 interaction.reply({
                     embeds: [
                         new MessageEmbed()
                         .setColor(client.config.color)
                         .setTitle("š¤ Bot Features of: __System BOT__ š¤ ")
                         .setDescription("> *System Bot is a __Multifunctional Discord Bot__ and our Main-Most-Ordered Bot!*\n\n> *It has thousands of features, and get weekly updates!*")
                         .addField("**Features Overview:**", `\`\`\`yml\nā 25 Ticket Systems\nā 25 Menu-Ticket-System Options\nā 25 Application Systems\nā Auto Support System\nā Automatic Updateting Roster\nā Advanced Welcome & Leave with Invites Tracking System\nā Audit Log, and Join-Vc-Custom Messages\nā Join Vc Roles\nā 25 Join To Create Systems\nā 25 Serverstats Systems\nā Automatic Server Backups\nā Anti Nuke\nā Anti-Spam, Anti-Links, Anti-Discord, Anti-Caps\nā Blacklisted-Words & Ghost-Ping Detector\nā Automatic Warns\nā Advanced Warn System with adjustable Punishments\nā Reaction Roles\nā Custom Commands & Keywords System\nā Twitter, Youtube, Twitch Poster & Live Roles\nā Rank System with RANKING ROLES\nā Multiple Languages\nā 100+ Music & Filter Commands\nā Fun, Minigame, NSFW Commands\nā Advanced Economy System\nā 600+ Commands, 100+ Slash Commands, 250+ Systems\n\`\`\``)
                         .addField("**Price Overview:**", `> Free Option:**\`6 Invites\`**\n\n> Monthly Option**\`1ā¬ / 30 Days\`**\n\n> Yearly Option: **\`4ā¬ / Year\`**`)
                     ],
                     ephemeral: true
                 });
             }
             if(interaction.values[0] === "Mod Mail Bot"){
                 interaction.reply({
                     embeds: [
                         new MessageEmbed()
                         .setColor(client.config.color)
                         .setTitle("šØ Bot Features of: __MODMAIL BOT__ šØ")
                         .setDescription("> *Modmail Bot is a __Modmail Bot__ (DM-TICKET-SYSTEM)!*\n\n> *It has support for MULTIGUILDS and is crazy fast!\nAutomatic, HTML BASED Ticket Logs and very useful, for shops and little Discord Servers!*")
                         .addField("**Features Overview:**", `\`\`\`yml\nā Multiple Guilds\nā Fast Ticket Creation\nā Ticket Bans\nā Owner Commands\nā Clera Ticket Logs\nā Fully customiceable\n\`\`\``)
                         .addField("**Price Overview:**", `> Free Option:**\`3 Invites\`**\n\n> Monthly Option**\`1ā¬ / 100 Days\`**\n\n> Yearly Option: **\`2ā¬ / Year\`**`)
                     ],
                     ephemeral: true
                 });
             }
             if(interaction.values[0] === "Music Bot"){
                 interaction.reply({
                     embeds: [
                         new MessageEmbed()
                         .setColor(client.config.color)
                         .setTitle("šµ Bot Features of: __MUSIC BOT__ šµ")
                         .setDescription("> *Music Bot is a our Main __Music Bot__!*\n\n> *It has many Features and is crazy fast with a clear, good sounding Audio-Playback-Quality!*")
                         .addField("**Features Overview:**", `\`\`\`yml\nā Instant Fast, cristal Clear Audio-Playback\nā Support for Youtube, Spotify, Soundcloud, Apple Music and more!\nā Supports Radio Stations\nā Stage Channel & Thread Support\nā Pre-Defined Playlists\nā Default Setup Options for Volume, Filters and more!\nā Autoplay and Afk System!\nā Unique Music Request System\n\`\`\``)
                         .addField("**Price Overview:**", `> Free Option:**\`7 Invites\`**\n\n> Monthly Option**\`1ā¬ / 60 Days\`**\n\n> Yearly Option: **\`3ā¬ / Year\`**`)
                     ],
                     ephemeral: true
                 });
             }
 
             if(interaction.values[0] === "Waitingroom Bot"){
                 interaction.reply({
                     embeds: [
                         new MessageEmbed()
                         .setColor(client.config.color)
                         .setTitle("š Bot Features of: __WAITINGROOM BOT__ š")
                         .setDescription("> *Waitingroom Bot is a __Waitingroom Bot__ and can be used 24/7!*\n\n> *With the \`!customsetup [LINK]\` you can setup a 24/7 Playing Playlist for your wished Voice-Channel!*")
                         .addField("**Features Overview:**", `\`\`\`yml\nā 24/7 Music\nā Instant Fast, cristal Clear Audio-Playback\nā Support for Youtube, Spotify, Soundcloud, Apple Music and more!\nā Supports Radio Stations\nā Stage Channel & Thread Support\nā customsetup ... setup custom links for 24/7 Playback\n\`\`\``)
                         .addField("**Price Overview:**", `> Free Option:**\`3 Invites\`**\n\n> Monthly Option**\`1ā¬ / 100 Days\`**\n\n> Yearly Option: **\`2ā¬ / Year\`**`)
                     ],
                     ephemeral: true
                 });
             }
         }
     })
 }
 