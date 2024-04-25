const express = require("express");
const router = express.Router();
const noteController = require("../Controllers/noteController");

router.get("/", noteController.getNotes);
router.post("/", noteController.saveNote);
router.put("/", noteController.changeNote);
router.delete("/", noteController.deleteNote);

module.exports = router;
