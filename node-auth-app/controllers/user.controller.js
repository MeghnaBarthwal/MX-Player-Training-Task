const { restart } = require("nodemon");
var db = require("../models/index");
var bcrypt = require('bcrypt');
var User = db.users;

exports.create = (req, res) => {
    if(!req.body.name){
        res.status(400).send({ message: "Name cannot be empty"});
    }
    else if(!req.body.email){
        res.status(400).send({ message: " Email cannot be empty"});
    }
    else if(!req.body.password){
        res.status(400).send({ message: " Password cannot be empty"});
    }
    else if(!req.body.mobile){
        res.status(400).send({ message: "Mobile cannot be empty"});
    }
    else{
        bcrypt.hash(req.body.password, 10).then((hash)=>{
        let user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hash,
            mobile: req.body.mobile,
            status: true
        });
        user.save(user).then((data) =>{
            res.send({ data: data, message: "saved successfully"});
        }).catch((err) => {
            res.status(400).send({ message:"Error", err: err});
        })
    }
    ).catch((err) =>{
        res.status(500).send(err);
    });
}
}