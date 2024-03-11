import express from 'express';
import { jwtCheck, jwtParse } from '../middleware/auth';
import { createCheckOutSession } from '../controllers/OrderController';

const router = express.Router();

router.post("/checkout/create-checkout-session", jwtCheck, jwtParse, createCheckOutSession);

export default router;