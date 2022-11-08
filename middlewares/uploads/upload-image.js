const multer = require('multer');
const mkdirp = require('mkdirp');

const upLoadImage = (type) => {
	const made = mkdirp.sync(`./public/images/${type}`);
	const storage = multer.diskStorage({
		destination: function (req, file, cb) {
			cb(null, `./public/images/${type}`);
		},
		filename: function (req, file, cb) {
			const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
			cb(null, uniqueSuffix + '_' + file.originalname);
		},
	});

	const upload = multer({
		storage: storage,
		fileFilter: function (req, file, cb) {
			if (
				file.mimetype === 'image/png' ||
				file.mimetype === 'image/jpg' ||
				file.mimetype === 'image/jpeg'
			) {
				cb(null, true);
			} else {
				cb(new Error('Invalid file type: ' + file.mimetype), false);
			}
		},
	});

	return upload.single(type);
};

module.exports = { upLoadImage };
