const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const transSchema = new Schema({
    userID:{
        type:Number,
        required:true
    },
    type:{
        type:String,
        enum:['income','expense'],
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    date:{
        type: Date,
        default: Date.now
    }
});

transSchema.index({userID:1});

module.exports = mongoose.model('TransHistory', transSchema);