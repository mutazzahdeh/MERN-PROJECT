import FormComponent from "../components/Form"
import { Link } from '@reach/router'
import { Button, Card, TextField } from '@material-ui/core';

function AdminPrduct(props) {
    const {  formFun, errors,infos,products,product,setProduct,setProducts,setinfos }=props
    const style = {
        main: {

        },
        submain: {
            display: "flex"
        },
        product: {
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
            margin: "10px",
            width: "1260px",
            height:"auto"
        },
        product1: {

            height: "200px",
            width: "200px",
            marginLeft: "20px",
            marginBottom: "100px",
            marginTop: "10px"
            
        
           

        },
        product1img:{
            width: "200px",
            height: "200px",
            padding: "1px",
            border: "black",
            border: "5px solid #555",
            
        },
        FilterBar:{
            width:"180px",
            height:"auto",
            margin:"10px",


        }
    }


    

    return (
        <div style={{display:"flex"}}>
        <div style={{width:"1500px" }}>
            <FormComponent path="/product"  label1="name" label2="code" label3="price" label4="desc" label5="img" label6="category" formFun={formFun} error={errors} />
        </div>
        <div style={style.product}>
                        {infos.map((info, idx) => {
                            return (
                                
                                <div style={style.product1} key={idx}>
                                    <img style={style.product1img} src={info.img} alt={info.name} />
                                    <p >

                                        <Link to={"/product/" + info._id}> {info.name}</Link>
                                        <p dir="rtl">السعر:{info.price}</p>
                                        <p dir="rtl">الصنف:{info.category}</p>
                                        <Button  style={{backgroundColor:"#6d0909"}}  variant="contained" color="primary" type="submit" onclick={()=>{delete(info._id)}} >{"حذف المنتج"}</Button>
                                    </p>

                                </div>)
                        })
                        }
                    </div>
        </div>

    )
}

export default AdminPrduct
