const User = require("../models/userModel");

// @desc        register user
// Request      POST - Public
const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    throw new Error("You must fill in all required fields!");
  }

  // Check if the user already exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    throw new Error("User already exists!");
  }
};
