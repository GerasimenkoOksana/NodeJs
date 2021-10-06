const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//пример -шаблон
const Entity = new Schema({
    //TODO описать поля коллекции
    name:String,
    isEdit:Boolean  //показатель что у кого-то открыт данный экземпляр
    //описание полей не имеет значения JS создает объект динамически
});
module.exports = mongoose.model("Entity", Entity);


