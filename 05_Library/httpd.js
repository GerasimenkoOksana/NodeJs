const express = require('express');
const app = express();

app.use(express.static("public"));

const multer = require("multer");
app.use(multer({dest:"public/uploads"}).single("fileData"));

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());

const router = require("./routes");
app.use(router);

const mongoUri = "mongodb+srv://Pupkin:1q2w3e@nodeclaster.g5utz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const mongoose = require("mongoose");
mongoose.connect(
    mongoUri,
    { useNewUrlParser: true, useUnifiedTopology: true },
    function (err){
        if (err) {console.log(err); return;}
        app.listen(3000);
    }
)

