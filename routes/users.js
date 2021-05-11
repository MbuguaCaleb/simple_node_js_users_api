import express from 'express';
import {
  createUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
} from '../controllers/users.js';

const router = express.Router();

router.get('/', getUsers);

router.post('/', createUser);

/*Route Params*/
router.get('/:id', getUser);

/*Router Delete*/
router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);

export default router;
