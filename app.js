// Import express and initialize an instance of the express server
const express = require("express");
const app = express();
const colorsController = require("./Controllers/colorsController.js");

//Import cors
const cors = require("cors");

// Middleware
app.use(cors());
app.use(express.json());
app.use("/colors", colorsController);

app.get("/", (req, res) => {
  res.send("Welcome to Colors App!");
});

app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

module.exports = app;