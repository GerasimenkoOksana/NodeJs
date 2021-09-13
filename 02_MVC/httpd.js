const express = require("express");
const app = express();

app.use(express.static("public"));  //установить he directories for the static files
const controller = require("./controllers/simpleController");
app.route("/1")
    .get(controller.get)
    .post(controller.post);

app.listen(3000);
