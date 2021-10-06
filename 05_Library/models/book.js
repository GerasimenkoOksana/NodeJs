const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Book = new Schema({
    title:String,
    author:String,
    description:String,
    year:Number,
    publisher: String,
    cntPages:Number,
    photo:String
});
module.exports = mongoose.model("Book", Book);