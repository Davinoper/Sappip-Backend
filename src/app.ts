import express from 'express';
import configRoutes from './routes';
import connectDB from './connectDB';

require('dotenv').config();
connectDB();

const app = express();
app.use(express.json());

configRoutes();

export { app };

