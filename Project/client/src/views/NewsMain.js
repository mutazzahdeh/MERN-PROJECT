import React, { useEffect, useState } from 'react'
import axios from 'axios';
import NewsScroll from '../components/NewsScroll';
import LoginForm from '../components/LoginForm';




const NewsMain= () => {
    const [news, setNews] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/news')
            .then(  res=>{
                setNews(res.data);

                setLoaded(true);
            });


    },[])

    return(
        <div style={{display:"flex"}}>
        {loaded && <NewsScroll news={news} setNews={setNews} /> }
        <img src="../static/images/logo.png" alt='logo'/>
        </div>
    )
}
export default NewsMain;





