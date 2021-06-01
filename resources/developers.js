const express = require("express");
const router = express.Router();

developerData = [
  {
    id: "test_user1",
    avatar_url: "https://avatars.githubusercontent.com/u/48331?v=4",
  },
  {
    id: "test_user2",
    avatar_url: "https://avatars.githubusercontent.com/u/20463f2?v=4",
  },
];

router.post("/", (req, res) => {
  const id = req.body.github_id;
  let reqData = req.body;
  reqData["id"] = id;
  // TODO: fetch github repo data middleware
  if (developerData.includes(reqData) == false) {
    developerData.push(reqData);
  }
  res.status(201).send({ id });
});

router.get("/", (req, res) => {
  res.status(200).send(developerData);
});

router.get("/:id", (req, res) => {
  developerData.forEach((element) => {
    if (element["id"] === req.params.id) {
      res.status(200).send(element);
    }
  });
  res.status(400).send();
});

router.delete("/:id", (req, res) => {
  let delIndex = null;
  let currIndex = 0;
  developerData.forEach((element) => {
    if (element["id"] === req.params.id) {
      delIndex = currIndex;
      return;
    }
    currIndex += 1;
  });
  if (delIndex != null) {
    developerData.splice(delIndex, 1);
  }
  res.status(204).send();
});

module.exports = router;
