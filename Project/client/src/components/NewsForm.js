
import React, {useState} from 'react'
import {
    Paper,
    FormControl,
    InputLabel,
    OutlinedInput,
    Button,
    TextareaAutosize
} from '@material-ui/core';

const NewsForm = props => {
   
    const [titel, setTitel] = useState("")
    const [desc, setDesc] = useState("")
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
            width:"21px",
            height:"48px",
            display:"inline-block",
           padding:"5px",
           borderRadius: "5px"
            
  

            
        }
        
    }
    return (
        <div>
            <Paper elevation={3} style={styles.paper}>
                <h2>News Form</h2>
                <form>
                   
                    
                    <FormControl variant="outlined" style={styles.input}>
                        <InputLabel>Password</InputLabel>
                        <OutlinedInput type="Title" onChange={(e)=>{setTitel(e.TextArea.value)}} />
                    </FormControl>
                    <FormControl variant="outlined" style={styles.input}>
                        <InputLabel>Password</InputLabel>
                        <TextareaAutosize style={styles.TextArea} aria-label="minimum height" minRows={3} placeholder="Description" />
                        
                       
                    </FormControl>
                    <br/>
                 
                    <Button type="submit" variant="contained" color="primary">
                        Register
                    </Button>
                </form>
            </Paper>
        </div>
    )
}

export default NewsForm
