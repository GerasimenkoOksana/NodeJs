const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Card = new Schema({
        name: String,
        column_id: String,
    });

module.exports = mongoose.model("Cards", Card);