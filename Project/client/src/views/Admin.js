import React, {useState ,useEffect} from 'react';
import io from 'socket.io-client';
import LoginForm from '../components/LoginForm';
import axios from 'axios';
import { navigate } from '@reach/router';

const Admin = () => {
    const [socket] = useState(() => io(':8000'));
    const [errors, setErrors] = useState([])
    const [tasks, setTasks] = useState([])

    const formFunction = (tasks) => {
        axios.post("http://localhost:8000/api/login", tasks)
        .then(res=>{
            console.log(res.data)
            setTasks(res.data);
            navigate("/admin")
    
    
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
    useEffect(() => {
        console.log('Is this running?');
        
    }, []);
    socket.emit("event_from_client","alaa")


    return (
        <div>
            <LoginForm  label7="email" label8="password" formFunction={formFunction} error={errors} buttonValue="تسجيل الدخول"></LoginForm>
        </div>
    )
}

export default Admin