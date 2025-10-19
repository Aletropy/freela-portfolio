import 'dotenv/config'
import { startDiscordBot } from './bots/discordBot'
import { startTelegramBot } from './bots/telegramBot'

console.log("Iniciando bots...")

startDiscordBot()
startTelegramBot()