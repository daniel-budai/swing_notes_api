const Datastore = require("nedb-promise");
const users = new Datastore({
  filename: "./database/users.db",
  autoload: true,
});
