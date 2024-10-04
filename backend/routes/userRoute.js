const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("User api homepage");
});

module.exports = router;
