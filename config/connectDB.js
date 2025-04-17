const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async ()=> {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URL)
        console.log("DB Connected Successfully!!!");
    }
    catch (err){
        console.log(err.message);
    }
}

module.exports = connectDB;