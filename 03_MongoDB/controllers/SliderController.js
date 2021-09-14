const model = require("../models/slide");

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