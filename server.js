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

app.listen(3000, () => console.log("Server running on port 3000"));