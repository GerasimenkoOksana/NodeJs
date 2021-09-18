const model = require("../models/slide");

//CREATE =>POST
exports.post = function (req, res){
    console.log("Post start");
    const element = new model(req.body);
    console.log(req.body);
    element.save(function (err){
        if (err) {console.log(err); return;}
        return res.json(element);
        //return res.sendStatus(201);
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
model.findByIdAndUpdate(
    req.body._id,
    element,
    {
        new:true //создаст новый элемент если не нашел - при необходимости
    },
    function (err, result){
        if(err) {console.log(err);res.send(err);}
        res.send(result);
    }
)
}

//Delete =>DELETE
exports.delete = function (req,res){
    console.log(req.body._id);
    console.log("status Delete");
    model.findByIdAndDelete(
        req.body._id,
        {},
        function (err){
            if(err) {console.log(err);res.send(err);}
            res.sendStatus(200);
        })
}