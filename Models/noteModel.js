const Datastore = require("nedb-promise");
const notes = new Datastore({
  filename: "./database/notes.db",
  autoload: true,
});
