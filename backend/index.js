
const connectDB = require('./config/db');
const express = require('express');
const middleware = require('./middleware/errorMiddleware');
const dotenv = require('dotenv').config();
// const mongoose = require("mongoose");
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3001;
// Import routes for users and products
// const usersRouter = require('./routes/userRoutes');
// const User= require('./models/userModel')
/* const bodyParser = require('body-parser'); */
// const jwt = require('jsonwebtoken');
connectDB();

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:false }));

app.use(middleware.errorHandler);

app.use('/my-account', require('./routes/userRoutes'));
app.use('/', require('./routes/productRoutes'));

/* app.use(bodyParser.json()); */

/* app.use(cors({
    origin: `http://localhost:${process.env.PORT}`,  */
    // Allow requests from this origin
   /*  optionsSuccessStatus: 200  */// Some legacy browsers choke on 204
  // }));
  
// app.use(express.static('public'));
/* app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
}); */
// mongoose.connect(process.env.CONNECTION_STRING)

// MongoDB-Verbindung
/* mongoose.connect(process.env.CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}); */
/* const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
}); */
// Routen einbinden
// Routes
/* const authRoutes = require('./routes/authRoutes');
const adminRoutes = require('./routes/adminRoutes'); */

/* app.use('/api/auth', authRoutes);
app.use('/api/admin', authenticateToken, adminRoutes); */

// Middleware for verifying JWT
/* function authenticateToken(req, res, next) {
  const token = req.header('Authorization');
  if (!token) return res.status(401).send('Access denied');

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).send('Invalid token');
    req.user = user;
    next();
  });
} */

/* app.post('/my-account/signupform', (req,res) =>{
  User.create(req.body)
  .then(users => res.json(users))

  .catch(err => {
    console.error(err);
    res.json(err);
  });
}); */

// Start the server

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
