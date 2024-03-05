import express, { Request, Response } from 'express';
import cors from 'cors';
import "dotenv/config";
import mongoose from 'mongoose';

const app = express();

mongoose.connect(process.env.MONGO_URL as string).then(() => {
    console.log("Connected to database successfully");
})

app.use(express.json());
app.use(cors());

app.get('/test', async (req: Request, res: Response) => {
    res.status(200).json({ message: "Hello again!"});
});

app.listen(3000, () => {
    console.log("server started at port: 3000 ");
});