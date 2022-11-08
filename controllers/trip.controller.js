const { Op } = require('sequelize');
const { Trips, Station } = require('../models');

const createTrip = async (req, res) => {
	const trip = req.body;
	const { fromStation, toStation, startTime, price } = req.body;
	console.log(trip);
	try {
		const newTrip = await Trips.create({
			fromStation,
			toStation,
			startTime,
			price,
		});
		res.status(201).send(newTrip);
	} catch (error) {
		res.status(500).send(error.message);
		console.log(error);
	}
};

const readAllTrip = async (req, res) => {
	try {
		const trip = await Trips.findAll({
			include: [
				{
					model: Station,
					as: 'from',
				},
				{
					model: Station,
					as: 'to',
				},
			],
		});
		res.status(200).send(trip);
	} catch (error) {
		res.status(500).send(error.message);
	}
};

module.exports = { createTrip, readAllTrip };
