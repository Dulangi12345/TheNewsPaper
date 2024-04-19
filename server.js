import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import express from 'express'
import { createProxyMiddleware  } from 'http-proxy-middleware'
import cors from 'cors'
import bodyParser from 'body-parser'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const app = express()


app.use (express.json())


const PORT = process.env.PORT || 3000


app.use(express.static(path.join(__dirname, 'dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.use(cors())

app.use(bodyParser.json());

// POST endpoint to handle the incoming data
app.post('/api/data', (req, res) => {
  // Extract data from the request body
  const { studentName, age, email } = req.body;

  // Do something with the data (e.g., save it to a database)
  console.log('Received data:', { studentName, age, email });

  // Respond with a success message
  res.status(200).json({ message: 'Data received successfully' });
});
app.use(bodyParser.json());

// POST endpoint to handle the incoming data
app.post('/api/data', (req, res) => {
  // Extract data from the request body
  const { studentName, age, email } = req.body;

  // Do something with the data (e.g., save it to a database)
  console.log('Received data:', { studentName, age, email });

  // Respond with a success message
  res.status(200).json({ message: 'Data received successfully' });
});


app.get('/api' , (req , res) => {
  res.json({
    message: 'Hello from server'
  })
})




app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})


