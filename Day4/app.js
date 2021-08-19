const express = require("express");
const mustacheExpress = require("mustache-express");
const session = require("express-session");
const app = express();

app.use(
  session({
    secret: "THISISSECRETKEY",
    saveUninitialized: true,
  })
);

app.engine("mustache", mustacheExpress());
app.set("views", "./views");
app.set("view engine", "mustache");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/", (req, res));

app.listen(3000, () => {
  console.log("Running...");
});
