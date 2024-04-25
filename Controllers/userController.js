const User = require("../Models/userModel");
const { insertUser } = require("../Models/userModel");
const { hashPassword, comparePassword } = require("../Utils/bcryptUtils");

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

const login = (req, res) => {};

module.exports = { signup, login };
