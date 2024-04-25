const express = require("express");
const router = express.Router();

router.post("/signup", (req, res) => {
  //registrera en användare
  // /api/user/signup
});

router.post("/login", (req, res) => {
  //logga in en användare
  // /api/user/login
});

module.exports = router;
