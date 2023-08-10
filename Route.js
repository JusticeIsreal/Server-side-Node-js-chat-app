const express = require("express");
const router = express.Router();

const { authenticateUser } = require("./Controller");

router.post("/signup", authenticateUser);
module.exports = router;
