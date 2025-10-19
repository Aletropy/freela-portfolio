import TelegramBot from "node-telegram-bot-api";
import { getCryptoPrice } from "../services/cryptoService";

export function startTelegramBot() {
    const token = process.env.TELEGRAM_TOKEN!;

    const bot = new TelegramBot(token, {polling: true})
    console.log(`🤖 Bot do Telegram iniciado.`)

    bot.onText(/\/price (.+)/, async (msg, match) => {
        const chatId = msg.chat.id
        const coinId = match ? match[1] : ''

        const replyMessage = await getCryptoPrice(coinId as string)

        const formattedMessage = replyMessage
            .replace(/\*/g, '_')
            .replace(/\*\*/g, '*');

        bot.sendMessage(chatId, formattedMessage, { parse_mode: "Markdown" })
    })

    bot.on('message', (msg) => {
        if(msg.text?.startsWith('/') && !msg.text.startsWith('/price')) {
            bot.sendMessage(msg.chat.id, "Comando não reconhecido. Use /price <id_da_criptomoeda> para obter o preço atual de uma criptomoeda.")
        }
        if(msg.text?.trim() === '/price') {
            bot.sendMessage(msg.chat.id, "Por favor, forneça o ID de uma criptomoeda. Exemplo: /price bitcoin")
        }
    })
}