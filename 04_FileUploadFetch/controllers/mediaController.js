const fs = require("fs"); // Файловую систему
const ext = require("mime-types"); // Анализ расширения по типу фала

// Отдельный контроллер - целью которого будут операции с файлами

exports.post = function (req, res) {
    console.log ("Media  POST start");

    /*
    let fileData = req.file;
    console.log(fileData);
    let tmp_path = req.file.path;
    console.log(tmp_path);
    console.log("Ext:");
    console.log(ext.extension(fileData.mimetype));
     */
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
    // Могу заранее обработать порядок на стороне сервера
};