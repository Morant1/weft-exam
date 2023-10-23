import express from 'express';
import { getAllUsers, filterUserByName, filterUserByEmail, deleteUser } from './users.controller';
import { param } from 'express-validator';
import { validateRequestSchema } from '../../middleware/validate-request';
const router = express.Router();

router.get('/', getAllUsers);
router.get(
	'/findByname/:name',
	param('name', 'name muse be a string').isString,
	validateRequestSchema,
	filterUserByName,
);
router.get('/findByEmail/:email', param('email', 'Invalid email').isEmail(), validateRequestSchema, filterUserByEmail);
router.delete('/:id', deleteUser);

module.exports = router;
