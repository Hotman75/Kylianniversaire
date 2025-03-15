require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers
    ]
});

client.once('ready', () => {
    console.log(`✅ Connecté en tant que ${client.user.tag}`);
});

client.on('guildMemberAdd', async (member) => {
    const channel = member.guild.systemChannel; // Canal système du serveur
    if (!channel) return;

    await channel.send(`Jeune aventurier ${member}, bienvenue dans le monde de **${member.guild.name}** !!

Pour participer à ta prochaine aventure, voici ta 1ère destination :


Rejoins-moi si tu l'oses...\n
Ahahahah... BOUM 💣💥🧨 !!!!`);
});

client.login(process.env.DISCORD_TOKEN);
