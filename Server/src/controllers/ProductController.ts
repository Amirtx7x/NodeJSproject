import { Request, Response } from 'express';
import { sql } from '../config/db';

export const getAllProducts = async (req: Request, res: Response) => {
    try {
        const result = await sql.query('SELECT * FROM PRODUCTS');
        res.json(result.recordset);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch products' });
    }
};
