const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const image = new Schema({
                        name: String,
                        data:String})
module.exports= mongoose.model("image", image);
