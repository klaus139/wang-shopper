const Enquiry = require("../models/enqModel")
const validateMongoDbId = require('../utils/validateMongodbid');
const asyncHandler = require('express-async-handler');

const createEnquiry = asyncHandler(async(req, res) => {
    try{
        const newEnquiry = await Enquiry.create(req.body);
        res.json(newEnquiry);

    }catch(error){
        throw new Error(error)
    }
});

const getAllEnquiry = asyncHandler(async(req, res) => {
    try{
        const getEnqs = await Enquiry.find()
        res.json(getEnqs)

    }catch(error){
        throw new Error(error)
    }
});

const getEnquiry = asyncHandler(async(req, res) => {
    const {id} = req.params;
    validateMongoDbId(id);
    try{
        const getEnq = await Enquiry.findById(id);
        res.json(getEnq);

    }catch(error){
        throw new Error(error)
    }
})

const updateEnquiry = asyncHandler(async(req, res) => {
    const {id}  = req.params;
    validateMongoDbId(id)
    try{
        const updatedEnq = await Enquiry.findByIdAndUpdate(id, req.body, {
            new: true
        })
        res.json(updatedEnq)

    }catch(error){
        throw new Error(error)
    }
});

const deleteEnquiry = asyncHandler(async(req, res) => {
    const {id} = req.params;
    validateMongoDbId(id)
    try{
        const deletedEnq = await Enquiry.findByIdAndDelete(id);
        res.json(deletedEnq);

    }catch(error){
        throw new Error(error)
    }
})





module.exports={createEnquiry, getAllEnquiry, getEnquiry, updateEnquiry, deleteEnquiry}