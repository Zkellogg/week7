const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Trips");
  //res.render("views", {trip: trip})
});

router.get("/houston", (req, res) => {
  res.send("Houston");
});

module.exports = router;
