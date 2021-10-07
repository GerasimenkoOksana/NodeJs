const modelUser = require("../../models/user");
const modelRole = require("../../models/role");
const modelSession = require("../../models/session");

exports.register = function (req, res){
    const user = new modelUser(req.body);
    modelUser.find({ email:user.email},
        function (err, response){
            if(err) {console.log(err); return err;}
            if (response.length >0) {
                //есть такой в базе придумать как отправить ошибку
                res.send(false);
            }else{
                user.save(function(err){
                    if (err) {console.log(err); return err;}
                    res.send(user);
                })

            }
        }
    )
}

exports.checkEmail = function (request, response){
    const {email} = request.params;
    modelUser.find({ email:email},
        function (err, res){
        if(err) {console.log(err); return err;}
        if (res.length >0) {
            response.send(false);
        }else{
            response.send(true);
        }
        }
    )
}

exports.tryLogin = function (req, res){
    const user = new modelUser(req.body);
    modelUser.find({ email:user.email, password: user.password},
        function (err, res_user){
            if(err) {console.log(err); return err;}
            if (res_user.length >0) {
               // res.send(res); //есть такой в базе - отправит пользователя
                modelSession.find({user_id: res_user.id}, function (err, res_session){
                    if(err){console.log(err); return err;}
                    if(res_session.length>0){ //такой пользовател  вошел в систему

                    }else{
                        const newSession = new modelSession({user_id: res_user._id});
                        newSession.save(function (err){
                            if(err){console.log(err); return err;}
                            response.send(newSession._id);
                        })
                    }
                })
            }else{
                    //нет такой пары в базе - отправить ошибку
                    response.send(false);
            }
        }
    )
}