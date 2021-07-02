const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: String,
  phone: Number,
  password: String,
  adresse: String,
});

module.exports = mongoose.model('User', userSchema);