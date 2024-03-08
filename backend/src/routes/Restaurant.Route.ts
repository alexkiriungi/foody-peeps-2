import express from 'express'
import { param } from 'express-validator';
import { searchRestaurant } from '../controllers/RestaurantController';

const router = express.Router();

router.get("/search/:city", param("city").isString().trim().notEmpty().withMessage("City must be a valid string"), searchRestaurant);


export default router;