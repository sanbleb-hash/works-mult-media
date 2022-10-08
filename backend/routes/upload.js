// Require the Cloudinary library
import express from 'express';
import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';
import path from 'path';

const handler = express.Router();

cloudinary.config({
	api_key: process.env.CLOUDINARY_API_KEY,
	cloud_name: process.env.CLOUDINARY_NAME,
	api_secret: process.env.CLOUDINARY_API_SECRET_KEY,
});

const storage = multer.diskStorage({
	destination(req, file, cb) {
		cb(
			null,
			`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_NAME}/upload`
		);
	},
	filename(req, file, cb) {
		cb(
			null,
			`${file.fieldname} - ${Date.now()}${path.extname(file.originalname)}`
		);
	},
});

function checkFileType(file, cb) {
	const filetypes = /jpg|jpeg|png|mp4/;
	const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
	const mimetype = filetypes.test(file.mimetype);

	if (extname && mimetype) {
		return cb(null, true);
	} else {
		cb('Images only!');
	}
}

const upload = multer({
	storage,
	fileFilter: function (req, file, cb) {
		checkFileType(file, cb);
	},
});
handler.post('/', upload.single('cover'), (req, res) => {
	res.send(`/${req.file.path}`);
});

export default handler;
