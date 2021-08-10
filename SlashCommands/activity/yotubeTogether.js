const { CommandInteraction, Client } = require("discord.js");
const discordTogether = require("../../Client/DiscordTogether");

module.exports = {
    name: "together",
    description: "Watch youtube in Voice Channel together!",
    options: [
        {
            name: "channel",
            description: "Channel you want to activite this activity",
            type: "CHANNEL",
        },
    ],
    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     * @param {String[]} args 
     */
    run: async(client, interaction, args) => {
        const [ channelID ] = args;
        const channel = interaction.guild.channels.cache.get(channelID);

        console.log({ channel })

        if(channel.type != "GUILD_VOICE") 
            return interaction.followUp({ 
                content: "Please Choose a Voice Channel"
            });

        discordTogether.createTogetherCode(channelID, "yotube")
        .then((x) => interaction.followUp(x.code));

    },
};