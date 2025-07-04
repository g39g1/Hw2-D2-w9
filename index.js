import express from 'express';
import router from './router.js';  

const app = express();
const port = 3003;

app.use(express.json());
app.use('/', router);  

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
