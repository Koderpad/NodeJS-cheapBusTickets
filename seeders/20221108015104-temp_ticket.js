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
			'tickets',
			[
				{
					tripId: 2,
					userId: 1,
					createdAt: '2021-04-07 08:35:25',
					updatedAt: '2021-04-07 08:35:25',
				},
				{
					tripId: 1,
					userId: 2,
					createdAt: '2021-04-07 08:35:25',
					updatedAt: '2021-04-07 08:35:25',
				},
				{
					tripId: 3,
					userId: 1,
					createdAt: '2021-04-07 08:35:25',
					updatedAt: '2021-04-07 08:35:25',
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
		await queryInterface.bulkDelete('tickets', null, {});
	},
};
