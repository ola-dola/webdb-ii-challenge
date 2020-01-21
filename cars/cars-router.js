const express = require("express");

const { find } = require("./cars-model");

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

module.exports = router;
