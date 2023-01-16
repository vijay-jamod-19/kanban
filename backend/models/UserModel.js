const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const {Schema} = mongoose;

const UserSchema = new Schema({
    name:{
        type:String,
        required:[true, "Please Enter Name"]
    },
    email:{
        type:String,
        required:[true, "Please Enter Email"]
    },
    password:{
        type:String,
        required:[true, "Please Enter Password"]
    },

},{timestamps:true})

UserSchema.methods.matchPassword = async function (enterPassword){
    return await bcrypt.compare(enterPassword,this.password)
}

// middleware of Password for Register time
UserSchema.pre('save', async function(next){

    if(!this.isModified('password')){
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
})

const User = mongoose.model('User', UserSchema);

module.exports = User;