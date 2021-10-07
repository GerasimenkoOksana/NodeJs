const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Session = new Schema({
    user_id: String,
    create_at: String
});

module.exports = mongoose.model("Session", Session);
