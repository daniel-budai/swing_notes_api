const User = require("../Models/userModel");
const { insertUser } = require("../Models/userModel");
const { hashPassword, comparePassword } = require("../Utils/bcryptUtils");
const { generateToken } = require("../Utils/jwtUtils");

const signup = (req, res) => {
  const user = req.body;
  hashPassword(user.password, (err, hashedPassword) => {
    if (err) {
      res.status(500).json({ message: "Error hashing password", error: err });
    } else {
      user.password = hashedPassword;
      insertUser(user, (err, newUser) => {
        if (err) {
          res.status(500).json({ message: "Error creating user", error: err });
        } else {
          res
            .status(200)
            .json({ message: "User created successfully", user: newUser });
        }
      });
    }
  });
};

const login = (req, res) => {
  const { username, password } = req.body;

  User.findUser({ username }, (err, user) => {
    if (err) {
      res.status(500).json({ message: "Error finding user", error: err });
    } else if (!user) {
      res.status(404).json({ message: "User not found" });
    } else {
      comparePassword(password, user.password, (err, isMatch) => {
        if (err) {
          res
            .status(500)
            .json({ message: "Error comparing passwords", error: err });
        } else if (!isMatch) {
          res.status(401).json({ message: "Incorrect password" });
        } else {
          const token = generateToken(
            { id: user._id },
            process.env.JWT_SECRET,
            "1h"
          );
          res.status(200).json({ message: "Logged in successfully", token });
        }
      });
    }
  });
};

module.exports = { signup, login };
