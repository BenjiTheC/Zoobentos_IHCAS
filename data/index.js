const members = require("./members");
const intro_pics = require("./intro_pics.json");
const ydcui_publi = require("./YongdeCui_publications.json");
const xqliu_publi = require("./XueqinLiu_publications.json");
const hjwang_publi = require("./HaijunWang_publications.json");
const hzwang_publi = require("./HongzhuWang_publications.json");
const ylliang_publi = require("./YanlingLiang_publications.json");
const other_publi = require("./publications.json");

const all_publi = {
  HongzhuWang: hzwang_publi,
  YanlingLiang: ylliang_publi,
  YongdeCui: ydcui_publi,
  XueqinLiu: xqliu_publi,
  HaijunWang: hjwang_publi,
  OtherMembers: other_publi
};

module.exports = {
  members,
  intro_pics,
  all_publi
};
