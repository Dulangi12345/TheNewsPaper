// server.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Route to handle POST requests to /api/posts
app.post('/api/posts', (req, res) => {
  // Extract data from request body
  const { apiKey, studentName, description, amount, indexNumber, email, phoneNo, classOrCourse, invoice } = req.body;

  // Process the data (e.g., save to database)
  // Respond with a success message or appropriate data
  res.json({ success: true, message: 'Post created successfully' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
