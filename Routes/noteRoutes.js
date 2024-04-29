const express = require("express");
const router = express.Router();
const noteController = require("../Controllers/noteController");
const verifyToken = require("../Middleware/tokenAuth");

router.get("/", verifyToken, noteController.getNotes);
router.post("/", verifyToken, noteController.saveNote);
router.put("/", verifyToken, noteController.changeNote);
router.delete("/", verifyToken, noteController.deleteNote);
router.get("/search", verifyToken, noteController.searchNoteByTitle);

module.exports = router;
