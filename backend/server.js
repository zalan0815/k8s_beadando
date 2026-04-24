const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

// Egyszerű "adatbázis"
const oscars = {
  2020: "Parasite",
  2021: "Nomadland",
  2022: "CODA",
  2023: "Everything Everywhere All at Once",
  2024: "Oppenheimer",
  2025: "Anora"
};

app.get("/oscar/:year", (req, res) => {
  const year = req.params.year;
  const winner = oscars[year];

  if (winner) {
    res.json({ year, winner });
  } else {
    res.json({ error: "Nincs adat ehhez az évhez" });
  }
});

app.listen(3000, () => {
  console.log("Server fut a http://localhost:3000 címen");
});