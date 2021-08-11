import React, {useState , useEffect} from 'react'
import axios from 'axios'
import SearchComp from '../components/SearchComp'

function Show(props) {
const [infos, setinfos] = useState([])
const [product,setProduct]=useState([])




useEffect(() => {
    axios.get('http://localhost:8000/api/' )
        .then(res => {
            setinfos(res.data);
            console.log(res.data); 
            setProduct(res.data)     
        })
        .catch(err => console.log(err))
}, [])




    return (
        <>
        
        <SearchComp  products={product} setProducts={setProduct}  showProduct={infos} setShowProd={setinfos}  />
             {infos.map((info, idx) => {
                return (
                    <div key={idx}>
                    <img src={info.img} alt={info.name}/>
                    <p >
                        
                            {info.name}, {info.price} , {info.category}
                        
                        </p>
                        
                        </div>)})
}
        </>
    )
}

export default Show
