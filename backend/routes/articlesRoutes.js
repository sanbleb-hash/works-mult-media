import express from 'express';
import Article from '../modals/article.js';

const handler = express.Router();

handler.post('/create', async (req, res) => {
	const { cover, title, type, description, userRef } = req.body;

	try {
		const article = await Article.findOne({ title });

		if (article) {
			res.status(409).json({ message: 'Article already exists' });
		} else {
			const newArticle = await Article.create({
				cover,
				title,
				type,
				description,
				userID: userRef,
			});
			newArticle.save();
			res.status(201).json(newArticle);
		}
	} catch (err) {
		throw new Error(err.message);
	}
});
handler.get('/', async (req, res) => {
	const match = {
		type: req.query.type,
		page: Number(req.query.pageNumber) || 1,
		pageSize: 3,
	};

	try {
		const count = await Article.countDocuments({
			...match.type,
		});
		const pages = Math.round(count / match.pageSize);
		const articles = await Article.find({
			type: match.type,
		})
			.limit(match.pageSize)
			.skip(match.pageSize * (match.page - 1));
		res.status(200).json({ page: match.page, pages, articles });
	} catch (err) {
		throw new Error(err.message);
	}
});
handler.get('/:id', async (req, res) => {
	try {
		const article = await Article.findById(req.params._id);
		if (!article) {
			return res.status(404).json({ message: 'Article not found' });
		}
		res.status(200).json(article);
	} catch (err) {
		throw new Error(err.message);
	}
});
handler.delete('/:id', async (req, res) => {
	try {
		const article = await Article.findById(req.params.id);
		if (!article) {
			return res.status(404).json({ message: 'Article not found' });
		}
		article.remove();
		res.status(200).json('article deleted');
	} catch (err) {
		throw new Error(err.message);
	}
});
handler.put('/:id', async (req, res) => {
	const { title, description, type } = req.body;

	try {
		const article = await Article.findById(req.params.id);

		if (article) {
			article.title = title;
			article.type = type;
			article.description = description;
			const updateArticle = await article.save();

			res.status(200).json(updateArticle);
		} else {
			return res.status(404).json({ message: 'Article not found' });
		}
	} catch (err) {
		throw new Error(err.message);
	}
});

export default handler;
