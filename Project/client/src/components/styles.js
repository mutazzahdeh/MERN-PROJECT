import { colors } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import { makeStyles, withTheme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundImage: 'linear-gradient(45deg, #901414 30%, white 80%)',
        
    },
    customizeToolbar: {
        // minHeight: 36,
        backgroundImage: "#fdd6bb",  
        boxShadow : "solid black 10px"
        
    },

    menuButton: {
        marginRight: theme.spacing(2),

    },
    Link:{
        textDecoration:"none",color:"white",
        marginRight: theme.spacing(2)
    },

    title: {
        flexGrow: 1,
        margin: "10px",
        textAlign: "center",
        lineHeight: "0.6"
    },

    img : {
        width: "100px",
        height : "100px",

    },
    header: {
        display:"flex",
        alignItems:"center",
        justifyContent : "space-between",
        
        marginRight: "15px",

    
    },
    h :{
        marginRight:"15px"
    },
    logo : {
    display: "flex",
    fontSize : "20px",
    fontFamily: 'Apple Color Emoji',
    textAlign: "right",
    margin: "5px",
    color:"black"
    }, 

    small: {
    fontSize: "15px",
    fontFamily:  '-apple-system',
    
    },

    footer: {
        width: "100%",
        height: "100px",
        fontSize: "12px",
        backgroundColor: "#6d0909",
        padding: "10px",
        color: "white"
        
    }
}));
export default useStyles;