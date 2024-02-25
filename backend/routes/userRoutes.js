const express = require("express");
const router = express.Router();

const { registerUser, loginUser, getAllUsers} = require('../controllers/userController');
const {protect } = require('../middleware/authMiddleware');


router.post('/signupform', registerUser);
router.post('/', loginUser);
router.get('/',protect,  getAllUsers);

module.exports = router;
