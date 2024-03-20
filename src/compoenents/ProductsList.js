import { useEffect, useState } from "react";
import Product from "./Product";

function ProductsList() {
  const api_url ="https://fakestoreapi.com/products";
  const [Products,setProducts]=useState([]);
  const [categories,setcatigories]=useState([])
 const getProduit=()=>{
    fetch(api_url).then((res)=>res.json())
    .then((data)=>setProducts(data))
  };
  const getCatigors=()=>{
    fetch(`${api_url}/categories`).then((res)=>res.json())
    .then((data)=>setcatigories(data))
  }
  const gotogeto=(catName)=>{ // tjib catogores 
    fetch(`${api_url}/category/${catName}`)
            .then(res=>res.json())
            .then((data)=>setProducts(data))
  }
  useEffect(()=>{
       getProduit();
       getCatigors();
  },[]);
 console.log(categories)
  return (
    <>
      <h2 className="text-center p-3"> Our Products </h2>
      <div className="container">
        <button onClick={()=>{
          getProduit();
        }}>all</button>
        {categories.map((cat)=>{
              return <button key={cat}className="btn btn-info" onClick={()=>{gotogeto(cat)}}>{cat}</button>
        })}

        <div className="row">
          
              
                {Products.map((produit)=>{
                       return( <div className="col-3" >
                       <Product produit={produit}  key={produit.id}/>
                        </div>)
                })}
      
             
          
         
         
        </div>
      </div>
    </>
  );
}

export default ProductsList;
