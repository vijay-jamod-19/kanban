const mongoose = require('mongoose');
const {Schema} = mongoose;


const CardSchema = new Schema({
    User:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    Board:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Board'
    },
    title:{
        type:String,
        required:[true,"Enter Card Name"]
    },
    description:{
        type:String
    },
    status:{
        type:Boolean
    }
},{timestamps:true});

const Card = mongoose.model('Card', CardSchema);

module.exports = Card;
