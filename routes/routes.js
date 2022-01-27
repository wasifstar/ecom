import express from "express";
import {usersignup,userLoginIn} from "../controller/user-controller.js";

import{getProducts,getProductById} from "../controller/products-controller.js";
import{addPaymentGateway, paymentResponse} from "../controller/payment-controller.js";

//wasif mohammad khan

const router = express.Router();

router.post('/signup',usersignup);
router.post('/login' , userLoginIn);

router.get("/products",getProducts);
router.get('/product/:id',getProductById);

router.post('/payment',addPaymentGateway);

router.post('/callback',paymentResponse);

//http://localhost:8000/product/product2
export default router;