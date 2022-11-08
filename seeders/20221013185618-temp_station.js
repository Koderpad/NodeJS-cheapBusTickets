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
			'stations',
			[
				{
					name: 'Bến xe Miền Đông TPHCM',
					address: '292 Đinh Bộ Lĩnh, Phường 26, Quận Bình Thạnh',
					province: 'thành phố Hồ Chí Minh',
					updatedAt: '2022-10-13 13:32:17',
					createdAt: '2022-10-13 13:32:17',
				},
				{
					name: 'Bến xe An Sương TPHCM',
					address: 'Ngã tư An Sương, Quốc lộ 22, Bà Điểm, Hóc Môn, TPHCM',
					province: 'thành phố Hồ Chí Minh',
					createdAt: '2022-10-12 15:28:32',
					updatedAt: '2022-10-12 15:28:32',
				},
				{
					name: 'Bến xe Miền Tây TPHCM',
					address: '395 Kinh Dương Vương, An Lạc, Bình Tân, Hồ Chí Minh',
					province: 'thành phố Hồ Chí Minh',
					createdAt: '2022-10-12 15:28:32',
					updatedAt: '2022-10-12 15:28:32',
				},
				{
					name: 'BẾN XE CẦN THƠ',
					address:
						'Nguyễn Trãi - P. An Hội - Q. Ninh Kiều - TP. Cần Thơ - Tỉnh Cần Thơ',
					province: 'Tỉnh Cần Thơ',
					createdAt: '2022-10-12 15:28:32',
					updatedAt: '2022-10-12 15:28:32',
				},
				{
					name: 'Bến xe Giáp Bát Hà Nội',
					address: 'Giải Phóng, Giáp Bát, Hoàng Mai, Hà Nội',
					province: 'Hà Nội',
					createdAt: '2022-10-12 15:28:32',
					updatedAt: '2022-10-12 15:28:32',
				},
				{
					name: 'Bến xe Nước Ngầm Hà Nội',
					address: 'Thị xã Ninh HòaNgọc Hồi, Hoàng Liệt, Hoàng Mai, Hà Nội',
					province: 'Hà Nội',
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
		await queryInterface.bulkDelete('stations', null, {});
	},
};
