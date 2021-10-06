const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Column = new Schema({
        name: String,
        board_id: String
    });

module.exports = mongoose.model("Columns", Column);