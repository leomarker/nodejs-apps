const express = require("express");
const passport = require("passport");
const mongoose = require("mongoose");
const session = require("express-session");
const User = require("./userModel");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// app.use(passport.initialize());
// app.use(passport.session());

app.use(
  session({
    secret: "this is a secret",
    resave: false,
    saveUninitialized: false,
  })
);

app.set("view engine", "ejs");
app.use("/public", express.static("public"));

app.get("/", function (req, res) {
  res.render("login");
});

mongoose
  .connect("mongodb://127.0.0.1:27017/")
  .then(() => {
    app.listen(8080, () => {
      console.log("server running at port 8080");
    });
  })
  .catch((err) => {
    console.log(err);
  });
