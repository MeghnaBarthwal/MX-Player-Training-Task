module.exports = (app) => {
    var products = require("../controllers/product.controller");
    var router = require('express').Router();

    router.post("/", products.create);
    router.get("/", products.getProducts);
    router.get("/:id", products.getProduct);

    app.use("/products", router);
}