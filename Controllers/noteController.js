const noteModel = require("../Models/noteModel");

const getNotes = async (req, res) => {
  try {
    const allNotes = await noteModel.getAllNotes();
    res.status(200).json(allNotes);
  } catch (error) {
    res.status(500).json({ message: "Error fetching notes" });
  }
};

const saveNote = async (req, res) => {
  try {
    const savedNote = await noteModel.saveNote(req.body);
    res.status(200).json(savedNote);
  } catch (error) {
    res.status(500).json({ message: "Error saving note" });
  }
};

const changeNote = async (req, res) => {
  try {
    const id = req.body._id;
    const updatedNoteData = { ...req.body };
    const updatedNote = await noteModel.updateNote(id, updatedNoteData);
    if (updatedNote === 0) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json({ message: "Note updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error updating note" });
  }
};

const deleteNote = async (req, res) => {
  try {
    const id = req.body._id; // get the id from the request body
    const deletedCount = await noteModel.deleteNote(id);
    if (deletedCount === 0) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json({ message: "Note deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting note" });
  }
};

module.exports = { getNotes, saveNote, changeNote, deleteNote };
