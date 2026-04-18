const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let data = [];

app.post("/saveData", (req, res) => {
  data.push(req.body);
  res.send("Saved");
});

app.get("/getData", (req, res) => {
  res.json(data);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running on port " + PORT));