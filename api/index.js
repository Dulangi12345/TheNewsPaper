import  express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import got from 'got';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const API_SERVICE_URL = 'https://secure.myfees.lk';
const router = express.Router();
const PORT = process.env.PORT || 6001;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDirectoryPath = path.join(__dirname, '../dist');

app.use(express.static(publicDirectoryPath));
app.use(router);

console.log(__dirname)
console.log(publicDirectoryPath)

app.get('/', (req, res) => {
  res.sendFile(path.join(publicDirectoryPath, 'index.html'));
});



router.post('/api', async (req, res) => {
  try {
    const response = await got.post(`${API_SERVICE_URL}/api/sch/payments`, {
      json: req.body,
      responseType: 'json',
    });
    
    console.log(response.body);
    console.log('External Server Status Code:', response.statusCode);
    if(response.statusCode === 201){
    const jsonRes =JSON.stringify(response.body);
    res.send(jsonRes);
    }else{
      res.status(response.statusCode).json({ error: "Unexpected status code", statusCode: response.statusCode });
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