const express = require("express");

const { find, add } = require("./cars-model");

const router = express.Router();

router.get("/", (req, res) => {
  find()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: "Unable to retrieve at theis point" });
    });
});

router.post("/", (req, res) => {
  const body = req.body;
  
  add(body)
    .then(data => {
        res.status(200).json(data);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Nothing for you here, homie!" });
    });
});

module.exports = router;
