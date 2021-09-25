const fs = require("fs");
const ext = require("mime-types");
const model = require("../models/portfolio");

exports.post = function (req, res) {
    console.log ("Media  POST start");
    console.log(req.file);
    let fileUrl ="/uploads/"+ req.file.filename + "." + ext.extension(req.file.mimetype);
    fs.rename(
        req.file.path,
        req.file.path + "." + ext.extension(req.file.mimetype),
        function (err) {
            if (err){ console.log(err);
                res.sendStatus(500);
            }
            res.send (fileUrl);
        });
};

exports.del = function (req,res){
    console.log("qqq-"+req.body.img);
   fs.unlink("./public"+req.body.img,
        function (err){
            if(err) {console.log(err);res.send(err);}
        })
}