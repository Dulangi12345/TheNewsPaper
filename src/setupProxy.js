const express = require('express');
const axios = require('axios');
const app = express();

app.post('/addPayment', async (req, res) => {
  try {
    const response = await axios.post(
      "https://secure.myfees.lk/api/sch/payments",
      req.body // Assuming your request body contains the required data
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error:", error.response ? error.response.data : error.message);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
