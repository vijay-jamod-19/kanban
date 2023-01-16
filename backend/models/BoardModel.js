const mongoose = require('mongoose');
const {Schema } = mongoose;

const BoardSchema = new Schema({
    User:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User',  // this name is exactly Model name
    },
    title:{
        type:String,
        required:[true,"Enter Board Name"]
    },

},{timestamps:true});

const Board = mongoose.model('Board',BoardSchema);

module.exports = Board;