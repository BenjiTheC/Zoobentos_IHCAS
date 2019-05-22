const express = require("express");
const router = express.Router();
const { intro_pics } = require("../data");

router.get("/", async (req, res) => {
  return res.render("home", { intro_pics });
});

module.exports = router;
