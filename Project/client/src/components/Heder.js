import {CardHeader,Card } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from '@reach/router';



import useStyles from './styles';
import Wrapper from './Wrapper';



const Heder = () => {



const classes = useStyles();

    return (

// the container
<div >
    <Card className={classes.root}>
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

        <AppBar position="static">
        <div className={classes.customizeToolbar} >
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
        </AppBar>
        <hr/>
        <footer className = {classes.footer}>
        <Wrapper/>
        </footer>
    </Card>

    </div>
    )
}

export default Heder
