import { CREATE_PRODUCT } from "../actions/types";

const initialState = [];

export default function ProductReducer(products = initialState, {type, payload}){
    switch(type){
        case CREATE_PRODUCT:
        return [...products, payload];

        default:
            return products;
    }
}