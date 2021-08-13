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
            <h1>{product.name}</h1>
            <p>Price: {product.price}</p>
            <p>Description: {product.desc}</p>
            <img src={product.img} alt={product.img}/>
            <p>category: {product.category}</p>
            
            
        </div>
        

        

    )
}
export default ProductDetails;