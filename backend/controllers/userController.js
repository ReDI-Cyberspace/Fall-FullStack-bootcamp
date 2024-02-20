const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');


// Implement CRUD operations for users
//@desc Register new user
//@route POST /my-account/signupform
//@access Public

const registerUser = asyncHandler(async(req,res) => {
    const {customer_type,salutation, first_name, last_name, email, password, phone, date_of_birth, country,
        street,street_number, city, zipcode} = req.body;

if (!customer_type || !salutation || !first_name || !last_name ||  !email || !password || !phone || !country || 
    !street || !street_number || !city || !zipcode){
     res.status(400)
     throw new Error('Please add all fields')   
    }
    //Check of user exist
const userExists = await User.findOne({email})

if(userExists){
    res.status(400)
    throw new Error('User already exists')
}

//Hash password
const salt = await bcrypt.genSalt(10)
const hashedPassword = await bcrypt.hash(password,salt)

//Create user
const user = await User.create({
    customer_type,salutation, first_name, last_name, email, 
    password: hashedPassword, phone, date_of_birth, country,
    street,street_number, city, zipcode
})

if(user){
     res.status(201).json({
        _id: user.id,
        customer_type: user.customer_type,
        salutation: user.salutation,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email, 
        phone: user.phone,
        date_of_birth: user.date_of_birth,
        country: user.country,
        street: user.street,
        street_number: user.street_number,
        city: user.city,
        zipcode: user.zipcode,
        role: user.role,
        // token: generateToken(user._id)
     })
}else{
    res.status(400)
    throw new Error('Invalid user data')
}
});


//@desc Authenticate a user
//@route POST /my-account
//@access Public

const loginUser = asyncHandler(async(req,res) => {
    const {email, password}= req.body
    console.log(email);
    console.log(password);

    //Check for user email
    const user = await User.findOne({email})
    console.log(user);
    if(user && (await bcrypt.compare(password, user.password))){
        const token = generateToken(user._id);
        console.log('Generated Token:', token);
        res.json({
            _id: user.id,
            customer_type: user.customer_type,
            salutation: user.salutation,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email, 
            phone: user.phone,
            date_of_birth: user.date_of_birth,
            country: user.country,
            street: user.street,
            street_number: user.street_number,
            city: user.city,
            zipcode: user.zipcode,
            role: user.role,
            token: token,
        })
    }else{
        res.status(400)
    throw new Error('Invalid credentials') 
    }
});

//@desc Admin get allUsers
//@route GET /my-account/admin
//@access Private
const getAllUsers = asyncHandler(async (req, res) => {
    try {
      const users = await User.find({}, '-password'); // Exclude password field
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });

//@desc Get user data 
//@route POST /my-account/me
//@access Private
  
const getMe = asyncHandler(async (req, res) => {
    const {_id} = await User.findById(req.user.id)

    res.status(200).json(user)
})

  //Generate JWT
  const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
  }

module.exports = { 
    registerUser, 
    loginUser,
    getAllUsers,
}



//