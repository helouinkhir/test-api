const express = require("express");
const router = express.Router();

router.use('/auth',require('./user.router'));

module.exports = router;