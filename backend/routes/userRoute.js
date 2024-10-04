const express = require("express");
const { registerUser, getAllUsers } = require("../controllers/userController");

const router = express.Router();

router.get("/", getAllUsers);
router.post("/", registerUser);

module.exports = router;
