const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Post = new Schema({
    name:String,
    imgUrl: String, //ссылка на главное изображение
    imgUrls: Array, //ссылки на другие изображения н-р для слайдера
    //описание полей не имеет значения JS создает объект динамически
});
module.exports = mongoose.model("Post", Post);


