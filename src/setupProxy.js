import express from 'express';
import axios from 'axios';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser'; // Import body-parser

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

// Add JSON parsing middleware
app.use(express.static(join(__dirname, 'dist')));
app.use(bodyParser.json());

// Route handler for handling POST requests to /api/sch/payments
app.post('https://thecatalyst.lk/api/sch/payments', async (req, res) => {
  try {
    // Extract data from the request body
    const { name, description, amount, indexNumber, email, phoneNo, classOrCourse, invoice, apiKey } = req.body;

    // Make a POST request to the external API
    const response = await axios.post(
      'https://secure.myfees.lk/api/sch/payments',
      {
        studentName: name,
        description: description,
        amount: amount,
        indexNumber: indexNumber,
        email: email,
        phoneNo: phoneNo,
        classOrCourse: classOrCourse,
        invoice: invoice,
        apiKey: apiKey,
      }
    );

    // Send the response received from the external API back to the client
    res.json(response.data);
  } catch (error) {
    // If an error occurs, send an error response back to the client
    console.error(error);
    res.status(500).json({ error: 'An error occurred while processing your request.' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
