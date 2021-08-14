import React,{useEffect , useState} from 'react';
import '../App.css';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { AppBar } from '@material-ui/core';
import NewsScroll from '../components/NewsScroll';
//import AppAppBar from '../views/AppAppBar';
//import withRoot from '../withRoot';


const Article = () => {

        const [news, setNews] = useState([]);
        const [loaded, setLoaded] = useState(false);
    
        useEffect(() => {
            axios.get('http://localhost:8000/api/news')
                .then(  res=>{
                    setNews(res.data);
    
                    setLoaded(true);
                });    
        },[])

    return (
        <div>
        <div style={{}} className="Logo">
                    <React.Fragment >
                {/* <AppAppBar/> */}
                </React.Fragment> 

        <div class="tasahel">
     <div  style={{ marginTop:'30px',color:'white'}}>
        <div>
            {loaded && <NewsScroll news={news} setNews={setNews} /> }
        </div> 
        </div>
         <div style={{width:'60%' ,marginTop:"50px", marginLeft:"20%", fontSize:'16px', padding:'15px'}} className="back">
 
            <header>
                
          <h1 style={{fontFamily:"Fantasy", color:'#7c5655'}}>جمعية النهضة النسائية</h1>
          </header>
          <br/>
          <div style={{fontFamily:"Comic Sans MS, Comic Sans, cursive"}}>
          <p>تأسست الجمعية في اول كانون الثاني سنة 1925 بمبادرة من سيدات مدينة رام الله وعلى رأسهم السيدة بديعة سلامة وذلك لخدمة النساء والأطفال في منطقة رام الله</p>
          
          <ol>
              <li>Acknowledge the fact that your first attempts to communicate will feel awkward and uncomfortable. This will pass as your interaction progresses.</li>
              <br/>
              <li>It’s OK to use paper and pen. In fact, the Deaf person will appreciate your efforts even more if you use a combination of communication methods, such as hand gestures, facial expressions and the written word.</li>
              <br/>
              <li>Take the time to communicate and connect. Deaf people consider communication an investment of time and effort. Slow down, take your time..</li>
          </ol>
          </div>
            
        </div>  
 </div>
          </div> 
    </div>
    )
}

export default Article;           


