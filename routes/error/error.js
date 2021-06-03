const express = require("express");
const router = express.Router();

//500 Error Handler
router.use((err, req, res, next) => {
  console.error(`{Error:- Something broke : ${err}}`);
  res
    .status(500)
    .json({ error: "Something Broke! Please try after sometime..." });
});

//404 Error Handler
router.use((req, res, next) => {
  console.error(`{Error:- Invalid path : ${req.originalUrl}}`);
  res.status(404).json({ error: "Path not found" });
});

module.exports = router;
