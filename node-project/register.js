var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
const { checkPrime } = require('crypto');
var app = express();
var multer = require('multer');
var morgan = require('morgan');

app.use(express.static(path.join(__dirname, 'assets')))
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(morgan('tiny'));

app.get("/", function(req, res){
    //res.send("welcmoe to my node express app");
    res.sendFile(__dirname + "/register.html");
});
var storage = multer.diskStorage({
    destination:function(req, file, cd){
        cd(null, './uploads');
    },
    filename: function(req, file,cd){
        cd(null, file.filename + '-' + Date.now()+ path.extname(file.originalname));
    }
})
app.post("/upload", function(req, res){
    var upload = multer({
        storage: storage,
        fileFilter:function(req, file, cb){
            var ext = path. extname(file.originalname);
            if(ext != ".png" && ext != ".jpg"){
                return cb(res.end("only images are allowed"))
            }
            cb(null, true);
        }
    }).single('doc');
    upload(req, res, function(err){
        res.end("File is uploaded successfully.")
    });
});

app.get("/about", function(req, res){
    res.send(" welcome to about us page");
})
app.post("/show_user", function(req, res){
    console.log(req.body.username + req.body.password + req.body.city + req.body.pincode + req.body.phone);
    res.json({username: req.body.username, password: req.body.password, city: req.body.city, pincode: req.body.pincode, phone: req.body.phone});
})

req.assert('username', 'Name is required').notEmpty()

app.listen(4000, function(){
    console.log("server is running");
})