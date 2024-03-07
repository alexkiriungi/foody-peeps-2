import express from 'express';
import { createMyUser, updateMyUser, getCurrentUser } from '../controllers/myUserController';
import { jwtCheck, jwtParse } from '../middleware/auth';
import { validateMyUserrequest } from '../middleware/validation';

const router = express.Router();

router.post('/', jwtCheck, createMyUser);
router.put('/', jwtCheck, jwtParse, validateMyUserrequest, updateMyUser);
router.get('/', jwtCheck, jwtParse, getCurrentUser);

export default router;