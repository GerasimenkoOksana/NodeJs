const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Comment = new Schema({
        name: String,
        card_id: String
    });

module.exports = mongoose.model("Comments", Comment);