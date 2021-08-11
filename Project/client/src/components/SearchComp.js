/* eslint-disable no-use-before-define */
import React ,{useState,useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import axios from 'axios';

const SearchComp= ()=> {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(  res=>{
                setProducts(res.data);
            });
            
            
    },[])

return (
    <div style={{ width: 300 }}>
        <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={products.map((option) => option.title)}
        renderInput={(params) => (
            <TextField
            {...params}
            label="Search input"
            margin="normal"
            variant="outlined"
            InputProps={{ ...params.InputProps, type: 'search' }}
        />
        )}
    />
    </div>
    );
}
export default SearchComp;
