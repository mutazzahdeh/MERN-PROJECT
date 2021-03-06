import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { FilterBar } from '../components/FilterBar'
import { Link } from '@reach/router'

import SearchComp from '../components/SearchComp'

function Show(props) {
  const {infos,products,product,setProduct,setProducts,setinfos} =props
    const style = {
        main: {

        },
        submain: {
            display: "flex"
        },
        product: {
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
            margin: "10px",
            width: "1260px",
        },
        product1: {

            height: "200px",
            width: "200px",
            marginLeft: "20px",
            marginBottom: "100px",

        },
        product1img:{
            width: "200px",
            height: "200px",
            padding: "1px",
            border: "black",
            border: "5px solid #555",
            
        },
        FilterBar:{
            width:"180px",
            height:"auto",
            margin:"10px",


        }
    }




    



    return (
        <>
            <div id="main" >
                <SearchComp products={product} setProducts={setProduct} showProduct={infos} setShowProd={setinfos} />
                <div style={style.submain}>
                    <div dir="rtl"  style={style.FilterBar}>
                        <FilterBar products={products} setProducts={setProducts} showProduct={infos} setShowproduct={setinfos} />
                    </div  >
                    <div style={style.product}>
                        {infos.map((info, idx) => {
                            return (
                                <div style={style.product1} key={idx}>
                                    <img style={style.product1img} src={info.img} alt={info.name} />
                                    <p >

                                        <Link to={"/product/" + info._id}> {info.name}</Link>
                                        <p dir="rtl">السعر:{info.price}</p>
                                        <p dir="rtl">الصنف:{info.category}</p>
                                        <a href="https://docs.google.com/forms/d/1Gu861Zb1WRpXamta5z97MAN7zIKrRUZqmtsUWD3Pygs/viewform?edit_requested=true">الشراء</a>

                                    </p>

                                </div>)
                        })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Show
