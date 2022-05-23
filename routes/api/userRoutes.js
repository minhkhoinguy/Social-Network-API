const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUsers,
  deleteUsers,
  addFriends,
  deleteFriends
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).put(updateUsers).delete(deleteUsers);

router.route('/api/users/:userId/friends/:friendId').post(addFriends).delete(deleteFriends)

module.exports = router;
