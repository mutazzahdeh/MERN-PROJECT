import React, { useState } from 'react'
import { Button, Card, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import useStyles from './styles';
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";



import "../App.css"

const FormComponent = ({ label1, label2, label3, label4, label5, label6, formFun, error, buttonValue }) => {

    const [name, setName] = useState("")
    const [code, setCode] = useState("")
    const [price, setPrice] = useState(0)
    const [desc, setDesc] = useState("")
    const [img, setImg] = useState("")
    const [category, setCategory] = useState("")
    const [status, setStatus] = useState("") //"inStock" deafult
    // const [nerror, setNerror] = useState("")
    // const [perror, setPerror] = useState("")
    const category1 = ["احجيات", "أثاث", "العاب خشبية", "طاولات", "ألواح", "زينة ميلاد"];
    const classes = useStyles();
    const submitHandler = (e) => {
        e.preventDefault();
        formFun({ name, code, status, price, desc, img, category });

    }
    const style={
        textarea:{
            width: '90%',
            marginLeft: 'auto',
            marginRight: 'auto',            
            paddingBottom: 0,
            marginTop: 0,
            fontWeight: 500
        },
        input:{

        }
    }

    
    // const nameValidation = (e) => {
    //     if(e.target.value.length < 3){
    //         setNerror("field must be more than 2 characters")
    //     } else {
    //         setNerror("")
    //     }
    //     setName(e.target.value)
    // } 

    // const codeValidation = (e) => {
    //     if(e.target.value.length <1){
    //         setPerror("date cannot be empty")
    //     } else {
    //         setPerror("")
    //     }
    //     setCode(e.target.value)
    // } 
    
    return (

        <>
            <div class="FormStyle">



                <div>
                    <form onSubmit={submitHandler}>
                        {error && error.map((err, index) => <p key={index}>{err}</p>)}


                        <TextField style={{margin:"10px",}}  multiline={true} rows={1} className={classes.textarea}  inputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment> )}}
             id="outlined-basic" label={"الاسم"} value={name} variant="outlined" onChange={e => setName(e.target.value)} />
                        {/* <p>{nerror}</p> */}
                        <br/>
                        <br/>
                        <TextField style={{margin:"10px",}} multiline={true} rows={1}  className={classes.textarea} id="outlined-basic" label={"الكود"} value={code} variant="outlined" onChange={e => setCode(e.target.value)} />
                        {/* <p>{perror}</p> */}
                        <br/>
                        <br/>
                        <TextField style={{margin:"10px",}} multiline={true} rows={1}  className={classes.textarea} id="outlined-basic" label={"السعر"} value={price} variant="outlined" onChange={e => setPrice(e.target.value)} />
                        <br/>
                        <br/>
                        <TextField style={{margin:"10px",}} multiline={true} rows={1}  className={classes.textarea} id="outlined-basic" label={"الوصف"} value={desc} variant="outlined" onChange={e => setDesc(e.target.value)} />
                        <br/>
                        <br/>
                        <TextField style={{margin:"10px",}} multiline={true} rows={1}  className={classes.textarea} id="outlined-basic" label={"الصورة "} value={img} variant="outlined" onChange={e => setImg(e.target.value)} />
                        <br/>
                        <br/>
                        {/* <TextField id="outlined-basic" label={label6}  value={category} variant="outlined"  onChange={e => setCategory(e.target.value) }/> */}
                        {/* <select value={category} id="outlined-basic" variant="outlined"  onChange={e => setCategory(e.target.value)}>
                    <option>puzzle</option>
                    <option>أثاث</option>
                    <option>العاب خشبية</option>
                    <option>طاولات</option>
                    <option>ألواح</option>
                    <option>زينة ميلاد</option>
            </select> */}
                        <select style={{
                            margin:"10px",

    width: "30%",
    border: "1px solid #ccc",
    resize: "vertical",
    padding: "12px",
    borderRadius: "4px",}} id="outlined-basic" value={category} id="outlined-basic" variant="outlined" onChange={e => setCategory(e.target.value)}>
                            {category1.map((cat, idx) => (
                                <option key={idx} value={cat}> {cat} </option>
                            ))}
                        </select>
                        <br></br>

                        <Button  style={{backgroundColor:"#6d0909",margin:"10px",}} className={classes.butun } variant="contained" color="primary" type="submit" >{"اضافة منتج"}</Button>
                    </form>
                </div>
            </div>

        </>

    )
}

export default FormComponent
