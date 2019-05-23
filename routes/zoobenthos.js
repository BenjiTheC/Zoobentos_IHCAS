const express = require("express");
const router = express.Router();
const { members, intro_pics, all_publi } = require("../data");

const getThreeAndTwo = num => {
  let numOfThree = 0;
  if (num % 3) {
    numOfThree = num % 3 === 2 ? parseInt(num / 3) : parseInt(num / 3) - 1;
  } else {
    numOfThree = num / 3;
  }
  const numOfTwo = (num - 3 * numOfThree) / 2;

  return [numOfThree, numOfTwo];
};

router.get("/", async (req, res) => {
  const group_leaders = await members.getGroupLeaders();
  return res.render("home", { intro_pics, group_leaders });
});

router.get("/members", async (req, res) => {
  const membersGroup = await members.getMembersByAggregate();
  const groupLeaders = await members.getGroupLeadersFive();
  const slides = [[...membersGroup[0], ...membersGroup[1]], membersGroup[2]];

  // tweak and twist the data for rendering the carousel slides
  for (let i = 3; i < membersGroup.length; i++) {
    let currentGroup = membersGroup[i]; // current members group
    let [numOfThree, numOfTwo] = getThreeAndTwo(currentGroup.length);

    let currInd = 0;
    while (numOfThree) {
      slides.push(currentGroup.slice(currInd, currInd + 3));
      currInd += 3;
      numOfThree--;
    }

    while (numOfTwo) {
      slides.push(currentGroup.slice(currInd, currInd + 2));
      currInd += 2;
      numOfTwo--;
    }
  }

  return res.render("members", { slides, groupLeaders });
});

router.get("/publications", async (req, res) => {
  return res.render("publications", { all_publi });
});

router.get("/research", async (req, res) => {
  return res.render("research");
});

module.exports = router;
