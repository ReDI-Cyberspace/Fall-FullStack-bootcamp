const express = require("express");
const router = express.Router();

const { registerUser, loginUser, getAllUsers} = require('../controllers/userController');
const {protect } = require('../middleware/authMiddleware');


router.post('/signupform', registerUser);
router.post('/', loginUser);
router.get('/admin',protect,  getAllUsers);


/* const userController = require("../controllers/userController");

router.get('/',userController.getAllUsers)
router.get('/:id', userController.getUserById)
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser); */


/* const { getAllUsers,
       getUserById, 
       createUser,
       updateUser,
       deleteUser
    } = require('../controllers/userController');

router.route('/').get(getAllUsers);
router.route('/:id').get(getUserById);
router.route('/').post(createUser);
router.route('/:id').put(updateUser);
router.route('/:id').delete(deleteUser);
 */
module.exports = router;
