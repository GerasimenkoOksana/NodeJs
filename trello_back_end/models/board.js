const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Board = new Schema({
        name: String
    });

module.exports = mongoose.model("Boards", Board);