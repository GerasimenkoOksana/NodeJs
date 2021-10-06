const model = require("../models/portfolio");

//Create => POST
exports.post = function(req, res) {
    const element = new model(req.body);
    console.log(req.body);
    element.save(function (err) {
        if (err) {
            console.log(err);
            return;
        }
        return res.json(element);
    })
}

//READ => GET
exports.get = function (req, res){
    console.log("Get start");
    model.find({},
        function (err, data){
            if (err) {console.log(err); return;}
            res.json(data);
        });
}
exports.getToMe = function (req, res){
    console.log("Get start");
    model.find({},
        function (err, data){
            if (err) {console.log(err); return;}
            res.json(data);
        });
}


//Update => PUT
exports.put = function (req, res){
    const portfolio = new model(req.body.element);
    model.findByIdAndUpdate(
        req.body._id,
        req.body.element,
        {},
        function (err, result){
            if(err) {console.log(err);res.send(err);}
            return res.json(portfolio);
        }
    )
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