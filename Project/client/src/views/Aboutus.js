import React,{useEffect, useState} from 'react';
import useStyles from '../components/styles';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import { shadows } from '@material-ui/system';
import io from 'socket.io-client';

export const Aboutus = () => {
    const classes = useStyles();
    const [socket] = useState(() => io(':8000'));
 
  useEffect(() => {
   
    console.log('Is this running?');

    return () => socket.disconnect(true);
    
  }, []);
  socket.on('Welcome', data => console.log(data));




    return (
        <div>
        <div >
    
        <div  className= {classes.container}>
            
            <header className= {classes.About}>
            <h2 >جمعية النهضة النسائية </h2>
            <h3 >نشأة الجمعية :</h3>
            <p1 >
                تأسست الجمعية في اول كانون الثاني سنة 1925 بمبادرة من سيدات مدينة رام الله وعلى رأسهم السيدة بديعة سلامة وذلك لخدمة
                النساء والأطفال في منطقة رام الله
            </p1>
            </header>
    <body className = {classes.body} >
        <Box boxShadow={1}>
        <div className = {classes.cardOne}>

        <img  className = {classes.icon}  alt="icon" src="../static/images/send.png" />
            <h3 >
                رسالة الجمعية :
            </h3>
            <p > جمعية النهضة النسائية هي جمعية خيرية تطوعية تأسست عام 1925 التخدم
                النساء والأطفال في منطقة رام الله من خلال مشاريعها التأهيلية
                والإنسانية والاجتماعية لرفع مستوى المرأة من النواحي الثقافية
                والاجتماعية والاقتصادية وعبر سنوات عملها تنوعت البرامج والمشاريع
                وفق احتياجات المجتمع المحلي وبناء على التغيرات السياسية والاجتماعية والاقتصادية في المنطقة
            </p>
        </div>
        </Box>
        <Box boxShadow={1}>
            <div className = {classes.carThree}>
            <img  className = {classes.icon}  alt="icon" src="../static/images/telescope.png" />
            <h3>التطلعات المستقبلية تسعى الجمعية من خلال تطوير وتوسيع أنشطتها وبرامجها إلى :</h3>
            <ul dir="rtl">
                <li dir="rtl">بناء مشاغل القسم المهني والإنتاجي لزيادة القدرة الاستيعابية من ذوي الإحتياجات الخاصة البالغين . </li>
                <li dir="rtl">تطوير برنامج التقييم والتشخيص المهني للبالغين . </li>
                <li dir="rtl">قسم خاص للمعوقين من ذوي الإعاقة الشديدة . </li>
                <li>انشاء مختبر حاسوب لغوي لتطوير برامج التربية الخاصة .</li>
                </ul>
                </div>
        </Box>
        <Box   boxShadow={1}>
        
            <div className = {classes.cardFour}>
            <img  className = {classes.icon}  alt="icon" src="../static/images/support.png" />
            <h3>مصادر تمويل الجمعية </h3>
            <p >الجمعية كمؤسسة أهلية على التبرعات المحلية والخارجية لتدعيم وتطوير أنشطتها وخدماتها الإجتماعية والإنسانية والتربوية في المجتمع المحلي </p>
            </div>
        </Box>
    </body >
    <Box boxShadow={5}>
                <div className = {classes.cardTwo} >
            <h3 >أهداف الجمعية :</h3>
            <p> تكمن نهضة كل مجتمع في الثبات والعطاء من أجل الوصول إلى غايته المنشودة ولتحقيق ذلك تعمل على:</p>
            <div class = {classes.kalb}>
            <ul>
                <li>.رفع مستوى المرأة من النواحي الثقافية الاجتماعية والمهنية .</li>
                <li>تقديم المساعدات المادية والمعنوية لأفراد المجتمع المحلي والمحتاجين منهم .</li>
                <li>تطور المشاريع الانتاجية للوصول إلى الإكتفاء الذاتي ، الفردي والجماعي .</li>
                <li>رعاية ذوي الإحتياجات الخاصة وتطوير برامج التربية الخاصة ، وتوثيق الصلة ما بين المعوق والمجتمع المحلي .</li> 
            </ul>
            </div>
            </div>
            </Box>
            </div>
        </div>
        </div>
        
    
    
    

    )
}
