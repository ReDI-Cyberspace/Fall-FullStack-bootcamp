
const connectDB = require('./config/db');
const express = require('express');
const middleware = require('./middleware/errorMiddleware');
const dotenv = require('dotenv').config();
// const mongoose = require("mongoose");
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3001;
// const path = require("path");

connectDB();

// Middleware to parse JSON bodies
app.use(express.json());
/* app.use(express.static(path.join(__dirname, "build")));
app.get("/", (req,res) => {
  res.sendFile(path.join(__dirname, "build/index.html"));
}) */
app.use(cors());
app.use(express.urlencoded({extended:false }));

app.use(middleware.errorHandler);

app.use('/my-account', require('./routes/userRoutes'));
app.use('/', require('./routes/productRoutes'));



// Start the server

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
