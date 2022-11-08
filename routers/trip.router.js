const express = require('express');
const { createTrip, readAllTrip } = require('../controllers/trip.controller');

const tripRouter = express.Router();

tripRouter.post('/', createTrip);
tripRouter.get('/', readAllTrip);

module.exports = { tripRouter };
