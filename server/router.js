import express from 'express'
import authenticate from './auth';
import {login, getUser, listUsers, signUp} from "./api"
const router = express.Router()

router.post('/login', login);
router.post('/signup', signUp);
router.get('/users', authenticate, listUsers);
router.get('/loggedInUser', authenticate, getUser);

export default router;
