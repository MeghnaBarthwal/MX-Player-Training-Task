import http from '../http-conf';

export default class ProductServices{
    getProducts(){
        return http.get("/products");
    }

    createProduct(data){
        return http.post("/products",data);
    }
}
