import express from 'express'
import './database/connection'

const app = express()

app.use(express.json())

app.get('/users', (req, res) => {
    return res.json({ msg: 'Olá' })
})

app.listen(3003, () => {
    console.log('server running...')
})