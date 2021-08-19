const express = require("express");
const router = express.Router();

global.moviesByGenre = [];
global.movieDetails = [];

router.post("/add-movie", (req, res) => {
  const userID = req.session.username;

  const id = movies.length + 1;
  const { title } = req.body;
  const { description } = req.body;
  const { genre } = req.body;
  const { posterURL } = req.body;

  if (req.session) {
    let movie = {
      userID: userID,
      id: id,
      title: title,
      description: description,
      genre: genre,
      posterURL: posterURL,
    };

    movies.push(movie);
    res.redirect("/");
  }
});

router.post("/delete-movie", (req, res) => {
  const { id } = req.body;

  movies = movies.filter((movie) => movie.id != id);
  res.redirect("/");
});

router.get("/filter-genre", (req, res) => {
  res.render("filteredGenre");
});

router.post("/filter-genre", (req, res) => {
  const { genre } = req.body;
  moviesByGenre = [];

  moviesByGenre = movies.filter((movie) => movie.genre == genre);

  res.render("filteredGenre", { moviesByGenre: moviesByGenre });
});

router.get("/details", (req, res) => {
  res.render("movieDetails");
});

router.post("/details", (req, res) => {
  const { id } = req.body;

  movieDetails = movies.filter((movie) => movie.id == id);

  res.render("movieDetails", { movieDetails: movieDetails });
});

module.exports = router;
