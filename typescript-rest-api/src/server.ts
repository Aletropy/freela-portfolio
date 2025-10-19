import 'dotenv/config'
import express from 'express'
import taskRoutes from './routes/taskRoutes'
import sequelize from './config/database'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use('/api', taskRoutes)

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`🚀 Servidor rodando em http://localhost:${PORT}`)
    })
}).catch((err) => {
    console.error('Erro ao conectar com o banco de dados:', err)
})