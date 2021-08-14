import React, { useEffect, useState } from 'react'

import NewsScroll from '../components/NewsScroll';
import LoginForm from '../components/LoginForm';




const NewsMain= (props) => {
const{news,loaded,setNews }=props;


    return(
        <div style={{display:"flex"}}>
        {loaded && <NewsScroll news={news} setNews={setNews} /> }
        <img src="../static/images/logo.png" alt='logo'/>
        </div>
    )
}
export default NewsMain;





