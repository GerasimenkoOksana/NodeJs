const express = require("express");
const app = express();

//установить the directories for the static files
app.use(express.static("public"));

//настроим модуль для разборки запросов
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));//false - если передавать в запросах будем только строки;
// true-если нужно не только строки, но и объекты, например картинки
app.use(express.json());

//подключим маршруты
const router = require("./routes");
app.use(router);

//Настройка соединения с базой
const mongoUri = "mongodb+srv://Pupkin:1q2w3e@nodeclaster.g5utz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const mongoose = require("mongoose");

mongoose.connect(  //соединиться с базой
    mongoUri,   //строка соединения
    { useNewUrlParser: true, useUnifiedTopology: true },  //обязательные параметры

    //асинхронный подход - после того, как утсановится соединение
    //JS выполнит эту функцию. В качестве аргумента будет передана ошибка или null
    function (err){   //после соединения обработать результат
        if (err) {console.log(err); return;}  //если ошибка - вывести и остановить апуск
        app.listen(3000);   //если все ок - запустить веб-сервер
    }
)

