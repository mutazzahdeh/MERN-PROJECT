import React, { useEffect, useState } from 'react'
import axios from 'axios';



const ProductDetails = (props)=> {
    const [product, setProduct] = useState({})
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + props.id)
            .then(res => setProduct(res.data))
    }, [props.id])


    return (
        <div>
            <div style={{display:"flex"}}>
            <div>
            <img style={{width:"100px",height:"100px"}} src={product.img} alt={product.img}/>
            </div>
            <div style={{margin:"10px"}}>
            <h1>{product.name}</h1>
            <p>الصنف: {product.category}</p>
            <p>السعر: {product.price}</p>
            <p>الوصف: {product.desc}</p>
            </div>
            </div>
            
        </div>
        

        

    )
}
export default ProductDetails;