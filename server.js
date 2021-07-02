const express = require("express");
require('dotenv').config({path: './config/.env'});
const connectDB = require('./config/connectDB');
const User = require('./models/User');

const app = express();

const PORT = process.env.PORT || 5000;




app.use(express.json());
connectDB();

//// CRUD ////
// create read update delete
// post put get delete

// add users to the database
app.post('/users/add', async (req, res) => {
  const {name, email, phone} = req.body;
  const newUser = new User({name, email, phone});
  try {
    await newUser.save();
    res.send(newUser);
  } catch (error) {
    res.send({error: error.message});
  }
});

app.listen(PORT, err =>
  err ? console.error(err) : console.log(`server running on port ${PORT}`)
);
