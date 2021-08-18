const { urlencoded } = require("express");
const express = require("express");
const app = express();
const mustacheExpress = require("mustache-express");
const movieRouter = require("./routes/movies");

app.use(express.urlencoded());
app.use(express.static("public"));

app.use("/movies", movieRouter);

global.movies = [
  {
    id: 1,
    title: "Batman",
    description: "guy in black suit kicking villians",
    genre: "Action",
    posterURL: "http://www.batman.com",
    details: { 1: "detail 1", 2: "detail 2", 3: "deatail 3" },
  },
];

app.engine("mustache", mustacheExpress());
app.set("views", "./views");
app.set("view engine", "mustache");

app.get("/", (req, res) => {
  res.render("index", { movies: movies });
});

app.listen(3000, () => {
  console.log("running...");
});
