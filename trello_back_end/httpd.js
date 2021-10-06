const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");

app.use(express.static(path.join(__dirname,"public")));
app.use(cors());
const multer = require("multer");
app.use(multer(
    {dest: path.join(__dirname,"public/uploads")})
    .single("fileData"));

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

const router = require("./routes");
app.use(router);

const mongoUri = "mongodb+srv://Pupkin:1q2w3e@nodeclaster.g5utz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const mongoose = require("mongoose");

mongoose.connect(mongoUri,
    { useNewUrlParser: true, useUnifiedTopology: true },
    function (err) {
        if (err) {console.log(err); return;}
        console.log("http://localhost:3030");
        app.listen(3030); }
);
