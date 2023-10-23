import { GroupEnum } from '../../types/types';
const User = require('../../modal/User');
const Group = require('../../modal/Group');

async function getAllUsers(limit: string, offset: string) {
	try {
		const employees = await User.find().limit(limit).skip(offset).lean();
		console.log('Successfully fetch all users');
		return employees;
	} catch (err) {
		console.log(`ERROR: while getting all users`);
		throw err;
	}
}

async function filterUserByName(name: string) {
	try {
		const user = await User.findOne({ name });

		console.log(`Successfully fetch user by name: ${name}`);
		return user;
	} catch (err) {
		console.log(`ERROR: while getting user by name: ${name}`);
		throw err;
	}
}

async function filterUserByEmail(email: string) {
	try {
		const user = await User.findOne({ email });

		console.log(`Successfully fetch user by email: ${email}`);
		return user;
	} catch (err) {
		console.log(`ERROR: while getting user by email: ${email}`);
		throw err;
	}
}

async function deleteUser(userId: string) {
	try {
		const user = await User.findOneAndUpdate({ _id: userId }, { $unset: { groupId: 1 } });

		if (user.groupId) {
			const usersWithGroupId = await User.find({ groupId: user.groupId });
			if (!usersWithGroupId.length) {
				await Group.findOneAndUpdate({ _id: user.groupId }, { status: GroupEnum.EMPTY });
			}
		}

		console.log(`Successfully deleted user by id ${userId}`);
	} catch (err) {
		console.log(`ERROR: cannot remove user ${userId}`);
		throw err;
	}
}

module.exports = {
	getAllUsers,
	deleteUser,
	filterUserByEmail,
	filterUserByName,
};
