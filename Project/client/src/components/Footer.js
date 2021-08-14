import {CardHeader,Card } from '@material-ui/core';
import useStyles from './styles';
import Avatar from '@material-ui/core/Avatar';


const Footer = () => {
const classes = useStyles();

    return (
// the container
<div>
    <Card>
    

        <div className={classes.footer} >

        <div dir ="rtl"  style ={{width: "300px", margin:"10px"}}>
                <p >رقم الهاتف: 00972 2 2956853 </p>
                <hr/>
                <p>فاكس: 00972 2 2966064</p>
                <hr/>
                <p>Email: annahdac@palnet.com</p>
        </div>
        <div className= {classes.AXSOS} >
        <div>
        <Avatar   className = {classes.icon} alt="logo" src="../static/images/AXSOS-Logo-SVG.svg" />
            </div> 
        <p>
        
        جاد عماد دواني
            <br/>
        معتز امجد زاهدة
            <br/>
        غزل الياس سلامة
            <br/>
        لانا علاء ياغي
        </p>
        
        </div>
                


        </div>
    
    </Card>
</div>
    )
}

export default Footer
