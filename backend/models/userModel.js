const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {

    customer_type:{
        type:String,
        required:true,
    },
    salutation:{
        type:String,
        required:true,
    },
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true, 
        trim: true, 
    },
    password: {
        
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    date_of_birth:{  
        type: Date,   
    },
    country: {
        type: String,
        required: true,
    },
    street:{
        type: String,
        required: true,
    },
    street_number: { 
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    zipcode:{
        type: Number,
        required: true,
    },
    role:{ 
        type: String, 
        enum: ['user', 'admin'], 
        default: 'user'
    },
},
{
    timestamps : true
}
);

const UserModel=mongoose.model('User', userSchema);
module.exports = UserModel;

