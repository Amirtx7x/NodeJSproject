import express from 'express';
import cors from 'cors';
import { connectToDB } from './config/db';
import productRoutes from './routes/productRoutes';

const app = express();
const PORT = 1407;

app.use(cors());
app.use(express.json());

app.use('/api/products', productRoutes);

connectToDB();

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
