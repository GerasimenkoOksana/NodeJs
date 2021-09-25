const model = require("../models/post");

// Create => POST
exports.post = function (req, res, next) {
    console.log ("POST start");
    // console.log(req.body); // multipart/form-data - не работает

    let fileData = req.file;
    console.log(fileData);

    let tmp_path = req.file.path;
    console.log(tmp_path);
    //const element = new model (req.body);
    /*
    element.save (function (err) {
        if(err) { console.log(err); return err;}
        return res.sendStatus(201);
    })
     */
};

// Read => GET
exports.get = function (req, res) {
    console.log ("GET start");
    model.find({},
        function (err, data) {
            if(err) { console.log(err); return err;}
            res.json(data);
        });
}

// Update => PUT
exports.put = function (req, res) {
    console.log ("PUT start");
    /*
    const element = new model (req.body);
    model.findByIdAndUpdate(
        req.body._id,
        element,
        {}, // new:true - создаст новый если не нашел по ID
        function (err, result) {
            if (err) {console.log(err); res.send(err);}
            res.send(result);
        }
    );
     */
}

// Delete = >DELETE
exports.delete = function (req, res) {
    /*
    model.findByIdAndDelete(
        req.body._id,
        {},
        function (err) {
            if (err) res.send(err);
            res.sendStatus(200);
        }
    );
     */
}