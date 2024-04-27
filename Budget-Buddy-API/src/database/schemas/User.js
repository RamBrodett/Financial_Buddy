const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
    userID:{
        type:Number,
        required:true
    },
    userName:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    savings:{
        type:Number,
        default: 0
    },
    expenses:{
        type:Number,
        default: 0
    }
});

userSchema.index({userName:1});

module.exports = mongoose.model('User',userSchema);