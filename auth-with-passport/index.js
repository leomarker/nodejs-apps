const express = require("express");
const passport = require("passport");
const mongoose = require("mongoose");
const session = require("express-session");
const User = require("./userModel");
const bodyParser = require("body-parser");
const path = require("path");
const router = require("./routes/route");
const LocalStrategy = require("passport-local").Strategy;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.use("/public", express.static("public"));

app.use(
  session({
    secret: "this is a secret",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new LocalStrategy(function (username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) {
        return done(err);
      }

      if (!user) {
        return done(null, false, { message: "User not found." });
      }
      if (!user.verifyPassword(password)) {
        return done(null, false, {
          message: "Invalid password.",
        });
      }
      return done(null, user);
    });
  })
);
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(router);

// User.register({ username: "nati" }, "123");

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
