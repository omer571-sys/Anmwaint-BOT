const {Client, Collection,MessageEmbed} = require("discord.js");
const {config} = require("dotenv");
const client = new Client({
    fetchAllMembers: false,
    disableMentions: "everyone"
});
config({path: __dirname+"/.env"});
const {readdirSync} = require("fs");
client.commands = new Collection();
client.aliases = new Collection();
const directory = readdirSync("./command/").filter(f => f.endsWith(".js"));

const {ArcaManager, File} = require("arcadb");
const director = new File("db/Chat.json");
director.ensure();
const db = new ArcaManager(director.path);

module.exports = db;

for(var command of directory) {
    const commands = require(`./command/${command}`);
    client.commands.set(commands.name, commands);
    commands.aliases.forEach(aliasess => {
        client.aliases.set(aliasess, commands.name);
    });
};

client.on("ready", () => {
    console.log(client.user.username);
});

client.login(process.env.TOKEN);
