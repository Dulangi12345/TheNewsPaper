import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import express from 'express'
import { createProxyMiddleware  } from 'http-proxy-middleware'
import cors from 'cors'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const app = express()


app.use (express.json())


const PORT = process.env.PORT || 3000


app.use(express.static(path.join(__dirname, 'dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.use(cors())

app.get('/api' , (req , res) => {
  res.json({
    message: 'Hello from server'
  })
})




app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})


