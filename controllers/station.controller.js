const { Op } = require('sequelize');
const { Station } = require('../models');
//create
const createStation = async (req, res) => {
	const ThisStation = req.body;
	try {
		const newStation = await Station.create(ThisStation);
		res.status(201).send(newStation);
	} catch (error) {
		console.log(error);
	}
};

//read All Station
const ReadAllStation = async (req, res) => {
	try {
		const { name } = await req.query;
		if (name) {
			const read = await Station.findAll({
				where: {
					name: {
						[Op.substring]: name,
					},
				},
			});
			res.status(200).send(read);
		} else {
			const readAllStation = await Station.findAll();
			res.status(200).send(readAllStation);
		}
	} catch (error) {
		res.status(500).send(error.message);
	}
};

//read detail Station
const ReadDetailStation = async (req, res) => {
	const stationId = req.params;
	try {
		const detailStation = await Station.findOne({
			where: {
				id: stationId.id,
			},
		});
		res.status(200).send(detailStation);
	} catch (error) {
		res.status(500).send(error.message);
	}
};

//update station
const UpdateStation = async (req, res) => {
	try {
		const stationId = req.params;
		const station = req.body;
		const updateStation = await Station.update(
			{
				name: station.name,
				address: station.address,
				province: station.province,
			},
			{ where: { id: stationId.id } }
		);
		if (updateStation == 1) {
			res.status(200).send(station);
		} else {
			res.status(404).send('not found');
		}
	} catch (error) {
		res.status(500).send(error.message);
	}
};

//delete station
const DeleteStation = async (req, res) => {
	try {
		const stationId = req.params.id;
		const thisStation = await Station.findOne({ where: { id: stationId } });
		await Station.destroy({ where: { id: stationId } }).then(function (
			rowDeleted
		) {
			if (rowDeleted === 1) {
				res.status(200).send(thisStation);
			} else if (rowDeleted === 0) {
				res.status(404).send('not found');
			}
		});

		// if (delSta.status == 1) {
		// 	res.status(200).send(stationId);
		// } else {
		// 	res.status(404).send('not found');
		// }
	} catch (error) {
		res.status(500).send(error.message);
	}
};

module.exports = {
	createStation,
	ReadAllStation,
	ReadDetailStation,
	UpdateStation,
	DeleteStation,
};
