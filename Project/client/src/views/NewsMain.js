import React, { useEffect, useState } from 'react'
import axios from 'axios';
import NewsScroll from '../components/NewsScroll';

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
        <>
              {loaded && <NewsScroll news={news} setNews={setNews} /> }
        </>
    )
}
export default NewsMain;