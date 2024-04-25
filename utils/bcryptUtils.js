const bcrypt = require("bcryptjs");

const hashPassword = (password, callback) => {
  bcrypt.hash(password, 10, callback);
};

const comparePassword = (password, hashedPassword, callback) => {
  bcrypt.compare(password, hashedPassword, callback);
};

module.exports = { hashPassword, comparePassword };
