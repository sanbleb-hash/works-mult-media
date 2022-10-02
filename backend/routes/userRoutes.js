import express from 'express';
import User from '../modals/user.js';

const handler = express.Router();

handler.post('/', async (req, res) => {
	const { displayName, email, userID } = req.body;

	existUser = await User.findOne({ email });
	const newUser = { email, displayName, userID };

	try {
		if (existUser) {
			return res.status(200).json(existUser);
		} else {
			const user = await User.create({ newUser });
			res.status(201).json(user);
		}
	} catch (err) {
		throw new Error(err.message);
	}
});

export default handler;
