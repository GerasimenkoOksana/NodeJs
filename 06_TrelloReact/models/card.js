const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Card = new Schema({
    // TODO: Описать поля в коллекции
        name: String,
        column_id: String,
    // Показатель что у кого то открыто
    // Описание полей не имеет значения
    // JS содает объект динамически
    });

module.exports = mongoose.model("Cards", Card);