import { Schema } from 'mongoose';
import * as mongoose from 'mongoose';
import { IGroup, GroupEnum } from '../types/types';

// Schema
const groupSchema = new Schema<IGroup>({
	status: { type: String, enum: GroupEnum, required: true },
});

module.exports = mongoose.model('Group', groupSchema);
