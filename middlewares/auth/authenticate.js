const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
	try {
		const token = req.header('auth-token');
		const decode = jwt.verify(token, 'user++');
		if (decode) {
			req.user = decode;
			console.log(decode);
			return next();
		} else {
			res.status(401).send('Unauthorized');
		}
	} catch (error) {
		res.status(500).send(error.message);
	}
};

module.exports = { authenticate };
