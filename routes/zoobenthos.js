const express = require("express");
const router = express.Router();
const { members, intro_pics } = require("../data");

router.get("/", async (req, res) => {
  const group_leaders = members.filter(member => {
    return member.order === 1 || member.order === 3;
  });

  return res.render("home", { intro_pics, group_leaders });
});

module.exports = router;
