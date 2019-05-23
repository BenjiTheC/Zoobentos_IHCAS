const exphbs = require("express-handlebars");

module.exports = {
  toLowerCase: str => {
    return str.toLowerCase();
  },
  addOne: index => {
    return parseInt(index) + 1;
  },
  isGroupLeader: (order, option) => {
    if ([0, 1, 2].includes(order)) {
      return option.fn(this);
    }
  },
  addSpace: str => {
    return str.split(/(?=[A-Z])/).join(" ");
  }
};
