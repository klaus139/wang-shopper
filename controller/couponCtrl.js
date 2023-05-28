const Coupon = require('../models/couponModel');
const validateMongoDbId = require('../utils/validateMongodbid');
const asyncHandler = require('express-async-handler');

const createCoupon = asyncHandler(async(req, res) => {
    try{
        const newCoupon = await Coupon.create(req.body);
        res.json(newCoupon)

    }catch(error){
        throw new Error(error)
    }

});

const getAllCoupons = asyncHandler(async(req, res) => {
    try{
        const getAllCoupons = await Coupon.find()
        res.json(getAllCoupons)
    }catch(error){
        throw new Error(error)
    }

})

const updateCoupon = asyncHandler(async(req, res) => {
    const {id} = req.params;
    validateMongoDbId(id);
    try{
        const updatedCoupons = await Coupon.findByIdAndUpdate(id, req.body, {
            new: true,
        }) 
        res.json(updatedCoupons)

    }catch(error){
        throw new Error(error)
    }
})

const getACoupon = asyncHandler(async(req, res) => {
    const {id} = req.params;
    validateMongoDbId(id);
    try{
        const getCoupon = await Coupon.findById(id);
        res.json(getCoupon);

    }catch(error){
        throw new Error(error)
    }
})

const deleteCoupon = asyncHandler(async(req, res) => {
    const {id} = req.params;
    validateMongoDbId(id)
    try{
        const deletedCoupon = await Coupon.findByIdAndDelete(id)
        res.json(deletedCoupon)

    }catch(error){
        throw new Error(error)
    }
})

module.exports={createCoupon, getAllCoupons, updateCoupon, deleteCoupon, getACoupon}