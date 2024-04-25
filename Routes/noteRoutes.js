const express = require("express");
const router = express.Router();
const noteController = require("../Controllers/noteController");

router.get("/", noteController.getNotes);
router.post("/", noteController.saveNote);
router.put("/", noteController.changeNote);
router.delete("/", noteController.deleteNote);
router.get("/search", noteController.searchNoteByTitle);

module.exports = router;
