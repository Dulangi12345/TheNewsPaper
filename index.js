import  express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import got from 'got';
import bodyParser from 'body-parser';
import { redirect } from 'react-router-dom';


const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const API_SERVICE_URL = 'https://secure.myfees.lk';
const router = express.Router();
const PORT = process.env.PORT || 3001;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDirectoryPath = path.join(__dirname, '/dist');



app.use(express.static(publicDirectoryPath));


app.use(router);

app.get('/', (req, res) => {
  res.send("Hello World");
});


router.post('/api', async (req, res) => {
  try {
    const response = await got.post(`${API_SERVICE_URL}/api/sch/payments`, {
      json: req.body,
      headers: {
        'Content-Type': 'application/json',
      },

    });
    
    console.log(response.body);
    const data = JSON.parse(response.body); 
    if( 'id' in data){
      // res.send(response.body);
      console.log(data.id);
      res.redirect(`${API_SERVICE_URL}/pay/${data.id}`);

    } else {
      console.log("The field 'example_field' is not present in the response.");
    }
  
    
  } catch (error) {
    console.error(error);
    if (error.response) {
      const statusCode = error.response.statusCode;
      res.status(statusCode).json({ error: "External Server Error", statusCode });
    } else {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
});




app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


export default app;