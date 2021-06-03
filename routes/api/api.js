const express = require("express");
const developersResources = require("./developers/developers");
const router = express.Router();

router.use("/developers", developersResources);

module.exports = router;
