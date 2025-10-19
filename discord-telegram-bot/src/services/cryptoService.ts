import axios from "axios"

const API_URL = 'https://api.coingecko.com/api/v3/simple/price'

/**
 * Busca o preço de uma criptomoeda e retorna uma string formatada.
 * @param coinId O ID da moeda (ex: 'bitcoin', 'ethereum')
 * @returns Uma string com a resposta ou uma mensagem de erro.
 */
export async function getCryptoPrice(coinId : string) : Promise<string>
{
    if(!coinId || coinId.trim() === '') {
        return 'Por favor, forneça o ID de uma criptomoeda. Exemplo: /price bitcoin'
    }

    try {
        const response = await axios.get(API_URL, {
            params: {
                ids: coinId.toLowerCase(),
                vs_currencies: 'brl,usd'
            }
        })

        const data = response.data[coinId.toLowerCase()]

        if(!data) {
            return `Não foi possível encontrar a criptomoeda com ID '${coinId}'. Verifique se o ID está correto.`
        }

        const priceBRL = data.brl.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        })
        const priceUSD = data.usd.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })

        return `🪙 O preco de *${coinId.toUpperCase()}* agora é:\n- **${priceBRL}**\n- **${priceUSD}**`
    } catch(error) {
        console.error('Erro ao buscar o preço da criptomoeda:', error)
        return 'Ocorreu um erro ao buscar o preço da criptomoeda. Tente novamente mais tarde.'
    }
}