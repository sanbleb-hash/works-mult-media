import { v2 as cloudinary } from 'cloudinary';

export const signature = (req, res) => {
	const timestamp = Math.round(new Date().getTime() / 1000);
	const signature = cloudinary.utils.api_sign_request(
		{
			timestamp: timestamp,
		},
		process.env.CLOUDINARY_API_SECRET_KEY
	);
	res.status(200).json({ signature, timestamp });
};
