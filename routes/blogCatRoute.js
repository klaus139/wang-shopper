const express = require('express');
const { createCategory, updateCategory, deleteCategory, getAllCategories, getCategory } = require('../controller/blogCatCtrl');
const { authMiddleware , isAdmin} = require('../middlewares/authMiddleware');
const router = express.Router()

router.post('/', authMiddleware, isAdmin, createCategory);
router.get('/', getAllCategories);
router.get('/:id', getCategory)
router.put('/:id', authMiddleware, isAdmin, updateCategory)
router.delete('/:id', authMiddleware, isAdmin, deleteCategory)

module.exports=router;
