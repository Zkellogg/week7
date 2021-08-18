let express = require("express");
let app = express();
let mustacheExpressn = require("mustache-express");

app.use(express.urlencoded());
app.use(express.static("public"));

app.engine("mustache", mustacheExpressn());
app.set("views", "./views");
app.set("view engine", "mustache");

const newTripRout = require("./routes/trips");
app.use("/newTrips", newTripRout);
// ----- pathway code
let trips = [
  {
    id: 1,
    title: "Trip to France",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a9/Heart_of_paris.jpg",
    DOD: "08-17-2021",
    DOR: "08-27-2021",
  },
];

// app.get("/trips", (req, res) => {
//   res.render("views", { allTrips: trips });
// });

app.get("/add-trip", (req, res) => {
  res.render("add-trip", { allTrips: trips });
});
app.post("/update-trip", (req, res) => {
  let { id } = req.body;
  let { title } = req.body;
  let { image } = req.body;
  let { DOD } = req.body;
  let { DOR } = req.body;

  let update = { id: id, title: title, image: image, DOD: DOD, DOR: DOR };
  trips = trips.filter((trip) => trip.id != id);
  trips.push(update);
  res.redirect("/add-trip");
});

app.post("/add-trip", (req, res) => {
  let id = trips.length + 1;
  let { title } = req.body;
  let { image } = req.body;
  let { DOD } = req.body;
  let { DOR } = req.body;

  let trip = { id: id, title: title, image: image, DOD: DOD, DOR: DOR };
  trips.push(trip);
  res.render("add-trip", { allTrips: trips });
});

app.post("/delete-trip", (req, res) => {
  let { id } = req.body;

  trips = trips.filter((trip) => trip.id != id);
  res.redirect("/add-trip");
});

//--- end pathway code
app.listen(3000, () => {
  console.log("Running...");
});
