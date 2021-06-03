const express = require("express");
const router = express.Router();
const axios = require("axios");

let developerData = {};

router.post("/", (req, res) => {
  const id = req.body.github_id.toLowerCase();
  const userInfoPromise = axios(`https://api.github.com/users/${id}`);
  const repoInfoPromise = axios(`https://api.github.com/users/${id}/repos`);
  Promise.all([userInfoPromise, repoInfoPromise]).then((responses) => {
    const [devInfo, repoInfo] = responses;
    developerData[id] = { ...req.body, ...devInfo.data, repos: repoInfo.data };
    res.status(201).json({ id });
  });
});

router.get("/", (req, res) => {
  res.status(200).json(Object.values(developerData));
});

router.get("/:id", (req, res) => {
  const devInfo = developerData[req.params.id];
  if (devInfo != undefined) {
    res.status(200).json(devInfo);
  } else {
    res.status(400).json({ error: "User doesn't exists!" });
  }
});

router.delete("/:id", (req, res) => {
  delete developerData[req.params.id];
  res.status(204).json();
});

module.exports = router;
