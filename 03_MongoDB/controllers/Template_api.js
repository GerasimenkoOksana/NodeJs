//подключить нужную модель
const model = require("../models/template");

 //CREATE =>POST
exports.post = function (req, res){
    console.log("Post start");
    const element = new model(req.body);
    element.save(function (err){
        if (err) {console.log(err); return;}
        return res.sendStatus(201);
    })
};

//READ => GET
exports.get = function (req, res){
    console.log("Get start");
    model.find({},
        function (err, data){
            if (err) {console.log(err); return;}
            res.json(data);
    });
}

//Update => PUT
exports.put = function (req, res){
}

//Delete =>DELETE
exports.delete = function (req,res){
    model.findByIdAndDelete(
        req.body._id,
        {},
        function (err){
            if(err) res.send(err);
            res.sendStatus(200);
        })
}