'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Tickets extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			this.belongsTo(models.Trips, {
				foreignKey: 'tripId',
				as: 'trip',
			});
			this.belongsTo(models.User, {
				foreignKey: 'userId',
				as: 'user',
			});
		}
	}
	Tickets.init(
		{
			tripId: DataTypes.INTEGER,
			userId: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: 'Tickets',
		}
	);
	return Tickets;
};
