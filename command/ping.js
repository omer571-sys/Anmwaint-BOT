const {MessageEmbed, Client, Message} = require("discord.js");

module.exports = {
    /**
     * Command name.
     * @param {String} name - Command name.
     */
    name: "ping",
    /**
     * Permissions.
     * @param {Array<String>} permission - Permissions.
     */
    permission: "EVERYONE",
    /**
     * Command aliases.
     * @param {Array<String>} aliases - Command aliases.
     */
    aliases: ["ölç"],
    /**
     * @param {Client} client - Client. 
     * @param {Message} message - Message.
     * @param {String} args - Arguments.
     */
    command(client, message, args) {
        return message.channel.send(`${client.ws.ping}`);
    }
};
