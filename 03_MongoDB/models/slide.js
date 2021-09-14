const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Slide = new Schema({
    name: String,
    Msg1: String,
    Msg2: String,
    Msg3: String,
    Msg4: String,
    url:String,
    imgUrl:String,
    LinkText:String
});
module.exports = mongoose.model("Slide", Slide);