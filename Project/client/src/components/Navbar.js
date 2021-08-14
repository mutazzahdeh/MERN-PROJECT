import Avatar from '@material-ui/core/Avatar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
//import AnimatedBg from "react-animated-bg";
import Box from '@material-ui/core/Box';
import "../App.css"
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import { Link } from '@reach/router';
import useStyles from './styles';





const Navbar = (props) => {
    const classes = useStyles();
    const {LinkTo}=props


    
    
    return (

    <div>
    
    <div className={classes.header}>
        <div className = {classes.logo}>
    <Avatar  className = {classes.img}  alt="logo" src="../static/images/logo.png" />
        <h1 className = {classes.h}>جمعية النهضة النسائية</h1>
        </div>
        <div className = {classes.small}>
            Nahda Women Association 
            <br/>
            Non-profit organisation
        </div>
    </div>
        <div class = "nav">
        <Box boxShadow={10} >
        <Toolbar className = {classes.customizeToolbar}>
                {/* <Button color="inherit">ooll</Button> */}
                {  Object.keys(LinkTo).map((item, i) =>{
                return ( <Typography key={i} variant="h6" className={classes.title}>
                <Link  to={item} className={classes.Link} dir="rtl">
                {LinkTo[item]}
                </Link> 
            </Typography>)
            })}

        </Toolbar>
        </Box>
        </div>
    </div>
    
        

        
        

);
    }



export default Navbar;