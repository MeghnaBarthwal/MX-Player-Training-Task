var db = require("../models/index");
var Product = db.products;

exports.create = (req, res) => {
    if(!req.body.name){
        res.status(400).send({ message: "Name cannot be empty"});
    }
    else if(!req.body.brand){
        res.status(400).send({ message: "brand Name cannot be empty"});
    }
    else if(!req.body.model){
        res.status(400).send({ message: "model Name cannot be empty"});
    }
    else if(!req.body.price){
        res.status(400).send({ message: "price cannot be empty"});
    }
    else if(!req.body.quantity){
        res.status(400).send({ message: "Quantity cannot be empty"});
    }
    else{
        let product = new Product({
            name: req.body.name,
            brand: req.body.brand,
            model: req.body.model,
            price: req.body.price,
            quantity: req.body.quantity
        });
        product.save(product).then((data) =>{
            res.send({ data: data, message: "saved successfully"});
        }).catch((err) => {
            res.status(400).send({ message:" Error", err:err});
        })
    }
}

exports.getProducts = (req, res) => {
    Product.find().then((data) =>{
        res.send({data: data});
    }).catch((err)=>{
        res.status(400).send({error:err});
    });
}

exports.getProduct = (req, res) => {
    let id = req.params.id;

    Product.findById(id).then((data) =>{
        res.send(data);
    }).catch((err) =>{
        res.status(400).send(err);
    })
}

exports.deleteById = (req, res) => {
    let id = req.params.id;

    Product.findByIdAndRemove(id, {
        useFindAndModify: false
    }).then((data) => {
        res.json({"message": "Deleted", data: data});
    }).catch((err))
}