import express, { Request, Response } from 'express';
import cors from 'cors';
import "dotenv/config";
import mongoose from 'mongoose';
import myUserRoute from './routes/myUserRoute';

const app = express();

mongoose.connect(process.env.MONGO_URL as string).then(() => {
    console.log("Connected to database successfully");
})

app.use(express.json());
app.use(cors());

app.use('/api/my/user', myUserRoute);

app.listen(3000, () => {
    console.log("server started at port: 3000 ");
});