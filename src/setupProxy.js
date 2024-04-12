const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Route to handle form submission
app.post('/register', async (req, res) => {
  try {
    // Extract form data from request body
    const formData = req.body;

    // Make a request to the external API
    const response = await axios.post('https://secure.myfees.lk/api/sch/payments', formData);

    // Handle response from external API
    console.log('Response from external API:', response.data);

    // Optionally, send a response back to the client
    res.status(200).json({ success: true, message: 'Form submitted successfully', responseData: response.data });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
