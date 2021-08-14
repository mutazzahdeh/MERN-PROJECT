import React, { useEffect, useState } from 'react'

import NewsScroll from '../components/NewsScroll';
import LoginForm from '../components/LoginForm';




const NewsMain= (props) => {
const{news,loaded,setNews }=props;


    return(
        <>
        <div style={{display:"flex"}}>
        {loaded && <NewsScroll news={news} setNews={setNews} /> } </div>

       <div> <img src="https://images-ext-2.discordapp.net/external/VY9aRa2uRrnWJJfWtLndbRyBwNBK5MngOE04k8UQRyc/%3Fsize%3D626%26ext%3Djpg/https/img.freepik.com/free-photo/people-happy-support-stacking-community_1150-1689.jpg?width=609&height=406" alt='logo'/>
        </div>
        </>
    )   
}
export default NewsMain;





