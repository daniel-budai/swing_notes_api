const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  //Hämta anteckningar
});

router.post("/", (req, res) => {
  //Spara en anteckning
});

router.put("/", (req, res) => {
  //Ändra en anteckning
});

router.delete("/", (req, res) => {
  //Ta bort en anteckning
});

router.get("/search", (req, res) => {
  //Söka bland anteckningar (VG-krav). Sökning sker på titel.
});

module.exports = router;
