const express = require('express')
const cors = require('cors')
require('dotenv').config()

const authRoutes = require('./routes/auth')
const favoritesRoutes = require('./routes/favorites')
const translateRoutes = require('./routes/translate')
const phrasesRoutes = require('./routes/phrases')

const app = express()
app.use(express.json())

// CORS 設定
app.use(
  cors({
    origin: [
      'http://localhost:5173',
      'https://travel-app-frontend-navy.vercel.app',
    ],
    methods: ['GET', 'POST'],
    credentials: true,
  }),
)

// 路由
app.use('/auth', authRoutes)
app.use('/favorites', favoritesRoutes)
app.use('/translate', translateRoutes)
app.use('/phrases', phrasesRoutes)

module.exports = app
