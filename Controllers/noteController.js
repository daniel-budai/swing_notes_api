const noteModel = require("../Models/noteModel");
const {
  validateNoteTitleLength,
  validateNoteTextLength,
} = require("../Validators/noteValidators");

const getNotes = async (req, res) => {
  try {
    const allNotes = await noteModel.getAllNotes();
    res.status(200).json(allNotes);
  } catch (error) {
    res.status(500).json({ message: "Error fetching notes" });
  }
};

const saveNote = async (req, res) => {
  const { title, text } = req.body;
  const titleError = validateNoteTitleLength(title);
  const textError = validateNoteTextLength(text);

  if (titleError) {
    return res.status(400).json({ message: titleError });
  }

  if (textError) {
    return res.status(400).json({ message: textError });
  }

  try {
    const savedNote = await noteModel.saveNote(req.body);
    res.status(200).json(savedNote);
  } catch (error) {
    res.status(500).json({ message: "Error saving note" });
  }
};

const changeNote = async (req, res) => {
  const { title, text, _id } = req.body;

  if (!title || !text) {
    return res.status(400).json({ message: "Title and text are required" });
  }

  const titleError = validateNoteTitleLength(title);
  const textError = validateNoteTextLength(text);

  if (titleError) {
    return res.status(400).json({ message: titleError });
  }

  if (textError) {
    return res.status(400).json({ message: textError });
  }

  try {
    const updatedNoteData = { title, text };
    const updatedNote = await noteModel.updateNote(_id, updatedNoteData);
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
    const id = req.body._id;
    const deletedCount = await noteModel.deleteNote(id);
    if (deletedCount === 0) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json({ message: "Note deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting note" });
  }
};

const searchNoteByTitle = async (req, res) => {
  try {
    const title = req.query.title;
    const note = await noteModel.searchNoteByTitle(title);
    if (!note) {
      return res
        .status(404)
        .json({ message: "Could not find note with that title" });
    }
    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ message: "Error finding note" });
  }
};

module.exports = {
  getNotes,
  saveNote,
  changeNote,
  deleteNote,
  searchNoteByTitle,
};
