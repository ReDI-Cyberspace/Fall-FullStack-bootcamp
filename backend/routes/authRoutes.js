const express = require("express");
/* const router = express.Router();
const UserController = require("../controllers/userController"); */
const jwt = require('jsonwebtoken');

const bcrypt = require('bcrypt');
const UserModel = require('../models/userModel');
const router = express.Router();
// Register a new user
/* router.post("/register", UserController.register); */

// Login
/* router.post("/login", UserController.login); */

// Delete account
/* router.delete("/delete", authenticationMiddleware, UserController.deleteAccount); */

// Registrierung
/* router.post('/register', async (req, res) => {
    try {
      const { username, password } = req.body;
  
      // Überprüfen, ob Benutzer bereits existiert
      const existingUser = await UserModel.findOne({ username });
  
      if (existingUser) {
        return res.status(400).json({ message: 'Benutzer existiert bereits.' });
      }
  
      // Hashen des Passworts
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Benutzer erstellen
      const newUser = await UserModel.create({
        username,
        password: hashedPassword,
      });
  
      res.status(201).json({ message: 'Benutzer erfolgreich erstellt.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Serverfehler.' });
    }
  });
   */
  // Anmeldung
  /* router.post('/login', async (req, res) => {
    const { username, password } = req.body;
  
    const user = await UserModel.findOne({ username });
    if (!user) return res.status(400).send('Invalid username or password');
  
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) return res.status(400).send('Invalid username or password');
  
    const token = jwt.sign({ username, isAdmin: user.isAdmin }, process.env.JWT_SECRET);
    
    // Hier wird der Token im Local Storage gespeichert
    res.json({ token });
  });
  module.exports = router; */