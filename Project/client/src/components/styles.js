import { colors } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import img from '../images/abou.jpg';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        // backgroundImage: 'linear-gradient(45deg, #901414 30%, white 80%)',
        
    },
    customizeToolbar: {
        // minHeight: 36,
        backgroundImage: "#fdd6bb",  
        boxShadow : "solid black 10px",
        backgroundColor:"#6d0909",
        
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
        height : "100px"
        

    },
    header: {
        display:"flex",
        alignItems:"center",
        justifyContent : "space-between",
        marginLeft:"10px",
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
    fontSize: "20px",
    fontFamily:  'Cursive',
    
    },

    footer: {
        display: "flex",
        width: "100%",
        height: "200px",
        fontSize: "12px",
        backgroundColor: "#6d0909",
        padding: "10px",
        color: "white",
        justifyContent: "space-between",
        alignItems: "center",
        border: '2px solid rgba(0, 0, 0, 0.05)'
    },
    
    AXSOS: {
        display: "flex",
        marginLeft: "20Px",
        padding: "2px",
        border: '12px solid rgba(0, 0, 0, 0.05)',
        height: '100px',
        width: "300px"
        
    },

//aboutUs Page
    container :{
        // backgroundImage:  `url(${})`,
        width: "100%",
        // height: "1600px",
        backdropFilter: "contrast(0.95)",
        fontSize: "15px",
        fontFamily: "Cursive"
    },
    
    About: {
    margin : "20px",
    textAlign: "center",
    color: "black"
    }, 

    body: {
    display :"flex",
    textAlign: "center",
    justifyContent: "center",
    margin: "10px",
    color : " balck"
    },
    
    cardOne : {
    margin: "10px",
    width: "300px",
    height: "300px",
    color: "balck",
    background: "white",
    textAlign: "center"
    
    },
    
    carThree : {
        margin: "10px",
        width: "300px",
        height: "300px",
        background: "white",
        textAlign: " center"
        
    },

    cardFour : {
        margin: "10px",
        width: "300px",
        height: "300px",
        background: "white",
        textAlign: "center"
        
    },
    cardTwo: {
        height:"auto",
        backgroundColor: "white",
        width: "70%",
        padding:"30px",
        fontSize:"15px",
        marginRight:"70px",
        marginBottom: "20px",
        marginTop: "10px",
        textAlign: "right",
        listStylePosition: "inside",
        marginRight: "150px",
        paddingRight: "160px"
    },
    textarea:{
        width: "30%",
        padding: "12px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        resize: "vertical",
    },
    butun:{
        width: "30%",
        padding: "12px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        resize: "vertical",
        backgroundColor:"6d0909"
    },

    



    icon :{
        width: "60px",
        height: "60px",
        textAlign: "center",
        // marginR:"0px auto"
        marginTop:"10px"
        },


}));
export default useStyles;
