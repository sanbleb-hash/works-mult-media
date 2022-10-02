import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import articlesRoutes from './routes/articlesRoutes.js';
import userRoutes from './routes/userRoutes.js';

// middlware
const app = express();
app.use(express.json());
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

app.use('/', (req, res) => res.send('the app is running'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`listening on ${PORT}`));
