import { Client, Events, GatewayIntentBits } from "discord.js";
import { getCryptoPrice } from "../services/cryptoService";

export function startDiscordBot() {
    const client = new Client({
        intents: [GatewayIntentBits.Guilds]
    })

    client.once(Events.ClientReady, () => {
        console.log(`🤖 Bot do Discord logado como ${client.user?.tag}`)
    })

    client.on(Events.InteractionCreate, async interaction => {
        if(!interaction.isChatInputCommand()) return;

        const { commandName } = interaction;

        if(commandName === "price") {
            const coinId = interaction.options.getString('cripto', true);
            const replyMessage = await getCryptoPrice(coinId)

            await interaction.reply(replyMessage)
        }
    })

    client.login(process.env.DISCORD_TOKEN)
}