import express from 'express';
import { createMyUser } from '../controllers/myUserController';
import { jwtCheck } from '../middleware/auth';

const router = express.Router();

router.post('/', jwtCheck, createMyUser);

export default router;