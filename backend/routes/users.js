const userRouter = require('express').Router();
const getUserByIdValidator = require('../middlewares/validators/userValidators/getUserByIdVaidator');
const updateProfileValidator = require('../middlewares/validators/userValidators/updateProfileValidator');
const updateAvatarValidator = require('../middlewares/validators/userValidators/updateAvatarValidator');

const {
  getUsers,
  getCurrentUserInfo,
  getUserById,
  updateProfile,
  updateAvatar,
} = require('../controllers/users');

userRouter.get('/', getUsers);
userRouter.get('/me', getCurrentUserInfo);
userRouter.get('/:userId', getUserByIdValidator(), getUserById);
userRouter.patch('/me', updateProfileValidator(), updateProfile);
userRouter.patch('/me/avatar', updateAvatarValidator(), updateAvatar);

module.exports = userRouter;
