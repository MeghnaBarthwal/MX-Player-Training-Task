var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
const { checkPrime } = require('crypto');
var app = express();
const { check, ValidationResult} = require('express-validator');

app.use(express.static(path.join(__dirname, 'assets')))
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.get("/", function(req, res){
    //res.send("welcmoe to my node express app");
    res.sendFile(__dirname + "/home.html");
});
app.get("/about", function(req, res){
    res.send(" welcome to about us page");
})
app.post("/show_user", function(req, res){
    console.log(req.body.username);
    res.json({username: req.body.username});
    console.log(req.body.password);
    res.json({password: req.body.password});
    console.log(req.body.city);
    res.json({city: req.body.city});
    console.log(req.body.pincode);
    res.json({pincode: req.body.pincode});
    console.log(req.body.phone);
    res.json({phone: req.body.phone});
    check('username', 'name is required').not().isEmpty();
    const result = ValidationResult(req);
    var errors = result.errors;
    if(!result){
        res.render('home',{ errors: errors})
        console.log('Error');
    }
})
// app.post("/show_user", function(req, res){
//     console.log(req.body.password);
//     res.json({password: req.body.password});
// })
// app.post("/show_user", function(req, res){
//     console.log(req.body.city);
//     res.json({city: req.body.city});
// })
// app.post("/show_user", function(req, res){
//     console.log(req.body.pincode);
//     res.json({pincode: req.body.pincode});
// })
// app.post("/show_user", function(req, res){
//     console.log(req.body.phone);
//     res.json({phone: req.body.phone});
// })
app.listen(4000, function(){
    console.log("server is running");
})