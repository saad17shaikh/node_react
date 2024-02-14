import "dotenv/config";
import express from "express";
import { connectDB } from "./src/db/db.js";
const port = process.env.PORT || 5000;
const app = express();

connectDB();
app.get("/", (req, res) => {
  res.send("Hello App is running on port 5000");
});

app.get("/api/profile", (req, res) => {
  res.send(["saad", "shaikh"]);
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
console.log("hello");
