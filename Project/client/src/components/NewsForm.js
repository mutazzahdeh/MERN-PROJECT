
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
            width:"215px",
            height:"45px",
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
           
           
    
    
    }) 
    
    
        .catch(err=>{
            console.log(err.response)
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })    
        }  


    
    return (
        <div>
            <Paper elevation={3} style={styles.paper}>
                <h2>News Form</h2>
                <form onSubmit={submitHandler}>
                   
                    
                    <FormControl variant="outlined" style={styles.input}>
                        <InputLabel>Password</InputLabel>
                        <OutlinedInput type="Title" onChange={(e)=>{setTitle( e.target.value)}} />
                    </FormControl>
                    <FormControl variant="outlined" style={styles.input}>
                        <InputLabel>desc</InputLabel>
                        <TextareaAutosize style={styles.TextArea} aria-label="minimum height" minRows={3} placeholder="Description"  onChange={(e)=>{setDesc( e.target.value);console.log("#######")}}/>
                        
                       
                    </FormControl>
                    <br/>
                 
                    <Button type="submit" variant="contained" color="primary" >
                        Register
                    </Button>
                </form>
            </Paper>
        </div>
    )
}

export default NewsForm
