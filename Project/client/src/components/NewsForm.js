
import React, {useState} from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import {
    Paper,
    FormControl,
    InputLabel,
    OutlinedInput,
    Button,
    TextareaAutosize
} from '@material-ui/core';

const NewsForm = props => {
   const {newsa,setNews}=props
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [errors,setErrors]=useState([])
    
    const styles = {
        paper: {
            width: "20rem", padding: "1rem"
        },
        input: {
            marginBottom: "1rem"
        },
        button: {
            width: "100%"
            
        },
        TextArea:{
            width:"680",
            height:"150px",
            display:"block",
           padding:"5px",
           borderRadius: "5px"
        }   
    }


    const submitHandler = (e) => {
        e.preventDefault();
        const news={title,desc}
        console.log(news)
        axios.post("http://localhost:8000/api/news/new",news)
        .then(res=>{
           console.log(res.data)
           var arr=[...newsa,res.data]
           setNews(arr)
          
    
    }) 
}
    
    


    
    return (
        <div>
            <div>
          
                <h2 dir="rtl">اضافة خبر</h2>
                <form onSubmit={submitHandler}>
                    
                    <FormControl variant="outlined" style={styles.input}>
                        <InputLabel ><p dir="rtl">عنوان الخبر</p></InputLabel>
                        <OutlinedInput type="Title" onChange={(e)=>{setTitle( e.target.value)}} />
                        <br/>
                    </FormControl>
                    <br/>
                    <FormControl variant="outlined" style={styles.input}>
                    
                        <TextareaAutosize style={styles.TextArea} aria-label="minimum height" minRows={3} placeholder="نص الخبر"  onChange={(e)=>{setDesc( e.target.value);console.log("#######")}}/>
                        <br/>
                       
                    </FormControl>
                    <br/>
                    
                    <Button style={{backgroundColor:"#6d0909"}}  type="submit" variant="contained" color="primary" >

                        نشر الخبر
                    </Button>
                </form>
                </div>
        </div>
    )
}

export default NewsForm
