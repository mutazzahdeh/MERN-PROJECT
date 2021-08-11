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
        <span>

        {news.map((news, idx)=>{return (
            <div className="orb">
                <td key={idx}>{news.title}</td> 
                <td key ={idx}> {news.desc}</td>
                </div>

        )})}

                        <div className="orb red"></div>
                        <div className="orb yellow"></div>
                        <div className="orb blue"></div>
                        <div className="orb orange"></div>
                        <div className="orb purple"></div>
                        <div className="orb green"></div>
                        <div className="orb"></div>
                    </span>
                    <span>
            <br /> <br />
                    {news.map((news, idx)=>{return (
                        <div className="orb">
                            <div className="bignews" key={idx}><Link to={"/news/" + news._id} > <b>News {formdate(news.createdAt)} </b></Link><br/> {news.title}</div><br />
                            <div key ={idx}>  {news.desc}</div>
                            </div>

                    )})}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default NewsScroll