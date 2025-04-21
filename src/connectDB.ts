import mongoose from 'mongoose';
require('dotenv').config()

export default async function connectDB() {
  try {
    console.log(process.env.DATABASE_URL);
    await mongoose.connect(process.env.DATABASE_URL!);
    console.log('MongoDB connected');
  } catch (err) {
    console.log('Erro ao se conectar no banco');
  }
}
