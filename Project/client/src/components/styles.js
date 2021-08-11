import { colors } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        background: 'linear-gradient(45deg, orange 30%, white 90%)',
        width: "100 rem",
        height: "100rem"
    
    },
    customizeToolbar: {
        minHeight: 36,
        backgroundColor: "grey",
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
        alignItems:"streatch",
        justifyContent : "flex-end",
        flexDirection: "row",
        marginRight: "15px"
       
    
    },

    logo : {
    fontSize : "20px",
    fontFamily: 'Apple Color Emoji',
    textAlign: "right",
    margin: "5px"
    }, 

    small: {
    fontSize: "15px",
    fontFamily:  '-apple-system'
    
    },

    footer: {
        backgroundColor: "",
        width: "100%",
        height: "1000px",
        fontSize: "12px"
    }
}));
export default useStyles;