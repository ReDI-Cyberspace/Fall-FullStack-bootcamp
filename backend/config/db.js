const mongoose = require('mongoose');
require('dotenv').config();
const db=process.env.CONNECTION_STRING;

// Connect to MongoDB
/* mongoose.connect('mongodb://localhost/herbsdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}); */

/* import mongoose from 'mongoose';*/

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(db);
        console.log(`MongoDB connected: ${conn.connection.host}`);
        console.log(process.env.CONNECTION_STRING);
        
    } catch (error) {
        console.log(`Error from MongoDB: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB; 