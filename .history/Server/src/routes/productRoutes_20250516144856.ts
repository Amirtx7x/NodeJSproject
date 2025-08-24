import express from 'express';
import { getAllProducts } from 'src/controllers/ProductController.ts';

const router = express.Router();

router.get('/', getAllProducts);

export default router;
