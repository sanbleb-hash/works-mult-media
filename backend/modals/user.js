import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
	{
		displayName: {
			String,
		},
		email: { type: String, required: true, unique: true },

		userID: {
			String,
		},
	},
	{ timestamps: true }
);

const User = mongoose.models.user || mongoose.model('User', userSchema);

export default User;
