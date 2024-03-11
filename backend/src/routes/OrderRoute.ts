import express from 'express';
import { jwtCheck, jwtParse } from '../middleware/auth';
import { createCheckOutSession, getMyOrders, stripeWebhookHandler } from '../controllers/OrderController';

const router = express.Router();

router.post("/checkout/create-checkout-session", jwtCheck, jwtParse, createCheckOutSession);
router.post("/checkout/webhook", stripeWebhookHandler);
router.get("/", jwtCheck, jwtParse, getMyOrders);

export default router;