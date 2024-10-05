const express = require("express");
const {
  registerUser,
  getAllUsers,
  loginUser,
  deleteUser,
  updateUser,
} = require("../controllers/userController");

const router = express.Router();

router.get("/", getAllUsers);
router.post("/", registerUser);
router.post("/login", loginUser);
router.delete("/:id", deleteUser);
router.put("/:id", updateUser);

module.exports = router;
