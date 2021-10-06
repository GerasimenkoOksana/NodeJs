const fs = require("fs");
const model = require("../models/image");

//Create => POST
exports.post = function(req, res) {
    const element = new model;
    element.name = req.body.name;
    console.log("dirname:" +__dirname);
    element.data = fs.readFileSync(".."+req.body.name);
    console.log(req.body);
    element.save(function (err) {
        if (err) {
            console.log(err);
            return;
        }
        return res.sendStatus(201);
    })
}

//READ => GET
//"/uploads/97d9f8f36b22b8bb37fa3b0cbb34942e.jpeg"
exports.get = function (req, res){
    console.log("Get start");
    let url_string = window.location.href;
    let url = new URL(url_string);
    let fileName = url.searchParams.get("name")
    model.find(
        {name: fileName},
        function (err,img){
            if (err) {console.log(err); return;}
            fs.writeFileSync({
                file: "C://Users//BOSS//PhpstormProjects//NodeJs//03_MongoDb//public" + img.name,
                data: img.data})
            res.json(img.name);
        });
}

//Delete =>DELETE
exports.delete = function (req,res){
    model.findByIdAndDelete(
        req.body._id,
        {},
        function (err){
            if(err) {console.log(err);res.send(err);}
            res.sendStatus(200);
        })
}