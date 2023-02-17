const router = require("express").Router();
const passport = require("passport");

router.get("/", (req, res, next) => {
  res.render("login");
});

router.post(
  "/login",
  (req, res, next) => {
    console.log("hi");
    console.log(req.user);
    next();
  },
  passport.authenticate("local", {
    failureRedirect: "/",
  }),
  (req, res) => {
    console.log("hi");
    console.log(req.user);
    res.render("welcome");
  }
);

module.exports = router;
