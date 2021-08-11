import Avatar from '@material-ui/core/Avatar';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AnimatedBg from "react-animated-bg";
import { Link } from '@reach/router';



import useStyles from './styles';
const footerStyle = {
  width: "100%",
  height: "100px",
  fontSize: "12px"
}
const Navbar = () => {
    const classes = useStyles();

    
    return (
    <AnimatedBg 
    colors={["#901414", "white"]}
    duration={0.5}
      delay={4} // it will wait 4 seconds before next transition starts
    timingFunction="ease-in-out"
    className="section-styles"
    > 
    

   
    <div>
    
    <div className={classes.header}>
        <div className = {classes.logo}>
        <h1 dir="rtl">جمعية النهضة النسائية</h1>
        <div className = {classes.small}>
            Nahda Women Association 
            <br/>
            Non-profit organisation
        </div>
        </div>
        <p dir="rtl"> <Avatar dir="rtl" className = {classes.img}  alt="logo" src="../static/images/logo.png" /></p>
    </div>
        
        <Toolbar>
                {/* <Button color="inherit">ooll</Button> */}
                
                <Typography variant="h6" className={classes.title}>
                    <Link  to={"/news"} className={classes.Link} dir="rtl">
                    اتصل بنا
                    </Link> 
                </Typography>
                
                <Typography variant="h6" className={classes.title}>
                    <Link  to={"/news"} className={classes.Link} dir="rtl">
                        من نحن
                    </Link> 
                </Typography>

                <Typography variant="h6" className={classes.title}>
                    <Link  to={"/news"} className={classes.Link} dir="rtl">
                        منتجاتنا
                    </Link> 
                </Typography>
        </Toolbar>
    </div>
    
        

        
        
    </AnimatedBg>
);
    }



export default Navbar;