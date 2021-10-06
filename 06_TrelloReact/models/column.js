const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Column = new Schema({
    // TODO: Описать поля в коллекции
        name: String,
        board_id: String, // Доска
    // Показатель что у кого то открыто
    // Описание полей не имеет значения
    // JS содает объект динамически
    });

module.exports = mongoose.model("Columns", Column);