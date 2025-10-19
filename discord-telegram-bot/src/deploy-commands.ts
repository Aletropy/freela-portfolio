import { REST, Routes, SlashCommandBuilder } from "discord.js";
import { configDotenv } from "dotenv";

configDotenv()

const commands = [
    new SlashCommandBuilder()
        .setName("price")
        .setDescription("Mostra o preço atual de uma criptomoeda")
        .addStringOption(option =>
            option.setName('cripto')
            .setDescription('O ID da criptomoeda (ex: bitcoin, ethereum)')
            .setRequired(true)
        ),
].map(command => command.toJSON())

const rest = new REST({version: '10'})
    .setToken(process.env.DISCORD_TOKEN!)

console.log("Iniciando o deploy dos comandos (/) para o Discord.")

rest.put(Routes.applicationCommands(process.env.DISCORD_CLIENT_ID!), {
    body: commands
}).then(() => console.log("Comandos (/) foram deployados com sucesso!"))
.catch(console.error)