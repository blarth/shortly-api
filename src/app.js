import cors from 'cors';
import dotenv from 'dotenv';
import express, { json } from 'express';
import router from './routes/index.js';
dotenv.config();

const app = express();
app.use(cors());
app.use(json());
app.use(router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`)
})