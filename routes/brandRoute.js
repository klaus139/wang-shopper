const express = require('express');
const { createBrand, updateBrand, deleteBrand, getAllBrands, getBrand } = require('../controller/brandCtrl');
const { authMiddleware , isAdmin} = require('../middlewares/authMiddleware');
const router = express.Router()

router.post('/', authMiddleware, isAdmin, createBrand);
router.get('/', getAllBrands);
router.get('/:id', getBrand);
router.put('/:id', authMiddleware, isAdmin, updateBrand);
router.delete('/:id', authMiddleware, isAdmin, deleteBrand);

module.exports=router;
