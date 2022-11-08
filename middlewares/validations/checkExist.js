const checkExists = (Model) => {
	return async (req, res, next) => {
		const id = req.params.id;
		const model = await Model.findOne({
			where: {
				id: id,
			},
		});
		if (!model) {
			res.status(404).send(`Không có id: ${id}`);
		} else {
			next();
		}
	};
};

module.exports = { checkExists };
