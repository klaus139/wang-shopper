const express = require('express');

const { authMiddleware , isAdmin} = require('../middlewares/authMiddleware');
const { createEnquiry, getAllEnquiry, getEnquiry, updateEnquiry, deleteEnquiry } = require('../controller/enqCtrl');
const router = express.Router()

router.post('/', authMiddleware, createEnquiry);
router.get('/', getAllEnquiry);
router.get('/:id', getEnquiry);
router.put('/:id', authMiddleware, updateEnquiry);
router.delete('/:id', authMiddleware, isAdmin, deleteEnquiry);

module.exports=router;
