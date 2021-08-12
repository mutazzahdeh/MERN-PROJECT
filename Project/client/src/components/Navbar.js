import Avatar from '@material-ui/core/Avatar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import { Link } from '@reach/router';
import useStyles from './styles';





const Navbar = () => {
    const classes = useStyles();

    
    return (
    
    
    

   
    <div>
    
    <div className={classes.header}>
        <div className = {classes.logo}>
         <Avatar  className = {classes.img}  alt="logo" src="../static/images/logo.png" />
        <h1>جمعية النهضة النسائية</h1>
        </div>
        <div className = {classes.small}>
            Nahda Women Association 
            <br/>
            Non-profit organisation
        </div>
    </div>
        <Box boxShadow={10} >
        <Toolbar className = {classes.customizeToolbar}>
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
        </Box>
    </div>
    
        

        
        
   
);
    }



export default Navbar;