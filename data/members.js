const members = require("./members.json");

module.exports = {
  getAllMembers: async () => {
    return members;
  },

  getGroupLeaders: async () => {
    // get Professors and Associate Professors
    return members.filter(member => {
      return member.order === 0 || member.order === 2;
    });
  },

  getMembersByAggregate: async () => {
    // return an array of arrays, where each array groups the objects with same orders
    const orderArr = [...Array(9).keys()];
    const membersAgg = [];

    orderArr.forEach(order => {
      membersAgg.push(
        members.filter(member => {
          return member.order === order;
        })
      );
    });

    return membersAgg;
  },

  getGroupLeadersFive: async () => {
    // get Professors and Associate Professors
    return members.filter(member => {
      return [0, 1, 2].includes(member.order);
    });
  }
};
