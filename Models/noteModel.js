const Datastore = require("nedb-promise");
const notes = new Datastore({
  filename: "./database/notes.db",
  autoload: true,
});

const getAllNotes = () => {
  return notes.find({});
};

const saveNote = (note) => {
  return notes.insert(note);
};

const updateNote = (id, updatedNote) => {
  return notes.update({ _id: id }, updatedNote, {});
};

const deleteNote = (id) => {
  return new Promise((resolve, reject) => {
    notes.remove({ _id: id }, {}, (err, numRemoved) => {
      if (err) {
        reject(err);
      } else {
        resolve(numRemoved);
      }
    });
  });
};

module.exports = { getAllNotes, saveNote, updateNote, deleteNote };
