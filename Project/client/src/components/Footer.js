import {CardHeader,Card } from '@material-ui/core';
import useStyles from './styles';


const Footer = () => {
const classes = useStyles();

    return (
// the container
<div>
    <Card>
    

        <div className={classes.footer} >
        <div dir ="rtl" style={{textAlign:"center"}}>
                <p >رقم الهاتف: 00972 2 2956853 </p>
                

                <p>فاكس: 00972 2 2966064</p>

                <p>Email: annahdac@palnet.com</p>
                </div>
        </div>
    
    </Card>
</div>
    )
}

export default Footer
