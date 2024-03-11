import express from 'express';
import { jwtCheck, jwtParse } from '../middleware/auth';
import { createCheckOutSession, stripeWebhookHandler } from '../controllers/OrderController';

const router = express.Router();

router.post("/checkout/create-checkout-session", jwtCheck, jwtParse, createCheckOutSession);
router.post("/checkout/webhook", stripeWebhookHandler);

export default router;