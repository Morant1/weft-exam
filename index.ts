import mongoose from 'mongoose';
import express from 'express';
const app = express();
const port = 3001;

//Mongo connection
mongoose.connect('mongodb://root:root@localhost:27017/admin?authMechanism=DEFAULT');
const db = mongoose.connection;

db.on('error', error => console.error('Problem with Mongo', error));
db.once('open', () => console.log('Connected to Mongo!'));

app.use(express.json());

const userRoutes = require('./api/users/users.routes');
app.use('/api/user', userRoutes);

app.listen(port, () => {
	console.log(`Resturant app listening on port ${port}`);
});
