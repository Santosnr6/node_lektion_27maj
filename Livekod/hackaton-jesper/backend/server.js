import express from 'express';
import cors from 'cors';
import authRouter from './routes/auth.js';

// Variables
const app = express();
const PORT = 8080;
global.user = null;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/auth', authRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});