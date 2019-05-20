const zoobenthosRoutes = require("./zoobenthos");

const constructorMethod = app => {
  app.use("/", zoobenthosRoutes);

  app.use("*", (req, res) => {
    res.redirect("/");
  });
};

module.exports = constructorMethod;
