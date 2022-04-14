import { CREATE_PRODUCT, READ_PRODUCT } from "./types";

import { ProductServices} from '../services/product.services';

export const createProduct = ( name, brand, model, price, quantity) => async(dispatch) =>{
    try{
        const res = await ProductServices.createProduct({name, brand, model, price, quantity});

        dispatch({
            type: CREATE_PRODUCT,
            payload: res.data
        })
    }catch(err){

    }
}