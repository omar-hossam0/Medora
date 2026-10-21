const express = require("express");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Medora Backend is running" });
});

app.listen(port, () => {
  console.log(`Medora Backend is running at http://localhost:${port}`);
});
