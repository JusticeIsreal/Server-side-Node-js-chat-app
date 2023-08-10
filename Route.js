const express = require("express");
const router = express.Router();

const { authenticateUser } = require("./Controller");

router.put("/signup", authenticateUser);
module.exports = router;
