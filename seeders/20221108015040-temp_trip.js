'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		/**
		 * Add seed commands here.
		 *
		 * Example:
		 * await queryInterface.bulkInsert('People', [{
		 *   name: 'John Doe',
		 *   isBetaMember: false
		 * }], {});
		 */
		await queryInterface.bulkInsert(
			'trips',
			[
				{
					// id: 1,
					fromStation: 1,
					toStation: 2,
					startTime: '2021-11-08 15:00:00',
					price: 200000,
					createdAt: '2022-10-12 15:28:32',
					updatedAt: '2022-10-12 15:28:32',
				},
				{
					// id: 1,
					fromStation: 3,
					toStation: 2,
					startTime: '2021-11-08 15:00:00',
					price: 223000,
					createdAt: '2022-10-12 15:28:32',
					updatedAt: '2022-10-12 15:28:32',
				},
				{
					// id: 1,
					fromStation: 5,
					toStation: 2,
					startTime: '2021-11-08 15:00:00',
					price: 224230,
					createdAt: '2022-10-12 15:28:32',
					updatedAt: '2022-10-12 15:28:32',
				},
				{
					// id: 1,
					fromStation: 1,
					toStation: 4,
					startTime: '2021-11-08 15:00:00',
					price: 1200000,
					createdAt: '2022-10-12 15:28:32',
					updatedAt: '2022-10-12 15:28:32',
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
		await queryInterface.bulkDelete('trips', null, {});
	},
};
