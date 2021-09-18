const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Portfolio = new Schema({
    name: String,
    author: String,
    description:String,
    works:[]
});
module.exports = mongoose.model("Portfolio", Portfolio);
