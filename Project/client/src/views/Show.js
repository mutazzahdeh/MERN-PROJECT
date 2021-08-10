import React, {useState , useEffect} from 'react'
import axios from 'axios'


function Show(props) {

const [infos, setinfos] = useState([])



useEffect(() => {
    axios.get('http://localhost:8000/api/' )
        .then(res => {
            setinfos(res.data);
            console.log(res.data);      
        })
        .catch(err => console.log(err))
}, [])




    return (
        <>
             {infos.map((info, idx) => {
                return (
                    <div key={idx}>
                    <img src={info.img} alt={info.name}/>
                    <p >
                        
                            {info.name}, {info.price} , 
                        
                        </p>
                        
                        </div>)})
}
        </>
    )
}

export default Show
