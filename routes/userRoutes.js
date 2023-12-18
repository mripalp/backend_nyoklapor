const express = require('express');
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/profile', authMiddleware.verifyUser, userController.getProfile);
router.post('/report', authMiddleware.verifyUser, userController.createReport);
// router.post('/upload/profile', authMiddleware.verifyUser, userController.createReport);

module.exports = router;
