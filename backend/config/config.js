const mongoose = require('mongoose');
const colors = require('colors');


const connectDB = async () => {
    try {
        mongoose.set('strictQuery', true);
        const connect = await mongoose.connect(process.env.MONGO_URL,{
            useUnifiedTopology:true,
            useNewUrlParser:true
        })
        console.log(`MongoDB Successfully Connect with : ${connect.connection.host}`.inverse) // this inverse is only Colorful type
    } catch (error) {
        console.error(`Error : ${error.message}`);
        process.exit(1);
    }
}

module.exports = connectDB;