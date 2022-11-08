const authorize = (arrType) => (req, res, next) => {
	try {
		const { user } = req;
		if (arrType.findIndex((ele) => ele === user.type) > -1) {
			return next();
		} else {
			res.status(403).send('Không có quyền truy cập');
		}
	} catch (error) {
		res.status(500).send(error.message);
	}
};
module.exports = { authorize };
