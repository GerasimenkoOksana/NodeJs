const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Board = new Schema({
    // TODO: Описать поля в коллекции
        name: String,
    // Показатель что у кого то открыто
    // Описание полей не имеет значения
    // JS содает объект динамически
    });

module.exports = mongoose.model("Boards", Board);