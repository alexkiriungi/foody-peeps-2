import express, { Request, Response } from 'express';
import cors from 'cors';
import "dotenv/config";
import mongoose from 'mongoose';
import myUserRoute from './routes/myUserRoute';
import myRestaurantRoute from './routes/MyRestaurantRoute';
import restaurantRoute from './routes/Restaurant.Route'
import { v2 as cloudinary } from 'cloudinary';


const app = express();

mongoose.connect(process.env.MONGO_URL as string).then(() => {
    console.log("Connected to database successfully");
});

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.use(express.json());
app.use(cors());

app.use('/api/my/user', myUserRoute);
app.use('/api/my/restaurant', myRestaurantRoute);
app.use('/api/restaurant', restaurantRoute);


app.listen(3000, () => {
    console.log("server started at port: 3000 ");
});