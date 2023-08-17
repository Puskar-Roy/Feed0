import express from 'express';
import controllers  from '../controller/appController'
const { loginController, registerController } = controllers;

// Set Up Router
const router = express.Router();

// Set Up End Points

//      1.Auth End Point
router.post('/',loginController);
router.post('/register',registerController);















export default router
