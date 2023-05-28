const express = require('express');
const { createCoupon, getAllCoupons, updateCoupon, deleteCoupon, getACoupon } = require('../controller/couponCtrl');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, isAdmin, createCoupon);
router.get('/', authMiddleware, isAdmin, getAllCoupons);
router.get('/:id', authMiddleware, getACoupon)
router.put('/:id', authMiddleware, isAdmin, updateCoupon);
router.delete('/:id', authMiddleware, isAdmin, deleteCoupon);



module.exports=router;