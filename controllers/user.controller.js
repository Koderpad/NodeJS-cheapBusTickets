const { User, sequelize } = require('../models');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var gravatar = require('gravatar');
const registerUser = async (req, res) => {
	try {
		const { userId } = req.params;
		const user = req.body;
		const initAvatar = gravatar.url(user.email);
		var salt = bcrypt.genSaltSync(10);
		var hash = bcrypt.hashSync(user.password, salt);
		await User.create({
			id: userId,
			name: user.name,
			numberPhone: user.numberPhone,
			email: user.email,
			avatar: initAvatar,
			password: hash,
		});
		res.status(201).send(user);
	} catch (error) {
		res.status(500).send(error.message);
	}
};

const loginUser = async (req, res) => {
	try {
		const { email, password } = req.body;
		const user = await User.findOne({
			where: {
				email: email,
			},
		});
		if (user) {
			var result = bcrypt.compareSync(password, user.password);
			if (result) {
				const token = jwt.sign(
					{
						email: user.email,
						type: user.type,
					},
					'user++',
					{ expiresIn: 60 * 60 }
				);
				res.status(200).send(user);
				console.log(token);
			} else {
				res.status(400).send('password wrong');
			}
		} else {
			res.status(400).send('email wrong');
		}
	} catch (error) {
		res.status(500).send(error.message);
	}
};

const upLoadAvatar = async function (req, res) {
	try {
		const { user } = req;
		const { file } = req;
		console.log(file);
		const userInfo = await User.findOne({ email: user.email });
		userInfo.avatar = `http://localhost:3000/${file.path}`;
		await userInfo.save();
		res.status(200).send(userInfo);
	} catch (error) {
		res.status(500).send(error.message);
	}
};

const getAllTrip = async (req, res) => {
	try {
		const [result, metadata] =
			await sequelize.query(`select users.name,  fromSta.name as fromStation, toSta.name as toStation
				from users 
				inner join tickets on users.id = tickets.userId
				inner join trips on tickets.tripId = trips.id
				inner join stations as fromSta on trips.fromStation = fromSta.id
				inner join stations as toSta on trips.toStation = toSta.id`);
		res.status(200).send(result);
	} catch (error) {
		res.status(500).send(error.message);
	}
};

module.exports = { registerUser, loginUser, upLoadAvatar, getAllTrip };
