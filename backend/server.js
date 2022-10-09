import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import uploadRoutes from './routes/upload.js';
import articlesRoutes from './routes/articlesRoutes.js';
import userRoutes from './routes/userRoutes.js';
import { signature } from './routes/cloudinary.js';

// middlware
const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

// connecting to the server
const db = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI);
		console.log('MongoDB Connected...');
	} catch (err) {
		console.error(err.message);
		process.exit(1);
	}
};
db();

// routes
app.use('/api/users', userRoutes);
app.use('/api/articles', articlesRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/v1/upload', signature);
app.use('/', (error, req, res, next) => {
	if (error) {
		throw new Error(error.message);
	}
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`listening on ${PORT}`));
