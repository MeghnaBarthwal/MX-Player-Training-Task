import './App.css';
import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { createProduct } from './actions/products';

function Create()
{
    const initialData ={
        name:"", brand:"", model:"",price:0, quantity:0
    }
    const [product, setProducts] = useState(initialData);
    const[name,setName] = useState("");
    const[brand,setBrand]=useState("");
    const[model,setModel]=useState("");
    const[price,setPrice]=useState(0);
    const[quantity,setQuantity]=useState(0);
    //const [submitted, setSubmitted] = useState(false);
    
    const changeName =(e)=>{
        setName(e.target.value);
    }
    const changeBrand =(e)=>{
        setBrand(e.target.value);
    }
    const changeModel =(e)=>{
        setModel(e.target.value);
    }
    const changePrice =(e)=>{
        setPrice(e.target.value);
    }
    const changeQuantity =(e)=>{
        setQuantity(e.target.value);
    }

    const dispatch = useDispatch();

    const saveProduct = (e) =>{
      e.preventDefault();
      dispatch(newProduct(name, brand, model, price, quantity)).then(data =>{
          setProducts({
              name: data.name,
              brand: data.price,
              model: data.model,
              price: data.price,
              quantity: data.quantity
          });
          setSubmitted(true);
          console.log(data);
      }).catch((err) =>{
          console.log(err);
      })
     
    }


    return(
        <div className="App">
            <h1>Saving Data into API</h1>
            <form>
                <p><input type="text" value={name} placeholder="Enter Name" onChange={changeName}/></p>
                <p><input type="text" value={brand} placeholder="Enter brand"onChange={changeBrand}/></p>
                <p><input type="text" value={model} placeholder="Enter model"onChange={changeModel}/></p>
                <p><input type="text" value={price} placeholder="Enter price" onChange={changePrice}/></p>
                <p><input type="text" value={quantity} placeholder="Enter Quantity" onChange={changeQuantity}/></p>
               <p><input type="submit" value="Save"/></p>
               
               </form>

        </div>
    );
}

export default Create;