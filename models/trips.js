'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Trips extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			this.belongsTo(models.Station, {
				foreignKey: 'fromStation',
				as: 'from',
			});
			this.belongsTo(models.Station, {
				foreignKey: 'toStation',
				as: 'to',
			});
			this.hasMany(models.Tickets, {
				foreignKey: 'tripId',
			});
		}
	}
	Trips.init(
		{
			fromStation: DataTypes.INTEGER,
			toStation: DataTypes.INTEGER,
			startTime: DataTypes.DATE,
			price: DataTypes.FLOAT,
		},
		{
			sequelize,
			modelName: 'Trips',
		}
	);
	return Trips;
};
