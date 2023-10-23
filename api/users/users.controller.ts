const usersService = require('./users.service');
import { Request, Response } from 'express';
import { IUser } from '../../types/types';

export async function getAllUsers(req: Request, res: Response): Promise<IUser[]> {
	try {
		const { limit, offset } = req.query;
		const users = await usersService.getAllUsers(limit, offset);
		return users;
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
}

export async function filterUserByName(req: Request, res: Response): Promise<IUser> {
	try {
		const { name } = req.params;
		const user = await usersService.filterUserByName(name);
		return user;
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
}

export async function filterUserByEmail(req: Request, res: Response): Promise<IUser[]> {
	try {
		const { email } = req.params;
		const user = await usersService.filterUserByEmail(email);
		return user;
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
}

export async function deleteUser(req: Request, res: Response) {
	try {
		const { id } = req.params;
		await usersService.deleteUser(id);
		res.end();
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
}
