import express from 'express';
import { createMyUser, updateMyUser } from '../controllers/myUserController';
import { jwtCheck, jwtParse } from '../middleware/auth';

const router = express.Router();

router.post('/', jwtCheck, createMyUser);
router.put('/', jwtCheck, jwtParse, updateMyUser);

export default router;