import mongoose from 'mongoose';

const articleSchema = new mongoose.Schema(
	{
		title: { type: String, required: true, unique: true },
		cover: { type: String, required: true },
		type: {
			type: String,
			enum: ['photography', 'video-production', 'graphic-design'],
			required: true,
		},
		description: {
			type: String,
		},
		userID: { type: String },
	},
	{ timestamps: true }
);

const Article =
	mongoose.models.Article || mongoose.model('Article', articleSchema);
export default Article;
