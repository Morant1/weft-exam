import { Schema } from 'mongoose';
import * as mongoose from 'mongoose';
import { IUser } from '../types/types';

// Schema
const userSchema = new Schema<IUser>({
	name: { type: String, required: true },
	email: { type: String, required: true },
	groupId: { type: String, required: false, nullable: true },
});

module.exports = mongoose.model('User', userSchema);
