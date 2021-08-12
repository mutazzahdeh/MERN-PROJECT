import React, { useEffect, useState } from 'react'
import axios from 'axios';



const NewsDetails = (props)=> {
    const [news, setNews] = useState({})

    useEffect(() => {
        axios.get("http://localhost:8000/api/news/" + props.id)
            .then(res => setNews(res.data))
    }, [props.id])


    return (
        <div>
            <h1>{news.title}</h1>
            <p>{news.desc}</p>

        </div>
            
            
        

        

    )
}
export default NewsDetails;