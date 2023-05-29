const cloudinary = require('cloudinary');

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret:process.env.SECRET_KEY
})

const cloudinaryUploadImg = async(fileToUplaod) => {
    return new Promise((resolve) => {
        cloudinary.uploader.upload(fileToUplaod, (result) => {
            resolve({
                url:result.secure_url
            }, {
                resource_type: 'auto',
            });
        });
    });
};

module.exports = cloudinaryUploadImg;