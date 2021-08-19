const express = require("express");
const router = express.Router();
global.users = [
  { username: "john", password: "test1" },
  { username: "mike", password: "test2" },
  { username: "mary", password: "test3" },
];

router.get("/register", (req, res) => {
  if (req.session) {
    req.session.currentUser = "";
  }
  res.render("registration");
});

router.post("/register", (req, res) => {
  const { username } = req.body;
  const { password } = req.body;

  user = { username: username, password: password };
  users.push(user);

  res.redirect("/");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.post("/login", (req, res) => {
  const { username } = req.body;
  const { password } = req.body;

  const currentUser = users.find((user) => {
    return user.username == username && user.password == password;
  });

  if (currentUser) {
    if (req.session) {
      req.session.username = currentUser.username;
    }
    res.redirect("dashboard");
  } else {
    res.render("login", { errorMessage: "Username or Password Incorrect" });
  }
});

// global.myMovies = [];

router.get("/dashboard", (req, res) => {
  console.log(movies);
  if (req.session) {
    let myMovies = movies.filter(
      (movie) => movie.userID == req.session.username
    );
    console.log(myMovies);
    res.render("dashboard", {
      username: req.session.username,
      myMovies: myMovies,
    });
  }
});

module.exports = router;
