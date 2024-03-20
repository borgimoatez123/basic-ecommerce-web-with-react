import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";

function ProductDetails() {
  const api_url="https://fakestoreapi.com/products";
let parmas=useParams();
const [produit,setprdouit]=useState({});
useEffect(()=>{
 fetch(`${api_url}/${parmas.productId}`)
 .then((res)=>res.json())
 .then((produit)=>setprdouit(produit));
},[])
console.log(produit)
  return (
<Product produit={produit}/>
  );
}

export default ProductDetails;
