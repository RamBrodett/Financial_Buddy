require('dotenv');
const mongoose = require('mongoose');
const URI = process.env.URI;

const connectDB = async () => {
    try{
        await mongoose.connect(URI);
    } catch (error){
        console.error('There seems to be an error connecting to Database. Error code: ', error);
        handleError(error);
    }
}

module.exports = connectDB;