import React, {useState} from 'react'
import { Button, Card, TextField} from '@material-ui/core';


const FormComponent = ({label1, label2,label3,label4,label5,label6,formFun , error , buttonValue}) => {

    const [name, setName] = useState("")
    const [code, setCode] = useState("")
    const [price, setPrice] = useState(0)
    const [desc, setDesc] = useState("")
    const [img, setImg] = useState("")
    const [category, setCategory] = useState("")
    const [status, setStatus] = useState("") //"inStock" deafult
    // const [nerror, setNerror] = useState("")
    // const [perror, setPerror] = useState("")



    const submitHandler = (e) => {
        e.preventDefault();
        formFun({name, code, status ,price,desc,img,category});

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
            <div class = "FormStyle">
           
       
            <Card style={{ width: "20rem", height: "20rem" , padding: "3rem" }} >
            
                <form onSubmit={submitHandler}>
                {error && error.map((err, index) => <p key={index}>{err}</p>) }


               <TextField id="outlined-basic" label="lllllllllllllll" value={name} variant="outlined"  onChange={e => setName(e.target.value)}/>
               {/* <p>{nerror}</p> */}
               <TextField id="outlined-basic" label={label2}  value={code} variant="outlined"  onChange={e => setCode(e.target.value) }/>
                {/* <p>{perror}</p> */}
                <TextField id="outlined-basic" label={label3}  value={price} variant="outlined"  onChange={e => setPrice(e.target.value) }/>
                <TextField id="outlined-basic" label={label4}  value={desc} variant="outlined"  onChange={e => setDesc(e.target.value) }/>
                <TextField id="outlined-basic" label={label5}  value={img} variant="outlined"  onChange={e => setImg(e.target.value) }/>
                <TextField id="outlined-basic" label={label6}  value={category} variant="outlined"  onChange={e => setCategory(e.target.value) }/>


               <br></br>
                  
                    <Button variant="contained" color="primary" type="submit" >{buttonValue}</Button>
                </form>
            </Card>

            </div>
            
            </>
       
    )
}

export default FormComponent
