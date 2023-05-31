const express = require('express');
const { authMiddleware , isAdmin} = require('../middlewares/authMiddleware');
const { createColor, getAllColors, getColor, updateColor,deleteColor } = require('../controller/colorCtrl');
const router = express.Router()

router.post('/', authMiddleware, isAdmin, createColor);
router.get('/', getAllColors);
router.get('/:id', getColor);
router.put('/:id', authMiddleware, isAdmin, updateColor);
router.delete('/:id', authMiddleware, isAdmin, deleteColor);

module.exports=router;
