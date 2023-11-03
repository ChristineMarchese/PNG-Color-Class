const express = require("express");
const {
getAllColors,
getColor,
createColor,
deleteColor,
updateColor,
} = require("../queries/color");
const colors = express.Router();
const { checkName, checkBoolean } = require("../validations/checkColors.js");

colors.get("/", async (req, res) => {
const allColors = await getAllColors();
if (allColors[0]) {
res.status(200).json(allColors);
} else {
res.status(500).json({ error: "server error" });
}
});

colors.get("/:id", async (req, res) => {
const { id } = req.params;
const oneColor = await getColor(id);
if (oneColor) {
res.status(200).json(oneColor);
} else {
res.status(404).json({ error: "Not Found" });
}
});

colors.post("/", checkName, checkBoolean, async (req, res) => {
const body = req.body;
const color = await createColor(body);
res.status(200).json(color);
});

colors.delete("/:id", async (req, res) => {
// Destructure id out of req.params
const { id } = req.params;
// Use if as the argument for our deleteColor function call, and assign the return value to deletedColor
const deletedColor = await deleteColor(id);
// When we get deletedColor back, it will be an object that represents the deleted color.
// We check if the object has the key of id, and if it does then we have a successful call, and we can send back a successful status
if (deletedColor.id) {
res.status(200).json(deletedColor);
} else {
res.status(404).json({ error: "Color Not Found" });
}
});

colors.put("/:id", checkName, checkBoolean, async (req, res) => {
const { id } = req.params;
const body = req.body;
const updatedColor = await updateColor(id, body);
if (updatedColor.id) {
res.status(200).json(updatedColor);
} else {
res.status(404).json({ error: "Color Not Found" });
}
});

module.exports = colors;