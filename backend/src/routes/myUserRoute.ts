import express from 'express';
import { createMyUser } from '../controllers/myUserController';

const router = express.Router();

router.post('/', createMyUser);

export default router;