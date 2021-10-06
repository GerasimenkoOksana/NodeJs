const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const npAreas = new Schema({
    name: String,
});

module.exports = mongoose.model("npAreas", npAreas);