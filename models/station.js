'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Station extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			this.hasMany(models.Trips, {
				foreignKey: 'fromStation'
			});
			this.hasMany(models.Trips, { foreignKey: 'toStation'});
		}
	}
	Station.init(
		{
			name: {
				type: DataTypes.STRING,
				validate: {
					contains(value) {
						if (!value.match(/station/)) {
							throw new Error('Must be a string: station');
						}
					},
				},
			},
			address: DataTypes.STRING,
			province: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'Station',
		}
	);
	return Station;
};
