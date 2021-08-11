import React, {useState } from 'react';
import Form from '../components/Form';
import axios from 'axios';
import { navigate } from '@reach/router';

const Main = () => {
    
    const [errors, setErrors] = useState([])
    const [task, setTask] = useState([])

    const formFun = (task) => {
        axios.post("http://localhost:8000/api/product/new", task)
        .then(res=>{
            console.log(res.data)
            setTask(res.data);
            navigate("/show")
    
    
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
            <Form label1="name" label2="code" label3="price" label4="desc" label5="img" label6="category" formFun={formFun} error={errors} buttonValue="Add"></Form>
        </div>
    )
}

export default Main