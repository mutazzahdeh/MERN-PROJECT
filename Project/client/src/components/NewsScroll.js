import { Link } from '@reach/router';
import axios from 'axios'
import React , {useEffect,useState} from 'react'
import NewScroll from './NewScroll.css'

const NewsScroll = (props) => {
    const {news,setNews} =props;
    const style={margin: "20px"}

    function formdate(date) {
        var date1 = new Date(date),
            month = '' + (date1.getMonth() + 1),
            day = '' + date1.getDate(),
            year = date1.getFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return [year, month, day].join('-');
    }


    return (

        <div style={style} dir="rtl">
        <div className="marquee">
        <div className="marquee--inner">
        {news.map((news, idx)=>{return (
            <div className="orb">
                <div className="bignews" key={idx}><Link className="news" to={"/news/" + news._id} > <b>News {formdate(news.createdAt)} </b></Link><br/> {news.title}</div><br />
                <div className="desc" key ={idx}>  {news.desc}</div>
                </div>

        )})}
                    <span>
            <br /> <br />
                    
                        
                    </span>
                </div>
            </div>
        </div>
    )
}

export default NewsScroll