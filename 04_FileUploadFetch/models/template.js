const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//пример -шаблон
const ModelName = new Schema({
    //TODO описать поля коллекции
    name:String
    //описание полей не имеет значения JS создает объект динамически
});
module.exports = mongoose.model("ModelName", ModelName);


