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
         <div style={{width:'70%' ,marginTop:"10px", marginLeft:"15%",marginRight:"5%" , fontSize:'16px', padding:'15px'}} className="back">
 
            <header>
                
          <h1 style={{fontFamily:"Fantasy", color:'#6d0909',textDecoration:"underline"}}>جمعية النهضة النسائية</h1>
          </header>
          <br/>
          <div style={{fontFamily:"Comic Sans MS, Comic Sans, cursive", color:'#722424'}}>
          <p>تأسست الجمعية في اول كانون الثاني سنة 1925 بمبادرة من سيدات مدينة رام الله وعلى رأسهم السيدة بديعة سلامة وذلك لخدمة النساء والأطفال في منطقة رام الله</p>
          
          <h4>التطلعات المستقبلية تسعى الجمعية من خلال تطوير وتوسيع أنشطتها وبرامجها إلى :</h4>
            <ul dir="rtl" style={{textAlign:"centre"}}>
                <li dir="rtl">بناء مشاغل القسم المهني والإنتاجي لزيادة القدرة الاستيعابية من ذوي الإحتياجات الخاصة البالغين . </li>
                <li dir="rtl">تطوير برنامج التقييم والتشخيص المهني للبالغين . </li>
                <li dir="rtl">قسم خاص للمعوقين من ذوي الإعاقة الشديدة . </li>
                <li>انشاء مختبر حاسوب لغوي لتطوير برامج التربية الخاصة .</li>

                </ul>
            <h4>مصادر تمويل الجمعية </h4>
            <p>الجمعية كمؤسسة أهلية على التبرعات المحلية والخارجية لتدعيم وتطوير أنشطتها وخدماتها الإجتماعية والإنسانية والتربوية في المجتمع المحلي </p>
            <p>برنامج العمل في المدارس : بدأ العمل في هذا البرنامج عام 1991 في المدارس النظامية الحكومية ليقدم خدماته للأطفال المعاقين عقلية والذين يعانون من صعوبات تعليمية في المرحلة الإبتدائية الأساسية ، يتم إجراء تقييم أكاديمي للطالب لتحديد المشكلة ، ومن ثم يتم تحديد الخطة الفردية بمشاركة الأهل ومعلم الصف والمرشد التربوي وذوي الاختصاص . البرنامج يقدم خدماته في المدارس الحكومية في مدينة رام الله بالتعاون والتنسيق مع برنامج العام الجامع / قسم التربية الخاصة في وزارة التربية والتعليم العالي . </p>
          </div>
            
        </div>  
 </div>
          </div> 
    </div>
    )
}

export default Article;           


