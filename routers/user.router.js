const express = require('express');
const { authenticate } = require('../middlewares/auth/authenticate');

const {
	registerUser,
	loginUser,
	upLoadAvatar,
	getAllTrip,
} = require('../controllers/user.controller.js');
const { upLoadImage } = require('../middlewares/uploads/upload-image');
const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.post('/profile', authenticate, upLoadImage('users'), upLoadAvatar);
userRouter.get('/all-trip', getAllTrip);

module.exports = { userRouter };
