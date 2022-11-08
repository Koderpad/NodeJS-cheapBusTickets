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
			'users',
			[
				{
					name: 'Tien',
					email: 'tien09876@gmail.com',
					password: '6723325234',
					numberPhone: '0987987353',
					avatar:
						'https://lh6.googleusercontent.com/X7JYEBXkxFMLWlXgsipqGbOYN6j9Lh_83FdKL-WPAtVKZsNnwrEE-VJVR83IXO73jgq4NrVuwPER2JVgkuyIpFMDMLzN3kbY1uHnD2_5enIx52yB-0IWf_VIfgFcpQBb4Yp3-an0',
					type: 'ADMIN',
					createdAt: '2021-04-07 08:35:25',
					updatedAt: '2021-04-07 08:35:25',
				},
				{
					name: 'Hieu',
					email: 'hieu09876@gmail.com',
					password: '033e5ddwwe',
					numberPhone: '09879673353',
					avatar:
						'https://lh6.googleusercontent.com/X7JYEBXkxFMLWlXgsipqGbOYN6j9Lh_83FdKL-WPAtVKZsNnwrEE-VJVR83IXO73jgq4NrVuwPER2JVgkuyIpFMDMLzN3kbY1uHnD2_5enIx52yB-0IWf_VIfgFcpQBb4Yp3-an0',
					type: 'ADMIN',
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
		await queryInterface.bulkDelete('users', null, {});
	},
};
