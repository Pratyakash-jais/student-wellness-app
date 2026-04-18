const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let data = [];

// ✅ Root route (for testing)
app.get("/", (req, res) => {
  res.send("Server is running");
});

// ✅ Get data route
app.get("/getData", (req, res) => {
  res.json(data);
});

// ✅ Save data route
app.post("/saveData", (req, res) => {
  data.push(req.body);
  res.send("Saved");
});

// ✅ IMPORTANT for Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running on port " + PORT));