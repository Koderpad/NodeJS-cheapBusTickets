const express = require('express');
const { checkExists } = require('../middlewares/validations/checkExist');
const { authenticate } = require('../middlewares/auth/authenticate');
const { authorize } = require('../middlewares/auth/authorize');

const { Station } = require('../models');
const { Model } = require('sequelize');
const {
	createStation,
	ReadAllStation,
	ReadDetailStation,
	UpdateStation,
	DeleteStation,
} = require('../controllers/station.controller');

const stationRouter = express.Router();

stationRouter.post(
	'/',
	// authenticate,
	// authorize(['ADMIN', 'SUPER_ADMIN']),
	createStation
);

stationRouter.get('/', ReadAllStation);
stationRouter.get('/:id', ReadDetailStation);
stationRouter.put('/:id', checkExists(Station), UpdateStation);
stationRouter.delete('/:id', DeleteStation);

module.exports = { stationRouter };
