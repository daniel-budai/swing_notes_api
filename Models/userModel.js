const { v4: uuidv4 } = require("uuid");
const Datastore = require("nedb-promise");
const users = new Datastore({
  filename: "./database/users.db",
  autoload: true,
});

const insertUser = (user, callback) => {
  user._id = uuidv4();
  users.insert(user, callback);
};

const findUser = (query, callback) => {
  users
    .findOne(query)
    .then((user) => callback(null, user))
    .catch(callback);
};

module.exports = { insertUser, findUser };
