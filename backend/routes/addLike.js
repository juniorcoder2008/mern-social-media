import express from 'express';
import { addLike } from '../controllers/addLike.js';

const router = express.Router();
router.post('/', addLike);

export default router;