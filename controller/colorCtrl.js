const Color = require('../models/colorModel');
const validateMongoDbId = require('../utils/validateMongodbid');
const asyncHandler = require('express-async-handler');

const createColor = asyncHandler(async(req, res) => {
    try{
        const newBrand = await Color.create(req.body);
        res.json(newBrand);

    }catch(error){
        throw new Error(error)
    }
});

const getAllColors = asyncHandler(async(req, res) => {
    try{
        const getColors = await Color.find()
        res.json(getColors)

    }catch(error){
        throw new Error(error)
    }
});

const getColor = asyncHandler(async(req, res) => {
    const {id} = req.params;
    validateMongoDbId(id);
    try{
        const getColor = await Color.findById(id);
        res.json(getColor);

    }catch(error){
        throw new Error(error)
    }
})

const updateColor = asyncHandler(async(req, res) => {
    const {id}  = req.params;
    validateMongoDbId(id)
    try{
        const updatedColor = await Color.findByIdAndUpdate(id, req.body, {
            new: true
        })
        res.json(updatedColor)

    }catch(error){
        throw new Error(error)
    }
});

const deleteColor = asyncHandler(async(req, res) => {
    const {id} = req.params;
    validateMongoDbId(id)
    try{
        const deletedColor = await Color.findByIdAndDelete(id);
        res.json(deletedColor);

    }catch(error){
        throw new Error(error)
    }
})


module.exports={createColor, updateColor, deleteColor, getAllColors, getColor}